import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function ForgotPassword() {
  return (
    <main className="container mx-auto py-10 max-w-md">
      <h1 className="text-2xl font-semibold mb-6">Reset password</h1>
      <div className="space-y-4">
        <div>
          <label className="text-sm">Email</label>
          <Input type="email" />
        </div>
        <Button className="w-full" variant="hero">Send reset link</Button>
      </div>
      <p className="text-xs text-muted-foreground mt-6">Password reset emails will be handled by Supabase auth once connected.</p>
    </main>
  );
}
