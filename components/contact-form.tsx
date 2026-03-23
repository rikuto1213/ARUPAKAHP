"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { toast } from "sonner"

const formSchema = z.object({
    name: z.string().min(2, {
        message: "名前は2文字以上で入力してください。",
    }),
    email: z.string().email({
        message: "有効なメールアドレスを入力してください。",
    }),
    subject: z.string().min(5, {
        message: "件名は5文字以上で入力してください。",
    }),
    message: z.string().min(10, {
        message: "メッセージは10文字以上で入力してください。",
    }),
})

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true)
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            })

            if (!response.ok) {
                let message = "Failed to send message"
                try {
                    const data = await response.json()
                    if (typeof data?.message === "string") {
                        message = data.message
                    }
                } catch {
                    // Ignore JSON parse failures and use the fallback message.
                }
                throw new Error(message)
            }

            toast.success("メッセージを送信しました！")
            form.reset()
        } catch (error) {
            const message = error instanceof Error ? error.message : "送信に失敗しました。後でもう一度お試しください。"
            toast.error(message)
            console.error(error)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>お名前</FormLabel>
                            <FormControl>
                                <Input placeholder="山田 太郎" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>メールアドレス</FormLabel>
                            <FormControl>
                                <Input placeholder="user@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>件名</FormLabel>
                            <FormControl>
                                <Input placeholder="お問い合わせ内容について" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>メッセージ</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="ここにメッセージを入力してください..."
                                    className="min-h-[120px]"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "送信中..." : "送信する"}
                </Button>
            </form>
        </Form>
    )
}
