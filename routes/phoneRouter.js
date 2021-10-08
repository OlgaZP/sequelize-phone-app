const { Router } = require('express');
const { phoneController } = require('./../controllers');

const phoneRouter = Router();

//phones
phoneRouter.get('/', phoneController.getPhones);

phoneRouter.get('/:phoneId', phoneController.getPhoneById);

phoneRouter.post('/', phoneController.createPhone);

phoneRouter.patch('/:phoneId', phoneController.updatePhone);

phoneRouter.delete('/:phoneId', phoneController.deletePhone);

module.exports = phoneRouter;
