import { Card } from "@/components/ui/card";
import { ExternalLink, Star, GitFork, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import placeholderImg from "../images/placeholder.png";

// GitHub API configuration from environment variables
const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_USERNAME || "";
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN || "";

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
}

interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
  stars: number;
  forks: number;
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGitHubRepos = async () => {
      try {
        setLoading(true);
        const headers: HeadersInit = {
          "Accept": "application/vnd.github.v3+json",
        };
        
        // Add authorization header if token is available
        if (GITHUB_TOKEN) {
          headers["Authorization"] = `Bearer ${GITHUB_TOKEN}`;
        }

        const response = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`,
          { headers }
        );

        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`);
        }

        const repos: GitHubRepo[] = await response.json();

        const formattedProjects: Project[] = repos.map((repo) => ({
          title: repo.name.replace(/-/g, " ").replace(/_/g, " "),
          category: repo.language || "Repository",
          description: repo.description || "No description available",
          image: placeholderImg,
          link: repo.html_url,
          stars: repo.stargazers_count,
          forks: repo.forks_count,
        }));

        setProjects(formattedProjects);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch GitHub repos:", err);
        setError("Failed to load projects from GitHub");
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubRepos();
  }, []);

  if (loading) {
    return (
      <section id="projects" className="py-32 px-6">
        <div className="container mx-auto">
          <h2 className="text-6xl md:text-8xl font-display font-bold mb-16 animate-fade-in">
            portfolio
          </h2>
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-12 h-12 animate-spin text-muted-foreground" />
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="projects" className="py-32 px-6">
        <div className="container mx-auto">
          <h2 className="text-6xl md:text-8xl font-display font-bold mb-16 animate-fade-in">
            portfolio
          </h2>
          <div className="text-center py-20 text-muted-foreground">
            <p>{error}</p>
          </div>
        </div>
      </section>
    );
  }

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
              target="_blank"
              rel="noopener noreferrer"
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
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">{project.category}</div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        {project.stars}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork className="w-4 h-4" />
                        {project.forks}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-display font-bold capitalize">{project.title}</h3>
                  <p className="text-muted-foreground line-clamp-2">{project.description}</p>
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
