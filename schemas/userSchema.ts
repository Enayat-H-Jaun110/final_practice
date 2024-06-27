import { z } from "zod";

export const formSchema = z.object({
    name: z.string().min(10,{message: "A Message should contain 10 characters"})
  })