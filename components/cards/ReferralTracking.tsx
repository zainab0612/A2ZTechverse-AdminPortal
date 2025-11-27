"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { EllipsisIcon } from "lucide-react";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";
import { Button } from "../ui/button";
import { referralStats } from "@/lib/referralStats";

const scoreData = [
    { name: "Score", value: 93, fill: "url(#gradient)" },
];

export function ReferralTrackingCard() {
    return (
        <Card className="w-full h-64 rounded-2xl bg-linear-to-r from-[#0d0f24] to-[#185672] border-none p-6 shadow-xl gap-0">
            <CardHeader className="flex justify-between items-center p-0">
                <CardTitle className="text-lg font-bold tracking-tight">Referral Tracking</CardTitle>
                <Button variant="transparent" className="cursor-pointer text-gray-300">
                    <EllipsisIcon />
                </Button>
            </CardHeader>

            <CardContent className="flex justify-between items-center h-[200px] p-0">
                <div className="w-[50%] space-y-2">
                    {referralStats.map((item, index) => (
                        <Card key={index} className="bg-[#0d1224]/90 backdrop-blur-xl border-none rounded-2xl p-3 shadow-lg flex flex-row justify-between items-center">
                            <CardHeader className="p-0 w-full">
                                <CardTitle className="text-sm text-white/70">{item.title}</CardTitle>
                                <CardDescription>
                                    <div className="text-lg font-bold text-white">
                                        {item.value}
                                    </div>
                                </CardDescription>
                            </CardHeader>
                        </Card>

                    ))}
                </div>

                <div className="relative w-48 h-48 text-white">
                    <svg width="0" height="0">
                        <defs>
                            <linearGradient id="gradient" x1="0" x2="1" y1="0" y2="1">
                                <stop offset="0%" stopColor="#00ffbd" />
                                <stop offset="100%" stopColor="#0077ff" />
                            </linearGradient>
                        </defs>
                    </svg>

                    <ResponsiveContainer>
                        <RadialBarChart
                            data={scoreData}
                            innerRadius="80%"
                            outerRadius="100%"
                            startAngle={225}
                            endAngle={-45}
                        >
                            <RadialBar dataKey="value" cornerRadius={50} />
                        </RadialBarChart>
                    </ResponsiveContainer>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <p className="text-sm text-white/60">Safety</p>
                        <p className="text-4xl font-bold">9.3</p>
                        <p className="text-xs text-white/60">Total Score</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
