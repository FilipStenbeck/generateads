'use strict';
let request = require('request');
let uuid = require('uuid');
let adData = require('./adData');

const adStub = {
  content: {
    title: 'Super cute Rabbit',
    body: 'A fine rabbit. It can also dance',
    category: {
      id: '6000',
      name: 'Hobby'
    },
    price: {
      amount: 100,
      currency: 'SEK'
    },
    type: {
      id: 'rr',
      name: 'For rate'
    },
    images: [{
      src: 'http://thumb7.shutterstock.com/display_pic_with_logo/2084267/176318615/stock-photo-bunny-annoyed-man-in-rabbit-suit-176318615.jpg'
    }]
  }
};

class Ad {
  constructor() {
    this.id = uuid.v4();
    this.content = adData.getData().content;
  }
  get data() {
    return {id: this.id, content: this.content};
  }
}

exports.retrieve = function retrive(key, timestamp, environment) {
  let url = `http://127.0.0.1:17707/v1/ads?timestamp=${timestamp}`;
  if (environment === 'staging') {
    url = `https://api.staging-sentinelengine.com/v1/ads?timestamp=${timestamp}`;
  }
  if (environment === 'prod') {
    url = `https://api.sentinelengine.com/v1/ads?timestamp=${timestamp}`;
  }
  request.get({
    //jscs:disable
    headers: {'content-type': 'application/json', 'X-Api-Key': key},
    url: url
    //jscs:enable
  }, function (error, response, body) {
    if (error) {
      console.log('error', error);
      return;
    }
    if (!body) {
      console.log('No ads');
      return;
    }
    console.log(body);
  });

};

exports.deliver = function deliver(apiKey, numOfAds, environment) {
  let url = 'http://127.0.0.1:17707/v1/ads';
  let ads = [];
  if (environment === 'staging') {
    url = 'https://api.staging-sentinelengine.com/v1/ads';
  }
  if (environment === 'staging') {
    url = 'https://api.staging-sentinelengine.com/v1/ads';
  }
  if (environment === 'prod') {
    url = 'https://api.sentinelengine.com/v1/ads';
  }

  function* adGenerator() {
    while (true) {
      yield new Ad();
    }
  };

  let generator = adGenerator();

  for (var i = 0; i < numOfAds; i++) {
    ads.push(generator.next().value.data);
  };
  request.post({
    //jscs:disable
    headers: {'content-type': 'application/json', 'X-Api-Key': apiKey},
    //jscs:enable
    url:     url,
    body:    JSON.stringify(ads)
  }, function (error, response, body) {
    if (error) {
      console.log('error', error);
      return;
    }
    console.log(body);
  });
};
