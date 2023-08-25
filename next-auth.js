import { supabase } from './supabase'; // Import your Supabase client
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  providers: [
    Providers.Credentials({
      name: 'Email and Password',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        const { email, password } = credentials;

        const { user, error } = await supabase.auth.signIn({
          email,
          password,
        });

        if (error) {
          throw new Error('Invalid credentials');
        }

        return user;
      },
    }),
    Providers.Google({
        clientId: 'your-google-client-id',
        clientSecret: 'your-google-client-secret',
    }),
    Providers.Facebook({
        clientId: 'your-facebook-client-id',
        clientSecret: 'your-facebook-client-secret',
    }),
    Providers.GitHub({
        clientId: 'your-github-client-id',
        clientSecret: 'your-github-client-secret',
    }),
  ],
});

