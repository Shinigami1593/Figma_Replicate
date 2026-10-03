"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const images = [
  { src: "/images/desk-work.jpg", alt: "Desk with laptop and documents" },
  { src: "/images/desk-work.jpg", alt: "Laptop and workspace details" },
  { src: "/images/desk-work.jpg", alt: "Laptop" },
];

export default function ImageDragStrip() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPercent, setScrollPercent] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const scrollStartLeft = useRef(0);

  function handleScroll() {
    const el = scrollRef.current;
    if (!el) return;

    const maxScroll = el.scrollWidth - el.clientWidth;
    const percent = maxScroll === 0 ? 0 : el.scrollLeft / maxScroll;
    setScrollPercent(percent);
  }

  function handlePointerDown(event: React.PointerEvent<HTMLDivElement>) {
    const el = scrollRef.current;
    if (!el) return;

    event.currentTarget.setPointerCapture(event.pointerId);
    setIsDragging(true);
    dragStartX.current = event.clientX;
    scrollStartLeft.current = el.scrollLeft;
  }

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (!isDragging) return;
    const el = scrollRef.current;
    if (!el) return;

    const distanceMoved = event.clientX - dragStartX.current;
    el.scrollLeft = scrollStartLeft.current - distanceMoved;
  }

  function handlePointerUp() {
    setIsDragging(false);
  }

  return (
    <section className="image-strip" aria-label="Selected projects">
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onLostPointerCapture={handlePointerUp}
        className={`image-strip-track${isDragging ? " is-dragging" : ""}`}
      >
        {images.map((image) => (
          <div
            key={image.alt}
            className="image-strip-card"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="700px"
              className="object-cover"
              draggable={false}
              priority
            />
          </div>
        ))}
      </div>

      <div className="strip-progress" aria-hidden="true">
        <div
          className="strip-progress-value"
          style={{ width: `${Math.max(scrollPercent * 100, 24)}%` }}
        />
      </div>
    </section>
  );
}