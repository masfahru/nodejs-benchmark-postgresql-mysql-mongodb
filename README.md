# Node.js Benchmark: MySQL vs PostgreSQL vs MongoDB

This repository contains a Node.js benchmarking project that compares the performance of MySQL, PostgreSQL, and MongoDB in a Node.js environment. The goal is to analyze runtime query performance for both databases and identify scenarios where each database excels.

## Tools

### Runtime

* Node.js (version 22.x)

### Database

* MongoDB (version 5.0.26)
* PostgreSQL (version 16.3)
* MySQL (version 8.x)

### Database Connectors

* [Mongodb](https://github.com/mongodb/node-mongodb-native) (version ^6.7.0)
* [Postgres](https://github.com/porsager/postgres) (version ^3.4.4)
* [Mariadb](https://github.com/mariadb-corporation/mariadb-connector-nodejs) (version ^3.3.0)

### Others

* [Faker-js](https://github.com/faker-js/faker) (version ^8.4.1)
* [Hirestime](https://github.com/seriousManual/hirestime) (version ^7.0.4)

## Running The Benchmark

The benchmark runs using GitHub Actions. To see the workflows, check [benchmark.yml](.github/workflows/benchmark.yml).

## Results

Explore the [results directory](results).

### Latest Results

<!-- start -->
<!-- end -->

## Contributing

Contributions are welcome! If you encounter any issues or want to add features, feel free to open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
