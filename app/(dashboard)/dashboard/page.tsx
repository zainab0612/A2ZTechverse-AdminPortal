import { KpiCard } from '@/components/cards/KPICard'
import { ReferralTrackingCard } from '@/components/cards/ReferralTracking'
import { SatisfactionRateCard } from '@/components/cards/SatisfactionRates'
import WelcomeCard from '@/components/cards/WelcomeCard'
import ActiveUsersCard from '@/components/charts/ActiveUserCharts'
import { SalesOverview } from '@/components/charts/SalesOverview'
import { ProjectTable } from '@/components/tables/ProjectTable'
import { CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ItemContent, ItemDescription, ItemMedia, ItemTitle } from '@/components/ui/item'
import { orders } from '@/lib/orderData'
import { Item } from '@radix-ui/react-dropdown-menu'
import { Card } from '@radix-ui/themes'
import { Globe, ShoppingCart, Users, Wallet } from 'lucide-react'

const Dashboard = () => {
    return (
        <>
            <main className='flex flex-col px-6 pb-6 gap-3'>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                    <KpiCard
                        title="Today's Money"
                        value="$53,000"
                        icon={Wallet}
                    />
                    <KpiCard
                        title="Today's Users"
                        value="2,300"
                        icon={Globe}
                    />
                    <KpiCard
                        title="New Clients"
                        value="+3,462"
                        icon={Users}
                    />
                    <KpiCard
                        title="Total Sales"
                        value="$103,430"
                        icon={ShoppingCart}
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <WelcomeCard />
                    <SatisfactionRateCard />
                    <ReferralTrackingCard />
                </div>
                <div className="flex gap-5">
                    <SalesOverview />
                    <ActiveUsersCard />
                </div>
                <div className="flex gap-5">
                    <ProjectTable variant='dashboard' showMembers={true} actions={false} menu={true} status={false} description={true} />
                    <Card className="rounded-2xl bg-linear-to-r from-[#0d0f24] to-[#185672] p-6 text-white shadow-xl w-[30%] border-none">
                        <CardHeader className="p-0">
                            <CardTitle className="text-xl font-bold">Orders overview</CardTitle>
                            <CardDescription className="font-bold text-sm text-white/70">
                                +30% <span className="font-normal">this month</span>
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="mt-10 space-y-6 p-0">
                            {orders.map((order, index) => {
                                const Icon = order.icon;
                                return (
                                    <div key={index} className="flex items-start gap-3">
                                        <div className="shrink-0">
                                            <Icon />
                                        </div>
                                        <div>
                                            <h4 className="font-medium">{order.title}</h4>
                                            <p className="text-white/60 text-xs mt-1">{order.date}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </CardContent>

                    </Card>
                </div>
            </main>
        </>
    )
}

export default Dashboard