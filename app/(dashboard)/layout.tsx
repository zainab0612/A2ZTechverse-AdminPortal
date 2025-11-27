import { AppFooter } from "@/components/layout/app-footer"
import { AppHeader } from "@/components/layout/app-header"
import { AppSidebar } from "@/components/layout/app-sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <main>
                <SidebarProvider>
                    <AppSidebar />
                    <main className="w-full">
                        <AppHeader />
                        {children}
                        <AppFooter />
                    </main>
                </SidebarProvider>
            </main>
        </>
    )
}