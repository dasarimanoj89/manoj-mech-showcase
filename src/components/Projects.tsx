import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sprout, Zap, Users } from "lucide-react";
import projectImage from "@/assets/project-sprayer.jpg";

const Projects = () => {
  const features = [
    {
      icon: Zap,
      title: "Automation",
      description: "Reduces manual labor through automated spraying mechanism"
    },
    {
      icon: Sprout,
      title: "Efficiency",
      description: "Ensures uniform pesticide distribution across crops"
    },
    {
      icon: Users,
      title: "User-Friendly",
      description: "Simple lever operation for easy handling by farmers"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Featured <span className="gradient-text">Project</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Innovation in agricultural technology
          </p>

          <Card className="shadow-glow border-border/50 overflow-hidden animate-slide-up bg-gradient-card">
            <div className="grid md:grid-cols-2 gap-0">
              <div
                className="h-64 md:h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${projectImage})` }}
              />
              <div>
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-2xl md:text-3xl">
                      Automatic Agricultural Lever-Operated Pesticide Sprayer
                    </CardTitle>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Mechanical Design</Badge>
                    <Badge variant="secondary">Automation</Badge>
                    <Badge variant="secondary">Agriculture</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-foreground/90 leading-relaxed">
                    This innovative project addresses the challenges faced by farmers in traditional
                    crop spraying methods. The automatic lever-operated system significantly reduces
                    manual labor while ensuring efficient and uniform distribution of pesticides
                    across agricultural fields.
                  </p>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg">Key Features</h4>
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-accent/10 mt-1">
                          <feature.icon className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <h5 className="font-medium mb-1">{feature.title}</h5>
                          <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">Impact:</span> This project
                      demonstrates practical application of mechanical engineering principles to
                      solve real-world agricultural challenges, improving productivity and reducing
                      physical strain on farmers.
                    </p>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
