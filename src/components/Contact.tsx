import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "dasarimanoj89@gmail.com",
      href: "mailto:dasarimanoj89@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9030916371",
      href: "tel:+919030916371"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Anantapur, India",
      href: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Let's connect and discuss opportunities
          </p>

          <Card className="shadow-glow border-border/50 animate-slide-up bg-gradient-card">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <info.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                          {info.href ? (
                            <a
                              href={info.href}
                              className="font-medium hover:text-primary transition-colors"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="font-medium">{info.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <h4 className="text-lg font-semibold mb-4">Connect on Social</h4>
                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                        asChild
                      >
                        <a
                          href="https://www.linkedin.com/in/dasari-manoj-73358530a"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="LinkedIn"
                        >
                          <Linkedin className="h-5 w-5" />
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                        asChild
                      >
                        <a
                          href="https://github.com/dasarimanoj89"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub"
                        >
                          <Github className="h-5 w-5" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">About My Work</h3>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    I'm actively seeking opportunities to apply my mechanical engineering knowledge
                    and technical skills in challenging projects. Whether it's innovative automation
                    solutions, agricultural technology, or collaborative engineering ventures, I'm
                    eager to contribute and grow.
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    Feel free to reach out for collaborations, project discussions, or any
                    engineering opportunities!
                  </p>
                </div>
              </div>

              <div className="text-center pt-6 border-t border-border">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow"
                  asChild
                >
                  <a href="mailto:dasarimanoj89@gmail.com">
                    Send Me an Email
                    <Mail className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
