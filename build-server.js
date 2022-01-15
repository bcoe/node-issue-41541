const code = require("fs").readFileSync('server.template', 'utf8');
const junk = 'testtesttesttesttesttesttesttesttesttesttesttesttesttesttestest';
let foo = '';
for (let i = 0; i < 40000; i++) {
  foo += junk
}
require('fs').writeFileSync("server.ts", code.replace('{foo}', foo), 'utf8');
