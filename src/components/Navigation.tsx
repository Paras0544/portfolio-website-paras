import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import * as Scroll from 'react-scroll';

const { Link, animateScroll } = Scroll;

const navigationItems = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' }
];

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleSetActive = (to: string) => {
      setActiveSection(to);
    };

    return () => {};
  }, []);

  const scrollToNext = () => {
    const currentIndex = navigationItems.findIndex(item => item.id === activeSection);
    const nextIndex = (currentIndex + 1) % navigationItems.length;
    const nextSection = navigationItems[nextIndex];
    
    animateScroll.scrollTo(nextIndex * window.innerHeight, {
      duration: 800,
      smooth: 'easeInOutQuart'
    });
  };

  return (
    <>
      {/* Navigation Dots */}
      <div className="fixed left-8 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-4">
        {navigationItems.map((item) => (
          <Link
            key={item.id}
            to={item.id}
            spy={true}
            smooth={true}
            offset={0}
            duration={800}
            onSetActive={setActiveSection}
            className={`group cursor-pointer transition-all duration-300`}
          >
            <div className="flex items-center gap-3">
              <div 
                className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                  activeSection === item.id 
                    ? 'bg-primary border-primary scale-125' 
                    : 'border-primary/50 hover:border-primary hover:scale-110'
                }`}
              />
              <span 
                className={`text-sm font-medium transition-all duration-300 transform ${
                  activeSection === item.id 
                    ? 'translate-x-0 opacity-100 text-primary' 
                    : '-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 text-foreground/70'
                }`}
              >
                {item.label}
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Scroll Down Arrow */}
      {activeSection !== 'contact' && (
        <button
          onClick={scrollToNext}
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 animate-bounce"
        >
          <div className="flex flex-col items-center gap-2 text-primary/80 hover:text-primary transition-colors duration-300">
            <span className="text-sm font-medium">Scroll</span>
            <ChevronDown className="w-6 h-6" />
          </div>
        </button>
      )}
    </>
  );
};