import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createDefaultUser = async () => {
  await prisma.user.create({
    data: {
      fullName: "Amadou Diadie",
      email: "amadou@gmail.com",
      password: "Test1234",
      role: "admin",
    }
  } );
}

const createDefaultPrograms = async () => {
  // create 3 Program
  await prisma.program.create({
    data: {
      name: "Business",
      sigle: "BUS",
      description: "Business Program",
    },
  });
  await prisma.program.create({
    data: {
      name: "Online",
      sigle: "ONLINE",
      description: "Online Program",
    },
  });
  await prisma.program.create({
    data: {
      name: "SOSIRA",
      sigle: "SOS",
      description: "SOSIRA Program",
    },
  });
}

const createDefaultLevel = async () => {
  // create 4 levels
  await prisma.level.create({
    data: {
      name: "Level 1",
      sigle: "L1",
      index: 1,
      program: {
        connect: { id: 1 },
      },
    },
  });
  await prisma.level.create({
    data: {
      name: "Level 2",
      sigle: "L2",
      index: 2,
      program: {
        connect: { id: 1 },
      },
    },
  });
  await prisma.level.create({
    data: {
      name: "Level 3",
      sigle: "L3",
      index: 3,
      program: {
        connect: { id: 2 },
      },
    },
  });
  await prisma.level.create({
    data: {
      name: "Level 4",
      sigle: "L4",
      index: 4,
      program: {
        connect: { id: 3 },
      },
    },
  });
}

async function main() {
  // Default Elements to create
  await createDefaultUser();
  await createDefaultPrograms();
  await createDefaultLevel();
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
