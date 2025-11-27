import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Check, EllipsisVertical } from 'lucide-react';
import { Button } from '../ui/button';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';

const tableHeaders = (showMembers: boolean, actions: boolean, status: boolean) => [
    "COMPANIES",
    ...(showMembers ? ["MEMBERS"] : []),
    "BUDGET",
    ...(status ? ["STATUS"] : []),
    "COMPLETION",
    ...(actions ? ["ACTION"] : []),
];


const projects = [
    {
        name: "Chakra Vision UI Version", members: [
            "https://github.com/shadcn.png",
            "https://i.pravatar.cc/35?img=1",
            "https://i.pravatar.cc/35?img=2"
        ], budget: "$14,000", status: "Working", completion: 60
    },
    {
        name: "Add Progress Track", members: [
            "https://github.com/shadcn.png",
            "https://i.pravatar.cc/35?img=1",
        ], budget: "$3,000", status: "Done", completion: 10
    },
    {
        name: "Fix Platform Errors", members: [
            "https://github.com/shadcn.png",
            "https://i.pravatar.cc/35?img=1",
        ], budget: "Not set", status: "Canceled", completion: 100
    },
    {
        name: "Launch our Mobile App",
        members: [
            "https://github.com/shadcn.png",
            "https://i.pravatar.cc/35?img=1",
            "https://i.pravatar.cc/35?img=2"
        ],
        budget: "$20,500", status: "Canceled", completion: 100
    },
    {
        name: "Add the New Pricing Page", members: [
            "https://github.com/shadcn.png",
        ], budget: "$500", status: "Done", completion: 25
    },
    {
        name: "Redesign New Online Shop", members: [
            "https://github.com/shadcn.png",
            "https://i.pravatar.cc/35?img=1",
        ], budget: "$2,000", status: "Working", completion: 40
    },
];

interface ProjectTableProps {
    variant?: "dashboard" | "outer";
    showMembers: boolean;
    actions: boolean;
    menu: boolean;
    status: boolean;
    description: boolean
}
export const ProjectTable = ({ variant, showMembers, actions, menu, status, description }: ProjectTableProps) => {
    const bgClass =
        variant === "dashboard"
            ? "bg-linear-to-br from-[#0d0f24] to-[#185672] border-none"
            : "bg-linaer-to-br from-[#0A124A] to-[#0A0D2D]";
    return (
        <>
            <Card className={`rounded-2xl p-6 shadow-2xl w-full ${bgClass}`}>
                <div className="flex justify-between mb-6">
                    <CardHeader className='p-0 flex flex-col'>
                        <CardTitle className="font-bold text-xl">Projects</CardTitle>
                        {description && (
                            <CardDescription className="font-bold text-sm text-white/70">
                                +30 done <span className="font-normal">this month</span>
                            </CardDescription>
                        )}
                    </CardHeader>
                    <CardAction>
                        <DropdownMenu>
                            {menu && (
                                <DropdownMenuTrigger className='relative'>
                                    <Button variant="transparent" className="cursor-pointer text-gray-300"><EllipsisVertical /></Button>
                                </DropdownMenuTrigger>
                            )}
                            <DropdownMenuContent className='absolute right-[-3] top-[-10]'>
                                <DropdownMenuItem>Action</DropdownMenuItem>
                                <DropdownMenuItem>Another Action</DropdownMenuItem>
                                <DropdownMenuItem>Something Else</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </CardAction>
                </div>
                <CardContent className='p-0'>
                    <Table>
                        <TableHeader>
                            <TableRow className="border-none">
                                {tableHeaders(showMembers, actions, status).map((head, index) => (
                                    <TableHead key={index} className="text-white/60 text-xs">
                                        {head}
                                    </TableHead>
                                ))}
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {projects.map((p, i) => (
                                <TableRow key={i} className="border-t hover:bg-white/5 transition">
                                    <TableCell className="flex gap-3 items-center font-bold">
                                        {p.name}
                                    </TableCell>
                                    {showMembers && (
                                        <TableCell>
                                            <div className="flex">
                                                {p.members?.map((member, i) => (
                                                    <Avatar key={i} className="-ml-2 border border-gray-700">
                                                        <AvatarImage src={member} />
                                                        <AvatarFallback>U</AvatarFallback>
                                                    </Avatar>
                                                ))}
                                            </div>
                                        </TableCell>
                                    )}

                                    <TableCell className="text-white font-bold">{p.budget}</TableCell>
                                    {status && (
                                        <TableCell className="text-white font-bold">{p.status}</TableCell>
                                    )}

                                    <TableCell className="w-[180px]">
                                        <div className="flex flex-col items-start gap-3">
                                            <p className='font-bold'>{p.completion}%</p>
                                            <Progress value={p.completion} className="w-24 h-2 bg-white/20" />
                                        </div>
                                    </TableCell>
                                    {actions && (
                                        <TableCell>
                                            <Button variant="transparent" className="cursor-pointer text-gray-300"><EllipsisVertical /></Button>
                                        </TableCell>
                                    )}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </>
    )
}
