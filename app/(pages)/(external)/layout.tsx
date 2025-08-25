'use client';
import MediaBanner from '@/app/ui/MediaBanner';

export default function OverviewLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <main>
                {children}
            </main>
            <MediaBanner />
        </div>
    );
}