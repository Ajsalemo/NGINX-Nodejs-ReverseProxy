#!/bin/bash

node /usr/share/nginx/html/server.js & /usr/bin/supervisord -n -c /etc/supervisor/conf.d/supervisord.conf