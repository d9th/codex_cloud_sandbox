const assert = require('node:assert/strict');
const { execFileSync } = require('node:child_process');
const path = require('node:path');
const test = require('node:test');

test('hello.js prints hello world to stdout', () => {
  const script = path.join(__dirname, '..', 'src', 'hello.js');
  const stdout = execFileSync(process.execPath, [script], { encoding: 'utf8' });

  assert.equal(stdout, 'hello world\n');
});
