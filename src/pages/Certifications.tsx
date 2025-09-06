import React from 'react';
import { Award, ExternalLink, Calendar, Star } from 'lucide-react';
import { certifications, achievements } from '../data/certifications';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Certifications = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Certifications & Achievements
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional certifications and notable achievements throughout my career journey
          </p>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Professional Certifications
            </h2>
            <p className="text-muted-foreground">
              Verified credentials demonstrating expertise in various technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={cert.id}
                className="card-gradient rounded-xl p-8 card-hover animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="text-4xl">{cert.logo}</div>
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-white transition-colors"
                    aria-label="View credential"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3">
                  {cert.name}
                </h3>
                
                <div className="flex items-center gap-2 text-primary font-semibold mb-4">
                  <Award className="w-4 h-4" />
                  <span>{cert.issuer}</span>
                </div>

                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-6">
                  <Calendar className="w-4 h-4" />
                  <span>{cert.issueDate}</span>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3">Skills Demonstrated</h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full border border-border"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Notable Achievements
            </h2>
            <p className="text-muted-foreground">
              Recognition and accomplishments throughout my academic and professional journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.id}
                className="card-gradient rounded-xl p-8 card-hover animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center glow-primary">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{achievement.title}</h3>
                    <span className="text-primary text-sm font-medium">{achievement.year}</span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4">
                  {achievement.description}
                </p>

                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20">
                  {achievement.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition Stats */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">{certifications.length}+</div>
              <div className="text-muted-foreground">Professional Certifications</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-secondary">15+</div>
              <div className="text-muted-foreground">Students Mentored</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-accent">2+</div>
              <div className="text-muted-foreground">Years in Advisory Role</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Certifications;