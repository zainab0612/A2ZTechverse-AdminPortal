import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import Link from 'next/link';
import { Card, CardContent, CardTitle } from '../ui/card';

const tableHeaders = ["AUTHOR", "FUNCTION", "STATUS", "EMPLOYED", "ACTION"];
const authors = [
    {
        name: "Esthera Jackson",
        email: "esthera@simmmpIe.com",
        image: "https://i.pravatar.cc/100?img=47",
        role: "Manager",
        detail: "Organization",
        status: "Online",
        employed: "23/04/18"
    },
    {
        name: "Alexa Liras",
        email: "alexa@simmmpIe.com",
        image: "https://i.pravatar.cc/100?img=32",
        role: "Programmer",
        detail: "Developer",
        status: "Offline",
        employed: "11/01/19"
    },
    {
        name: "Laurent Michael",
        email: "laurent@simmmpIe.com",
        image: "https://i.pravatar.cc/100?img=56",
        role: "Executive",
        detail: "Projects",
        status: "Online",
        employed: "19/09/17"
    },
    {
        name: "Freduardo Hill",
        email: "freduardo@simmmpIe.com",
        image: "https://i.pravatar.cc/100?img=48",
        role: "Programmer",
        detail: "Developer",
        status: "Online",
        employed: "24/12/08"
    },
    {
        name: "Daniel Thomas",
        email: "daniel@simmmpIe.com",
        image: "https://i.pravatar.cc/100?img=65",
        role: "Manager",
        detail: "Executive",
        status: "Offline",
        employed: "04/10/21"
    },
    {
        name: "Mark Wilson",
        email: "mark@simmmpIe.com",
        image: "https://i.pravatar.cc/100?img=5",
        role: "Programmer",
        detail: "Developer",
        status: "Offline",
        employed: "14/09/20"
    },
]

export const AuthorsTable = () => {
    return (
        <Card className="rounded-2xl bg-linaer-to-br from-[#0A124A] to-[#0A0D2D] px-6 text-white shadow-xl w-full borde-none">
            <CardTitle className="font-bold text-xl mb-2">Authors table</CardTitle>
            <CardContent className='p-0'>
                <Table>
                    <TableHeader>
                        <TableRow className="border-none">
                            {tableHeaders.map((head, index) => (
                                <TableHead key={index} className="text-white/60 text-xs">
                                    {head}
                                </TableHead>
                            ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {authors.map((a, i) => (
                            <TableRow key={i} className="border-t border-white/10 hover:bg-white/5 transition">
                                <TableCell className="flex items-center gap-3 py-4">
                                    <Avatar className="w-10 h-10">
                                        <AvatarImage src={a.image} />
                                    </Avatar>
                                    <div className="flex flex-col">
                                        <span className="font-semibold">{a.name}</span>
                                        <span className="text-xs text-white/60">{a.email}</span>
                                    </div>
                                </TableCell>
                                <TableCell className="text-sm font-medium">
                                    <div className="flex flex-col">
                                        <span>{a.role}</span>
                                        <span className="text-xs text-white/60">{a.detail}</span>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <span className={`px-3 py-1 text-xs rounded-md font-medium
                                    ${a.status === "Online" ? "bg-green-600" : "border border-white"}`
                                    }>
                                        {a.status}
                                    </span>
                                </TableCell>
                                <TableCell className="font-bold">{a.employed}</TableCell>
                                <TableCell className="text-sm text-white/60 cursor-pointer">
                                    <Link href='/dashboard'>
                                        Edit
                                    </Link>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}
