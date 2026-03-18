import { NextResponse } from "next/server"
import { z } from "zod"

import { prisma } from "@/lib/prisma"

const formSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    subject: z.string().min(5),
    message: z.string().min(10),
})

export async function POST(req: Request) {
    try {
        const body = await req.json()
        const validatedData = formSchema.parse(body)

        const contact = await prisma.contactMessage.create({
            data: {
                name: validatedData.name,
                email: validatedData.email,
                subject: validatedData.subject,
                message: validatedData.message,
            },
        })

        return NextResponse.json(
            { message: "Message sent successfully", id: contact.id },
            { status: 200 }
        )
    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json(
                { message: "Invalid request payload", errors: error.flatten() },
                { status: 400 }
            )
        }

        console.error("Failed to save message:", error)
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 })
    }
}
