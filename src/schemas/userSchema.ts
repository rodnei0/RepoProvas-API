import joi from 'joi';

const userSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().pattern(new RegExp('^[0-9]{3,8}$')).required(),
    confirmPassword: joi.string().pattern(new RegExp('^[0-9]{3,8}$')).required(),
});

export default userSchema;