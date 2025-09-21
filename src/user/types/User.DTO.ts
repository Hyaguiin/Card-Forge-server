export type UserDto = {
    name: string;
    secondname: string;
    email: string;
    age: number;
    password: string;
    lastLogged: Date;
    isLogged: boolean;
}


export type UserDataResponse = {
    Data: UserDto[];
}