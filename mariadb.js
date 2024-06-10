import { createPool } from "mariadb";

const pool = createPool({
  host: "0.0.0.0",
  port: 3306,
  user: "mysqltest",
  password: "mysqltest",
  database: "mysqltest",
});

export const name = "MySQL";

export const createOrResetTable = async () => {
  await pool.execute("drop table if exists users");
  await pool.execute(`create table if not exists users
                      (
                          id         int unsigned not null auto_increment primary key,
                          first_name varchar(255) not null,
                          last_name  varchar(255) not null,
                          email      varchar(255) not null,
                          password   varchar(255) not null,
                          age        int          not null,
                          gender     varchar(255) not null,
                          created_at datetime     not null default CURRENT_TIMESTAMP,
                          updated_at datetime     not null default CURRENT_TIMESTAMP,
                          UNIQUE (email)
                      )`);
};

export const insertUser = async (user) =>
  pool.execute(
    `insert into users (first_name, last_name, email, password, age, gender, created_at, updated_at)
     values (?, ?, ?, ?, ?, ?, ?, ?)`,
    [user.first_name, user.last_name, user.email, user.password, user.age, user.gender, user.created_at, user.updated_at],
  );

export const countAllUser = async () => pool.execute("select count(id) as total from users").then(([row]) => row);

export const selectUserWithLimit = async (limit) => pool.execute(`select * from users limit ${limit}`);

export const selectUserWithEmail = async (email) => pool.execute("select * from users where email = ?", [email]).then(([row]) => row);

export const countUserByAgeRange = async (min, max) =>
  pool.execute("select count(id) as total from users where age between ? and ?", [min, max]).then(([row]) => row);

export const countUserWithNamePrefix = async (name) =>
  pool.execute("select count(id) as total from users where first_name like ?", [`${name}%`]).then(([row]) => row);

export const countUserWithNamePostfix = async (name) =>
  pool.execute("select count(id) as total from users where first_name like ?", [`%${name}`]).then(([row]) => row);

export const countUserWithNameContains = async (name) =>
  pool.execute("select count(id) as total from users where first_name like ?", [`%${name}%`]).then(([row]) => row);

export const close = async () => {
  await pool.end();
};
