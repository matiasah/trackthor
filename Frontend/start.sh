#!/bin/bash
#npm install && ng serve --host 0.0.0.0 --poll 500
npm install && ng serve --host 0.0.0.0 --poll 500 --port 443 --disable-host-check --ssl true --ssl-cert "cert.pem" --ssl-key "key.pem"