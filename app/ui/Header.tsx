import { Button } from "@/app/ui/components/button"
import Link from "next/link"

const Header = () => {

    return (
        <header className="relative left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="font-serif text-2xl font-semibold text-foreground">
                        <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                            clare<span className="hero-text">created</span>
                        </Link>
                    </div>
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link href="/recipes" className="text-muted-foreground hover:text-foreground transition-colors">
                            recipes
                        </Link>
                        <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                            about me
                        </Link>
                        <Link href="#socials" className="text-muted-foreground hover:text-foreground transition-colors">
                            socials
                        </Link>
                        <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                            <Link href="#footer" className="text-muted-foreground hover:text-foreground transition-colors">
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