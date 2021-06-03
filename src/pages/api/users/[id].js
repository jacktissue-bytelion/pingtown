import { PrismaClient } from '@prisma/client';
import auth0 from '@/lib/auth0';

const { getSession, requireAuthentication } = auth0;
const prisma = new PrismaClient();

const handleGet = async (userId, res) => {
  const user = await prisma.users.findOne({
    where: {
      id: Number(userId),
    },
    include: {
      usersRoles: true,
    },
  });

  await prisma.$disconnect();
  return res.json(user);
};

const handleDelete = async (userId, res) => {
  const user = await prisma.users.delete({
    where: {
      id: Number(userId),
    },
  });
  await prisma.$disconnect();
  return res.json(user);
};

const handlePut = async (userId, res, req) => {
  const request = typeof req.body === 'object' ? req.body : JSON.parse(req.body);

  if (typeof request.isPublished === 'string') {
    if (request.isPublished.toLowerCase() === 'true') {
      request.isPublished = true;
    } else if (request.isPublished.toLowerCase() === 'false') {
      request.isPublished = false;
    }
  }

  request.dateUpdated = new Date();

  if (request.socialLinks) {
    request.socialLinks = {
      set: request.socialLinks,
    };
  }

  const user = await prisma.users.update({
    where: {
      id: Number(userId),
    },
    data: request,
  });

  await prisma.$disconnect();

  return res.json(user);
};

const handle = async (req, res) => {
  const { user } = await getSession(req);
  const { sub: auth0Id } = user;
  const { id: userId } = req.query;

  const userMatch = await prisma.users.findMany({
    where: { auth0Id },
  });

  if (userMatch[0].id !== Number(userId)) {
    return res.status(403).json({ message: 'Not authorized' });
  }

  if (req.method === 'GET') {
    return handleGet(userId, res);
  }
  if (req.method === 'DELETE') {
    return handleDelete(userId, res);
  }
  if (req.method === 'PUT') {
    return handlePut(userId, res, req);
  }

  return res.status(500).json({
    message: `The HTTP ${req.method} method is not supported at this route.`,
  });
};

export default requireAuthentication(handle);
