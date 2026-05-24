import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 47, label: 'Projects Delivered', suffix: '+' },
  { value: 98, label: 'Client Satisfaction', suffix: '%' },
  { value: 5, label: 'Years Building', suffix: '+' },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      let start = 0;
      const step = target / 60;
      const timer = setInterval(() => {
        start += step;
        if (start >= target) { setCount(target); clearInterval(timer); }
        else setCount(Math.floor(start));
      }, 16);
      observer.disconnect();
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export function HeroStats() {
  return (
    <div style={{
      display: 'flex', gap: '2rem', justifyContent: 'center',
      marginTop: '2.5rem', flexWrap: 'wrap'
    }}>
      {stats.map((s) => (
        <div key={s.label} style={{ textAlign: 'center' }}>
          <div style={{
            fontSize: '2rem', fontWeight: 700,
            color: '#C9A84C', fontFamily: 'Georgia, serif'
          }}>
            <CountUp target={s.value} suffix={s.suffix} />
          </div>
          <div style={{
            fontSize: '0.7rem', letterSpacing: '2px',
            textTransform: 'uppercase', color: 'rgba(245,242,237,0.55)',
            marginTop: '0.25rem'
          }}>
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}
