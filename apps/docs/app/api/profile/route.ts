import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { PrismaClient } from "@repo/database";
import { NextRequest, NextResponse } from "next/server";


const prisma = new PrismaClient();
export const GET = async (req:NextRequest) => {
    const {getUser} = getKindeServerSession();
    const {email} = await getUser() as any;

    if(!email) return NextResponse.json({status: 405});

    const userData = await prisma.patient.findFirst({
        where: {
            email
        },
        include: {
            patientInfo: true
        }
    });
    console.log(userData);
    return NextResponse.json({info: userData?.patientInfo})
}
