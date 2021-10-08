'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Phones', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      brand: {
        type: Sequelize.STRING
      },
      model: {
        type: Sequelize.STRING
      },
      manufacturedYear: {
        type: Sequelize.DATEONLY
      },
      displaySize: {
        type: Sequelize.DECIMAL
      },
      systemType: {
        type: Sequelize.STRING
      },
      camerasCount: {
        type: Sequelize.INTEGER
      },
      batteryCapacity: {
        type: Sequelize.INTEGER
      },
      isNFS: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Phones');
  }
};