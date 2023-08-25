import { signIn, signOut, useSession } from 'next-auth/react';

function AuthButtons() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <p>Welcome, {session.user.email}!</p>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }

  return (
    <>
    <button onClick={() => signIn('credentials', { email, password })}>Sign in with Email</button>
    <button onClick={() => signIn('google')}>Sign in with Google</button>
    <button onClick={() => signIn('facebook')}>Sign in with Facebook</button>
    <button onClick={() => signIn('github')}>Sign in with GitHub</button>
    </>
    
    
  );
}

export default AuthButtons;
