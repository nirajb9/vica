export class User {
    id?: string;
    username?: string;
    password?: string;
    firstName?: string;
    lastName?: string;
    token?: string;
}

export class LoginModel {
    username!: string;
    password!: string;
}

export class UserDetails {
    userid?: number;
    name?: string;
    email?: string;
    mobileno?: string;
    token?: string;
    username?: string;
}

export class UserRegistration {
    userid?: number;
    name?: string;
    email?: string;
    mobileno?: string;
    password?: string;
    isapproved?: boolean;

}