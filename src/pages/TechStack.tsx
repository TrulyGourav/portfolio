import React from 'react';
import { Code2, Database, Cloud, Wrench, Brain, BookOpen } from 'lucide-react';
import { techStack } from '../data/techStack';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const TechStack = () => {
  const categories = [
    {
      title: 'Programming Languages',
      icon: Code2,
      items: techStack.languages,
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Backend Development',
      icon: Wrench,
      items: techStack.backend,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Databases',
      icon: Database,
      items: techStack.databases,
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      items: techStack.cloud.concat(techStack.tools),
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Frontend Development',
      icon: Code2,
      items: techStack.frontend,
      gradient: 'from-green-500 to-blue-500'
    },
    {
      title: 'Computer Science Concepts',
      icon: Brain,
      items: techStack.concepts,
      gradient: 'from-indigo-500 to-purple-600'
    }
  ];

  const getProficiencyColor = (proficiency: number) => {
    if (proficiency >= 85) return 'bg-green-500';
    if (proficiency >= 70) return 'bg-yellow-500';
    return 'bg-orange-500';
  };

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Tech Stack
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Technologies, frameworks, and tools I use to build scalable and efficient software solutions
          </p>
        </div>
      </section>

      {/* Tech Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {categories.map((category, categoryIndex) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.title}
                  className="animate-fade-in"
                  style={{ animationDelay: `${categoryIndex * 0.1}s` }}
                >
                  <div className="text-center mb-12">
                    <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r ${category.gradient} text-white mb-4`}>
                      <Icon className="w-6 h-6" />
                      <h2 className="text-xl font-bold">{category.title}</h2>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                    {category.items.map((tech, index) => (
                      <div
                        key={tech.name}
                        className="group relative"
                        style={{ animationDelay: `${(categoryIndex * 0.1) + (index * 0.05)}s` }}
                      >
                        <div className="card-gradient rounded-xl p-6 text-center card-hover h-full">
                          <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                            {tech.icon}
                          </div>
                          <h3 className="font-semibold text-foreground mb-3">
                            {tech.name}
                          </h3>
                          
                          {/* Proficiency Bar */}
                          <div className="space-y-2">
                            <div className="flex justify-between text-xs text-muted-foreground">
                              <span>Proficiency</span>
                              <span>{tech.proficiency}%</span>
                            </div>
                            <div className="w-full bg-muted rounded-full h-2">
                              <div
                                className={`h-2 rounded-full transition-all duration-1000 ${getProficiencyColor(tech.proficiency)}`}
                                style={{ 
                                  width: `${tech.proficiency}%`,
                                  animationDelay: `${(categoryIndex * 0.2) + (index * 0.1)}s`
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills Summary */}
      <section className="py-16 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Skills Overview
            </h2>
            <p className="text-muted-foreground">
              A comprehensive view of my technical expertise across different domains
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { category: 'Languages', count: techStack.languages.length, icon: '💻' },
              { category: 'Backend', count: techStack.backend.length, icon: '⚡' },
              { category: 'Databases', count: techStack.databases.length, icon: '🗄️' },
              { category: 'Cloud & Tools', count: techStack.cloud.length + techStack.tools.length, icon: '☁️' }
            ].map((stat, index) => (
              <div
                key={stat.category}
                className="card-gradient rounded-xl p-6 text-center card-hover animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.count}+</div>
                <div className="text-muted-foreground font-medium">{stat.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TechStack;