- [Rotas](#rotas)
- [Index](#index)
- [User](#user)
  - [Sub-rotas](#sub-rotas)
    - [List](#list)

# Rotas

Todas pasta de rotas deve ser nomeado da seguinte forma:

nome-da-rota + prefixo route

    user_route

Cada rota deve conter um arquivo python nomeado com o mesmo nome da rota

    user_route.py

Cada rota deve conter uma pasta source e uma templates, 

A pasta source contém os arquivos de código fonte essências a rota.

A pasta templates contém sub-pastas, cada sub-pasta corresponde a uma sub-rota e contém os templates [arquivos html] relacionados a essa sub-rota.

A pasta templates também pode conter um arquivo de template que corresponde ao index dela.

# Index

Index é a rota principal da aplicação.

# User

User é a rota do usuário, essa rota é responsável por tudo relacionado ao usuário.

## Sub-rotas

### List

List é a sub-rota responsável por armazenar a lista, a lista onde o usuário pode adicionar os itens, remover eles...

[Retornar](./README.md)