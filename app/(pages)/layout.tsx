'use client';
import "../globals.css";
import Header from '@/app/ui/Header';
import Footer from '@/app/ui/Footer';
import { useState } from "react";

export default function OverviewLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <div>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
}