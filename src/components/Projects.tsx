import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const placeholderImg = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%23333" width="400" height="400"/%3E%3Ctext x="50%25" y="50%25" font-size="20" fill="%23666" text-anchor="middle" dy=".3em" font-family="Arial"%3EProject Image%3C/text%3E%3C/svg%3E';

const Projects = () => {
  const projects = [
    {
      title: "Cinematic Visions",
      category: "Photography",
      description: "A collection of stunning visual narratives",
      image: placeholderImg,
      link: "#",
    },
    {
      title: "Frames in Motion",
      category: "Video Production",
      description: "Dynamic storytelling through movement",
      image: placeholderImg,
      link: "#",
    },
    {
      title: "Journey Through Time",
      category: "Documentary",
      description: "Capturing moments that matter",
      image: placeholderImg,
      link: "#",
    },
    {
      title: "Experimental Narratives",
      category: "Art Direction",
      description: "Pushing creative boundaries",
      image: placeholderImg,
      link: "#",
    },
    {
      title: "Urban Chronicles",
      category: "Photography",
      description: "Stories from the streets",
      image: placeholderImg,
      link: "#",
    },
    {
      title: "Digital Dreams",
      category: "Design",
      description: "Where imagination meets reality",
      image: placeholderImg,
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-32 px-6">
      <div className="container mx-auto">
        <h2 className="text-6xl md:text-8xl font-display font-bold mb-16 animate-fade-in">
          portfolio
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              href={project.link}
              key={project.title}
              className="block"
            >
              <Card
                className="group bg-card rounded-3xl overflow-hidden card-glow hover-lift cursor-pointer h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square bg-gradient-to-br from-muted to-accent relative overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center text-4xl font-display font-bold opacity-50">
                    {(index + 1).toString().padStart(2, '0')}
                  </div>
                  <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ExternalLink className="w-8 h-8" />
                  </div>
                </div>
                <div className="p-6 space-y-2">
                  <div className="text-sm text-muted-foreground">{project.category}</div>
                  <h3 className="text-2xl font-display font-bold">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
