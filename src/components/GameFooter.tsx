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
  return (
    <footer className="bg-background/90 backdrop-blur-sm border-t border-border/50 py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Social Links */}
          <PixelCard>
            <h3 className="text-lg font-bold text-primary mb-4">Connect With Us</h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <span>{link.icon}</span>
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </PixelCard>

          {/* Quick Links */}
          <PixelCard>
            <h3 className="text-lg font-bold text-primary mb-4">Quick Links</h3>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </PixelCard>

          {/* Game Info */}
          <PixelCard>
            <h3 className="text-lg font-bold text-primary mb-4">Game Info</h3>
            <p className="text-sm text-muted-foreground">
              Experience the ultimate pixel adventure game with blockchain rewards and NFT collection mechanics.
            </p>
          </PixelCard>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Pixel Game. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};