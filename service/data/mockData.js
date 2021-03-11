// just a comment here

exports.userList = [{
  _id: {
    $oid: "60398d0db81ad7613b9a7fc3"
  },
  userType: "user",
  active: true,
  auth0Id: "106044809483574283097",
  userName: "Dylan",
  email: "theillusionofthegift@gmail.com",
  firstName: "test",
  lastName: "test",
  bio: "gsaghjasofg",
  dateJoined: {
    $date: "2021-02-27T00:06:37.661Z"
  },
  __v: 0
},{ 
  _id: { 
    $oid: "60398d55b81ad7613b9a7fc4"
  },
  userType: "user",
  active: true,
  auth0Id: "60398d438756df0069a45d97",
  userName: "MrBlah",
  email: "blah2@testtest.com",
  firstName: "Balh",
  lastName: "Lash",
  bio: "BlahBlahBlah",
  dateJoined: {
    $date: "2021-02-27T00:07:49.550Z"
  },
  __v: 0
},{
  _id: {
    $oid: "60431c0f1eff5f8d3e6923c0"
  },
  userType: "user",
  active: true,
  auth0Id: "604319e3bd1ee3006a612d43",
  userName: "Illusiom",
  email: "coyotefootball55@ymail.com",
  firstName: "Dylan",
  lastName: "Eastridge",
  bio: "asdfgasdfg",
  dateJoined: {
    $date: "2021-03-06T06:07:11.345Z"
  },
  __v: 0
},{
  _id: {
    $oid: "6045b3b7015e0085212d8722"
  },
  userType: "user",
  active: true,
  auth0Id: "60397a55eb4d600070feec63",
  userName: "Dylan",
  email: "dylan.eastridge@seattlecolleges.edu",
  firstName: "Eastridge",
  lastName: "Eastridge",
  bio: "Testtest",
  dateJoined: {
    $date: "2021-03-08T05:18:47.892Z"
  },
  __v: 0
},{
  _id: {
    $oid: "6047cfbd82f2c42b0dca3319"
  },
  userType: "user",
  active: true,
  auth0Id: "6047cfb03fe3250069f5a5d1",
  userName: "tEST",
  email: "testy@testtest.com",
  firstName: "Test",
  lastName: "Test",
  bio: "gasfkjgasdklJF",
  dateJoined: {
    $date: "2021-03-09T19:42:53.174Z"
  },
  __v: 0
},{
  _id: {
    $oid: "6047d05783fa0c62b1653bb4"
  },
  userType: "user",
  active: true,
  auth0Id: "6046c74db5d39d007048742c",
  userName: "testuser",
  email: "testeremail@test.com",
  firstName: "first",
  lastName: "last",
  bio: "test bio",
  dateJoined: {
    $date: "2021-03-09T19:45:27.571Z"
  },
  __v: 0
},{
  _id: {
    $oid: "60498ebdbffd27a023e754cd"
  },
  userType: "user",
  active: true,
  auth0Id: "114285589784471963527",
  userName: "",
  email: "kristin.jue@gmail.com",
  firstName: "",
  lastName: "",
  bio: "",
  dateJoined: {
    $date: "2021-03-11T03:30:05.001Z"
  },
  __v: 0
}];

