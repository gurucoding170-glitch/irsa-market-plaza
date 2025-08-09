import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Login() {
  return (
    <main className="container mx-auto py-10 max-w-md">
      <h1 className="text-2xl font-semibold mb-6">Login</h1>
      <div className="space-y-4">
        <div>
          <label className="text-sm">Email</label>
          <Input type="email" />
        </div>
        <div>
          <label className="text-sm">Password</label>
          <Input type="password" />
        </div>
        <Button className="w-full" variant="hero">Login</Button>
        <div className="text-sm text-center">
          <Link className="text-primary" to="/auth/forgot">Forgot password?</Link>
        </div>
        <div className="text-sm text-center text-muted-foreground">
          New here? <Link className="text-primary" to="/auth/signup">Create an account</Link>
        </div>
      </div>
      <p className="text-xs text-muted-foreground mt-6">Authentication will be enabled via Supabase (email/password). Connect Supabase to activate.</p>
    </main>
  );
}
