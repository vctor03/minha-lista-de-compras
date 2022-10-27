- [Requirements](#requirements)
  - [Docker](#docker)
  - [Node](#node)
    - [Scripts](#scripts)
  - [Python](#python)

# Requirements

As this project requires Node version v19.10.0 and Python 3.11.0 installed.

    node==19.10.0
    python==3.11.0

Or if you want to use docker, which is more recommended, in that case install docker and docker-compose

    docker=>20.10.12
    docker-compose=>1.25.0

If you want to use only docker, [click here](#docker)

If you didn't want to use docker, [click here](#node)

## Docker

Build the image

     docker-compose build

This way the environment is already configured.

## Node

This app uses typescript and is packaged with webpack.

Install the necessary libs for operation

    npm install

### Scripts

The **start** scripts performs the compilation of the typescript to javascript through tsc.

The **build** script performs the packaging of the files.

**Tip:** If you want to save time, install **npm-run-all** globally

    npm install npm-run-all -g

After that just run

    npm-run-all start build

To compile the typescript codes and package the files.

## Python

To get stared in python, create the virtual environment

Linux:

    python -m venv .

Windows:

    py -m venv .

After that activate it

Linux:

    source ./bin/activate

Windows:

    \Scripts\activate

Install requirements.txt

    pip install -r requirements.txt

This way the environment is already configured.

[Return](./README.md)