exports.productList = [{
  _id: {
    $oid: "6048848fdba1da7fddaa6ef5"
  },
  available: true,
  prodName: "pair of rollerblades",
  seller: "6046c74db5d39d007048742c",
  price: 25,
  description: "size 7",
  category: "",
  zipcode: {
    _id: {
      $oid: "6048848fdba1da7fddaa6ef6"
    },
    readable: "Pasadena, CA 91108, USA",
    latitude: 34.1247921,
    longitude: -118.1181199
  },
  postedDate: {
    $date: "2021-03-10T08:34:23.860Z"
  },
  __v: 0
},{
  _id: {
    $oid: "604949cbe99918973e5dff42"
  },
  available: true,
  prodName: "armchair",
  seller: "6046c74db5d39d007048742c",
  price: 35,
  description: "a nice comfy armchair",
  category: "",
  zipcode: {
    _id: {
      $oid: "604949cbe99918973e5dff43"
    },
    readable: "Seattle, WA 98125, USA",
    latitude: 47.7170204,
    longitude: -122.3009337
  },
  postedDate: {
    $date: "2021-03-10T22:35:55.870Z"
  },
  __v: 0
},{
  _id: {
    $oid: "604949f2e99918973e5dff49"
  },
  available: true,
  prodName: "coat rack",
  seller: "6046c74db5d39d007048742c",
  price: 5,
  description: "antique coat rack",
  category: "",
  zipcode: {
    _id: {
      $oid: "604949f2e99918973e5dff4a"
    },
    readable: "Seattle, WA 98115, USA",
    latitude: 47.6849444,
    longitude: -122.2982224
  },
  postedDate: {
    $date: "2021-03-10T22:36:34.691Z"
  },
  __v: 0
},{
  _id: {
    $oid: "60498e4ca39c578bcd135d4f"
  },
  available: true,
  prodName: "Motorcyle",
  seller: "106044809483574283097",
  price: 4000,
  description: "Very Fast Very Speedy",
  category: "Motorcycles",
  zipcode: {
    "_id": {
      "$oid": "60498e4ca39c578bcd135d50"
    },
    "readable": "Seattle, WA 98103, USA",
    "latitude": 47.6600087,
    "longitude": -122.3425575
  },
  "postedDate": {
    "$date": "2021-03-11T03:28:12.168Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "60498fb051bae2919bae80ab"
  },
  "available": true,
  "prodName": "ps5",
  "seller": "106044809483574283097",
  "price": 7900048,
  "description": "Test",
  "category": "Electronics",
  "zipcode": {
    "_id": {
      "$oid": "60498fb051bae2919bae80ac"
    },
    "readable": "Seattle, WA 98103, USA",
    "latitude": 47.6600087,
    "longitude": -122.3425575
  },
  "postedDate": {
    "$date": "2021-03-11T03:34:08.665Z"
  },
  "__v": 0
},{
  "_id": {
    "$oid": "604993ddb63fcaa6f84635db"
  },
  "available": true,
  "prodName": "ps4",
  "seller": "114285589784471963527",
  "price": 300,
  "description": "ps4",
  "category": "Electronics",
  "zipcode": {
    "_id": {
      "$oid": "604993ddb63fcaa6f84635dc"
    },
    readable: "Seattle, WA 98133, USA",
    latitude: 47.7393027,
    longitude: -122.3435335
  },
  postedDate: {
    $date: "2021-03-11T03:51:57.185Z"
  },
  __v: 0
},{
  _id: {
    $oid: "6049aa73d4010baa0838350e"
  },
  available: true,
  prodName: "Bike",
  seller: "114285589784471963527",
  price: 35,
  description: "navy bike",
  category: "Bicycles",
  zipcode: {
    _id: {
      "$oid": "6049aa73d4010baa0838350f"
    },
    readable: "Seattle, WA 98115, USA",
    latitude: 47.6849444,
    longitude: -122.2982224
  },
  postedDate: {
    $date: "2021-03-11T05:28:19.697Z"
  },
  __v: 0
}];

exports.conversations = [
  {
    users: ['6028e04afa3b6f10d32d46cb', '6028e07dfa3b6f10d32d46cc'],
    messages: [
      {
        user: '6028e04afa3b6f10d32d46cb',
        message: 'I want to buy your Aligator',
      },
      {
        user: '6028e04afa3b6f10d32d46cb',
        message: 'I will give you 50 bucks',
      },
      {
        user: '6028e07dfa3b6f10d32d46cc',
        message: 'No Way',
      },
    ],

  },
  {
    users: ['6028e09afa3b6f10d32d46cd', '6028e0d6fa3b6f10d32d46cf'],
    messages: [
      {
        user: '6028e09afa3b6f10d32d46cd',
        message: 'I want to buy your Macbook',
      },
      {
        user: '6028e09afa3b6f10d32d46cd',
        message: 'I will give you 2 bucks',
      },
      {
        user: '6028e0d6fa3b6f10d32d46cf',
        message: 'Okay it dosent work',
      },
    ],

  },
  {
    users: ['6028e0f1fa3b6f10d32d46d0', '6028e10bfa3b6f10d32d46d1'],
    messages: [
      {
        user: '6028e10bfa3b6f10d32d46d1',
        message: 'I want to buy your Headphones',
      },
      {
        user: '6028e0f1fa3b6f10d32d46d0',
        message: 'For how much?',
      },
      {
        user: '6028e10bfa3b6f10d32d46d1',
        message: 'A million dollars ',
      },
    ],

  },

];
