const validator = require("validator");
const isEmpty = require("./isEmpty");

const validateRegisterinput = (data) => {
    let errors = {};

    if(isEmpty(data.email)) {
        errors.email = "Email field cannot be empty!"

    } else if (!validator.isEmpty(data.email)) {
        errors.email ="Email is invalid, please provide a valid email"
    }

    if(isEmpty(data.password)) {
        errors.password = "Password field cannot be empty"
    } else if(!validator.isLength(data.password, {min: 6, max: 20})) {
        errors.password = "Password must be between 6 and 20 characters long";
    }

    if(isEmpty(data.name)) {
        errors.name = "Name field cannot be empty"
    } else if(!validator.isLength(data.name, {min: 2, max: 30})) {
        errors.name = "Name must be between 2 and 30 characters long";
    }


    
    if(isEmpty(data.confirmPassword)) {
        errors.confirmPassword = "Confirm password field cannot be empty";
    } else if(!validator.equals(data.password, data.confirmPassword)) {
        errors.confirmPassword = "Password and confirm password fields must match"
    }
    
    return {
        errors,
        isValid: isEmpty(errors),
    }


};

module.exports = validateRegisterinput;