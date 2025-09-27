import { useTokenData } from "@/hooks/useTokenData";
import { PixelCard } from "./PixelCard";
import { PixelButton } from "./PixelButton";
import { useEffect, useState } from "react";

export const TokenTracker = () => {
  const { tokenData, refetch } = useTokenData();
  const [priceHistory, setPriceHistory] = useState<number[]>([]);
  const [isNewData, setIsNewData] = useState(false);

  // Track price changes for mini chart
  useEffect(() => {
    if (tokenData.price > 0) {
      setPriceHistory(prev => [...prev.slice(-9), tokenData.price]); // Keep last 10 prices
      setIsNewData(true);
      const timer = setTimeout(() => setIsNewData(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [tokenData.price]);

  const renderMiniChart = () => {
    if (priceHistory.length < 2) return null;
    
    const maxPrice = Math.max(...priceHistory);
    const minPrice = Math.min(...priceHistory);
    const range = maxPrice - minPrice;
    
    return (
      <div className="flex items-end space-x-1 h-12 mt-4">
        {priceHistory.map((price, index) => {
          const height = range > 0 ? ((price - minPrice) / range) * 40 + 8 : 24;
          const isLast = index === priceHistory.length - 1;
          return (
            <div
              key={index}
              className={`w-2 rounded-t transition-all duration-500 ${
                isLast && isNewData 
                  ? 'bg-primary-glow animate-pulse' 
                  : 'bg-primary'
              }`}
              style={{ height: `${height}px` }}
            />
          );
        })}
      </div>
    );
  };

  const getStatusColor = () => {
    if (tokenData.isLoading) return 'text-muted-foreground';
    if (tokenData.error) return 'text-destructive';
    return tokenData.priceChange24h >= 0 ? 'text-primary' : 'text-destructive';
  };

  const getStatusIcon = () => {
    if (tokenData.isLoading) return '🔄';
    if (tokenData.error) return '⚠️';
    return tokenData.priceChange24h >= 0 ? '📈' : '📉';
  };

  return (
    <section className="py-8 px-4 bg-muted/20">
      <div className="max-w-4xl mx-auto">
        <PixelCard 
          animated 
          glowing 
          className={`transition-all duration-500 ${isNewData ? 'border-primary-glow shadow-glow' : ''}`}
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left side - Current data */}
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold pixel-font text-primary-glow mb-2">
                  🎯 PUMP.FUN TRACKER
                </h3>
                <div className="text-xs text-muted-foreground pixel-font">
                  Contract: AcZWNLAZXb5uDevVS33UUJBMo154gKjqyaLaxGqSwcsF
                </div>
              </div>

              <div className="text-center space-y-3">
                <div className={`text-4xl font-bold pixel-font ${getStatusColor()}`}>
                  {tokenData.isLoading ? '...' : (
                    <span className={isNewData ? 'animate-bounce' : ''}>
                      {tokenData.price < 0.01 ? `$${tokenData.price.toFixed(8)}` : `$${tokenData.price.toFixed(4)}`}
                    </span>
                  )}
                </div>
                
                <div className={`text-lg pixel-font ${getStatusColor()}`}>
                  {getStatusIcon()} {tokenData.priceChange24h >= 0 ? '+' : ''}{tokenData.priceChange24h.toFixed(2)}%
                </div>

                <div className="text-sm text-muted-foreground">
                  Market Cap: <span className="text-foreground font-bold">
                    ${tokenData.marketCap.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="flex justify-center">
                <PixelButton 
                  onClick={refetch} 
                  size="sm" 
                  variant="accent"
                  disabled={tokenData.isLoading}
                >
                  {tokenData.isLoading ? '🔄 Loading...' : '🔄 Refresh Now'}
                </PixelButton>
              </div>
            </div>

            {/* Right side - Mini chart */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold pixel-font text-primary-glow text-center">
                📊 Price Movement
              </h4>
              
              <div className="bg-background/50 rounded p-4 border border-primary/30">
                {renderMiniChart()}
                <div className="text-xs text-muted-foreground text-center mt-2 pixel-font">
                  Last {priceHistory.length} updates
                </div>
              </div>

              <div className="space-y-2 text-sm pixel-font">
                <div className="flex justify-between">
                  <span>🏦 Holders:</span>
                  <span className="text-primary-glow">{tokenData.holders.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>💰 Volume 24h:</span>
                  <span className="text-primary-glow">${tokenData.volume24h.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>⏰ Last Update:</span>
                  <span className="text-primary-glow">{tokenData.lastUpdated.toLocaleTimeString()}</span>
                </div>
              </div>
            </div>
          </div>

          {tokenData.error && (
            <div className="mt-6 p-4 bg-destructive/10 border border-destructive rounded">
              <p className="text-destructive pixel-font text-center">
                ⚠️ API Error: {tokenData.error}
              </p>
              <p className="text-sm text-muted-foreground text-center mt-2">
                Displaying simulated data for demo purposes
              </p>
            </div>
          )}
        </PixelCard>
      </div>
    </section>
  );
};