import {LoginErrors} from "./interfaces";


export function checkLoginFields(email: string, password: string):LoginErrors {
    const fieldRequired = "This field is required";
    let errors:LoginErrors = {};
    if(email.length === 0){
        errors.email = fieldRequired;
    }
    if(password.length === 0) {
        errors.password = fieldRequired;
    }
    return errors;
}
