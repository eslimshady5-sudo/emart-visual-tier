import { Link, Outlet } from "react-router-dom";

export function AdminLayout() {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-slate-100 p-4">
        <h2 className="text-xl font-bold mb-4">Admin</h2>
        <nav className="flex flex-col space-y-2">
            <Link to="/admin">Dashboard</Link>
            <Link to="/admin/products">Products</Link>
            <Link to="/admin/orders">Orders</Link>
        </nav>
      </aside>
      <main className="flex-grow p-6">
        <Outlet />
      </main>
    </div>
  );
}
