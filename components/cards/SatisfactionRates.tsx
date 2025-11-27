"use client";

import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const satisfactionData = [
    { name: "Satisfied", value: 95 },
    { name: "Unsatisfied", value: 5 }
];

const COLORS = ["#185672", "#fff"];

export function SatisfactionRateCard() {
    return (
        <Card className="w-full h-64 rounded-xl bg-linear-to-r from-[#0d0f24] to-[#185672] border-none p-6 shadow-xl gap-0">
            <CardHeader className="p-0 gap-0">
                <CardTitle className="text-lg font-bold tracking-tight">Satisfaction Rate</CardTitle>
                <CardDescription className="text-white/60 text-base">From all projects</CardDescription>
            </CardHeader>

            <div className="h-[170px] flex flex-col justify-center items-center relative">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={satisfactionData}
                            dataKey="value"
                            nameKey="name"
                            innerRadius="80%"
                            outerRadius="100%"
                            startAngle={90}
                            endAngle={-270}
                            stroke="none"
                        >
                            {satisfactionData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
                <Card className="bg-[#0d1224]/90 backdrop-blur-xl border-none 
                   rounded-2xl p-3 shadow-lg flex flex-col justify-center 
                   items-center absolute -bottom-2.5 w-[80%] gap-0">

                    <div className="flex justify-between w-full px-3 text-sm text-white/60">
                        <span>0%</span>
                        <span>100%</span>
                    </div>
                    <CardHeader className="p-0 w-full flex flex-col items-center gap-0">
                        <CardTitle className="text-white text-3xl font-semibold">95%</CardTitle>
                        <CardDescription className="text-white/70 text-sm">
                            Based on likes
                        </CardDescription>
                    </CardHeader>
                </Card>
            </div>
        </Card>
    );
}
