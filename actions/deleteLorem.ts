'use server'

import prisma from "@/lib/db"

export const DeleteLorem = async (id:string) =>{
    await prisma.lorem.delete({
        where: {id : id}
    })

}