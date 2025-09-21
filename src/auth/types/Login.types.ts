export type LoginDTO = {
    email: string;
    senha: string;
}

export type LoginResponse = {
    Data: LoginDTO[];
}