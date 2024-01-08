/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  MainSidebar: [
    {
      type: "category",
      label: "About",
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "intro",
          label: "What is RisingWave?",
        },
        {
          type: "doc",
          id: "use-cases",
          label: "Use cases",
        },
        {
          type: "doc",
          label: "RisingWave vs. Flink",
          id: "risingwave-flink-comparison",
        },
        {
          type: "doc",
          label: "Integrations",
          id: "rw-integration-summary",
        },
        {
          type: "category",
          label: "Deep-dive",
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: "doc",
              id: "architecture",
              label: "Architecture",
            },
            {
              type: "doc",
              id: "concepts/key-concepts",
              label: "Key concepts and terms",
            },
            {
              type: "doc",
              label: "Fault tolerance",
              id: "fault-tolerance",
            },
            {
              type: "doc",
              label: "Data persistence",
              id: "data-persistence",
            },
            {
              type: "doc",
              label: "Transactions",
              id: "concepts/transactions",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Get started",
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: "doc",
          label: "Quick start",
          id: "get-started",
        },
        {
          "type": "doc",
          "id": "deploy/risingwave-docker-compose",
          "label": "Deploy with Docker Compose"
        },
        {
          "type": "category",
          "label": "Deploy in production environments",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "type": "doc",
              "id": "deploy/risingwave-cloud",
              "label": "Deploy on RisingWave Cloud"
            },
            {
              "type": "doc",
              "id": "deploy/risingwave-kubernetes",
              "label": "Deploy on Kubernetes with Operator"
            },
            {
              "type": "doc",
              "id": "deploy/risingwave-k8s-helm",
              "label": "Deploy on Kubernetes with Helm"
            }
          ]
        },
        {
          "type": "doc",
          "id": "guides/install-psql-without-postgresql",
          "label": "Install psql"
        }
      ],
    },
    {
      type: "category",
      label: "Demos",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "tutorials/real-time-ad-performance-analysis",
          label: "Real-time ad performance analysis",
        },
        {
          type: "doc",
          id: "tutorials/server-performance-anomaly-detection",
          label: "Server performance anomaly detection",
        },
        {
          type: "doc",
          id: "tutorials/fast-twitter-events-processing",
          label: "Fast Twitter events processing",
        },
        {
          type: "doc",
          id: "tutorials/clickstream-analysis",
          label: "Clickstream analysis",
        },
        {
          type: "doc",
          id: "tutorials/live-stream-metrics-analysis",
          label: "Live stream metrics analysis",
        },
        {
          type: "doc",
          id: "tutorials/use-risingwave-to-monitor-risingwave-metrics",
          label: "Use RisingWave to monitor RisingWave metrics",
        },
      ],
    },
    {
      type: "category",
      label: "Ingest data",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          label: "Overview",
          id: "ingest/data-ingestion",
        },
        {
          type: "doc",
          label: "Modify source or table schemas",
          id: "ingest/modify-schemas",
        },
        {
          type: "category",
          label: "Sources",
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: "category",
              label: "Kafka",
              collapsible: true,
              collapsed: true,
              items: [
                {
                  type: "doc",
                  label: "Apache Kafka",
                  id: "ingest/ingest-from-kafka",
                },
                {
                  type: "doc",
                  label: "Confluent Cloud",
                  id: "guides/confluent-kafka-source",
                },
                {
                  type: "doc",
                  label: "Amazon MSK",
                  id: "guides/connector-amazon-msk",
                },
               {
                  type: "doc",
                  label: "AutoMQ Kafka",
                  id: "ingest/ingest-from-automq-kafka",
                },
                {
                  type: "doc",
                  label: "Instaclustr Kafka",
                  id: "ingest/ingest-from-instaclustr-kafka",
                },
                {
                  type: "doc",
                  label: "Upstash Kafka",
                  id: "ingest/ingest-from-upstash-kafka",
                },
              ]
            },
            {
              type: "category",
              label: "Pulsar",
              collapsible: true,
              collapsed: true,
              items: [
                {
                  type: "doc",
                  label: "Apache Pulsar",
                  id: "ingest/ingest-from-pulsar",
                },
                {
                  type: "doc",
                  label: "DataStax Astra Streaming",
                  id: "guides/connector-astra-streaming",
                },
              ]
            },
            {
              type: "doc",
              label: "AWS Kinesis",
              id: "ingest/ingest-from-kinesis",
            },
            {
              type: "doc",
              label: "AWS S3",
              id: "ingest/ingest-from-s3",
            },
            {
              type: "doc",
              label: "CDC via event streaming systems",
              id: "ingest/ingest-from-cdc",
            },
            {
              type: "doc",
              label: "Citus CDC",
              id: "guides/ingest-from-citus-cdc",
            },
            {
              type: "doc",
              label: "MongoDB CDC",
              id: "guides/ingest-from-mongodb-cdc",
            },
            {
              type: "doc",
              label: "MySQL CDC",
              id: "guides/ingest-from-mysql-cdc",
            },
            {
              type: "doc",
              label: "NATS JetStream",
              id: "ingest/ingest-from-nats",
            },
            {
              type: "doc",
              label: "PostgreSQL CDC",
              id: "guides/ingest-from-postgres-cdc",
            },
            {
              type: "doc",
              label: "Redpanda",
              id: "ingest/ingest-from-redpanda",
            },
            {
              type: "doc",
              label: "WrapStream",
              id: "ingest/ingest-from-warpstream",
            },
            {
              type: "doc",
              label: "Load generator",
              id: "ingest/ingest-from-datagen",
            },
          ]
        },
      ],
    },
    {
      type: "category",
      label: "Transform data",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "sql/syntax/sql-pattern-dynamic-filters",
          label: "Dynamic filters",
        },
        {
          type: "doc",
          id: "sql/syntax/sql-pattern-temporal-filters",
          label: "Temporal filters",
        },
        {
          type: "doc",
          id: "sql/query-syntax/query-syntax-join-clause",
          label: "Joins",
        },
        {
          type: "doc",
          id: "sql/syntax/sql-pattern-topn",
          label: "Top-N by group",
        },
        {
          type: "doc",
          id: "sql/functions-operators/sql-function-time-window",
          label: "Time window functions",
        },
        {
          type: "doc",
          id: "sql/udf/user-defined-functions",
          label: "User-defined functions",
        },
        {
          type: "doc",
          id: "transform/window-functions",
          label: "Window functions",
        },
        {
          type: "category",
          label: "Emit on window close",
          collapsible: true,
          collapsed: true,
          link: {
            type: "doc",
            id: "transform/emit-on-window-close",
          },
          items: [
            {
              type: "doc",
              id: "transform/watermarks",
              label: "Watermarks",
            },
          ]
        },
        {
          type: "doc",
          id: "transform/use-dbt",
          label: "Use dbt for data transformations",
        },
      ],
    },
    {
      type: "category",
      label: "Query & visualize data",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          label: "Beekeeper Studio",
          id: "guides/beekeeper-integration",
        },
        {
          type: "doc",
          label: "DBeaver",
          id: "guides/dbeaver-integration",
        },
        {
          type: "doc",
          label: "Grafana",
          id: "guides/grafana-integration",
        },
        {
          type: "doc",
          label: "Looker",
          id: "guides/looker-integration",
        },
        {
          type: "doc",
          label: "Metabase",
          id: "guides/metabase-integration",
        },
        {
          type: "doc",
          label: "Supabase",
          id: "guides/supabase-integration",
        },
        {
          type: "doc",
          label: "Superset",
          id: "guides/superset-integration",
        },
      ],
    },
    {
      type: "category",
      label: "Deliver data",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "data-delivery",
          label: "Overview",
        },
        {
          type: "category",
          label: "Sinks",
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: "doc",
              label: "Apache Doris",
              id: "guides/sink-to-doris",
            },
            {
              type: "doc",
              label: "Apache Kafka",
              id: "guides/create-sink-kafka",
            },
            {
              type: "doc",
              label: "Apache Iceberg",
              id: "guides/sink-to-iceberg",
            },
            {
              type: "doc",
              label: "Apache Pulsar",
              id: "guides/sink-to-pulsar",
            },
            {
              type: "doc",
              label: "AWS Kinesis",
              id: "guides/sink-to-aws-kinesis",
            },
            {
              type: "doc",
              label: "Cassandra",
              id: "guides/sink-to-cassandra",
            },
            {
              type: "doc",
              label: "ClickHouse",
              id: "guides/sink-to-clickhouse",
            },
            {
              type: "doc",
              label: "CockroachDB",
              id: "guides/sink-to-cockroach",
            },
            {
              type: "doc",
              label: "Delta Lake",
              id: "guides/sink-to-delta-lake",
            },
            {
              type: "doc",
              label: "Elasticsearch",
              id: "guides/sink-to-elasticsearch",
            },
            {
              type: "doc",
              label: "Google BigQuery",
              id: "guides/sink-to-bigquery",
            },
            {
              type: "doc",
              label: "MySQL",
              id: "guides/sink-to-mysql-with-jdbc",
            },
            {
              type: "doc",
              label: "NATS",
              id: "guides/sink-to-nats",
            },
            {
              type: "doc",
              label: "PostgreSQL",
              id: "guides/sink-to-postgres",
            },
            {
              type: "doc",
              label: "Redis",
              id: "guides/sink-to-redis",
            },
            {
              type: "doc",
              label: "TiDB",
              id: "guides/sink-to-tidb",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Develop",
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: "category",
          label: "SQL references",
          collapsible: true,
          collapsed: true,
          link: {
            type: "generated-index",
            title: "SQL references",
            slug: "/sql-references",
            keywords: ["SQL"],
          },
          items: [
            {
              type: "category",
              label: "Commands",
              collapsible: true,
              collapsed: true,
              link: {
                type: "generated-index",
                title: "SQL commands",
                description: "Overview of the SQL commands supported by RisingWave.",
                slug: "/sql-commands",
                keywords: ["SQL, commands"],
              },
              items: [
                {
                  type: "autogenerated",
                  dirName: "sql/commands",
                },
              ],
            },
            {
              type: "category",
              label: "Query syntax",
              collapsible: true,
              collapsed: true,
              link: {
                type: "generated-index",
                title: "Query syntax",
                description: "Syntax and usage of common query clauses.",
                slug: "/query-syntax",
                keywords: ["query, syntax"],
              },
              items: [
                {
                  type: "doc",
                  id: "sql/query-syntax/query-syntax-value-exp",
                  label: "Value expressions",
                },
                {
                  type: "doc",
                  id: "sql/query-syntax/query-syntax-generated-columns",
                  label: "Generated columns",
                },
                {
                  type: "doc",
                  id: "sql/query-syntax/query-syntax-from-clause",
                  label: "FROM clause",
                },
                {
                  type: "doc",
                  id: "sql/query-syntax/query-syntax-group-by-clause",
                  label: "GROUP BY clause",
                },
                {
                  type: "doc",
                  id: "sql/query-syntax/query-syntax-having-clause",
                  label: "HAVING clause",
                },
                {
                  type: "doc",
                  id: "sql/query-syntax/query-syntax-limit-clause",
                  label: "LIMIT clause",
                },
                {
                  type: "doc",
                  id: "sql/query-syntax/query-syntax-values-clause",
                  label: "VALUES clause",
                },
                {
                  type: "doc",
                  id: "sql/query-syntax/query-syntax-where-clause",
                  label: "WHERE clause",
                },
                {
                  type: "doc",
                  id: "sql/query-syntax/query-syntax-with-clause",
                  label: "WITH clause",
                },
                {
                  type: "doc",
                  id: "sql/query-syntax/query-syntax-with-ordinality-clause",
                  label: "WITH ORDINALITY clause",
                },
              ],
            },
            {
              type: "category",
              label: "Data types",
              collapsible: true,
              collapsed: true,
              items: [
                {
                  type: "doc",
                  id: "sql/sql-data-types",
                  label: "Overview",
                },
                {
                  type: "doc",
                  id: "sql/data-types/data-type-casting",
                  label: "Casting",
                },
                {
                  type: "doc",
                  id: "sql/data-types/data-type-array",
                  label: "Array",
                },
                {
                  type: "doc",
                  id: "sql/data-types/data-type-jsonb",
                  label: "JSONB",
                },
                {
                  type: "doc",
                  id: "sql/data-types/data-type-struct",
                  label: "Struct",
                },
                {
                  type: "doc",
                  id: "sql/data-types/data-type-rw_int256",
                  label: "rw_int256",
                },
                {
                  type: "doc",
                  id: "sql/data-types/protobuf-types",
                  label: "Supported protobuf types",
                },
              ],
            },
            {
              type: "category",
              label: "Functions and operators",
              collapsible: true,
              collapsed: true,
              link: {
                type: "generated-index",
                title: "SQL functions and operators",
                description: "Functions and operators that can be used in SQL queries.",
                slug: "/sql-functions",
                keywords: ["function, operator"],
              },
              items: [
                {
                  type: 'doc',
                  id: 'sql/functions-operators/sql-function-aggregate',
                  label: 'Aggregate',
                },
                {
                  type: "doc",
                  id: "sql/functions-operators/sql-function-array",
                  label: "Array",
                },
                {
                  type: "doc",
                  id: "sql/functions-operators/sql-function-binarystring",
                  label: "Binary string",
                },
                {
                  type: "doc",
                  id: "sql/functions-operators/sql-function-cast",
                  label: "Cast",
                },
                {
                  type: "doc",
                  id: "sql/functions-operators/sql-function-conditional",
                  label: "Conditional",
                },
                {
                  type: "doc",
                  id: "sql/functions-operators/sql-function-comparison",
                  label: "Comparison",
                },
                {
                  type: "doc",
                  id: "sql/functions-operators/sql-function-datetime",
                  label: "Date & time",
                },
                {
                  type: "doc",
                  id: "sql/functions-operators/sql-function-json",
                  label: "JSON",
                },
                {
                  type: "doc",
                  id: "sql/functions-operators/sql-function-logical",
                  label: "Logical",
                },
                {
                  type: "doc",
                  id: "sql/functions-operators/sql-function-mathematical",
                  label: "Mathematical",
                },
                {
                  type: "doc",
                  id: "sql/functions-operators/sql-function-set-functions",
                  label: "Set functions",
                },
                {
                  type: "doc",
                  id: "sql/functions-operators/sql-function-set-operators",
                  label: "Set operators",
                },
                {
                  type: "doc",
                  id: "sql/functions-operators/sql-function-string",
                  label: "String",
                },

                {
                  type: "doc",
                  id: "sql/functions-operators/sql-function-sys-admin",
                  label: "System administration",
                },
                {
                  type: "doc",
                  id: "sql/functions-operators/sql-function-sys-info",
                  label: "System information",
                },
              ],
            },
            {
              type: "category",
              label: "User-defined functions",
              collapsible: true,
              collapsed: true,
              items: [
                {
                  type: "doc",
                  id: "sql/udf/user-defined-functions",
                  label: "Overview",
                },
                {
                  type: "doc",
                  id: "sql/udf/udf-python",
                  label: "Python",
                },
                {
                  type: "doc",
                  id: "sql/udf/udf-java",
                  label: "Java",
                },
                {
                  type: "doc",
                  id: "sql/udf/udf-foreign-data",
                  label: "Foreign data",
                },
              ],
            },
            {
              type: "doc",
              id: "sql/sql-identifiers",
              label: "Identifiers",
            },
            {
              type: "category",
              label: "System catalogs",
              collapsible: true,
              collapsed: true,
              link: {
                type: "generated-index",
                title: "System catalogs",
                description: "System catalogs that can be used to query metadata.",
                slug: "/system-catalogs",
                keywords: ["catalog, system, metadata"],
              },
              items: [
                {
                  type: "doc",
                  id: "sql/system-catalogs/information-schema",
                  label: "Information schema",
                },
                {
                  type: "doc",
                  id: "sql/system-catalogs/pg-catalogs",
                  label: "PostgreSQL catalogs",
                },
                {
                  type: "doc",
                  id: "sql/system-catalogs/rw_catalog",
                  label: "RisingWave catalogs",
                },
              ],
            },
            {
              type: "doc",
              id: "sql/psql-commands",
            },
          ],
        },
        {
          type: "category",
          label: "Client libraries",
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: "doc",
              id: "dev/java-client-libraries",
              label: "Java",
            },
            {
              type: "doc",
              id: "dev/nodejs-client-libraries",
              label: "Node.js",
            },
            {
              type: "doc",
              id: "dev/python-client-libraries",
              label: "Python",
            },
            {
              type: "doc",
              id: "dev/go-client-libraries",
              label: "Go",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Deploy & operate",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "deploy/hardware-requirements",
          label: "Hardware requirements",
        },
        {
          type: "doc",
          id: "deploy/upgrade-risingwave-k8s",
          label: "Upgrade RisingWave",
        },
        {
          type: "doc",
          id: "deploy/k8s-cluster-scaling",
          label: "Cluster scaling",
        },
        {
          type: "doc",
          id: "deploy/uninstall-risingwave-k8s",
          label: "Uninstall RisingWave from a cluster",
        },
        {
          type: "doc",
          id: "manage/monitor-risingwave-cluster",
        },
        {
          type: "doc",
          id: "manage/access-control",
        },
        {
          type: "doc",
          id: "manage/view-statement-progress",
        },
        {
          type: "doc",
          id: "manage/view-configure-system-parameters",
        },
        {
          type: 'doc',
          id: 'manage/view-configure-runtime-parameters',
        },
        {
          type: 'doc',
          id: 'manage/alter-streaming',
        },
        {
          type: 'doc',
          id: 'manage/meta-backup',
        },
        {
          type: "doc",
          id: "manage/dedicated-compute-node",
          label: "Set up a dedicated compute node",
        },
        {
          type: "doc",
          label: "Telemetry",
          id: "telemetry",
        },
      ]
    },
    {
      type: "category",
      label: "Optimize performance",
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "performance/performance-faq"
        },
        {
          type: "doc",
          id: "performance/performance-metrics"
        },
        {
          type: "doc",
          id: "performance/best-practices"
        },
      ]
    },
    {
      type: "category",
      label: "Troubleshooting",
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: "doc",
          label: "Overview",
          id: "troubleshoot/troubleshooting"
        },
        {
          type: "doc",
          label: "Troubleshoot out-of-memory problems",
          id: "troubleshoot/troubleshoot-oom"
        },
      ]
    },
    {
      type: "link",
      href: "/release-notes",
      label: "Releases",
    },
  ],
};

module.exports = sidebars;
