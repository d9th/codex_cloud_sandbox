const assert = require('node:assert/strict');
const { execFileSync } = require('node:child_process');
const path = require('node:path');
const test = require('node:test');

const script = path.join(__dirname, '..', 'src', 'hello.js');

test('hello.js prints hello world to stdout', () => {
  const stdout = execFileSync(process.execPath, [script], { encoding: 'utf8' });

  assert.equal(stdout, 'hello world\n');
});

test('hello.js greets the name provided as an argument', () => {
  const stdout = execFileSync(process.execPath, [script, 'Codex'], { encoding: 'utf8' });

  assert.equal(stdout, 'hello Codex\n');
});
