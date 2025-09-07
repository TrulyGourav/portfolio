import React from "react";
import { ArrowDown, Github, Linkedin, Code2, Download } from "lucide-react";
import { personalInfo } from "../data/personalInfo";
import profilePic from "../assets/profile-pic.jpeg";
import { Link } from "react-router-dom";

const Hero = () => {
  const socialLinks = [
    {
      name: "GitHub",
      url: personalInfo.socialLinks.github,
      icon: Github,
      color: "hover:text-white hover:bg-gray-800",
    },
    {
      name: "LinkedIn",
      url: personalInfo.socialLinks.linkedin,
      icon: Linkedin,
      color: "hover:text-white hover:bg-blue-600",
    },
    {
      name: "LeetCode",
      url: personalInfo.socialLinks.leetcode,
      icon: Code2,
      color: "hover:text-white hover:bg-orange-500",
    },
  ];

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    projectsSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-10">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Profile Image Placeholder */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-10 animate-fade-in">
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-primary via-secondary to-accent p-1 animate-glow">
                  <div className="w-full h-full rounded-full bg-card overflow-hidden">
                    <img
                      src={profilePic}
                      alt={personalInfo.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  {/* <br />
                  <p className="hidden md:block">
                    High on caffein
                    and productivity ~ sincerely
                  </p> */}
                </div>
              </div>

              {/* Right Side: Name, Title, Bio */}
              <div className="space-y-3 text-center md:text-left">
                <h3 className="pb-4 hero-title">{personalInfo.name}</h3>

                <h3 className="text-xl md:text-2xl font-semibold text-secondary animate-slide-up">
                  {personalInfo.title}
                </h3>

                <p
                  className="hero-subtitle max-w-xl animate-slide-up"
                  style={{ animationDelay: "0.2s" }}
                >
                  {personalInfo.tagline}
                </p>

                <p
                  className="text-lg text-muted-foreground max-w-xl animate-slide-up"
                  style={{ animationDelay: "0.4s" }}
                >
                  {personalInfo.bio}
                </p>

                {/* Social Links */}
                <div
                  className="flex justify-center md:justify-start space-x-6 animate-slide-up"
                  style={{ animationDelay: "0.6s" }}
                >
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-4 rounded-xl bg-card border border-border transition-all duration-300 glow-card ${social.color}`}
                        aria-label={social.name}
                      >
                        <Icon className="w-6 h-6" />
                      </a>
                    );
                  })}
                </div>

                {/* CTA Buttons */}
                <div
                  className="flex flex-col sm:flex-row gap-4 animate-slide-up"
                  style={{ animationDelay: "0.8s" }}
                >
                  <button onClick={scrollToProjects} className="btn-outline">
                    View My Work
                  </button>
                  <Link to="/tech-stack" className="btn-primary text-center">
                    View Tech Stack
                  </Link>
                  {/* <a
                    href="/resume.pdf"
                    download
                    className="btn-outline flex items-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Download Resume
                  </a> */}
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute left-1/2 transform -translate-x-1/2 animate-bounce">
            <button
              onClick={scrollToProjects}
              className="p-2 rounded-full bg-card/50 border border-border hover:bg-card transition-colors"
              aria-label="Scroll to projects"
            >
              <ArrowDown className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
