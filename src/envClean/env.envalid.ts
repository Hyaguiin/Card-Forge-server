import {str, bool, port, cleanEnv} from 'envalid';

const env = cleanEnv(process.env,{
    DB_HOST: str({desc: "Host do Banco"}),
    DB_PORT: port({default: 5432, desc: "Porta do banco"}),
    DB_NAME: str({desc: "Nome do Banco"}),
    DB_USER: str({desc: "Usuário do Banco"}),
    DB_PASSWORD: str({desc: "Senha do Banco"}),
    DB_SSL: bool({default: true, desc: "Necessário para conexoes em nuvem com certificado" }),
    PORT: port({default: 5000, desc: "Porta do servidor"}),
    JWT_SECRET: str({desc:"Token jwt"}),
    JWT_REFRESH: str({desc:"Refresh do Token jwt"}),
    ALLOWED_DOMAINS: str({desc: "Dominios para o cors"}),
    NODE_ENV: str({choices: ['development', 'production', 'test']}),
})

export default env;