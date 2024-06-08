import hirestime from "hirestime";
import systeminformation from "systeminformation";
import * as dataset from "./dataset.js";
import * as postgresBench from "./postgres.js";
import * as mongoBench from "./mongodb.js";
import * as mysqlBench from "./mariadb.js";

const waitTime = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const bench = async (promises) => {
  const start = hirestime();
  const results = await Promise.all(promises);
  return { results, time: start.ms() };
};

const timeResults = [];
const totalDataResults = [];

const addResult = (db, action, total, time) => {
  timeResults[action] = {
    ...timeResults[action],
    [db]: time,
  };
  totalDataResults[action] = {
    ...totalDataResults[action],
    [db]: total,
  };
};

const benchmarkDatabase = async (waitTimeMs, dbBench, data, emailList, limits, ageRanges, letters) => {
  // warming up by inserting 100 data
  await bench(data.slice(0, 100).map(dbBench.insertUser));

  for (let i = 100, j = 0; j < limits.length; j++) {
    await waitTime(waitTimeMs);
    const { time } = await bench(data.slice(i, i + limits[j]).map(dbBench.insertUser));
    addResult(dbBench.name, `insert ${limits[j]} users`, limits[j], time);
    i += limits[j];
  }

  const totalUser = await dbBench.countAllUser();
  console.log(`[${dbBench.name}] Total inserted users: ${totalUser.total}`);

  // benchmark for select user with limit, count time between start and end
  for (const l of limits) {
    await waitTime(waitTimeMs);
    const {
      results: [result],
      time,
    } = await bench([dbBench.selectUserWithLimit(l)]);
    addResult(dbBench.name, `select limit ${l}`, result.length, time);
  }

  // benchmark for select user by email, count time between start and end
  for (const l of limits) {
    await waitTime(waitTimeMs);
    const { results, time } = await bench(emailList.slice(0, l).map(dbBench.selectUserWithEmail));
    addResult(dbBench.name, `select by email limit ${l}`, results.length, time);
  }

  // benchmark based on ageRanges, count time between start and end
  for (const { min, max } of ageRanges) {
    await waitTime(waitTimeMs);
    const {
      results: [result],
      time,
    } = await bench([dbBench.countUserByAgeRange(min, max)]);
    addResult(dbBench.name, `count by age range ${min}-${max}`, result.total, time);
  }

  // benchmark for select user with prefix, postfix, and contains, count time between start and end
  for (const l of letters) {
    await waitTime(waitTimeMs);
    const {
      results: [result],
      time,
    } = await bench([dbBench.countUserWithNamePrefix(l)]);
    addResult(dbBench.name, `count by name prefix ${l}`, result.total, time);

    await waitTime(waitTimeMs);
    const {
      results: [result2],
      time: time2,
    } = await bench([dbBench.countUserWithNamePostfix(l)]);
    addResult(dbBench.name, `count by name postfix ${l}`, result2.total, time2);

    await waitTime(waitTimeMs);
    const {
      results: [result3],
      time: time3,
    } = await bench([dbBench.countUserWithNameContains(l)]);
    addResult(dbBench.name, `count by name contains ${l}`, result3.total, time3);
  }
};

const main = async () => {
  const limits = [100, 1000, 5000, 10000, 20000, 30000];
  const ageRanges = [
    { min: 15, max: 20 },
    { min: 21, max: 25 },
    { min: 26, max: 30 },
    { min: 31, max: 35 },
  ];
  const letters = ["A", "I", "O"];

  const data = dataset.generateFakeData(70000);
  const emailList = data.map((user) => user.email);

  console.log(`runtime: node ${process.version} ${process.arch}-${process.platform}`);
  console.log();
  // prepare table and collection
  await postgresBench.createOrResetTable();
  await mysqlBench.createOrResetTable();
  await mongoBench.getCollection();

  // Run benchmarks
  await benchmarkDatabase(10000, mysqlBench, data, emailList, limits, ageRanges, letters);
  await benchmarkDatabase(10000, postgresBench, data, emailList, limits, ageRanges, letters);
  await benchmarkDatabase(10000, mongoBench, data, emailList, limits, ageRanges, letters);

  // close connection
  await waitTime(5000);
  await Promise.all([mysqlBench.close(), postgresBench.close(), mongoBench.close()]);

  console.log();
  console.log("Time (ms) table:");
  console.table(timeResults);

  console.log();
  console.log("Total data table:");
  console.table(totalDataResults);

  console.log();
  console.log("System Info:");
  await systeminformation.system().then((data) => console.table(data));

  console.log();
  console.log("CPU Info:");
  await systeminformation.cpu().then(({ flags, cache, ...rest }) => console.table(rest));

  console.log();
  console.log("OS Info:");
  await systeminformation.osInfo().then((data) => console.table(data));
};

await main()
  .then(() => {
    process.exit();
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
