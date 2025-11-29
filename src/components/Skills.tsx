import { Card } from "@/components/ui/card";

const Skills = () => {
  const skills = [
    { name: "Design", level: 95 },
    { name: "Development", level: 90 },
    { name: "Photography", level: 85 },
    { name: "Video Editing", level: 80 },
    { name: "UI/UX", level: 92 },
    { name: "Branding", level: 88 },
  ];

  return (
    <section id="skills" className="py-32 px-6 bg-secondary/50">
      <div className="container mx-auto">
        <h2 className="text-6xl md:text-8xl font-display font-bold mb-16 animate-fade-in">
          skills
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <Card
              key={skill.name}
              className="p-8 bg-card rounded-3xl card-glow hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-display font-bold">{skill.name}</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Proficiency</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-foreground transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
