"use client";

import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "@/components/ui/card";
import { data } from "@/lib/SalesOverviewData";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

export function SalesOverview() {
    return (
        <Card className="bg-linear-to-br from-[#0d0f24] to-[#185672] border-none text-white rounded-2xl shadow-xl p-4 w-full">
            <CardHeader>
                <CardTitle className="text-white text-xl">Sales Overview</CardTitle>
                <CardDescription className="text-green-400 font-semibold text-sm">
                    +5% more <span className="text-white/70">in 2021</span>
                </CardDescription>
            </CardHeader>
            <CardContent className="h-[350px]">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data} margin={{ top: 20, right: 20, left: -10, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.15)" />

                        <XAxis
                            dataKey="month"
                            stroke="rgba(255,255,255,0.4)"
                            tick={{ fill: "rgba(255,255,255,0.7)" }}
                            axisLine={false}
                            tickLine={false}
                        />

                        <YAxis
                            stroke="rgba(255,255,255,0.4)"
                            tick={{ fill: "rgba(255,255,255,0.7)" }}
                            axisLine={false}
                            tickLine={false}
                        />

                        <Tooltip
                            contentStyle={{
                                background: "#1b2947",
                                border: "1px solid rgba(255,255,255,0.2)",
                                borderRadius: "8px",
                            }}
                            labelStyle={{ color: "white" }}
                            itemStyle={{ color: "white" }}
                        />

                        <defs>
                            <linearGradient id="colorA" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="20%" stopColor="#4dafff" stopOpacity={0.8} />
                                <stop offset="100%" stopColor="#4dafff" stopOpacity={0} />
                            </linearGradient>

                            <linearGradient id="colorB" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="20%" stopColor="#00eaff" stopOpacity={0.8} />
                                <stop offset="100%" stopColor="#00eaff" stopOpacity={0} />
                            </linearGradient>
                        </defs>

                        <Area
                            type="monotone"
                            dataKey="a"
                            stroke="#4dafff"
                            strokeWidth={3}
                            fill="url(#colorA)"
                        />

                        <Area
                            type="monotone"
                            dataKey="b"
                            stroke="#00eaff"
                            strokeWidth={3}
                            fill="url(#colorB)"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
}
