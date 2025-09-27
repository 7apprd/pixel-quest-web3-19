import { GameHero } from "@/components/GameHero";
import { GameStats } from "@/components/GameStats";
import { QuickLinks } from "@/components/QuickLinks";
import { GameFooter } from "@/components/GameFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-game">
      <GameHero />
      <div id="game-stats">
        <GameStats />
      </div>
      <QuickLinks />
      <GameFooter />
    </div>
  );
};

export default Index;
