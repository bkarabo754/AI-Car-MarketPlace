'use server';
import { db } from '@/lib/prisma';
import { auth } from '@clerk/nextjs/server';

export async function getAdmin() {
  // if user is logged in or not
  const { userId } = await auth();
  if (!userId) throw new Error('Unauthorized');

  // check if user exists in the db
  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });

  // If user is not found in db or not an admin, return not authorized
  if (!user || user.role !== 'ADMIN') {
    return { authorized: false, reason: 'not-admin' };
  }

  return { authorized: true, user };
}
