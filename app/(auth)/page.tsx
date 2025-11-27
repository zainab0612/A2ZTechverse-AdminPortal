'use client'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"
import Logo from '../../public/images/Logo.png'
import { Eye, EyeOff } from "lucide-react"

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [show, setShow] = useState(false);
    const isFormComplete = email.trim() && password.trim();
    const router = useRouter();


    const submitForm = (e: React.FormEvent) => {
        e.preventDefault();

        const myEmail = "admin@gmail.com"
        const myPassword = "admin123"
        if (email === myEmail && password === myPassword) {
            router.push("/dashboard");

        }
        else {
            alert("Invalid Credentials")
        }
    };

    return (
        <>
            <div className="flex flex-col justify-center items-center h-screen gap-3">
                <div className="flex justify-center items-center">
                    <Image src={Logo} alt="Logo" className="h-28 w-72" />
                </div>
                <form onSubmit={submitForm} className="w-full flex justify-center items-center">
                    <Card className="w-[400px] bg-linear-to-r from-[#0d0f24] to-[#185672] border-none rounded-xl shadow-xl">
                        <CardHeader>
                            <CardTitle className="text-white">Login to your account</CardTitle>
                            <CardDescription>
                                Enter your email below to login to your account
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col gap-6">
                                <div className="grid gap-2">
                                    <Label htmlFor="email" className="text-white">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="Email Address"
                                        required
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <div className="flex items-center">
                                        <Label htmlFor="password" className="text-white">Password</Label>
                                        <a
                                            href="#"
                                            className="ml-auto inline-block text-sm underline-offset-4 hover:underline text-white"
                                        >
                                            Forgot your password?
                                        </a>
                                    </div>
                                    <div className="relative">
                                        <Input
                                            type={show ? "text" : "password"}
                                            id="password"
                                            placeholder="Password"
                                            required
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                        <Button
                                            variant="transparent"
                                            type="button"
                                            onClick={() => setShow(!show)}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                                        >
                                            {show ? <EyeOff size={18} className="filter brightness-0" /> : <Eye size={18} className="filter brightness-0" />}
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="flex-col gap-2">
                            <CardAction className="w-full" >
                                <Button type="submit" disabled={!isFormComplete} className="w-full cursor-pointer bg-[#1c6080] text-white hover:bg-[#4b86a0]">
                                    Login
                                </Button>
                            </CardAction>
                        </CardFooter>
                    </Card>
                </form>
            </div>
        </>
    )
}
export default SignIn
