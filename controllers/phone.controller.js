const { Phone } = require('../models');
const _ = require('lodash');

module.exports.getPhones = async (req, res) => {
  console.log(`run getPhones method`);
};

module.exports.getPhoneById = async (req, res) => {
  console.log(`run getPhoneById method`);
};

module.exports.createPhone = async (req, res, next) => {
  console.log(`run createPhones method`);
  const { body } = req;
  console.log(`body`, body);
  try {
    const newPhone = await Phone.create(body);
    console.log(`newPhone.get()`, newPhone.get());

    res.status(200).send();
  } catch (err) {
    console.log(`err`, err);
    next(err);
  }
};

module.exports.updatePhone = async (req, res) => {
  console.log(`run updatePhones method`);
};

module.exports.deletePhone = async (req, res) => {
  console.log(`run deletePhones method`);
};
