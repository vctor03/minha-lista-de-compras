- [Routes](#routes)
- [Index](#index)
- [User](#user)
  - [Sub-routes](#sub-routes)
    - [List](#list)

# Routes

All routes folder must be named as follows:

route-name + route prefix

     user_route

Each route must contain a python file named with the same name as the route

     user_route.py

Each route must contain a source folder and a templates folder,

The source folder contains the source code files essential to the route.

The templates folder contains sub-folders, each sub-folder corresponds to a sub-route and contains the templates [html files] related to that sub-route.

The templates folder can also contain a template file that corresponds to its index.

# Index

Index is the main route of the application.

# User

User is the user route, this route is responsible for everything related to the user.

## Sub-routes

### List

List is the sub-route responsible for storing the list, the list where the user can add items, remove them...

[Return](./README.md)