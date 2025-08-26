import Link from "next/link"
import * as React from 'react';
import { usePathname } from "next/navigation";
import { useState } from "react";


const Header = () => {
    const tabs = [{ name: "recipes", href: "/recipes", index: 1 }, { name: "about me", href: "/about", index: 2 },
    { name: "socials", href: "#socials" }, { name: "contact", href: "#footer" },
    ];

    let startingIndex = 0;
    const pathname = usePathname();
    if (pathname === "/recipes") {
        startingIndex = 1;
    } else if (pathname === "/about") {
        startingIndex = 2;
    }

    const [activeTab, setActiveTab] = useState(startingIndex);  // Index of active tab    

    return (
        <header className="relative left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
            <div className="container mx-auto lg:px-6 py-4 sm:px-0">
                <div className="flex flex-col items-center md:flex-row md:items-center md:justify-between">
                    {/* Title */}
                    <div className="font-serif text-2xl font-semibold text-foreground text-center md:text-left mb-4 md:mb-0">
                        <Link
                            href="/"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                            onClick={() => setActiveTab(0)}
                        >
                            clare<span className="hero-text">created</span>
                        </Link>
                    </div>

                    {/* Navbar */}
                    <nav className="flex flex-col items-center gap-3 text-sm sm:flex-row sm:gap-6 sm:text-base md:gap-10">
                        {tabs.map((tab) => {
                            const isActive = activeTab === tab?.index
                            return (
                                <Link
                                    key={tab.name}
                                    href={tab.href}
                                    aria-current={isActive ? "page" : undefined}
                                    onClick={() => setActiveTab(tab?.index || startingIndex)}
                                    className={`
          group relative inline-flex items-center justify-center
          px-3 py-1.5 rounded-full transition-all duration-300 ease-out
          ${isActive
                                            ? "bg-gradient-to-r from-primary/20 to-primary/10 text-foreground shadow-md"
                                            : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
                                        }
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50
        `}
                                >
                                    {/* label scales on hover */}
                                    <span
                                        className={`
            whitespace-nowrap transform-gpu origin-center
            transition-transform duration-200 ease-out will-change-transform
            ${isActive ? "scale-105" : "group-hover:scale-110"}
            motion-reduce:transform-none
          `}
                                    >
                                        {tab.name}
                                    </span>
                                </Link>
                            )
                        })}
                    </nav>

                </div>
            </div>
        </header>
    )
}

export default Header;