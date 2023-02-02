export function parse(input) {
  const fs = require('fs');

  fs.readFile('./data/islenska.csv', 'latin1', function (err, data) {
    console.log(data);
  });
}
