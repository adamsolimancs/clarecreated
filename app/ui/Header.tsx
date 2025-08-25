import { Button } from "@/app/ui/components/button"
import Link from "next/link"

const Header = () => {
    return (
        <header className="relative left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
            <div className="container mx-auto lg:px-6 py-4 sm:px-0">
                <div className="flex flex-col items-center md:flex-row md:items-center md:justify-between">
                    {/* Title */}
                    <div className="font-serif text-2xl font-semibold text-foreground text-center md:text-left mb-4 md:mb-0">
                        <Link
                            href="/"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                            clare<span className="hero-text">created</span>
                        </Link>
                    </div>

                    {/* Navbar */}
                    <nav className="flex flex-col items-center gap-3 text-sm sm:flex-row sm:gap-4 sm:text-base md:gap-8">
                        <Link
                            href="/recipes"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                            recipes
                        </Link>
                        <Link
                            href="/about"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                            about me
                        </Link>
                        <Link
                            href="#socials"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                            socials
                        </Link>
                        <Button
                            variant="outline"
                            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                        >
                            <Link
                                href="#footer"
                                className="text-muted-foreground hover:text-foreground transition-colors"
                            >
                                contact
                            </Link>
                        </Button>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header
