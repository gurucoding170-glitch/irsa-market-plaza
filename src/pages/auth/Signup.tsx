import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Signup() {
  return (
    <main className="container mx-auto py-10 max-w-md">
      <h1 className="text-2xl font-semibold mb-6">Create account</h1>
      <div className="space-y-4">
        <div>
          <label className="text-sm">Name</label>
          <Input />
        </div>
        <div>
          <label className="text-sm">Email</label>
          <Input type="email" />
        </div>
        <div>
          <label className="text-sm">Password</label>
          <Input type="password" />
        </div>
        <Button className="w-full" variant="hero">Sign up</Button>
        <div className="text-sm text-center text-muted-foreground">
          Already have an account? <Link className="text-primary" to="/auth/login">Login</Link>
        </div>
      </div>
      <p className="text-xs text-muted-foreground mt-6">Authentication will be enabled via Supabase (email/password). Connect Supabase to activate.</p>
    </main>
  );
}
