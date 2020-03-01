import {LoginErrors} from "../login/interfaces";

export interface RegisterErrors extends LoginErrors{
    confirm?: string;
}

export type RegisterInputTypes = 'email' | 'password' | 'confirm';
