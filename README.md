# NextJS scaffold

## Installation:
1. Create from template:
  ```sh
  npx create-next-app --example https://github.com/GabenGar/nextjs-boilerplate --use-npm
  ```
2. Copy `.env` file and set values:
  ```sh
  cp .env .env.local
  ```

## TODOs

## Secret Keys
To generate various random keys use `openssl`
```sh
openssl rand -base64 32
```

## Links
https://wiki.postgresql.org/wiki/Don't_Do_This

`TIMESTAMPTZ` - https://wiki.postgresql.org/wiki/Don't_Do_This#Don.27t_use_timestamp_.28without_time_zone.29
