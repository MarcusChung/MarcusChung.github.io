// counter.js
let counter = 0;

export function getNextId() {
  counter++;
  return `code-${counter}`;
}