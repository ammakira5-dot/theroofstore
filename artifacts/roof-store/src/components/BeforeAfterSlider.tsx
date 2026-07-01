import { useRef, useState, useCallback, useEffect, type CSSProperties } from "react";
import { GripVertical } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt?: string;
  afterAlt?: string;
  beforeLabel?: string;
  afterLabel?: string;
  beforeStyle?: CSSProperties;
  afterStyle?: CSSProperties;
}

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt = "Before",
  afterAlt = "After",
  beforeLabel = "Before",
  afterLabel = "After",
  beforeStyle,
  afterStyle,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const [animating, setAnimating] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  useEffect(() => {
    if (hasInteracted) return;
    const t1 = setTimeout(() => setPosition(30), 500);
    const t2 = setTimeout(() => setPosition(70), 1100);
    const t3 = setTimeout(() => { setPosition(50); setAnimating(false); }, 1700);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [hasInteracted]);

  const updatePosition = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
    setHasInteracted(true);
    setAnimating(false);
  }, []);

  const onMouseDown = (e: React.MouseEvent) => {
    dragging.current = true;
    updatePosition(e.clientX);
    const onMove = (ev: MouseEvent) => { if (dragging.current) updatePosition(ev.clientX); };
    const onUp = () => {
      dragging.current = false;
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setHasInteracted(true);
    setAnimating(false);
    const onMove = (ev: TouchEvent) => { ev.preventDefault(); updatePosition(ev.touches[0].clientX); };
    const onEnd = () => {
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onEnd);
    };
    window.addEventListener("touchmove", onMove, { passive: false });
    window.addEventListener("touchend", onEnd);
    updatePosition(e.touches[0].clientX);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden rounded-xl cursor-col-resize select-none shadow-lg bg-gray-100"
      style={{ aspectRatio: "8/5" }}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
      onClick={(e) => updatePosition(e.clientX)}
    >
      {/* After image — full background */}
      <img
        src={afterSrc}
        alt={afterAlt}
        className="absolute inset-0 w-full h-full object-cover"
        style={afterStyle}
        draggable={false}
      />

      {/* Before image — clipped to left portion */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          clipPath: `inset(0 ${100 - position}% 0 0)`,
          transition: animating ? "clip-path 0.55s ease-in-out" : "none",
        }}
      >
        <img
          src={beforeSrc}
          alt={beforeAlt}
          className="absolute inset-0 w-full h-full object-cover"
          style={beforeStyle}
          draggable={false}
        />
      </div>

      {/* Divider line + handle */}
      <div
        className="absolute top-0 bottom-0 w-px bg-white/90"
        style={{
          left: `${position}%`,
          transition: animating ? "left 0.55s ease-in-out" : "none",
        }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white shadow-lg flex items-center justify-center ring-2 ring-white/60">
          <GripVertical className="h-5 w-5 text-primary" />
        </div>
      </div>

      {/* Labels */}
      <span className="absolute top-3 left-3 pointer-events-none bg-black/50 text-white text-[11px] font-semibold px-2.5 py-1 rounded-full tracking-wide uppercase">
        {beforeLabel}
      </span>
      <span className="absolute top-3 right-3 pointer-events-none bg-accent/80 text-white text-[11px] font-semibold px-2.5 py-1 rounded-full tracking-wide uppercase">
        {afterLabel}
      </span>

      {/* Drag hint text — fades out after interaction */}
      {!hasInteracted && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 pointer-events-none bg-black/50 text-white text-[11px] font-semibold px-3 py-1 rounded-full tracking-wide whitespace-nowrap">
          ← Drag to compare →
        </div>
      )}
    </div>
  );
}
