"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import { ChartConfig, ChartContainer } from "../ui/chart";
import { kpiData, monthData } from "@/lib/ActiveUser";

const chartConfig = {
    value: {
        label: "Sales",
        color: "#2563eb",
    },
} satisfies ChartConfig

export default function ActiveUsersCard() {
    return (
        <Card className="w-full rounded-3xl bg-linear-to-br from-[#0d0f24] to-[#185672] text-white border-none shadow-xl p-6 gap-4">

            <div className="w-full h-[260px] rounded-2xl px-4">
                <ChartContainer config={chartConfig} className="h-[280px] w-full">
                    <BarChart data={monthData} barCategoryGap={'40%'}>
                        <XAxis
                            dataKey="month"
                            stroke="#ffffff90"
                            tick={{ fill: "#ffffff90", fontSize: 12 }}
                        />
                        <YAxis
                            stroke="#ffffff90"
                            tick={{ fill: "#ffffff90", fontSize: 12 }}
                        />
                        <Tooltip />
                        <Bar dataKey="value" fill="#d6d6d6" radius={[6, 6, 0, 0]} />
                    </BarChart>
                </ChartContainer>
            </div>


            <CardHeader className="p-0">
                <CardTitle className="text-xl font-bold">Active Users</CardTitle>
                <CardDescription className="text-green-400 font-semibold text-sm">
                    (+23) <span className="text-white/70">than last week</span>
                </CardDescription>
            </CardHeader>

            <CardContent className="flex justify-between gap-4 p-0">

                {kpiData.map((item, i) => {
                    const Icon = item.icon;
                    return (
                        <div key={i} className="flex flex-col">

                            <div className="flex items-center gap-2 text-sm">
                                <div className="p-2 rounded-lg flex items-center justify-center bg-[#185672]">
                                    <Icon className="w-5 h-5" />
                                </div>
                                {item.label}
                            </div>

                            <p className="text-2xl font-bold">{item.value}</p>

                            <Progress
                                value={item.progress}
                                className="w-24 mt-2 bg-white/20"
                            />
                        </div>
                    );
                })}
            </CardContent>

        </Card>
    );
}
