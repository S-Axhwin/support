import { PrismaClient } from "@repo/database";
import { NextRequest, NextResponse } from "next/server";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";

const prisma = new PrismaClient();

export const GET = async (req:NextRequest) => {
    const {getUser} = getKindeServerSession();
    const {email} = await getUser();
    if(!email) return NextResponse.json({error: "Unauthorized"}, {status: 401});

    const appointments = await prisma.appointment.findMany({
        where: {
            doctor: {
                email
            }
        },
        include: {patient: true}
    });
    return NextResponse.json({appointments});
}
