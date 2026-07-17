import { GraduationCap, Briefcase, Calendar } from "lucide-react";
import { doctorConfig, DoctorMember } from "@/config/doctor";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";

export function AboutSection() {
  return (
    <Section id="team" aria-labelledby="team-heading">
      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 id="team-heading" className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
            Meet Our Medical Specialists
          </h2>
          <p className="text-lg text-muted-foreground">
            A dedicated team of endocrinologists, researchers, and lifestyle educators working collaboratively to reverse and manage metabolic concerns.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {doctorConfig.doctors.map((member: DoctorMember) => (
            <Card key={member.id} className="border-border/70 overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow">
              <CardHeader className="bg-card pb-4">
                <div className="flex items-center space-x-4 mb-4">
                  {/* Styled Avatar Placeholder */}
                  <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center font-bold text-lg text-primary">
                    {member.name.split(" ")[1]?.substring(0, 2).toUpperCase() || member.name.substring(4, 6).toUpperCase()}
                  </div>
                  <div>
                    <CardTitle className="text-lg font-bold text-foreground">{member.name}</CardTitle>
                    <CardDescription className="text-sm font-semibold text-primary">{member.role}</CardDescription>
                  </div>
                </div>
                <Badge variant="secondary" className="w-fit text-xs font-semibold px-2.5 py-0.5">
                  {member.specialty}
                </Badge>
              </CardHeader>

              <CardContent className="space-y-4 pt-0">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {member.bio}
                </p>

                <div className="space-y-3 pt-4 border-t border-border/50 text-xs text-muted-foreground">
                  <div className="flex items-start">
                    <GraduationCap className="w-4 h-4 text-primary shrink-0 mr-2 mt-0.5" />
                    <ul className="space-y-1 list-none">
                      {member.education.map((edu, index) => (
                        <li key={index}>{edu}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center">
                    <Briefcase className="w-4 h-4 text-primary shrink-0 mr-2" />
                    <span>{member.experienceYears} Years of Clinical Practice</span>
                  </div>

                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 text-primary shrink-0 mr-2" />
                    <span className="font-medium text-foreground">Hours: {member.availability}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
