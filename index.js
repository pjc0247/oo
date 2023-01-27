const NamedMutex = require('named-mutex');
const path = require('path');
const { exit } = require('process');

const name = require(path.join(process.cwd(), 'package.json')).name;

const nm = new NamedMutex(name);
if (nm.tryLock()) {
  ;
} else {
  exit(-1);
}
