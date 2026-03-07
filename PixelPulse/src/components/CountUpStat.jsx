import { useEffect, useRef, useState } from "react";

export default function CountUpStat({ target, label, suffix = "" }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return undefined;
    }

    let animationFrame = null;
    let observer = null;

    function animate() {
      const duration = 1500;
      const start = performance.now();

      function step(timestamp) {
        const progress = Math.min((timestamp - start) / duration, 1);
        const nextValue = Math.floor(progress * target);
        setValue(nextValue);

        if (progress < 1) {
          animationFrame = requestAnimationFrame(step);
          return;
        }

        setValue(target);
      }

      animationFrame = requestAnimationFrame(step);
    }

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(node);

    return () => {
      if (observer) {
        observer.disconnect();
      }
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [target]);

  return (
    <div ref={ref}>
      <div className="countup font-display mb-2 text-4xl font-bold text-slate-900">
        {value}
        {suffix}
      </div>
      <div className="text-sm font-medium uppercase tracking-wide text-slate-600">{label}</div>
    </div>
  );
}
