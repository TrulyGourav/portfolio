import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { education } from '../data/education';

const Education = () => {
  return (
    <section className="py-10 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            OOPs | Data Structures | Algorithms | Operating Systems | Databases | Networking
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={edu.id}
              className="timeline-item animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="card-gradient rounded-xl p-8 card-hover">
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center glow-primary">
                      <GraduationCap className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {edu.degree}
                    </h3>
                    <h4 className="text-lg font-semibold text-primary mb-3">
                      {edu.field}
                    </h4>
                    <p className="text-muted-foreground mb-4">
                      {edu.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <GraduationCap className="w-4 h-4" />
                        <span>{edu.institution}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.startDate} - {edu.endDate}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                      {edu.cgpa && (
                        <div className="flex items-center gap-2">
                          <span className="w-4 h-4 flex items-center justify-center text-xs font-bold bg-primary text-white rounded">
                            ★
                          </span>
                          <span>{edu.cgpa}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;