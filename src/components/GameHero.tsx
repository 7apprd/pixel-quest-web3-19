import { PixelButton } from "./PixelButton";
import { PixelCard } from "./PixelCard";
import gameBackground from "@/assets/game-background.png";
import heroCharacter from "@/assets/hero-character.gif";

export const GameHero = () => {
  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${gameBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-background/80"></div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-12 h-12 bg-primary rounded-full opacity-60 animate-float"></div>
      <div className="absolute top-40 right-20 w-8 h-8 bg-accent rounded-full opacity-40 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-32 left-1/4 w-6 h-6 bg-primary-glow rounded-full opacity-50 animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <h1 className="text-6xl lg:text-8xl font-bold pixel-font text-primary-glow animate-slide-in">
              HERO BIT 4K
            </h1>
            
            <div className="text-2xl lg:text-3xl pixel-font text-foreground animate-fade-in" style={{ animationDelay: '0.5s' }}>
              ⚔️ THE 8-BIT 4K ADVENTURE GAME ⚔️
            </div>
            
            <PixelCard className="animate-fade-in" style={{ animationDelay: '1s' }}>
              <div className="text-lg pixel-font text-center">
                <div className="text-primary-glow mb-4 text-xl">🎮 EXPLORE • HUNT • CONQUER 🎮</div>
                <div>Experience epic adventures in high-resolution pixelated worlds!</div>
                <div className="mt-2 text-sm text-muted-foreground">
                  8-bit graphics with 4K quality - an innovative experience!
                </div>
                <div className="mt-3 text-sm text-accent font-bold">
                  🚀 LAUNCHING IN 2026 🚀
                </div>
              </div>
            </PixelCard>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '1.5s' }}>
              <PixelButton size="lg" onClick={() => window.open('/whitepaper', '_blank')}>
                📖 GAME MANUAL
              </PixelButton>
              <PixelButton variant="accent" size="lg" onClick={() => window.open('/tokenomics', '_blank')}>
                💰 TOKENOMICS
              </PixelButton>
            </div>
          </div>
          
          {/* Right side - Animated hero character */}
          <div className="flex justify-center animate-fade-in" style={{ animationDelay: '1s' }}>
            <img 
              src={heroCharacter} 
              alt="Hero Character Walking" 
              className="w-64 h-64 lg:w-80 lg:h-80 hover:scale-110 transition-transform duration-300 drop-shadow-2xl"
              style={{ imageRendering: 'pixelated' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};