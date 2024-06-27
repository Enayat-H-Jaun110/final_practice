"use server"

import prisma from "@/lib/db";
import { formSchema } from "@/schemas/userSchema"
import { z } from "zod"

export const createLorem = async (values: z.infer<typeof formSchema>) => {
    
    const validatedValues = formSchema.safeParse(values);

    if(!validatedValues.success)
    {
        return{err:"Invalid Values"};
    }
    await prisma.lorem.create({
        data: {
            name: validatedValues.data?.name, 
            isCompleted:true           
        }
    
},)


}