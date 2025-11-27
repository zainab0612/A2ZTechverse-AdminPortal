"use client";

import { usePathname, useRouter } from "next/navigation";
import { Calendar, Home, Inbox, Settings } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/images/Logo.png";

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";

import { Button } from "../ui/button";

const items = [
    { title: "Dashboard", url: "/dashboard", icon: Home },
    { title: "Tables", url: "/tables", icon: Inbox },
    { title: "Billing", url: "/billings", icon: Calendar },
    { title: "Settings", url: "/settings", icon: Settings },
];

export function AppSidebar() {
    const pathname = usePathname();
    const router = useRouter();

    return (
        <>
            <Sidebar className="flex flex-col h-full">
                <SidebarHeader>
                    <Image src={Logo} alt="Logo" className="h-32 p-3" />
                </SidebarHeader>

                <SidebarContent>
                    <SidebarGroup>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {items.map((item) => {
                                    const isActive = pathname === item.url;

                                    return (
                                        <SidebarMenuItem key={item.title}>
                                            <SidebarMenuButton
                                                asChild
                                                className={`
                        flex items-center gap-4 px-4 py-8 rounded-xl
                        transition-all duration-200
                        ${isActive ? "bg-[#1A1F37] text-white" : "text-white/70 hover:bg-white/10"}
                      `}
                                            >
                                                <Link href={item.url}>
                                                    <div
                                                        className={`p-2 rounded-lg flex items-center justify-center
                            ${isActive ? "bg-[#185672]" : "bg-white/5"}
                          `}
                                                    >
                                                        <item.icon size={20} />
                                                    </div>

                                                    <span className="font-medium">{item.title}</span>
                                                </Link>
                                            </SidebarMenuButton>
                                        </SidebarMenuItem>
                                    );
                                })}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarContent>

                <SidebarFooter className="p-4 mt-auto">
                    <Button
                        variant="transparent"
                        className="bg-blue-500/10 w-full"
                        onClick={() => router.push("/")}
                    >
                        Logout
                    </Button>
                </SidebarFooter>
            </Sidebar>

        </>
    );
}
