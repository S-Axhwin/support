import { Button } from "@repo/ui/components/ui/button";
import { PrismaClient } from "@repo/database";

export default async function Page() {
  const prisma = new PrismaClient();
  console.log(await prisma.patient.findMany());

  return (
    <main>
      <Button>Click me</Button>
    </main>
  );
}
