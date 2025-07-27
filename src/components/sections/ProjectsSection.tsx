import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Database, Cloud, Palette } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

const projectCategories = [
  {
    id: 'frontend',
    label: 'Frontend',
    icon: Palette,
    projects: [
      {
        name: 'Space Portfolio',
        description: 'Interactive space-themed portfolio with Three.js animations',
        tech: ['React', 'Three.js', 'Tailwind CSS', 'Framer Motion'],
        demo: '#',
        github: '#'
      },
      {
        name: 'E-Commerce Dashboard',
        description: 'Modern admin dashboard with real-time analytics',
        tech: ['React', 'TypeScript', 'Chart.js', 'Tailwind CSS'],
        demo: '#',
        github: '#'
      }
    ]
  },
  {
    id: 'fullstack',
    label: 'Full Stack',
    icon: Code,
    projects: [
      {
        name: 'Social Media App',
        description: 'Full-featured social platform with real-time messaging',
        tech: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
        demo: '#',
        github: '#'
      },
      {
        name: 'Task Management',
        description: 'Collaborative project management tool',
        tech: ['Next.js', 'PostgreSQL', 'Prisma', 'NextAuth'],
        demo: '#',
        github: '#'
      }
    ]
  },
  {
    id: 'datascience',
    label: 'Data Science',
    icon: Database,
    projects: [
      {
        name: 'ML Prediction Model',
        description: 'Machine learning model for stock price prediction',
        tech: ['Python', 'TensorFlow', 'Pandas', 'Matplotlib'],
        demo: '#',
        github: '#'
      },
      {
        name: 'Data Visualization',
        description: 'Interactive dashboard for data analysis',
        tech: ['Python', 'Streamlit', 'Plotly', 'Scikit-learn'],
        demo: '#',
        github: '#'
      }
    ]
  },
  {
    id: 'cloud',
    label: 'Cloud',
    icon: Cloud,
    projects: [
      {
        name: 'Serverless API',
        description: 'Scalable REST API with AWS Lambda',
        tech: ['AWS Lambda', 'DynamoDB', 'API Gateway', 'Node.js'],
        demo: '#',
        github: '#'
      },
      {
        name: 'Cloud Infrastructure',
        description: 'Automated deployment pipeline with Terraform',
        tech: ['Terraform', 'AWS', 'Docker', 'GitHub Actions'],
        demo: '#',
        github: '#'
      }
    ]
  }
];

export const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState('frontend');

  return (
    <section id="projects" className="section-container">
      <div className="container mx-auto px-6 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold sharp-text mb-4">Projects</h2>
          <p className="text-lg font-inter text-muted-foreground">
            A collection of professional work and technical achievements
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 glass-card">
              {projectCategories.map((category) => {
                const Icon = category.icon;
                return (
                    <TabsTrigger 
                      key={category.id} 
                      value={category.id}
                      className="flex items-center gap-2 font-inter data-[state=active]:bg-primary/10"
                  >
                    <Icon className="w-4 h-4" />
                    {category.label}
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {projectCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.projects.map((project, index) => (
                    <motion.div
                      key={project.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="glass-card professional-border hover:shadow-xl transition-all duration-300 group">
                        <CardHeader>
                          <CardTitle className="font-playfair text-primary group-hover:text-accent transition-colors">
                            {project.name}
                          </CardTitle>
                          <CardDescription className="font-inter text-muted-foreground">
                            {project.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech) => (
                              <span 
                                key={tech}
                                className="px-3 py-1 text-xs bg-primary/10 text-primary border border-primary/20 rounded-full"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                          <div className="flex gap-3">
                            <Button variant="outline" size="sm" className="flex items-center gap-2">
                              <ExternalLink className="w-4 h-4" />
                              Demo
                            </Button>
                            <Button variant="outline" size="sm" className="flex items-center gap-2">
                              <Github className="w-4 h-4" />
                              Code
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};