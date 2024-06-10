import postgres from "postgres";

const sql = postgres({
  host: "0.0.0.0",
  port: 5432,
  user: "postgres",
  password: "postgres",
  database: "postgres",
  onnotice: () => {},
});

export const name = "Postgres";

export const createOrResetTable = async () =>
  sql`drop table if exists users;
create table if not exists
    users
(
    "id"         serial primary key,
    "first_name" varchar(255)        not null,
    "last_name"  varchar(255)        not null,
    "email"      varchar(255) unique not null,
    "password"   varchar(255)        not null,
    "age"        int                 not null,
    "gender"     varchar(255)        not null,
    "created_at" timestamptz         not null default CURRENT_TIMESTAMP,
    "updated_at" timestamptz         not null default CURRENT_TIMESTAMP
)`.simple();

export const insertUser = async (user) => sql`insert into users (first_name, last_name, email, password,
                                              age, gender, created_at, updated_at)
                                              values (${user.first_name}, ${user.last_name}, ${user.email},
                                                      ${user.password}, ${user.age}, ${user.gender},
                                                      ${user.created_at}, ${user.updated_at})`;

export const countAllUser = async () => {
  const [result] = await sql`select count(id) as total from users`;
  return result;
};

export const selectUserWithLimit = async (limit) => sql`select *
                                                        from users
                                                        limit ${limit}`;

export const selectUserWithEmail = async (email) => {
  const [user] = await sql`select * from users where email = ${email}`;
  return user;
};

export const countUserByAgeRange = async (min, max) => {
  const [result] = await sql`select count(id) as total from users where age >= ${min} and age <= ${max}`;
  return result;
};

export const countUserWithNamePrefix = async (name) => {
  const [result] = await sql`select count(id) as total from users where first_name ilike ${name + "%"}`;
  return result;
};

export const countUserWithNamePostfix = async (name) => {
  const [result] = await sql`select count(id) as total from users where first_name ilike ${"%" + name}`;
  return result;
};

export const countUserWithNameContains = async (name) => {
  const [result] = await sql`select count(id) as total from users where first_name ilike ${"%" + name + "%"}`;
  return result;
};

export const close = async () => {
  await sql.end();
};
