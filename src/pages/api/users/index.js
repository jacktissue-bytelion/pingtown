import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const handleGet = async (res) => {
  const user = await prisma.users.findMany();

  await prisma.$disconnect();
  return res.json(user);
};

const handle = async (req, res) => {
  if (req.method === 'GET') {
    return handleGet(res);
  }

  return res.status(500).json({
    message: `The HTTP ${req.method} method is not supported at this route.`,
  });
};

export default handle;
