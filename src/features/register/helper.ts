import {checkLoginFields} from "../login/helper";
import {RegisterErrors} from "./interfaces";

export function checkRegisterFields(email: string, password: string, confirm: string):RegisterErrors {
    let errors:RegisterErrors = checkLoginFields(email,password);
    if(confirm.length === 0)
        errors.confirm = 'This field is required';
    if(password !== confirm)
        errors.confirm = "Didn't match with the password";
    return errors;
}
