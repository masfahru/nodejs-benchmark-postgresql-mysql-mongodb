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
runtime: node v22.5.1 x64-linux

[MySQL] Total inserted users: 66200
[Postgres] Total inserted users: 66200
[MongoDB] Total inserted users: 66200

Time (ms) table:
┌─────────────────────────────┬─────────┬──────────┬─────────┐
│ (index)                     │ MySQL   │ Postgres │ MongoDB │
├─────────────────────────────┼─────────┼──────────┼─────────┤
│ insert 100 users            │ 23.25   │ 7.54     │ 30.02   │
│ insert 1000 users           │ 215.49  │ 68.36    │ 245.04  │
│ insert 5000 users           │ 1104.53 │ 332.7    │ 940.22  │
│ insert 10000 users          │ 2088.35 │ 626.11   │ 1475.74 │
│ insert 20000 users          │ 4135.02 │ 1299.45  │ 2833.2  │
│ insert 30000 users          │ 6404.81 │ 1694.86  │ 3958.35 │
│ select limit 100            │ 2.03    │ 1.65     │ 3.09    │
│ select limit 1000           │ 4.05    │ 8.29     │ 10.61   │
│ select limit 5000           │ 11.23   │ 18       │ 72.21   │
│ select limit 10000          │ 23.68   │ 36.38    │ 105.19  │
│ select limit 20000          │ 99.37   │ 58.53    │ 187.5   │
│ select limit 30000          │ 77.55   │ 124.51   │ 243.52  │
│ select by email limit 100   │ 16.56   │ 7.6      │ 15.75   │
│ select by email limit 1000  │ 118.87  │ 26.51    │ 261.37  │
│ select by email limit 5000  │ 576.76  │ 166.13   │ 1025.93 │
│ select by email limit 10000 │ 971.72  │ 280.32   │ 1899.98 │
│ select by email limit 20000 │ 1700.12 │ 496.98   │ 3236.59 │
│ select by email limit 30000 │ 2503.79 │ 700.25   │ 4890.24 │
│ count by age range 15-20    │ 14.01   │ 6.95     │ 35.25   │
│ count by age range 21-25    │ 13.37   │ 6.8      │ 37.79   │
│ count by age range 26-30    │ 13.37   │ 6.73     │ 39.52   │
│ count by age range 31-35    │ 13.28   │ 6.38     │ 41.44   │
│ count by name prefix A      │ 14.51   │ 24.46    │ 38.16   │
│ count by name postfix A     │ 17.75   │ 26.16    │ 40.48   │
│ count by name contains A    │ 17.43   │ 26.66    │ 42.72   │
│ count by name prefix I      │ 14.7    │ 24.25    │ 37.73   │
│ count by name postfix I     │ 17.31   │ 25.1     │ 39      │
│ count by name contains I    │ 17.7    │ 26.45    │ 40.71   │
│ count by name prefix O      │ 14.59   │ 24.24    │ 37.82   │
│ count by name postfix O     │ 17.44   │ 25.15    │ 38.91   │
│ count by name contains O    │ 17.01   │ 25.75    │ 39.69   │
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
│ count by age range 15-20    │ 18848n │ '18848'  │ 18848   │
│ count by age range 21-25    │ 15776n │ '15776'  │ 15776   │
│ count by age range 26-30    │ 15763n │ '15763'  │ 15763   │
│ count by age range 31-35    │ 15813n │ '15813'  │ 15813   │
│ count by name prefix A      │ 4621n  │ '4621'   │ 4621    │
│ count by name postfix A     │ 11533n │ '11533'  │ 11533   │
│ count by name contains A    │ 39581n │ '39581'  │ 39581   │
│ count by name prefix I      │ 1051n  │ '1051'   │ 1051    │
│ count by name postfix I     │ 1281n  │ '1281'   │ 1281    │
│ count by name contains I    │ 26293n │ '26293'  │ 26293   │
│ count by name prefix O      │ 849n   │ '849'    │ 849     │
│ count by name postfix O     │ 2590n  │ '2590'   │ 2590    │
│ count by name contains O    │ 18963n │ '18963'  │ 18963   │
└─────────────────────────────┴────────┴──────────┴─────────┘

System Info:
┌──────────────┬────────────────────────────────────────┐
│ (index)      │ Values                                 │
├──────────────┼────────────────────────────────────────┤
│ manufacturer │ 'Microsoft Corporation'                │
│ model        │ 'Virtual Machine'                      │
│ version      │ '7.0'                                  │
│ serial       │ '-'                                    │
│ uuid         │ '41701b3c-d546-4d42-832f-188e51087dc0' │
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
┌─────────────┬────────────────────────────────────┐
│ (index)     │ Values                             │
├─────────────┼────────────────────────────────────┤
│ platform    │ 'linux'                            │
│ distro      │ 'Ubuntu'                           │
│ release     │ '22.04.4 LTS'                      │
│ codename    │ 'jammy'                            │
│ kernel      │ '6.5.0-1023-azure'                 │
│ arch        │ 'x64'                              │
│ hostname    │ 'fv-az698-949'                     │
│ fqdn        │ 'fv-az698-949'                     │
│ codepage    │ 'UTF-8'                            │
│ logofile    │ 'ubuntu'                           │
│ serial      │ '3078874c965946e191f4f25a5e4d1332' │
│ build       │ ''                                 │
│ servicepack │ ''                                 │
│ uefi        │ false                              │
└─────────────┴────────────────────────────────────┘
```
<!-- end -->

## Contributing

Contributions are welcome! If you encounter any issues or want to add features, feel free to open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
