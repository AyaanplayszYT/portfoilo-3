import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Twitter, Mail, Instagram } from "lucide-react";

const Contact = () => {
  const socials = [
    { name: "GitHub", icon: Github, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
  ];

  return (
    <section id="contact" className="py-32 px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-6 animate-fade-in">
            <h2 className="text-6xl md:text-8xl font-display font-bold">
              let's connect
            </h2>
            <p className="text-xl text-muted-foreground">
              Have a project in mind? Let's create something amazing together.
            </p>
          </div>

          <Card className="p-8 md:p-12 bg-card rounded-3xl card-glow">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground">Name</label>
                  <Input 
                    placeholder="Your name" 
                    className="bg-background border-border rounded-2xl"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground">Email</label>
                  <Input 
                    type="email" 
                    placeholder="your@email.com" 
                    className="bg-background border-border rounded-2xl"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">Message</label>
                <Textarea 
                  placeholder="Tell me about your project..." 
                  rows={6}
                  className="bg-background border-border rounded-2xl resize-none"
                />
              </div>
              <Button 
                type="submit" 
                size="lg"
                className="w-full md:w-auto bg-foreground text-background hover:bg-foreground/90 rounded-2xl px-12"
              >
                Send Message
              </Button>
            </form>
          </Card>

          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-display font-bold mb-2">Find me on</h3>
              <p className="text-muted-foreground">Connect with me on social media</p>
            </div>
            <div className="flex justify-center gap-6">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-14 h-14 rounded-2xl bg-card flex items-center justify-center hover:bg-accent transition-colors duration-300 card-glow"
                  aria-label={social.name}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          <div className="text-center">
            <a 
              href="mailto:hello@yourportfolio.com" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              <Mail className="w-5 h-5" />
              <span>hello@yourportfolio.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
