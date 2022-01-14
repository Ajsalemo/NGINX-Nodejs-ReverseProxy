# NGINX-Nodejs-ReverseProxy

A containerized Express.js application that uses NGINX as a reverse proxy within the same container. This utilizes [supervisord](http://supervisord.org/introduction.html#:~:text=The%20server%20piece%20of%20supervisor%20is%20named%20supervisord.,handling%20%E2%80%9Cevents%E2%80%9D%20corresponding%20to%20points%20in%20subprocess%20lifetimes.) to start both the NGINX and Node process.

- NGINX is exposed over port 8090 (arbitrary port in this case)
- Node/Express is listening on port 3000
- NGINX's `default.conf` and/or `nginx.conf` can now be changed as needed such as redirects or header removal
