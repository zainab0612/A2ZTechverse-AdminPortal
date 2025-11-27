import { Card, CardAction, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function WelcomeCard() {
    return (
        <Card className="
      relative overflow-hidden
      bg-linear-to-r from-[#0d0f24] to-[#185672] p-6 
      flex w-full h-64 gap-0
      border-none shadow-xl
    ">
            <CardHeader className="text-white/60 text-sm px-0">Welcome back,</CardHeader>
            <CardContent className="text-3xl font-bold px-0">
                <CardHeader className="px-0">
                    Mark Johnson
                </CardHeader>
            </CardContent>
            <CardDescription className="text-white/60 w-[40%] text-base">
                Glad to see you again!
                Ask me anything.
            </CardDescription>
            <CardAction className="absolute bottom-6">
                <Link href="/dashboard" className="flex items-center gap-2">
                    Tap to record
                    <ArrowRight size={20} />
                </Link>
            </CardAction>
        </Card>
    );
}
