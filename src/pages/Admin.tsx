export default function Admin() {
  return (
    <main className="container mx-auto py-10">
      <h1 className="text-2xl font-semibold mb-2">Admin Panel</h1>
      <p className="text-sm text-muted-foreground">Product management, categories, orders, and analytics will be enabled once backend is connected.</p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="p-6 border rounded-lg">
          <h3 className="font-medium mb-2">Products</h3>
          <p className="text-sm text-muted-foreground">Add/edit products, upload images.</p>
        </div>
        <div className="p-6 border rounded-lg">
          <h3 className="font-medium mb-2">Categories</h3>
          <p className="text-sm text-muted-foreground">Manage category tree and sorting.</p>
        </div>
        <div className="p-6 border rounded-lg">
          <h3 className="font-medium mb-2">Orders</h3>
          <p className="text-sm text-muted-foreground">Process orders and update statuses.</p>
        </div>
        <div className="p-6 border rounded-lg">
          <h3 className="font-medium mb-2">Analytics</h3>
          <p className="text-sm text-muted-foreground">Sales overview and top products.</p>
        </div>
      </div>
    </main>
  );
}
