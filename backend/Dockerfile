FROM python:3.7.0

WORKDIR /tmp

ADD requirements.txt /tmp/requirements.txt

RUN apt update &&\
    pip install -r requirements.txt
