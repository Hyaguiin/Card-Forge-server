export type LoginDTO = {
    id?: number
    email: string;
    senha: string;
}

export type LoginResponse = {
   user: LoginDTO; // você está retornando um objeto, não array
    token: string;
}