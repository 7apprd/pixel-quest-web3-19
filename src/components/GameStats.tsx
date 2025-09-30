import { useTokenData } from "@/hooks/useTokenData";
import { PixelCard } from "./PixelCard";
import coinIcon from "@/assets/coin-icon.png";
export const GameStats = () => {
  const {
    tokenData
  } = useTokenData();
  const formatPrice = (price: number) => {
    if (price < 0.01) {
      return `$${price.toFixed(6)}`;
    }
    return `$${price.toFixed(4)}`;
  };
  const formatMarketCap = (mcap: number) => {
    if (mcap >= 1000000) {
      return `$${(mcap / 1000000).toFixed(2)}M`;
    }
    if (mcap >= 1000) {
      return `$${(mcap / 1000).toFixed(0)}K`;
    }
    return `$${mcap.toFixed(0)}`;
  };
  const formatChange = (change: number) => {
    const prefix = change >= 0 ? '+' : '';
    return `${prefix}${change.toFixed(2)}%`;
  };
  const stats = [{
    label: "Market Cap",
    value: formatMarketCap(tokenData.marketCap),
    change: formatChange(tokenData.priceChange24h),
    isPositive: tokenData.priceChange24h >= 0,
    isLoading: tokenData.isLoading
  }, {
    label: "Price",
    value: formatPrice(tokenData.price),
    change: formatChange(tokenData.priceChange24h),
    isPositive: tokenData.priceChange24h >= 0,
    isLoading: tokenData.isLoading
  }, {
    label: "Holders",
    value: tokenData.holders.toLocaleString(),
    change: "+156",
    isPositive: true,
    isLoading: tokenData.isLoading
  }, {
    label: "Volume 24h",
    value: formatMarketCap(tokenData.volume24h),
    change: "Live",
    isPositive: true,
    isLoading: tokenData.isLoading
  }];
  return <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold pixel-font text-primary-glow mb-4">
            📊 GAME STATISTICS 📊
          </h2>
          <p className="text-xl text-muted-foreground pixel-font">Development progress and community metrics</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <PixelCard animated className="text-center">
            <div className="text-4xl mb-4">🏆</div>
            <h3 className="text-2xl font-bold pixel-font text-primary-glow mb-2">
              12
            </h3>
            <p className="text-muted-foreground pixel-font">Heroes Created</p>
          </PixelCard>
          
          <PixelCard animated className="text-center">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="text-2xl font-bold pixel-font text-primary-glow mb-2">
              12
            </h3>
            <p className="text-muted-foreground pixel-font">Worlds in Development</p>
          </PixelCard>
          
          <PixelCard animated className="text-center">
            <div className="text-4xl mb-4">⚔️</div>
            <h3 className="text-2xl font-bold pixel-font text-primary-glow mb-2">
              156
            </h3>
            <p className="text-muted-foreground pixel-font">Creatures Designed</p>
          </PixelCard>
        </div>
      </div>
    </section>;
};