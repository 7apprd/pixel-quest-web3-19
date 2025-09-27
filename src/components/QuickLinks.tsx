import { PixelCard } from "./PixelCard";
import { PixelButton } from "./PixelButton";
import { Sword, Shield, Crown, Gamepad2, Download, Users, Trophy, BookOpen } from "lucide-react";
export const QuickLinks = () => {
  const quickLinks = [{
    category: "Game Features",
    icon: <Gamepad2 className="w-5 h-5" />,
    links: [{
      title: "Adventure Mode",
      url: "#adventure",
      icon: <Sword className="w-4 h-4" />
    }, {
      title: "Battle Arena",
      url: "#arena",
      icon: <Shield className="w-4 h-4" />
    }, {
      title: "Leaderboards",
      url: "#leaderboards",
      icon: <Crown className="w-4 h-4" />
    }, {
      title: "Tournaments",
      url: "#tournaments",
      icon: <Trophy className="w-4 h-4" />
    }]
  }, {
    category: "Community",
    icon: <Users className="w-5 h-5" />,
    links: [{
      title: "Discord Server",
      url: "https://discord.gg/herobit4k",
      icon: <Users className="w-4 h-4" />
    }, {
      title: "Reddit Community",
      url: "https://reddit.com/r/herobit4k",
      icon: <Users className="w-4 h-4" />
    }, {
      title: "Developer Blog",
      url: "#blog",
      icon: <BookOpen className="w-4 h-4" />
    }, {
      title: "Support Center",
      url: "#support",
      icon: <Shield className="w-4 h-4" />
    }]
  }, {
    category: "Downloads",
    icon: <Download className="w-5 h-5" />,
    links: [{
      title: "Windows Client",
      url: "#download-windows",
      icon: <Download className="w-4 h-4" />
    }, {
      title: "Mac Client",
      url: "#download-mac",
      icon: <Download className="w-4 h-4" />
    }, {
      title: "Mobile App",
      url: "#download-mobile",
      icon: <Download className="w-4 h-4" />
    }, {
      title: "Web Version",
      url: "#play-now",
      icon: <Gamepad2 className="w-4 h-4" />
    }]
  }];
  const handleLinkClick = (url: string) => {
    if (url.startsWith('http')) {
      window.open(url, '_blank');
    } else if (url.startsWith('#')) {
      const element = document.querySelector(url);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  };
  return <section className="py-16 px-4 bg-background/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          
          <p className="text-xl text-muted-foreground pixel-font">
            Explore the Hero Bit 4K universe
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {quickLinks.map((category, index) => <PixelCard key={category.category} animated className="animate-fade-in" style={{
          animationDelay: `${index * 0.2}s`
        }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="text-primary-glow">{category.icon}</div>
                <h3 className="text-xl font-bold pixel-font text-primary-glow">
                  {category.category}
                </h3>
              </div>
              
              <div className="space-y-3">
                {category.links.map(link => <button key={link.title} onClick={() => handleLinkClick(link.url)} className="w-full flex items-center gap-3 p-3 rounded border border-border hover:bg-accent/10 hover:border-accent transition-all duration-200 group">
                    <div className="text-accent group-hover:text-primary-glow transition-colors">
                      {link.icon}
                    </div>
                    <span className="text-foreground group-hover:text-primary-glow transition-colors pixel-font">
                      {link.title}
                    </span>
                  </button>)}
              </div>
            </PixelCard>)}
        </div>
      </div>
    </section>;
};