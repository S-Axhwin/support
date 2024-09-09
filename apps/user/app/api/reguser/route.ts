import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextRequest } from "next/server";
import { PrismaClient } from "@repo/database";
import { NextResponse } from "next/server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export const GET = async (req:NextRequest) => {
    const { getUser } = getKindeServerSession();
    const { email } = (await getUser());

    if(!email) return NextResponse.json({status: 405});
    try {
        const newUser = await prisma.patient.create({
            data: {
                email
            }
        });
        console.log(newUser);
        return NextResponse.redirect(new URL('/welcome', req.url))
    } catch(e) {
        console.log(e);
    }

    return NextResponse.redirect(new URL("/consultancy", req.url));
}
