const Validate = require('celebrate');

const createProperty = {
    body : {
        'Size of farm' : Validate.Joi.string().required(),
        'Street Address': Validate.Joi.string().required(),
        address: Validate.Joi.string().required(),
        property_info: Validate.Joi.array().required(),
        Parking: Validate.Joi.boolean().required(),
        images: Validate.Joi.array().required(),
        province: Validate.Joi.string(),
        district: Validate.Joi.string(),
        sector: Validate.Joi.string(),
        village: Validate.Joi.string(),
        street: Validate.Joi.string(),
        coordinates: Validate.Joi.array(),
        'Type of Property': Validate.Joi.string().required(),
        title: Validate.Joi.string().required(),
        property_details: Validate.Joi.string().required(),
        'Pets Allowed': Validate.Joi.boolean(),
        price: Validate.Joi.array().required(),
        uuid: Validate.Joi.string().required(),
        owner: Validate.Joi.object().required(),
        blocker: Validate.Joi.object().required()
    }
}

module.exports = {
    createProperty
}