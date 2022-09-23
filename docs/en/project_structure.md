- [Project structure](#project-structure)
  - [Root](#root)
  - [docs](#docs)
  - [tests](#tests)
  - [minha-lisa-de-compras](#minha-lisa-de-compras)
    - [Files](#files)
    - [Folders](#folders)
  - [Project overview](#project-overview)

# Project structure

## Root

The root folder contains other folders and the configuration files.

Configuration files:

1. gitignore
2. package-lock.json
3. package.json
4. requirements.txt
5. tsconfig.json
6. webpack.config.js

## docs

Docs is a folder responsible for containing an documentations.

## tests

Tests is a folder responsible for store the tests.

## minha-lisa-de-compras

minha-lisa-de-compras os the main folder from the project, she is divided between 4 main folder and a **app.py**

### Files

The **app.py** is responsible for start the server.

### Folders

The css folder is responsible for storing the css files, which, thanks to webpack, will be transformed into a single file that will be in the folder no sent to github, called static

The routes folder is responsible for storing the files related on the routes, consequently it also ends up storing the templates, which are the html files on the routes.

The typescript folder is responsible for storing the typescript files, which will be compiled to javascript, where they will be used by the routes.

## Project overview

    /
    - docs/
      - en/
      - pt-br/
    - tests/
    - minha-lista-de-compras
      - css
      - routes
      - typescript
      - app.py

**Note:** Some folders, because they are not sent to github, are not mentioned, namely:

bin, include, lib, lib64: These are from the python virtual environment.

node_modules: Folder containing node modules.

static: Folder that contains the static files of the server.

ts_compile_js: Typescript files compiled for javascript, these files are not yet minified by webpack.

[Return](./README.md)