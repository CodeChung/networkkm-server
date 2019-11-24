# NetworkKM Server

## Setting Up

- Install dependencies: `npm install`
- Create development and test databases: `createdb networkkm`, `createdb networkkm-test`
- Create database user: `createuser postgres`
- Grant privileges to new user in `psql`:
  - `GRANT ALL PRIVILEGES ON DATABASE networkkm TO postgres`
  - `GRANT ALL PRIVILEGES ON DATABASE "networkkm-test" TO postgres`
- Prepare environment file: `cp example.env .env`
  - Replace values in `.env` with your custom values if necessary.
- Bootstrap development database: `MIGRATION_DB_NAME=networkkm npm run migrate`
- Bootstrap test database: `MIGRATION_DB_NAME=networkkm-test npm run migrate`

## Seeds

1. In command line `psql -U <username> -d networkkm -f ./path/to/networkkm_server/seeds/seed.networkkm_tables.sql`
  a. seed for main db

## Note for Windows users

- Migration files have columns with `TIMESTAMP WITH TIME ZONE` instead of `TIMESTAMP`
  - This should hopefully allow you to pass tests involving TIMESTAMP columns

### Configuring Postgres

For tests involving time to run properly, your Postgres database must be configured to run in the UTC timezone.

1. Locate the `postgresql.conf` file for your Postgres installation.
    - OS X, Homebrew: `/usr/local/var/postgres/postgresql.conf`
2. Uncomment the `timezone` line and set it to `UTC` as follows:

```
# - Locale and Formatting -

datestyle = 'iso, mdy'
#intervalstyle = 'postgres'
timezone = 'UTC'
#timezone_abbreviations = 'Default'     # Select the set of available time zone
```

## Sample Data

- To seed the database for development: `psql -U networkkm -d networkkm -a -f seeds/seed.networkkm_tables.sql`
- To clear seed data: `psql -U networkkm -d networkkm -a -f seeds/trunc.networkkm_tables.sql`

## Scripts

- Start application for development: `npm run dev`
- Run tests: `npm test`
