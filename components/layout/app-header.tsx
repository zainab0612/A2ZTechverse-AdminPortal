'use client'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Input } from "../ui/input"
import { Bell, Search, Settings } from "lucide-react"
import { usePathname } from "next/navigation";

export const AppHeader = () => {
    const pathname = usePathname();
    const page = pathname.replace("/", "");
    const name = page.charAt(0).toUpperCase() + page.slice(1);
    return (
        <>
            <div className="w-full p-8 flex items-center justify-between">
                <div className="flex flex-col">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink>Home</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator>/</BreadcrumbSeparator>
                            <BreadcrumbItem>
                                <BreadcrumbPage>{name}</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                    <h2 className="font-bold">{name}</h2>
                </div>

                <div className="flex items-center gap-5">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <Input
                            type="text"
                            placeholder="Type here..."
                            className="pl-10 "
                        />
                    </div>
                    <Settings size={20} className="hover:cursor-pointer" />
                    <Bell size={20} className="hover:cursor-pointer" />
                </div>

            </div>

        </>
    )
}
