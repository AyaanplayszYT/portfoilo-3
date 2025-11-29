import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map(item => document.querySelector(item.href));
      const scrollPosition = window.scrollY + 200;

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = (section as HTMLElement).offsetTop;
          const sectionHeight = (section as HTMLElement).offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(navItems[index].id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Dynamic Island */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:block animate-fade-in">
        <div 
          className={`
            relative px-6 py-3 
            bg-card/90 backdrop-blur-xl 
            rounded-full border border-border
            transition-all duration-300 ease-out
            ${isScrolled ? 'shadow-xl' : 'shadow-lg'}
          `}
        >
          <div className="flex items-center gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`
                    relative px-5 py-2 rounded-full 
                    transition-all duration-300
                    ${isActive 
                      ? 'bg-foreground text-background' 
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                    }
                  `}
                >
                  <span className="text-sm font-medium">
                    {item.name}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 md:hidden">
        <div className="mx-4 mt-4 px-6 py-4 bg-card/90 backdrop-blur-xl rounded-3xl border border-border shadow-xl">
          <div className="flex items-center justify-between">
            <a href="#home" className="text-xl font-display font-bold text-foreground">
              Portfolio
            </a>

            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-muted/50"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="w-5 h-5 transition-transform duration-300 rotate-90" />
              ) : (
                <Menu className="w-5 h-5 transition-transform duration-300" />
              )}
            </Button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="mt-6 pb-2 space-y-1 animate-fade-in">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`
                      block px-5 py-3 rounded-2xl transition-all duration-300 font-medium
                      ${isActive 
                        ? 'bg-foreground text-background' 
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                      }
                    `}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navigation;
