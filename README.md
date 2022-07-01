### Contacts App Rest API Nestjs TypeORM MySQL TypeScript

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

### Description

[Nest](https://github.com/nestjs/nest) framework, TypeScript, TypeORM, MySQL REST API

### Table of Contents

- [Folder Structure](#folder-structure)
- [Libraries & Frameworks](#libraries--frameworks)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the app](#running-the-app)
- [Stay in touch](#stay-in-touch)

## Folder Structure

```
project
.
├── README.md
├── config
│   └── typeorm.config.ts
├── nest-cli.json
├── package.json
├── pnpm-lock.yaml
├── src
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   ├── auth
│   │   ├── auth.controller.ts
│   │   ├── auth.module.ts
│   │   ├── auth.service.ts
│   │   └── user.entity.ts
│   ├── contacts
│   │   ├── contacts.controller.ts
│   │   ├── contacts.module.ts
│   │   └── contacts.service.ts
│   └── main.ts
├── tsconfig.build.json
└── tsconfig.json

55 directories, 68 files
```

## Libraries & Frameworks

| Name    | Description                                                                                             |
| ------- | ------------------------------------------------------------------------------------------------------- |
| Nestjs  | A progressive Node.js framework for building efficient, reliable and scalable server-side applications. |
| mysql   | Popular Relation Database                                                                               |
| TypeORM | TypeORM is an ORM that can run in NodeJS and can be used with TypeScript                                |

## Installation

```bash
$ npm install
```

## Configuration

```bash
$ mv .env.local .env
$ vim .env
```

now edit the .env file to match your local device configuration.

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Stay in touch

- Author - Tirtharaj Pramanik
- PortFolio - [@TirtharajPramanik](https://tirtharajpramanik.github.io)
- Famework - [https://nestjs.com](https://nestjs.com/)
