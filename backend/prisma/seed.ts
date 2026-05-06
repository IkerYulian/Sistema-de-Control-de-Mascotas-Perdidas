import { PrismaClient } from '../generated/prisma';
import { PrismaPg } from '@prisma/adapter-pg';

const adapter = new PrismaPg({
  connectionString: "postgresql://postgres:postgres@localhost:5433/mascotas_perdidas"
});
const prisma = new PrismaClient({ adapter } as any);

async function main() {
  const zona = await prisma.zona.upsert({
    where: { nombre: 'Norte' },
    update: {},
    create: { nombre: 'Norte', ciudad: 'Neiva', departamento: 'Huila' }
  });

  const especie = await prisma.especie.upsert({
    where: { nombre: 'Perro' },
    update: {},
    create: { nombre: 'Perro' }
  });

  const usuario = await prisma.usuario.upsert({
    where: { correo: 'juan@gmail.com' },
    update: {},
    create: {
      nombres: 'Juan', apellidos: 'García',
      correo: 'juan@gmail.com', telefono: '3001234567',
      contrasena: '123456', rol: 'COLABORADOR', zonaId: zona.id
    }
  });

  await prisma.mascota.upsert({
    where: { id: 1 },
    update: {},
    create: {
      nombre: 'Firulais', especieId: especie.id,
      color: 'Café', sexo: 'MACHO', duenioId: usuario.id
    }
  });

  console.log('✅ Datos de prueba creados correctamente');
}

main().catch(console.error).finally(() => prisma.$disconnect());