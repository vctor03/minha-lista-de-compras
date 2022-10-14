#!/bin/sh

path_to_bin='/usr/local/bin'
pip="${path_to_bin}/pip"
npm="${path_to_bin}/npm"

$pip install -r requirements.txt

# Node

$npm install
$npm run start
$npm run build

cd minha-lista-de-compras

flask run --host 0.0.0.0 --port 8080
