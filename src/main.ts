import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cors from "cors";
import env from ".//.env/envalid.env"
const port = env.PORT || 5000;
const allowedDomainsSplit = env.ALLOWED_DOMAINS.split(",").map(domain => domain.trim());
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const corsOptions = {
    origin: (origin: string | undefined, callback: (err: Error | null, allowed?: boolean) => void) => {
      if (!origin) {
        callback(null, true);
        return;
      }
      if (allowedDomainsSplit.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Não permitido pelo CORS'));
      }
    },
    credentials: true, 
  };
  app.use(cors(corsOptions))
  await app.listen(port, ()=>{
    console.log(`Rodando na porta: ${port}`);
  });
}
bootstrap();
