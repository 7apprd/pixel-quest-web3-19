import { PixelCard } from "@/components/PixelCard";
import { PixelButton } from "@/components/PixelButton";
import { Link } from "react-router-dom";

const WhitepaperPage = () => {
  const sections = [
    {
      title: "🎮 Game Overview",
      content: [
        "Hero Bit 4K is an innovative 8-bit adventure game that combines retro graphics with ultra-sharp 4K resolution.",
        "Explore vast worlds, hunt legendary treasures, and face epic creatures in a unique pixelated adventure experience.",
        "Revolutionary technology that elevates 8-bit graphics to a new level of visual quality!"
      ]
    },
    {
      title: "⚔️ Adventure System",
      content: [
        "Multiple worlds to explore with different biomes and challenges",
        "Hunting system featuring over 100 unique creatures",
        "Collection of rare treasures and legendary artifacts",
        "Character progression with unlockable special abilities"
      ]
    },
    {
      title: "🚀 Development Roadmap",
      content: [
        "Q1 2026: Alpha Launch with 3 worlds",
        "Q2 2026: Multiplayer Expansion & Guild System",
        "Q3 2026: Competitive Mode & Tournaments",
        "Q4 2026: Virtual Reality & Epic Expansions"
      ]
    },
    {
      title: "⚡ Innovative Technology",
      content: [
        "Proprietary engine optimized for 8-bit graphics in 4K",
        "Advanced physics system for smooth gameplay",
        "Procedural AI for infinite content generation",
        "Native support for modern and classic controls"
      ]
    },
    {
      title: "🎯 Game Modes",
      content: [
        "Solo Adventure: Explore at your own pace",
        "Cooperative: Team up with up to 4 players",
        "PvP Arena: Epic battles between heroes",
        "Treasure Hunt: Special events with unique rewards"
      ]
    },
    {
      title: "👥 Development Team",
      content: [
        "Veteran developers with over 15 years of experience",
        "Specialists in pixel art and retro game design",
        "Passionate about creating memorable adventure experiences",
        "Committed to regular updates and community support"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-game">
      {/* Header with back button */}
      <div className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <Link to="/">
            <PixelButton variant="accent">
              ← Back to Game
            </PixelButton>
          </Link>
        </div>
      </div>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold pixel-font text-primary-glow mb-4">
              📖 HERO'S MANUAL 📖
            </h1>
            <p className="text-xl text-muted-foreground pixel-font">
              Everything about the Hero Bit 4K universe
            </p>
          </div>

          <div className="grid gap-8">
            {sections.map((section, index) => (
              <PixelCard 
                key={section.title} 
                animated 
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h2 className="text-2xl font-bold pixel-font text-primary-glow mb-4">
                  {section.title}
                </h2>
                <div className="space-y-3">
                  {section.content.map((paragraph, idx) => (
                    <p key={idx} className="text-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </PixelCard>
            ))}
          </div>

          <div className="text-center mt-12">
            <PixelCard className="inline-block">
              <div className="text-center space-y-4">
                <h2 className="text-xl font-bold pixel-font text-primary-glow">
                  🔥 IN DEVELOPMENT 🔥
                </h2>
                <p className="text-muted-foreground">
                  The game is being developed and will launch in 2026
                </p>
                <p className="text-sm text-muted-foreground">
                  Follow our progress and stay updated with the latest news!
                </p>
              </div>
            </PixelCard>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhitepaperPage;