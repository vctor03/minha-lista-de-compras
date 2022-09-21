- [Estrutura do projeto](#estrutura-do-projeto)
  - [Raiz](#raiz)
  - [docs](#docs)
  - [tests](#tests)
  - [minha-lista-de-compras](#minha-lista-de-compras)
    - [Arquivos](#arquivos)
    - [Pastas](#pastas)
  - [Visão geral do projeto:](#visão-geral-do-projeto)

# Estrutura do projeto

## Raiz

A pasta raiz contem as outras pastas e os arquivos de configuração.

Arquivos de configuração: 

1. gitignore
2. package-lock.json
3. package.json
4. requirements.txt
5. tsconfig.json
6. webpack.config.js

## docs

Docs é a pasta responsável por conter as documentações.

## tests

Tests é a pasta responsável por armazenar os tests.

## minha-lista-de-compras

minha-lista-de-compras é a pasta principal do projeto, ela é dividia entre 4 pastas principais e um **app.py**

### Arquivos

O **app.py** é responsável por iniciar o servidor.

### Pastas

A pasta css é responsável por guardar os arquivos css, que, graças ao webpack, serão transformados em um único arquivo que ficará na pasta não enviada para o github, chamada de static.

A pasta routes é responsável por guardar os arquivos relacionados as rotas, consequentemente ela também acaba armazenando os templates, que são os arquivos html das rotas.

A pasta typescript é responsável por guardar os arquivos typescript, que serão compilados para javascript, onde eles serão utilizados pelas rotas.

## Visão geral do projeto:

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

**Nota:** Algumas pastas, por não serem enviadas ao github, não estão citadas, sendo elas:

bin, include, lib, lib64: Essas são do ambiente virtual do python.

node_modules: Pasta que contém os módulos do node.

static: Pasta que contém os arquivos estáticos do servidor.

ts_compile_js: Arquivos typescript compilados para javascript, esses arquivos ainda não estão minimizados pelo webpack.

[Retornar](./README.md)