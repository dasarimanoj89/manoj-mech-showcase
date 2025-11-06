import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, BookOpen } from "lucide-react";

const About = () => {
  const education = [
    {
      icon: GraduationCap,
      degree: "B.Tech in Mechanical Engineering",
      institution: "PVKK Institute of Technology, Anantapur",
      period: "2020 - 2024",
      description: "Focused on innovative engineering solutions and automation technologies"
    },
    {
      icon: BookOpen,
      degree: "Intermediate (MPC)",
      institution: "Sri Vivekananda Junior College",
      period: "Completed",
      description: "Strong foundation in Mathematics, Physics, and Chemistry"
    },
    {
      icon: BookOpen,
      degree: "Secondary Education",
      institution: "Golden Bells EM High School",
      period: "Completed",
      description: "Built fundamental academic excellence and discipline"
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Passionate about engineering innovation and continuous learning
          </p>

          <div className="mb-12 animate-slide-up">
            <Card className="shadow-soft bg-gradient-card border-border/50">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed text-foreground/90">
                  I am <span className="font-semibold text-primary">Dasari Manoj</span>, a dedicated Mechanical Engineering
                  graduate from PVKK Institute of Technology, Anantapur. With a strong academic
                  foundation and a passion for innovation, I strive to create engineering solutions
                  that make a real-world impact. My journey in mechanical engineering has equipped
                  me with both theoretical knowledge and practical skills, particularly in automation
                  and agricultural technology.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">Educational Background</h3>
            {education.map((edu, index) => (
              <Card
                key={index}
                className="shadow-soft hover:shadow-glow transition-all duration-300 animate-slide-up bg-gradient-card border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <edu.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold mb-1">{edu.degree}</h4>
                      <p className="text-primary mb-2">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground mb-2">{edu.period}</p>
                      <p className="text-foreground/80">{edu.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
