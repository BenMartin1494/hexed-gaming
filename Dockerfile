FROM python:3.6.0-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app

RUN apk update && \
    apk add --virtual build-dependencies build-base linux-headers && \
    pip3 install -r requirements.txt && \

    apk del build-dependencies

ENV PYTHONPATH /usr/src/app

EXPOSE 80

ENTRYPOINT ["uwsgi", "--ini", "uwsgi.ini"]
