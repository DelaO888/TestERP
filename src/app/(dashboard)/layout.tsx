// src/app/(dashboard)/layout.tsx
import "@/app/globals.css";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex">
      <aside className="w-64 border-r bg-background p-4">
        <div className="font-semibold text-lg">Test ERP/CRM</div>
        <nav className="mt-6 space-y-2 text-sm">
          <a className="block hover:underline" href="/dashboard">Dashboard</a>
          <a className="block hover:underline" href="/crm/clients">Clientes</a>
          <a className="block hover:underline" href="/sales/quotes">Cotizaciones</a>
          <a className="block hover:underline" href="/inventory/products">Productos</a>
        </nav>
      </aside>

      <main className="flex-1">
        <header className="h-14 border-b flex items-center px-4">
          <div className="text-sm text-muted-foreground">Ambiente: Dev</div>
        </header>
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
}
