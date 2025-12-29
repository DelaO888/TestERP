import { prisma } from "@/server/db/prisma";
import { z } from "zod";

const createClientSchema = z.object({
  name: z.string().min(2),
  rfc: z.string().optional(),
  email: z.string().email().optional(),
  phone: z.string().optional(),
});

export async function GET() {
  const clients = await prisma.client.findMany({
    orderBy: { createdAt: "desc" },
    take: 50,
  });
  return Response.json(clients);
}

export async function POST(req: Request) {
  const body = await req.json();
  const parsed = createClientSchema.safeParse(body);

  if (!parsed.success) {
    return Response.json(
      { error: "Validación fallida", details: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const client = await prisma.client.create({
    data: parsed.data,
  });

  return Response.json(client, { status: 201 });
}
