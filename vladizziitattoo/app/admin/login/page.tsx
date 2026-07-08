import React from 'react';
import { login } from '@/app/actions/auth';

interface Props {
  className?: string;
}

export const LoginPage: React.FC<Props> = () => {

  return (
    <div className="flex h-screen w-full items-center justify-center bg-black">
      <div className="w-full max-w-md p-8 bg-zinc-900 rounded-lg shadow-xl border border-zinc-800">
        <h1 className="text-2xl font-bold text-white mb-6 text-center">Login to Admin Panel</h1>
        
        <form action={login} className="flex flex-col gap-4">
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            required
            className="w-full p-3 rounded bg-zinc-800 text-white outline-none focus:ring-2 focus:ring-zinc-600"
          />
          <button 
            type="submit"
            className="w-full p-3 bg-white text-black font-semibold rounded hover:bg-zinc-200 transition-colors"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;