const cards = [
  {
    title: "Xiaomi MiMo-V2.5-Pro",
    description: "A leap in agentic and long horizon coherence.",
    background: (
      <svg className="absolute inset-0 w-full h-full opacity-[0.12]" viewBox="0 0 400 200" preserveAspectRatio="none">
        {[0, 20, 40, 60, 80].map((offset, i) => (
          <path
            key={i}
            d={`M0,${100 + offset} Q50,${50 + offset} 100,${100 + offset} T200,${100 + offset} T300,${100 + offset} T400,${100 + offset}`}
            fill="none"
            stroke="#000"
            strokeWidth={1 - i * 0.1}
          />
        ))}
      </svg>
    ),
  },
  {
    title: "Xiaomi MiMo-V2.5",
    description: "A leap in agency and multimodality.",
    background: (
      <svg className="absolute inset-0 w-full h-full opacity-[0.10]" viewBox="0 0 400 200" preserveAspectRatio="none">
        {[
          [50, 40], [120, 80], [200, 30], [280, 70], [350, 40],
          [80, 120], [160, 150], [240, 110], [320, 140],
          [60, 180], [140, 170], [220, 190], [300, 160], [380, 180],
        ].map(([cx, cy], i) => (
          <circle key={`n${i}`} cx={cx} cy={cy} r="2.5" fill="#000" />
        ))}
        {[
          [[50, 40], [120, 80]], [[120, 80], [200, 30]], [[200, 30], [280, 70]], [[280, 70], [350, 40]],
          [[80, 120], [160, 150]], [[160, 150], [240, 110]], [[240, 110], [320, 140]],
          [[60, 180], [140, 170]], [[140, 170], [220, 190]], [[220, 190], [300, 160]], [[300, 160], [380, 180]],
          [[50, 40], [80, 120]], [[120, 80], [160, 150]], [[200, 30], [240, 110]], [[280, 70], [320, 140]],
          [[80, 120], [60, 180]], [[240, 110], [220, 190]], [[320, 140], [300, 160]],
        ].map(([[x1, y1], [x2, y2]], i) => (
          <line key={`l${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#000" strokeWidth="0.5" />
        ))}
      </svg>
    ),
  },
  {
    title: "Xiaomi MiMo-V2.5-TTS Series",
    description: "Give your agent a voice. Give it a soul.",
    background: (
      <svg className="absolute inset-0 w-full h-full opacity-[0.12]" viewBox="0 0 400 200" preserveAspectRatio="none">
        {[-40, -30, -20, -10, 0, 10, 20, 30, 40].map((amp, i) => (
          <path
            key={i}
            d={`M0,100 Q25,${100 - amp} 50,100 T100,100 T150,100 T200,100 T250,100 T300,100 T350,100 T400,100`}
            fill="none"
            stroke="#000"
            strokeWidth={amp === 0 ? 1.2 : 0.6}
          />
        ))}
      </svg>
    ),
  },
]

export default function ProductCards() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`group relative overflow-hidden p-8 md:p-10 min-h-[280px] flex flex-col justify-end transition-colors duration-300 hover:bg-black/[0.02] ${
              index < cards.length - 1 ? 'md:border-r border-border' : ''
            } border-t border-border`}
          >
            {card.background}
            <div className="relative z-10">
              <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-text-primary/90 transition-colors">
                {card.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
