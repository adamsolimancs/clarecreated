import { Heart, Mail } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="footer" className="bg-primary text-primary-foreground py-8 lg:py-12 mt-8">
      <div className="container mx-auto">
        <div className="text-center">
          <div className="font-serif text-3xl font-bold mb-6">
            clarecreated
          </div>
          Business Inquiries:
          <div className="flex items-center justify-center mb-8">
            <Mail className="h-5 w-5 mr-2" />
            <a 
              href="mailto:itsclarecreated@gmail.com" 
              className="text-primary-foreground/90 hover:text-primary-foreground transition-colors"
            >
              itsclarecreated@gmail.com
            </a>
          </div>
          
          <div className="text-sm text-primary-foreground/60 border-t border-primary-foreground/20 pt-8">
            <p className="flex items-center justify-center mb-2">
              Made with <Heart className="h-4 w-4 mx-1 text-red-400" /> for food lovers everywhere
            </p>
            <p>© {currentYear} ClareCreated</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
