import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
    const password = await bcrypt.hash("changeme123", 10);
    await prisma.user.upsert({
        where: { email: "you@crossord.com" },
        update: {},
        create: { email: "you@crossord.com", name: "Admin", password, role: "ADMIN" },
    });
}

main().then(() => prisma.$disconnect());