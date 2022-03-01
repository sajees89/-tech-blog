const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'roger123',
    email: 'roger@gmail.com',
    password: 'password123'
  },
  {
    username: 'bell123',
    email: 'bell@gmail.com',
    password: 'password123'
  },
  {
    username: 'telus123',
    email: 'telus@gmail.com',
    password: 'password123'
  },
  {
    username: 'shaw123',
    email: 'shaw@gmail.com',
    password: 'password123'
  },
  {
    username: 'videotron123',
    email: 'video@gmail.com',
    password: 'password123'
  },
  {
    username: 'yellowpages123',
    email: 'yp@gmail.com',
    password: 'password123'
  },
  {
    username: 'guess123',
    email: 'guess@gmail.com',
    password: 'password123'
  },
  {
    username: 'mazda123',
    email: 'mazda@gmail.com',
    password: 'password123'
  },
  {
    username: 'honda123',
    email: 'honda@gmail.com',
    password: 'password123'
  },
  {
    username: 'chevy123',
    email: 'chevy@gmail.com',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
