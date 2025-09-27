import { PixelCard } from "./PixelCard";
export const GameFooter = () => {
  const socialLinks = [{
    name: "Twitter",
    icon: "🐦",
    url: "#"
  }, {
    name: "Discord",
    icon: "💬",
    url: "#"
  }, {
    name: "Telegram",
    icon: "📱",
    url: "#"
  }, {
    name: "GitHub",
    icon: "⚡",
    url: "#"
  }];
  const quickLinks = [{
    name: "Whitepaper",
    url: "#whitepaper"
  }, {
    name: "Tokenomics",
    url: "#tokenomics"
  }, {
    name: "Roadmap",
    url: "#roadmap"
  }, {
    name: "Team",
    url: "#team"
  }];
  return <footer className="py-16 px-4 bg-background border-t-2 border-primary">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <PixelCard className="text-center">
            <h3 className="text-3xl font-bold pixel-font text-primary-glow mb-4">
              HERO BIT 4K
            </h3>
            <p className="text-muted-foreground mb-4">
              The ultimate 8-bit 4K adventure gaming experience!
            </p>
            <div className="flex justify-center space-x-4">
              {socialLinks.map(link => <a key={link.name} href={link.url} className="text-2xl hover:scale-110 transition-transform duration-200" title={link.name}>
                  {link.icon}
                </a>)}
            </div>
          </PixelCard>

          {/* Quick Links */}
          <PixelCard>
            <h4 className="text-xl font-bold pixel-font text-primary-glow mb-4">
              🔗 Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map(link => <li key={link.name}>
                  <a href={link.url} className="text-foreground hover:text-primary-glow transition-colors duration-200 pixel-font">
                    {link.name}
                  </a>
                </li>)}
            </ul>
          </PixelCard>

          {/* Stats */}
          <PixelCard>
            <h4 className="text-xl font-bold pixel-font text-primary-glow mb-4">
              📊 Live Stats
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Heroes Created:</span>
                <span className="text-primary-glow pixel-pulse">8,921</span>
              </div>
              <div className="flex justify-between">
                <span>Worlds Designed:</span>
                <span className="text-primary-glow">12</span>
              </div>
              <div className="flex justify-between">
                <span>Creatures Added:</span>
                <span className="text-primary-glow">156</span>
              </div>
              <div className="flex justify-between">
                <span>Development Progress:</span>
                <span className="text-primary-glow animate-pulse">67%</span>
              </div>
            </div>
          </PixelCard>
        </div>

        <div className="border-t-2 border-primary mt-8 pt-8 text-center">
          <p className="text-muted-foreground pixel-font">© 2025 Hero Bit 4K. All rights reserved. Made with 💚 for the gaming community.</p>
          <p className="text-xs text-muted-foreground mt-2">
            Game in development. Follow our progress and join the adventure! 🎮
          </p>
        </div>
      </div>
    </footer>;
};