import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Palette, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming",
      skills: ["Python", "PHP", "HTML", "CSS"],
      color: "text-blue-500"
    },
    {
      icon: Database,
      title: "Database",
      skills: ["MySQL"],
      color: "text-green-500"
    },
    {
      icon: Wrench,
      title: "Engineering",
      skills: ["Mechanical Design", "Automation", "Problem Solving"],
      color: "text-orange-500"
    },
    {
      icon: Palette,
      title: "Strengths",
      skills: ["Hardworking", "Adaptable", "Quick Learner", "Team Player"],
      color: "text-purple-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Skills & <span className="gradient-text">Strengths</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Technical expertise and personal qualities
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="shadow-soft hover:shadow-glow transition-all duration-300 animate-slide-up bg-gradient-card border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <category.icon className={`h-6 w-6 ${category.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1.5 bg-background rounded-full text-sm font-medium border border-border hover:border-primary transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-8 shadow-soft bg-accent/5 border-accent/20 animate-slide-up">
            <CardContent className="p-6 text-center">
              <p className="text-lg text-foreground/90">
                <span className="font-semibold text-accent">Always eager to learn</span> new
                technologies and methodologies to stay at the forefront of engineering innovation
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
