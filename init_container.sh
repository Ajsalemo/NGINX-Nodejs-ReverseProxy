#!/bin/bash

# Start node
node /usr/share/nginx/html/server.js &
# Invoke our supervisord.conf
/usr/bin/supervisord -n -c /etc/supervisor/conf.d/supervisord.conf
