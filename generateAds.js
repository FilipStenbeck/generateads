'use strict';

var randomAdGenerator = require('./adGenerator');

if (process.argv[2] === 'post') {
  let env = process.argv[4] || 'local';
  console.log('---------------------------------------------------------------');
  console.log(`Deliver ${process.argv[3]} ads to Sentinel ${env} environment`);
  console.log('---------------------------------------------------------------');
  randomAdGenerator.deliver(process.argv[3], process.argv[4]);

} else if (process.argv[2] === 'get') {
  let env = process.argv[4] || 'local';
  console.log('---------------------------------------------------------------');
  console.log(`Collect ads with timestamp after ${process.argv[3]} from Sentinel ${env} environment `);
  console.log('---------------------------------------------------------------');
  randomAdGenerator.retrieve(process.argv[3], process.argv[4]);
}
