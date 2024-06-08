import { MongoClient } from "mongodb";

let userCollection = null;

export const name = "MongoDB";

export const getCollection = async () => {
  if (!userCollection) {
    const uri = "mongodb://admin:admin@127.0.0.1:27017/admin?serverSelectionTimeoutMS=10000";

    const client = await MongoClient.connect(uri);

    userCollection = client.db("admin").collection("users");
    await userCollection.createIndex({ email: 1 }, { unique: true });
  }

  return userCollection;
};

export const insertUser = async (user) => {
  return userCollection.insertOne(user);
};

export const countAllUser = async () => {
  const [result] = await userCollection
    .aggregate([
      {
        $group: {
          _id: null,
          total: { $sum: 1 },
        },
      },
    ])
    .toArray();
  return result;
};

export const selectUserWithLimit = async (limit) => {
  return userCollection.find().limit(limit).toArray();
};

export const selectUserWithEmail = async (email) => {
  return userCollection.findOne({ email });
};

export const countUserByAgeRange = async (min, max) => {
  const total = await userCollection.countDocuments({
    age: { $gte: min, $lte: max },
  });
  return { total };
};

export const countUserWithNamePrefix = async (name) => {
  const total = await userCollection.countDocuments({ first_name: { $regex: `^${name}`, $options: "i" } });
  return { total };
};

export const countUserWithNamePostfix = async (name) => {
  const total = await userCollection.countDocuments({ first_name: { $regex: `${name}$`, $options: "i" } });
  return { total };
};

export const countUserWithNameContains = async (name) => {
  const total = await userCollection.countDocuments({ first_name: { $regex: `${name}`, $options: "i" } });
  return { total };
};

export const close = async () => {
  if (userCollection) {
    await userCollection.client.close();
  }
};
