'use client';

import { signIn, signOut, useSession } from 'next-auth/react';

export default function SignInButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="flex items-center gap-4">
        <p className="text-sm">Welcome, {session.user?.name}</p>
        <button
          onClick={() => signOut()}
          className="px-4 py-2 bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
        >
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => signIn()}
      className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
    >
      Sign In
    </button>
  );
}