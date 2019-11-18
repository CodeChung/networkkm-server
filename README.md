# Thingful Server

## Setting Up

- Install dependencies: `npm install`
- Create development and test databases: `createdb thingful`, `createdb thingful-test`
- Create database user: `createuser thingful`
- Grant privileges to new user in `psql`:
  - `GRANT ALL PRIVILEGES ON DATABASE thingful TO thingful`
  - `GRANT ALL PRIVILEGES ON DATABASE "thingful-test" TO thingful`
- Prepare environment file: `cp example.env .env`
  - Replace values in `.env` with your custom values if necessary.
- Bootstrap development database: `MIGRATION_DB_NAME=thingful npm run migrate`
- Bootstrap test database: `MIGRATION_DB_NAME=thingful-test npm run migrate`

## Seeds

1. In command line `psql -U <username> -d thingful -f ./path/to/blogful-api-auth/seeds/seed.thingful_tables.sql`
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

- To seed the database for development: `psql -U thingful -d thingful -a -f seeds/seed.thingful_tables.sql`
- To clear seed data: `psql -U thingful -d thingful -a -f seeds/trunc.thingful_tables.sql`

## Scripts

- Start application for development: `npm run dev`
- Run tests: `npm test`
