- [Requerimentos](#requerimentos)
  - [Node](#node)
    - [Scripts](#scripts)
  - [Python](#python)

# Requerimentos

Como esse projeto requer o Node versão v15.14.0 ou superior e o Python 3.10.7 superior instalado.

## Node

Esse app utiliza o typescript e é empacotado com o webpack.

Instale as libs necessárias para o funcionamento

    npm install

### Scripts

O script **start** executa a compilação do typescript para javascript por meio do tsc.

O script **build** executa o empacotamento dos arquivos.

**Dica:** Caso queira apenas compilar o css você pode rodar apenas o comando **build**, ou se estiver utilizando o **tsc --watch** para o typescript.

**Dica:** Caso queira poupar tempo, instale o **npm-run-all** de forma global

    npm install npm-run-all -g

Após isso basta rodar

    npm-run-all start build

Para compilar os códigos typescript e empacotar os arquivos.

## Python

Para começar no python, crie o ambiente virtual

Linux:

    python -m venv .

Windows:

    py -m venv .

Após isso ative ele

Linux:

    source ./bin/activate

Windows:

    \Scripts\activate

Instale o requirements.txt

    pip install -r requirements.txt

Dessa forma o ambiente já está configurado.

[Retornar](./README.md)