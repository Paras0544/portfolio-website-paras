import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

export const ResumeSection = () => {
  return (
    <section id="resume" className="section-container">
      <div className="container mx-auto px-6 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold glow-text mb-4">Resume</h2>
          <p className="text-xl text-muted-foreground">
            My professional journey through the digital universe
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="glass-card cosmic-border">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-3 text-2xl">
                <FileText className="w-8 h-8 text-primary" />
                Professional Resume
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Resume Preview */}
              <div className="aspect-[8.5/11] bg-card/30 border border-primary/20 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-background/50 to-card/50 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <FileText className="w-16 h-16 text-primary/60 mx-auto" />
                    <p className="text-muted-foreground">Resume Preview</p>
                    <p className="text-sm text-muted-foreground/70">
                      Interactive PDF viewer would be integrated here
                    </p>
                  </div>
                </div>
              </div>

              {/* Download Button */}
              <div className="text-center">
                <Button 
                  size="lg" 
                  className="cosmic-gradient text-white hover:scale-105 transition-transform duration-300"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                {[
                  { label: 'Years Experience', value: '3+' },
                  { label: 'Projects Completed', value: '25+' },
                  { label: 'Technologies', value: '15+' },
                  { label: 'Certifications', value: '5+' }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="text-center space-y-2"
                  >
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};