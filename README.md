# Node #41541

Run code shared in [node#41541](https://github.com/nodejs/node/issues/41541) in attempt to find memory leak.


## To run

1. start server
  ```
  npm i
  npm run start
  ```
2. inspect in Chrome, by visiting `chrome://inspect`, and choosing Node as remote target.

## Creating requests to the server

Use a tool like [ab](https://httpd.apache.org/docs/2.4/programs/ab.html) to create traffic to server.

```bash
ab -n 40000 -c 4 http://127.0.0.1:3000/
```
