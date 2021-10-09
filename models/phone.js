'use strict';
const { Model } = require('sequelize');
const { date } = require('yup');
const { Sequelize } = require('.');
module.exports = (sequelize, DataTypes) => {
  class Phone extends Model {
    static associate (models) {
      // define association here
    }
  }
  Phone.init(
    {
      brand: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          is: /^\w+$/,
        },
      },
      model: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      manufacturedDate: {
        type: DataTypes.DATEONLY,
        defaultValue: new Date('2021-01-01'),
        validate: {
          isBefore: new Date().toISOString(),
          isDate: true,
        },
      },
      displaySize: {
        type: DataTypes.DECIMAL,
        allowNull: true,
        validate: {
          min: 1.0,
          max: 10.0,
        },
      },
      systemType: {
        type: DataTypes.STRING,
        defaultValue: 'unknown',
        allowNull: false,
      },
      camerasCount: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
          min: 1,
          max: 10,
        },
      },
      batteryCapacity: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
        validate: {
          min: 0,
          max: 100000,
        },
      },
      isNFS: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: true,
      },
    },
    {
      sequelize,
      modelName: 'Phone',
    }
  );
  return Phone;
};
