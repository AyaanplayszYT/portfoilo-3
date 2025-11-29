// Example: Import an image from src/images
// import profileImg from '../images/placeholder.png';
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in-up">
          <h1 className="text-7xl md:text-9xl font-display font-bold leading-none">
            creative
            <br />
            <span className="text-gradient">portfolio</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Welcome to a visual journey that transcends time and space. Discover the artistry of moments captured in motion.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 pt-8">
            <div className="text-center">
              <div className="text-4xl font-display font-bold">250k+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-display font-bold">800k+</div>
              <div className="text-sm text-muted-foreground">Hours of Experience</div>
            </div>
          </div>
          <a
            href="#about"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 pt-12"
          >
            <span>Scroll to explore</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
