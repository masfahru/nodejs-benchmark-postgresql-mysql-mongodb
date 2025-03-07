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
```
runtime: node v22.13.1 x64-linux

[MySQL] Total inserted users: 66200
[Postgres] Total inserted users: 66200
[MongoDB] Total inserted users: 66200

Time (ms) table:
┌─────────────────────────────┬─────────┬──────────┬─────────┐
│ (index)                     │ MySQL   │ Postgres │ MongoDB │
├─────────────────────────────┼─────────┼──────────┼─────────┤
│ insert 100 users            │ 24.71   │ 8.77     │ 29.79   │
│ insert 1000 users           │ 212.36  │ 77.54    │ 272.73  │
│ insert 5000 users           │ 1100.97 │ 361.02   │ 904.21  │
│ insert 10000 users          │ 2146.96 │ 650.96   │ 1410.36 │
│ insert 20000 users          │ 3878.1  │ 1267.04  │ 2551.46 │
│ insert 30000 users          │ 5692.35 │ 1842.5   │ 3765.12 │
│ select limit 100            │ 2.06    │ 1.66     │ 2.5     │
│ select limit 1000           │ 6.44    │ 7.26     │ 17.91   │
│ select limit 5000           │ 12.43   │ 18.42    │ 72.26   │
│ select limit 10000          │ 24.52   │ 37.13    │ 101.74  │
│ select limit 20000          │ 47.45   │ 89.63    │ 167.08  │
│ select limit 30000          │ 60.37   │ 115.5    │ 222.93  │
│ select by email limit 100   │ 14.51   │ 8.91     │ 19.22   │
│ select by email limit 1000  │ 124.26  │ 46.56    │ 280.43  │
│ select by email limit 5000  │ 491.21  │ 171.46   │ 989.77  │
│ select by email limit 10000 │ 905.09  │ 336.96   │ 1722.72 │
│ select by email limit 20000 │ 1754.47 │ 533.46   │ 3262.59 │
│ select by email limit 30000 │ 2558.61 │ 740.06   │ 4891.54 │
│ count by age range 15-20    │ 13.81   │ 6.72     │ 36.2    │
│ count by age range 21-25    │ 13.22   │ 7.07     │ 38.38   │
│ count by age range 26-30    │ 13.55   │ 6.77     │ 39.23   │
│ count by age range 31-35    │ 12.99   │ 6.4      │ 40.64   │
│ count by name prefix A      │ 14.81   │ 24.66    │ 38.37   │
│ count by name postfix A     │ 17.97   │ 26.52    │ 40.35   │
│ count by name contains A    │ 16.89   │ 27.83    │ 43.24   │
│ count by name prefix I      │ 14.4    │ 24.32    │ 38.1    │
│ count by name postfix I     │ 17.44   │ 25.49    │ 38.48   │
│ count by name contains I    │ 17.05   │ 27.17    │ 41.6    │
│ count by name prefix O      │ 14.92   │ 24.82    │ 37.97   │
│ count by name postfix O     │ 16.91   │ 25.44    │ 38.35   │
│ count by name contains O    │ 16.86   │ 26.47    │ 40.16   │
└─────────────────────────────┴─────────┴──────────┴─────────┘

Total data table:
┌─────────────────────────────┬────────┬──────────┬─────────┐
│ (index)                     │ MySQL  │ Postgres │ MongoDB │
├─────────────────────────────┼────────┼──────────┼─────────┤
│ insert 100 users            │ 100    │ 100      │ 100     │
│ insert 1000 users           │ 1000   │ 1000     │ 1000    │
│ insert 5000 users           │ 5000   │ 5000     │ 5000    │
│ insert 10000 users          │ 10000  │ 10000    │ 10000   │
│ insert 20000 users          │ 20000  │ 20000    │ 20000   │
│ insert 30000 users          │ 30000  │ 30000    │ 30000   │
│ select limit 100            │ 100    │ 100      │ 100     │
│ select limit 1000           │ 1000   │ 1000     │ 1000    │
│ select limit 5000           │ 5000   │ 5000     │ 5000    │
│ select limit 10000          │ 10000  │ 10000    │ 10000   │
│ select limit 20000          │ 20000  │ 20000    │ 20000   │
│ select limit 30000          │ 30000  │ 30000    │ 30000   │
│ select by email limit 100   │ 100    │ 100      │ 100     │
│ select by email limit 1000  │ 1000   │ 1000     │ 1000    │
│ select by email limit 5000  │ 5000   │ 5000     │ 5000    │
│ select by email limit 10000 │ 10000  │ 10000    │ 10000   │
│ select by email limit 20000 │ 20000  │ 20000    │ 20000   │
│ select by email limit 30000 │ 30000  │ 30000    │ 30000   │
│ count by age range 15-20    │ 18910n │ '18910'  │ 18910   │
│ count by age range 21-25    │ 15707n │ '15707'  │ 15707   │
│ count by age range 26-30    │ 15994n │ '15994'  │ 15994   │
│ count by age range 31-35    │ 15589n │ '15589'  │ 15589   │
│ count by name prefix A      │ 4672n  │ '4672'   │ 4672    │
│ count by name postfix A     │ 11476n │ '11476'  │ 11476   │
│ count by name contains A    │ 39298n │ '39298'  │ 39298   │
│ count by name prefix I      │ 993n   │ '993'    │ 993     │
│ count by name postfix I     │ 1261n  │ '1261'   │ 1261    │
│ count by name contains I    │ 26185n │ '26185'  │ 26185   │
│ count by name prefix O      │ 849n   │ '849'    │ 849     │
│ count by name postfix O     │ 2447n  │ '2447'   │ 2447    │
│ count by name contains O    │ 18685n │ '18685'  │ 18685   │
└─────────────────────────────┴────────┴──────────┴─────────┘

System Info:
┌──────────────┬────────────────────────────────────────┐
│ (index)      │ Values                                 │
├──────────────┼────────────────────────────────────────┤
│ manufacturer │ 'Microsoft Corporation'                │
│ model        │ 'Virtual Machine'                      │
│ version      │ '7.0'                                  │
│ serial       │ '-'                                    │
│ uuid         │ '9814cac8-a906-b945-a805-d678c64a28a4' │
│ sku          │ '-'                                    │
│ virtual      │ true                                   │
└──────────────┴────────────────────────────────────────┘

CPU Info:
┌──────────────────┬───────────────────────────────┐
│ (index)          │ Values                        │
├──────────────────┼───────────────────────────────┤
│ manufacturer     │ 'AMD'                         │
│ brand            │ 'EPYC 7763 64-Core Processor' │
│ vendor           │ 'AMD'                         │
│ family           │ '25'                          │
│ model            │ '1'                           │
│ stepping         │ '1'                           │
│ revision         │ ''                            │
│ voltage          │ ''                            │
│ speed            │ 2.45                          │
│ speedMin         │ NaN                           │
│ speedMax         │ NaN                           │
│ governor         │ ''                            │
│ cores            │ 4                             │
│ physicalCores    │ 2                             │
│ performanceCores │ 2                             │
│ efficiencyCores  │ 0                             │
│ processors       │ 1                             │
│ socket           │ ''                            │
│ virtualization   │ true                          │
└──────────────────┴───────────────────────────────┘

OS Info:
┌─────────────┬─────────────────────────────────────────────────────────────────────┐
│ (index)     │ Values                                                              │
├─────────────┼─────────────────────────────────────────────────────────────────────┤
│ platform    │ 'linux'                                                             │
│ distro      │ 'Ubuntu'                                                            │
│ release     │ '24.04.1 LTS'                                                       │
│ codename    │ 'noble'                                                             │
│ kernel      │ '6.8.0-1021-azure'                                                  │
│ arch        │ 'x64'                                                               │
│ hostname    │ 'fv-az1690-151'                                                     │
│ fqdn        │ 'fv-az1690-151.qpzrwuosrkvuxczmeamxp1lsch.ex.internal.cloudapp.net' │
│ codepage    │ 'UTF-8'                                                             │
│ logofile    │ 'ubuntu'                                                            │
│ serial      │ 'e459e301882642258c2740f7faebc480'                                  │
│ build       │ ''                                                                  │
│ servicepack │ ''                                                                  │
│ uefi        │ false                                                               │
└─────────────┴─────────────────────────────────────────────────────────────────────┘
```
<!-- end -->

## Contributing

Contributions are welcome! If you encounter any issues or want to add features, feel free to open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
