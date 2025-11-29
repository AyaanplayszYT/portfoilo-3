import { Card } from "@/components/ui/card";

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
            <div className="w-full h-full bg-gradient-to-br from-muted to-accent flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 400 400">
                <rect fill="#333" width="400" height="400"/>
                <text x="50%" y="50%" fontSize="24" fill="#666" textAnchor="middle" dy=".3em" fontFamily="Arial">
                  About Image
                </text>
              </svg>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
