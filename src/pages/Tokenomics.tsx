import { PixelCard } from "@/components/PixelCard";
import { PixelButton } from "@/components/PixelButton";
import { Link } from "react-router-dom";

const TokenomicsPage = () => {
  const tokenomicsData = [
    {
      title: "💰 Token Overview",
      content: [
        "Total Supply: 1,000,000,000 HERO tokens",
        "Blockchain: Solana (SPL Token)",
        "Symbol: HERO",
        "Decimals: 9"
      ]
    },
    {
      title: "📊 Token Distribution",
      content: [
        "40% - Community & Rewards",
        "25% - Development Fund",
        "20% - Liquidity Pool",
        "10% - Team (12-month vesting)",
        "5% - Marketing & Partnerships"
      ]
    },
    {
      title: "🚀 Pump Fun Integration",
      content: [
        "Launched on Pump Fun platform for fair distribution",
        "Community-driven price discovery mechanism",
        "No pre-sale or private rounds",
        "100% transparent launch process"
      ]
    },
    {
      title: "🎁 Holder Rewards System",
      content: [
        "25% of all trading fees redistributed to holders",
        "Weekly airdrops based on holding duration",
        "Bonus rewards for holders above 30 days",
        "Special NFT drops for long-term supporters"
      ]
    },
    {
      title: "⚡ Staking Benefits",
      content: [
        "12% APY for 30-day staking period",
        "18% APY for 90-day staking period",
        "25% APY for 365-day staking period",
        "Early access to game beta for stakers"
      ]
    },
    {
      title: "🎮 Gaming Utility",
      content: [
        "In-game currency for purchasing items",
        "Access to premium game features",
        "Governance voting on game development",
        "Exclusive character skins and weapons"
      ]
    },
    {
      title: "💎 Revenue Sharing",
      content: [
        "25% of game revenue shared with token holders",
        "Quarterly distributions based on holdings",
        "Additional rewards from merchandise sales",
        "Partnership revenue sharing opportunities"
      ]
    },
    {
      title: "🔥 Deflationary Mechanics",
      content: [
        "2% of tokens burned with each transaction",
        "Quarterly community burn events",
        "In-game item purchases burn tokens",
        "Reducing supply increases scarcity over time"
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
              💰 TOKENOMICS 💰
            </h1>
            <p className="text-xl text-muted-foreground pixel-font">
              HERO Token Economics & Holder Rewards
            </p>
          </div>

          <div className="grid gap-8">
            {tokenomicsData.map((section, index) => (
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
                  {section.content.map((item, idx) => (
                    <p key={idx} className="text-foreground leading-relaxed flex items-center">
                      <span className="text-accent mr-2">•</span>
                      {item}
                    </p>
                  ))}
                </div>
              </PixelCard>
            ))}
          </div>

          {/* Pump Fun Info Card */}
          <div className="text-center mt-12">
            <PixelCard className="inline-block">
              <div className="text-center space-y-4">
                <h2 className="text-xl font-bold pixel-font text-primary-glow">
                  🚀 PUMP FUN LAUNCH 🚀
                </h2>
                <p className="text-muted-foreground">
                  Fair launch on Pump Fun platform ensures equal opportunity for all participants
                </p>
                <p className="text-sm text-muted-foreground">
                  No insider trading, no pre-sales - pure community-driven growth!
                </p>
                <div className="pt-4">
                  <a 
                    href="https://pump.fun/coin/6G3Akh5zgSyTPFZGoTKwnvN8VonYggBVwXgk7AmKpump" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <PixelButton variant="primary" size="lg">
                      🎯 Trade on Pump Fun
                    </PixelButton>
                  </a>
                </div>
              </div>
            </PixelCard>
          </div>

          {/* Rewards Calculator Preview */}
          <div className="text-center mt-8">
            <PixelCard>
              <div className="text-center space-y-4">
                <h2 className="text-xl font-bold pixel-font text-primary-glow">
                  📈 HOLDER REWARDS CALCULATOR
                </h2>
                <p className="text-muted-foreground">
                  Calculate your potential rewards based on your holdings
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="text-center">
                    <p className="text-2xl font-bold pixel-font text-accent">1M HERO</p>
                    <p className="text-sm text-muted-foreground">≈ $50/week in rewards*</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold pixel-font text-accent">10M HERO</p>
                    <p className="text-sm text-muted-foreground">≈ $500/week in rewards*</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold pixel-font text-accent">100M HERO</p>
                    <p className="text-sm text-muted-foreground">≈ $5000/week in rewards*</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  *Estimates based on current trading volume and token price
                </p>
              </div>
            </PixelCard>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TokenomicsPage;