import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, MapPin, ExternalLink, Code, ChevronRight, Globe, ChevronLeft } from "lucide-react"
import { useEffect, useState } from "react"
import person from "@/assets/person.png"
import dimelegends from "@/assets/dimelegends.png"
import ceamedicina from "@/assets/ceam.png"
import orientacion from "@/assets/orientacion.jpg"

const translations = {
  es: {
    availableForProjects: "Disponible para proyectos",
    hello: "Hola, soy",
    role: "Desarrollador Web Full Stack",
    location: "Bolivia 🇧🇴",
    heroDescription:
      "Transformo ideas innovadoras en experiencias web excepcionales. Especializado en crear soluciones escalables con las tecnologías más modernas.",
    viewProjects: "Ver Proyectos",
    contact: "Contactar",
    techStack: "Stack Tecnológico",
    techStackDescription: "Herramientas y tecnologías que domino para crear soluciones completas",
    slideToSeeMore: "Desliza para ver más",
    featuredProjects: "Proyectos Destacados",
    projectsDescription: "Soluciones innovadoras que demuestran experiencia técnica y creatividad",
    viewProject: "Ver Proyecto",
    letsConnect: "Conectemos Juntos",
    connectDescription: "¿Tienes un proyecto en mente? Hablemos sobre cómo puedo ayudarte a hacerlo realidad",
    connect: "Conectar",
    sendEmail: "¿Prefieres enviar un email directo?",
    sendEmailBtn: "Enviar Email",
    footer: "Desarrollado con Next.js y mucho ☕",
    projects: {
      dilme: {
        title: "Dilme Legends",
        description: "Plataforma gaming interactiva con funcionalidades avanzadas y sistema de usuarios completo",
      },
      cea: {
        title: "Ceamedicina",
        description: "Plataforma educativa para enseñanza médica con contenido interactivo y evaluaciones",
      },
      ai: {
        title: "Orientación Médica AI",
        description: "Sistema de inteligencia artificial para orientación médica personalizada",
      },
    },
  },
  en: {
    availableForProjects: "Available for projects",
    hello: "Hi, I'm",
    role: "Full Stack Web Developer",
    location: "Bolivia 🇧🇴",
    heroDescription:
      "I transform innovative ideas into exceptional web experiences. Specialized in creating scalable solutions with the most modern technologies.",
    viewProjects: "View Projects",
    contact: "Contact",
    techStack: "Tech Stack",
    techStackDescription: "Tools and technologies I master to create complete solutions",
    slideToSeeMore: "Slide to see more",
    featuredProjects: "Featured Projects",
    projectsDescription: "Innovative solutions that demonstrate technical expertise and creativity",
    viewProject: "View Project",
    letsConnect: "Let's Connect",
    connectDescription: "Have a project in mind? Let's talk about how I can help you make it happen",
    connect: "Connect",
    sendEmail: "Prefer to send a direct email?",
    sendEmailBtn: "Send Email",
    footer: "Built with Next.js and lots of ☕",
    projects: {
      dilme: {
        title: "Dilme Legends",
        description: "Interactive gaming platform with advanced features and complete user system",
      },
      cea: {
        title: "Ceamedicina",
        description: "Educational platform for medical teaching with interactive content and assessments",
      },
      ai: {
        title: "Medical AI Guidance",
        description: "Artificial intelligence system for personalized medical guidance",
      },
    },
  },
}

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const [language, setLanguage] = useState<"es" | "en">("es")
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0)

  const t = translations[language]

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const skills = [
    { name: "TypeScript", category: "frontend", icon: "💙", color: "from-blue-600 to-cyan-600" },
    { name: "JavaScript", category: "frontend", icon: "💛", color: "from-yellow-600 to-cyan-600" },
    { name: "React", category: "frontend", icon: "⚛️", color: "from-cyan-600 to-blue-600" },
    { name: "Next.js", category: "frontend", icon: "▲", color: "from-slate-700 to-cyan-700" },
    { name: "Vite", category: "frontend", icon: "⚡", color: "from-purple-600 to-cyan-600" },
    { name: "Node.js", category: "backend", icon: "💚", color: "from-green-600 to-cyan-600" },
    { name: "Express", category: "backend", icon: "🚀", color: "from-slate-600 to-cyan-600" },
    { name: "MongoDB", category: "database", icon: "🍃", color: "from-green-700 to-cyan-700" },
    { name: "MySQL", category: "database", icon: "🐬", color: "from-blue-700 to-cyan-700" },
    { name: "PostgreSQL", category: "database", icon: "🐘", color: "from-slate-700 to-blue-700" },
    { name: "Prisma", category: "database", icon: "🔷", color: "from-indigo-600 to-cyan-600" },
    { name: "AWS", category: "cloud", icon: "☁️", color: "from-orange-600 to-cyan-600" },
    { name: "Git", category: "tools", icon: "📝", color: "from-red-600 to-cyan-600" },
    { name: "GitHub", category: "tools", icon: "🐙", color: "from-slate-800 to-cyan-600" },
    { name: "WhatsApp API", category: "api", icon: "💬", color: "from-green-600 to-cyan-500" },
    { name: "Telegram", category: "api", icon: "✈️", color: "from-blue-600 to-cyan-500" },
  ]

  const projects = [
    {
      title: t.projects.dilme.title,
      description: t.projects.dilme.description,
      image: dimelegends,
      url: "https://dimelegends.lat",
      tech: ["Next.js", "TypeScript", "MongoDB", "AWS"],
      gradient: "from-slate-800 to-black",
      delay: "delay-100",
    },
    {
      title: t.projects.cea.title,
      description: t.projects.cea.description,
      image: ceamedicina,
      url: "https://www.ceamedicina.com",
      tech: ["React", "Node.js", "PostgreSQL", "Express"],
      gradient: "from-cyan-900 to-black",
      delay: "delay-200",
    },
    {
      title: t.projects.ai.title,
      description: t.projects.ai.description,
      image: orientacion,
      url: "https://orientacion-chat.ceamedicina.com",
      tech: ["Next.js", "AI/ML", "TypeScript", "Prisma"],
      gradient: "from-slate-900 to-black",
      delay: "delay-300",
    },
  ]

  const nextSlide = () => {
    setCurrentSkillIndex((prev) => (prev + 1) % Math.ceil(skills.length / 4))
  }

  const prevSlide = () => {
    setCurrentSkillIndex((prev) => (prev - 1 + Math.ceil(skills.length / 4)) % Math.ceil(skills.length / 4))
  }

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "es" ? "en" : "es"))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-slate-900">
      {/* Language Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <Button
          onClick={toggleLanguage}
          variant="outline"
          size="sm"
          className="bg-black/80 border-slate-800 text-cyan-400 hover:bg-slate-900/80 hover:text-cyan-300 backdrop-blur-sm"
        >
          <Globe className="w-4 h-4 mr-2" />
          {language.toUpperCase()}
        </Button>
      </div>

      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-slate-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-400/3 rounded-full blur-3xl animate-ping delay-2000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-slate-900/90" />
        <div className="relative container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Text Content */}
            <div
              className={`space-y-8 transform transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
            >
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-cyan-400 animate-bounce">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
                  <span className="text-sm font-medium tracking-wider uppercase">{t.availableForProjects}</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                  {t.hello}
                  <span className="block bg-gradient-to-r from-cyan-400 to-slate-200 bg-clip-text text-transparent animate-pulse">
                    Milton Rodriguez
                  </span>
                </h1>

                <p className="text-xl md:text-2xl text-slate-300 font-light">{t.role}</p>

                <div className="flex items-center gap-2 text-slate-400">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <span>{t.location}</span>
                </div>
              </div>

              <p className="text-lg text-slate-300 leading-relaxed max-w-xl">{t.heroDescription}</p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="group bg-gradient-to-r from-cyan-700 to-slate-800 hover:from-cyan-800 hover:to-black transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20 border border-slate-800"
                >
                  <a href="#projects">
                    <Code className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                    {t.viewProjects}
                    <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-cyan-600/50 text-cyan-400 hover:bg-cyan-500/5 bg-black/50 backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
                >
                  <a href="#contact">
                    <Mail className="w-5 h-5 mr-2" />
                    {t.contact}
                  </a>
                </Button>
              </div>
            </div>

            {/* Circular Image */}
            <div
              className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
            >
              <div className="relative flex justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-slate-600 rounded-full blur-2xl opacity-20 animate-pulse scale-110"></div>
                <div className="relative">
                  <div className="w-80 h-80 rounded-full bg-gradient-to-br from-slate-900 to-black p-2 border-2 border-slate-800">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-800 to-cyan-900 p-4 relative overflow-hidden">
                      <img
                        src={person}
                        alt="Milton Rodriguez - Desarrollador Web"
                        width={500}
                        className="rounded-full w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-full"></div>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-cyan-600 to-slate-700 p-4 rounded-full shadow-lg animate-bounce delay-1000 border-2 border-slate-800">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section with Carousel */}
      <section className="py-20 bg-gradient-to-r from-slate-950/80 to-black/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div
            className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t.techStack.split(" ")[0]}
              <span className="bg-gradient-to-r from-cyan-400 to-slate-200 bg-clip-text text-transparent">
                {" " + t.techStack.split(" ")[1]}
              </span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">{t.techStackDescription}</p>
          </div>

          {/* Carousel Container */}
          <div className="relative max-w-6xl mx-auto">
            <div className="overflow-hidden rounded-2xl bg-gradient-to-r from-black/50 to-slate-950/50 border border-slate-800 backdrop-blur-sm">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSkillIndex * 100}%)` }}
              >
                {Array.from({ length: Math.ceil(skills.length / 4) }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8">
                      {skills.slice(slideIndex * 4, (slideIndex + 1) * 4).map((skill, index) => (
                        <div
                          key={skill.name}
                          className={`group p-6 rounded-2xl bg-gradient-to-br from-slate-900/80 to-black/80 border border-slate-800/50 hover:border-cyan-600/50 transition-all duration-500 hover:scale-110 hover:-translate-y-2 backdrop-blur-sm animate-fade-in-up`}
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          <div className="text-center">
                            <div
                              className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${skill.color} flex items-center justify-center text-2xl shadow-lg group-hover:shadow-cyan-500/20 transition-shadow duration-300 border border-slate-700`}
                            >
                              {skill.icon}
                            </div>
                            <div className="text-white font-semibold text-sm group-hover:text-cyan-300 transition-colors">
                              {skill.name}
                            </div>
                            <div className="text-xs text-slate-500 mt-1 capitalize">{skill.category}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <Button
              onClick={prevSlide}
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/80 border-slate-800 text-cyan-400 hover:bg-slate-900/80 hover:text-cyan-300 backdrop-blur-sm"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              onClick={nextSlide}
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/80 border-slate-800 text-cyan-400 hover:bg-slate-900/80 hover:text-cyan-300 backdrop-blur-sm"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 gap-2">
              {Array.from({ length: Math.ceil(skills.length / 4) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSkillIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSkillIndex ? "bg-cyan-400 w-8" : "bg-slate-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t.featuredProjects.split(" ")[0]}
              <span className="bg-gradient-to-r from-slate-200 to-cyan-400 bg-clip-text text-transparent">
                {" " + t.featuredProjects.split(" ")[1]}
              </span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">{t.projectsDescription}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project) => (
              <Card
                key={project.title}
                className={`group bg-gradient-to-br from-slate-900/80 to-black/80 border-slate-800/50 hover:border-cyan-600/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2 backdrop-blur-sm animate-fade-in-up ${project.delay} shadow-lg hover:shadow-cyan-500/20`}
              >
                <CardHeader>
                  <div
                    className={`w-full h-40 rounded-xl bg-gradient-to-r ${project.gradient} mb-4 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500 border border-slate-800`}
                  >
                    <div className="absolute inset-0 bg-black/30"></div>
                    <div className="relative text-white text-3xl font-bold z-10">
                      {project.title
                        .split(" ")
                        .map((word) => word[0])
                        .join("")}
                    </div>
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover rounded-xl opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                    />
                  </div>
                  <CardTitle className="text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-slate-400 group-hover:text-slate-300 transition-colors">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className={`bg-slate-800/50 text-slate-300 hover:bg-cyan-700/20 hover:text-cyan-300 transition-all duration-300 animate-fade-in border border-slate-700`}
                        style={{ animationDelay: `${techIndex * 100}ms` }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  {project.url && (
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="w-full border-cyan-600/50 text-cyan-400 hover:bg-cyan-500/5 bg-black/50 group/btn"
                    >
                      <a href={project.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:rotate-45 transition-transform duration-300" />
                        {t.viewProject}
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-black/80 to-slate-950/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t.letsConnect.split(" ")[0]}
              <span className="bg-gradient-to-r from-cyan-400 to-slate-200 bg-clip-text text-transparent">
                {" "}
                {t.letsConnect.split(" ")[1]}
              </span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">{t.connectDescription}</p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <Button
                asChild
                size="lg"
                className="h-20 bg-gradient-to-r from-slate-900 to-black hover:from-slate-800 hover:to-slate-900 border border-slate-700 group transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-slate-500/20"
              >
                <a href="https://github.com/MiltonR12" target="_blank" rel="noopener noreferrer">
                  <Github className="w-8 h-8 mr-4 group-hover:rotate-12 transition-transform duration-300" />
                  <div className="text-left">
                    <div className="font-semibold text-lg">GitHub</div>
                    <div className="text-sm text-slate-400">@MiltonR12</div>
                  </div>
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                className="h-20 bg-gradient-to-r from-cyan-700 to-cyan-800 hover:from-cyan-800 hover:to-cyan-900 group transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20 border border-cyan-800"
              >
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-8 h-8 mr-4 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-left">
                    <div className="font-semibold text-lg">LinkedIn</div>
                    <div className="text-sm text-cyan-200">{t.connect}</div>
                  </div>
                </a>
              </Button>
            </div>

            <div className="mt-8 text-center">
              <p className="text-slate-400 mb-6">{t.sendEmail}</p>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-cyan-600/50 text-cyan-400 hover:bg-cyan-500/5 bg-black/50 group transform hover:scale-105 transition-all duration-300"
              >
                <a href="mailto:milton@example.com">
                  <Mail className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  {t.sendEmailBtn}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-800/50 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-400">© 2024 Milton Rodriguez. {t.footer}</p>
        </div>
      </footer>
    </div>
  )
}

