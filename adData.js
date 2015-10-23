const adStubs = [{
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
},
{
  content: {
    title: 'Training outfit',
    body: 'Something every dog need. Very very cool.',
    category: {
      id: '6000',
      name: 'Hobby'
    },
    price: {
      amount: 3000,
      currency: 'SEK'
    },
    type: {
      id: 'ss',
      name: 'For sale'
    },
    images: [{
      src: 'http://image.shutterstock.com/display_pic_with_logo/92792/92792,1249941547,1/stock-photo-dog-in-pink-sport-suit-isolated-on-white-35061640.jpg'
    }]
  }
}
];

exports.getData =  function () {
  return adStubs[Math.round(Math.random() * (adStubs.length - 1))];
};
