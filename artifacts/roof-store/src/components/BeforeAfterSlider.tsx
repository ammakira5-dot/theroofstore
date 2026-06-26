import { useRef, useState, useCallback, type CSSProperties } from "react";
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
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
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
      className="relative w-full overflow-hidden rounded-xl cursor-col-resize select-none shadow-lg"
      style={{ aspectRatio: "4/3" }}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
      onClick={(e) => updatePosition(e.clientX)}
    >
      {/* After image — full background (visible on the right side) */}
      <img
        src={afterSrc}
        alt={afterAlt}
        className="absolute inset-0 w-full h-full object-cover"
        style={afterStyle}
        draggable={false}
      />

      {/* Before image — clipped overlay showing the LEFT portion */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
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
        style={{ left: `${position}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-white shadow-lg flex items-center justify-center">
          <GripVertical className="h-4 w-4 text-primary" />
        </div>
      </div>

      {/* Labels */}
      <span className="absolute top-3 left-3 pointer-events-none bg-black/40 text-white text-[11px] font-semibold px-2.5 py-1 rounded-full tracking-wide uppercase">
        {beforeLabel}
      </span>
      <span className="absolute top-3 right-3 pointer-events-none bg-accent/80 text-white text-[11px] font-semibold px-2.5 py-1 rounded-full tracking-wide uppercase">
        {afterLabel}
      </span>
    </div>
  );
}
