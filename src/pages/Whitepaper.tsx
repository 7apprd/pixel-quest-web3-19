import { PixelCard } from "@/components/PixelCard";
import { PixelButton } from "@/components/PixelButton";
import { Link } from "react-router-dom";

const WhitepaperPage = () => {
  const sections = [
    {
      title: "🌌 The Shattering of the Veil",
      content: [
        "For eons, the Omniverse—the vast, infinite expanse of all existence—remained a complex, yet stable, tapestry. The Twelve Prime Realms were the anchors, the most diverse and powerful worlds, each a pillar of reality.",
        "These realms, while vastly different in physics, magic, and culture, were separated by the Veil of Aethel, an impenetrable boundary that prevented unchecked, catastrophic inter-dimensional travel.",
        "The guardian of this Veil and the balance of the Omniverse was the Aethel-Core, a cosmic artifact of pure creation energy, housed deep within the legendary Nexus City."
      ]
    },
    {
      title: "💥 The Calamity: The Void Scar",
      content: [
        "A year ago, a rogue cosmic entity known only as the Chasm-Lord launched a devastating, surprise attack. The target was the Aethel-Core itself.",
        "Though the Chasm-Lord was ultimately repelled and sealed away, the damage was irreversible. The Aethel-Core shattered.",
        "The resulting cosmic explosion—known now as the Void Scar—didn't destroy the worlds, but it ripped holes in the Veil of Aethel. Twelve Great Tears opened up, one directly above each of the Twelve Prime Realms."
      ]
    },
    {
      title: "✨ The Echoes of the Nexus",
      content: [
        "The fragments of the Aethel-Core didn't vanish; they were scattered. Twelve Major Fragments, each imbued with a sliver of the Core's power, were forcefully drawn through the Tears and crashed into the Prime Realms.",
        "These fragments acted as metaphysical magnets, drawing the attention of the realms' greatest heroes.",
        "An Echo—a faint, psychic projection from the shattered Core—began to call out to the most worthy individual in each of the Twelve Realms. These chosen are the Nexus Echoes."
      ]
    },
    {
      title: "🦸 The Chosen Heroes",
      content: [
        "Each of the Twelve Heroes was not merely a champion, but the one individual whose destiny, innate power, or unique connection to their realm's energy was compatible with the Aethel-Core's residual energy.",
        "Upon making contact with the Major Fragment in their world, they were instantly teleported to the ruins of Nexus City—the epicenter of the disaster, now existing in a liminal space between all worlds.",
        "They are strangers, suddenly standing side-by-side, forced to communicate across barriers of language, technology, and understanding."
      ]
    },
    {
      title: "⚠️ The Immediate Threat",
      content: [
        "The Shattering had a disastrous side effect: Reality Bleed. Minor dimensional cracks are opening randomly across the Prime Realms, leaking hostile creatures, chaotic magic, and unstable energies from lesser, dying dimensions.",
        "If the Aethel-Core is not reformed, the uncontrolled Reality Bleed will accelerate, leading to the eventual collapse and merger of all Twelve Prime Realms into a single, chaotic, and uninhabitable wasteland."
      ]
    },
    {
      title: "🎯 The Quest",
      content: [
        "Form an Alliance: Overcome their differences and learn to combine their drastically different powers.",
        "Restore the Core: Recover the Twelve Major Fragments from each of their home realms—a journey that will take them back and forth through the Great Tears.",
        "Seal the Void Scar: Use the restored Aethel-Core to close the greatest Tear and repair the Veil before the Omniverse is consumed by chaos.",
        "The clock is ticking. The Nexus Echoes are the last hope for the infinite reality."
      ]
    },
    {
      title: "🌍 The Twelve Prime Realms",
      content: [
        "Aetheria: A world of sky-cities powered by crystalized ambient magic (high-fantasy/mage).",
        "Chronos: A realm where time is fluid, occupied by an ancient, stoic civilization (time-magic/scholar).",
        "Mecandria: A planet-sized metropolis run entirely by highly advanced, sentient AI and robotics (sci-fi/engineer).",
        "Tarras: A savage, primordial jungle world of colossal beasts and elemental spirits (shaman/beastmaster).",
        "The Shadowlands: A mirrored dimension of eternal twilight, inhabited by creatures of pure stealth and illusion (rogue/assassin).",
        "Nova Terra: A modern, post-apocalyptic Earth, where mutant powers and scarce resources rule (superhero/survivalist).",
        "Kyoto-9: A neo-feudal, cyberpunk world ruled by competing corporate Shoguns and high-tech ninjas (martial artist/cyber-warrior).",
        "Valhall: A realm of eternal, glorious combat, where gods and giants clash daily (warrior/demigod).",
        "Deep Blue: An endless ocean world, home to deep-sea leviathans and Atlantean ruins (aquatic/mystic).",
        "Sanctum: A utopian, ethereal plane maintained by beings of pure light and harmony (healer/paladin).",
        "The Undercity: A subterranean world populated by mutated creatures and forgotten civilizations driven by dark, forbidden science (scientist/mutant).",
        "The Crimson Waste: A desolate, arid planet where powerful psychic abilities develop under its twin suns (psionic/gunslinger)."
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
              📖 GAME 📖
            </h1>
            <p className="text-xl text-muted-foreground pixel-font">
              The Lore of Hero Bit 4K - A Multiverse Adventure
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
                  The game is being developed and will launch in Q4 - December
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