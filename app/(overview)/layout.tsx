'use client';
import "../globals.css";
import GooeyNav from '@/app/ui/GooeyNav.js'
import { usePathname } from "next/navigation";

export default function OverviewLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname();
    const items =
        pathname === "/"
            ? [{ label: "about", href: "/about" }]
            : [{ label: "home", href: "/" }];

    return (
        <div>
            <div style={{ paddingTop: '30px', paddingRight: '100px' }}>
                <GooeyNav
                    items={items}
                    particleCount={9}
                    particleDistances={[70, 15]}
                    particleR={100}
                    animationTime={600}
                    timeVariance={300}
                    colors={[1, 2, 3, 1, 2, 3, 1, 4]}
                />
            </div>
            {children}
        </div>
    );
}