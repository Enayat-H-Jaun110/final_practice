"use server"

import prisma from "@/lib/db"

export const getlorem = async () => {
    return await prisma.lorem.findMany()
}