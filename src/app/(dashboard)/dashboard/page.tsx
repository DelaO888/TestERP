// src/app/(dashboard)/dashboard/page.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card>
        <CardHeader><CardTitle>Ventas del mes</CardTitle></CardHeader>
        <CardContent>$0.00</CardContent>
      </Card>
      <Card>
        <CardHeader><CardTitle>Pipeline</CardTitle></CardHeader>
        <CardContent>$0.00</CardContent>
      </Card>
      <Card>
        <CardHeader><CardTitle>CxC vencida</CardTitle></CardHeader>
        <CardContent>$0.00</CardContent>
      </Card>
    </div>
  );
}
