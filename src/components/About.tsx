import { Card } from "@/components/ui/card";
import profileImg from "../images/placeholder.png";

const About = () => {
  return (
    <section id="about" className="py-32 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-6xl md:text-8xl font-display font-bold">
              about
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                I'm a creative professional passionate about transforming ideas into compelling visual experiences. With years of experience in design and development, I bring stories to life through innovative solutions.
              </p>
              <p>
                My work spans across multiple disciplines, always focusing on creating meaningful connections between brands and their audiences. Every project is an opportunity to push boundaries and explore new creative territories.
              </p>
              <p>
                When I'm not crafting digital experiences, you'll find me exploring photography, studying design trends, and constantly learning new techniques to enhance my craft.
              </p>
            </div>
          </div>
          <Card className="aspect-square bg-card rounded-3xl overflow-hidden card-glow hover-lift">
            <img 
              src={profileImg} 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
