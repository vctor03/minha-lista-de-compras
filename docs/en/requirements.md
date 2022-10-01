- [Requirements](#requirements)
  - [Node](#node)
    - [Scripts](#scripts)
  - [Python](#python)

# Requirements

As this project requires Node version v15.14.0 or higher and Python 3.10.7 higher installed.

## Node

This app uses typescript and is packaged with webpack.

Install the necessary libs for operation

    npm install

### Scripts

The **start** scripts performs the compilation of the typescript to javascript through tsc.

The **build** script performs the packaging of the files.

**Tip:** If you just want to compile the css you can just run the command **build**, or if you are using **tsc --watch** for the typescript.

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