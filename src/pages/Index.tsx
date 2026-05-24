import { useMouseParallax } from '@/hooks/useMouseParallax';
import { useLenis } from '@/hooks/useLenis';
import { HeroScene } from '@/components/sections/HeroScene';
import { HeroStats } from '@/components/sections/HeroStats';

export default function Index() {
  const mouse = useMouseParallax();
  useLenis();

  return (
    <main style={{ background: '#0B0F14', minHeight: '100vh', color: '#F5F2ED' }}>

      {/* HERO */}
      <section style={{
        position: 'relative', height: '100vh', overflow: 'hidden',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center'
      }}>
        <HeroScene mouse={mouse} />

        {/* Background grid */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.04,
          backgroundImage: 'linear-gradient(#C9A84C 1px, transparent 1px), linear-gradient(90deg, #C9A84C 1px, transparent 1px)',
          backgroundSize: '60px 60px', pointerEvents: 'none'
        }} />

        {/* Content */}
        <div style={{
          position: 'relative', zIndex: 10, textAlign: 'center',
          padding: '0 1.5rem', maxWidth: '780px',
          transform: `translate(${mouse.x * -8}px, ${mouse.y * -5}px)`,
          transition: 'transform 0.1s ease-out'
        }}>
          <p style={{
            fontFamily: 'Arial, sans-serif', fontSize: '0.65rem',
            letterSpacing: '5px', textTransform: 'uppercase',
            color: '#C9A84C', marginBottom: '1.2rem'
          }}>
            Web Design & Development · Scarborough, Ontario
          </p>

          <h1 style={{
            fontFamily: 'Georgia, serif', fontSize: 'clamp(2.4rem, 6vw, 4.2rem)',
            fontWeight: 400, lineHeight: 1.1, marginBottom: '1.2rem',
            color: '#F5F2ED'
          }}>
            Solid Digital Foundations.<br />
            <span style={{ color: '#C9A84C' }}>Lasting Business Impact.</span>
          </h1>

          <p style={{
            fontFamily: 'Arial, sans-serif', fontSize: '0.9rem',
            letterSpacing: '1px', color: 'rgba(245,242,237,0.6)',
            maxWidth: '520px', margin: '0 auto 2rem', lineHeight: 1.7
          }}>
            I build custom websites and web applications for businesses that need
            more than a template. Fast, secure, and built to scale.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={{
              padding: '0.85rem 2rem', background: '#C9A84C', color: '#0B0F14',
              border: 'none', cursor: 'pointer', fontFamily: 'Arial, sans-serif',
              fontSize: '0.7rem', letterSpacing: '2.5px', textTransform: 'uppercase',
              fontWeight: 700
            }}>
              View My Work
            </button>
            <button style={{
              padding: '0.85rem 2rem', background: 'transparent', color: '#F5F2ED',
              border: '1px solid rgba(245,242,237,0.35)', cursor: 'pointer',
              fontFamily: 'Arial, sans-serif', fontSize: '0.7rem',
              letterSpacing: '2.5px', textTransform: 'uppercase'
            }}>
              Get In Touch
            </button>
          </div>

          <HeroStats />
        </div>

        {/* Scroll hint */}
        <div style={{
          position: 'absolute', bottom: '2rem', left: '50%',
          transform: 'translateX(-50%)', display: 'flex',
          flexDirection: 'column', alignItems: 'center', gap: '0.4rem'
        }}>
          <div style={{
            width: '1px', height: '40px',
            background: 'linear-gradient(to bottom, #C9A84C, transparent)',
            animation: 'pulse 2s infinite'
          }} />
          <span style={{
            fontFamily: 'Arial, sans-serif', fontSize: '0.6rem',
            letterSpacing: '3px', color: 'rgba(245,242,237,0.3)',
            textTransform: 'uppercase'
          }}>Scroll</span>
        </div>
      </section>

    </main>
  );
}
