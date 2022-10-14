FROM nikolaik/python-nodejs:python3.10-nodejs18-alpine

RUN apk add --no-cache --upgrade bash

ENV PATH=$PATH:'/usr/local/bin/'

# Python

COPY requirements.txt .

RUN pip install -r requirements.txt

EXPOSE 8080
