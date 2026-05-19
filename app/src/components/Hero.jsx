export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg">
      {/* Watermark Grid Background */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                0deg,
                transparent,
                transparent 59px,
                #000 59px,
                #000 60px
              ),
              repeating-linear-gradient(
                90deg,
                transparent,
                transparent 179px,
                #000 179px,
                #000 180px
              )
            `,
            backgroundSize: '180px 60px',
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='60'%3E%3Ctext x='50%25' y='50%25' font-family='Inter,system-ui,sans-serif' font-size='10' font-weight='300' letter-spacing='3' fill='%23000' text-anchor='middle' dominant-baseline='middle'%3ES L E E P Y%3C/text%3E%3C/svg%3E")`,
            backgroundSize: '180px 60px',
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold text-text-primary tracking-tight leading-[1.05]">
          HELLO, I'M
          <br />
          <span className="inline-block mt-1">SleepyLe</span>
        </h1>
      </div>
    </section>
  )
}
