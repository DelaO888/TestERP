"use client";
import { useEffect, useState } from "react";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";

type Client = {
  id: string;
  name: string;
  rfc?: string | null;
  email?: string | null;
  phone?: string | null;
  status: "ACTIVE" | "INACTIVE";
  createdAt: string;
};

export function ClientsTable() {
    const [data, setData] = useState<Client[]>([]);
    const [loading, setLoading] = useState<boolean>(true);


useEffect(() => {
    fetch("/api/clients")
        .then(res => res.json())
        .then(data => {
            setData(data);
            setLoading(false);
        });
}, []);


 if (loading) return <div className="text-sm text-muted-foreground">Cargando...</div>;

return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Nombre</TableHead>
          <TableHead>RFC</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Teléfono</TableHead>
          <TableHead>Estatus</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((c) => (
          <TableRow key={c.id}>
            <TableCell className="font-medium">{c.name}</TableCell>
            <TableCell>{c.rfc ?? "-"}</TableCell>
            <TableCell>{c.email ?? "-"}</TableCell>
            <TableCell>{c.phone ?? "-"}</TableCell>
            <TableCell>{c.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );


}

