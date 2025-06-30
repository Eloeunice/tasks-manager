import { PrismaClient } from '@prisma/client';
import 'dotenv/config';
const prisma = new PrismaClient();

async function seed() {
  // Código para inserir dados iniciais
  await prisma.user.create({
    data: {
      name: 'usuario',
      email: 'teste@gmail.com',
      password: 'teste',
    },
  });

  console.log('Database seeded');
  await prisma.$disconnect();
}

seed().catch(async (e) => {
  console.error(e);
  await prisma.$disconnect();
  process.exit(1);
});
