"use client";

import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";
import { Smile } from "lucide-react";

const satisfactionData = [{ value: 95, fill: "#2aa6ff" }];

export function SatisfactionRateCard() {
    return (
        <Card className="w-full h-64 rounded-xl bg-linear-to-r from-[#0d0f24] to-[#185672] border-none p-6 shadow-xl">
            <CardHeader className="p-0 gap-0">
                <CardTitle className="text-lg font-bold tracking-tight">Satisfaction Rate</CardTitle>
                <CardDescription className="text-white/60 text-base">From all projects</CardDescription>
            </CardHeader>

            {/* <div className="h-[170px] flex flex-col justify-center items-center">
                <ResponsiveContainer width="100%" height="100%">
                    <RadialBarChart
                        cx="50%"
                        cy="60%"
                        innerRadius="60%"
                        outerRadius="100%"
                        barSize={12}
                        data={satisfactionData}
                        startAngle={180}
                        endAngle={0}
                    >
                        <RadialBar cornerRadius={20} dataKey="value" />
                    </RadialBarChart>
                </ResponsiveContainer>


            </div> */}
        </Card>
    );
}
