'use strict';

var randomAdGenerator = require('./adGenerator');

if (process.argv.length < 3) {
  console.log(`usage: Collect parameters: get timestamp api-key environment`);
  console.log(`usage: Deliver ads parameters: get amount api-key environment`);

}

if (process.argv[2] === 'post') {
  let env = process.argv[5] || 'local';
  console.log('---------------------------------------------------------------');
  console.log(`Deliver ${process.argv[4]} ads to Sentinel ${env} environment`);
  console.log('---------------------------------------------------------------');
  randomAdGenerator.deliver(process.argv[4], process.argv[3], process.argv[5]);

} else if (process.argv[2] === 'get') {
  let env = process.argv[5] || 'local';
  console.log('---------------------------------------------------------------');
  console.log(`Collect ads with timestamp after ${process.argv[3]} from Sentinel ${env} environment `);
  console.log('---------------------------------------------------------------');
  randomAdGenerator.retrieve(process.argv[4], process.argv[3], process.argv[5]);
}
