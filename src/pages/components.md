---
title: Components
section: onboarding
date: "2030-08-21"
---

# Components

The cluster place at your disposal multiple Big Data components installed from the Hortonworks HDP 3.1 distribution as well as a Kubernetes cluster. It is secured being a VPN connection and we provide a Linux workspace on the edge available throught SSH. Below is a list of the main components and how to use them.

## Cluster

- **Edge node**   
  *description:* A Linux workspace were you can safely connect and issue commands. It comes pre-installed and configured with the cluster services clients.   
  *version:* CentOS Linux release 7.7.1908, kernel 5.3.0-45-generic   
  *usage:* SSH connection, `ssh ${username}@edge-1.au.adaltas.cloud`   
  *learning:* [SSH tutorial](/en/docs/onboarding/ssh/)
- **Kerberos**   
  *description:* A computer network authentication protocol which works on the basis of 'tickets' to allow nodes communicating over a non-secure network to prove their identity to one another in a secure manner.   
  *version:* 1.10.3-30   
  *usage:* CLI with `krb5` command   
  *learning:* [Kerberos tutorial](/en/docs/onboarding/kerberos/)
- **Kubernetes**   
  *description:* A platform for the orchestration and management of containers in a cluster    
  *version:* 1.18.6
  *learning:* [Kubernetes configuration](/en/docs/onboarding/kubernetes/)

## Big Data

* **HDFS**   
  *description:* Apache Hadoop Distributed File System (HDFS)   
  *version:* 3.1.1   
  *usage:* CLI, web UI   
  *CLI*: run the `hdfs` command   
  *Namenode Web UI:* http://hdfs-nn-1.au.adaltas.cloud:50070/ (Kerberos protected)   
* **YARN**   
  *description:* Apache Hadoop NextGen MapReduce (YARN)   
  *version:* 3.1.1   
  *usage:* CLI, web UI   
  *CLI:* run the `yarn` command   
  *ResourceManager UI:* http://yarn-rm-1.au.adaltas.cloud:8088/ui2   
  *learning:* [YARN tutorial](/en/docs/big-data/yarn/)   
* **MapReduce2**   
  *description:* Apache Hadoop NextGen MapReduce (YARN)   
  *version:* 3.1.1   
  *usage:* CLI   
* **Hive**   
  *description:* Data warehouse system for ad-hoc queries & analysis of large datasets and table & storage
  *version:* 3.1.0   
  *usage:* CLI, JDBC/ODBC   
  *CLI*: use the `beeline` comamnd, eg `beeline -u "jdbc:hive2://zoo-1.au.adaltas.cloud:2181,zoo-2.au.adaltas.cloud:2181,zoo-3.au.adaltas.cloud:2181/;serviceDiscoveryMode=zooKeeper;zooKeeperNamespace=hiveserver2;" --showDbInPrompt=true`   
* **HBase**   
  *description:* Non-relational distributed database and centralized service for configuration management & synchronization    
  *version:* 2.0.2   
  *usage:* CLI, HTTP REST, THRIFT   
  *HBase Master UI:* http://hbase-m-1.au.adaltas.cloud:16010/master-status   
* **Sqoop**   
  *description:* Tool for transferring bulk data between Apache Hadoop and structured data stores such as relational databases   
  *version:* 1.4.7   
  *usage:* CLI   
* **Oozie**   
  *description:* System for workflow coordination and execution of Apache Hadoop jobs.   
  *version:* 4.3.1   
  *usage:* CLI, HTTP REST, Web UI   
* **ZooKeeper**   
  *description:* Installed  Centralized service which provides highly reliable distributed coordination   
  *version:* 3.4.6   
  *usage:* TCP   
  *Quorum* `zoo-1.au.adaltas.cloud:2181,zoo-2.au.adaltas.cloud:2181,zoo-3.au.adaltas.cloud:2181`   
* **Kafka**   
  *description:* A high-throughput distributed messaging system   
  *version:* 2.0.0   
  *usage:* CLI   
  *Quorum* `zoo-1.au.adaltas.cloud:2181,zoo-2.au.adaltas.cloud:2181,zoo-3.au.adaltas.cloud:2181/kafka`   
  *Brokers* `kfk-brk-1.au.adaltas.cloud:6667,kfk-brk-2.au.adaltas.cloud:6667,kfk-brk-3.au.adaltas.cloud:6667`
* **Knox**   
  *description:* Provides a single point of authentication and access for Apache Hadoop services in a cluster.   
  *version:* 1.0.0   
  *usage:* Not yet publicly exposed   
* **Spark2**   
  *description:* Apache Spark 2.3 is a fast and general engine for large-scale data processing.
  *version:* 2.3.2
  *usage:* CLI, Web UI
  *Spark History Server* http://spark2-hs-1.au.adaltas.cloud:18081/ (Kerberos protected)
* **Zeppelin Notebook**   
  *description:* A web-based notebook that enables interactive data analytics. It enables you to make beautiful data-driven, interactive and collaborative documents with SQL, Scala and more.
  *version:* 0.8.0
  *usage:* Web UI
  *Zeppeling web UI* http://zep-1.au.adaltas.cloud:9995/ (username/password)
