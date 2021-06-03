import auth0 from '@/lib/auth0';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function callback(req, res) {
  try {
    await auth0.handleCallback(req, res, {
      redirectTo: '/',
      onUserLoaded: async (request, result, session) => {
        const { user: auth0User } = session;
        const {
          family_name: nameLast,
          given_name: nameFirst,
          sub: auth0Id,
        } = auth0User;

        let { name: email } = auth0User;

        // Google logins don't provide an e-mail
        if (!email.includes('@')) {
          email = null;
        }

        const user = await prisma.users.findOne({
          where: { auth0Id },
        });

        if (!user) {
          await prisma.users.create({
            data: {
              auth0Id,
              email,
              nameFirst,
              nameLast,
            },
          });
        }

        return { ...session };
      },
    });
  } catch (error) {
    res.status(error.status || 500).end(error.message);
  }
}
