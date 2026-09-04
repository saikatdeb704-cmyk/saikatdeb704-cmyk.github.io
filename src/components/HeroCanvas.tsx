"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
}

interface WireframeShape {
  x: number;
  y: number;
  rotation: number;
  rotationSpeed: number;
  size: number;
  opacity: number;
  type: "icosahedron" | "cube" | "triangle" | "hexagon";
  floatOffset: number;
  floatSpeed: number;
}

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const setSize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    setSize();
    window.addEventListener("resize", setSize);

    const particleCount = Math.min(80, Math.floor(width / 20));
    const particles: Particle[] = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      radius: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.4 + 0.1,
    }));

    const shapes: WireframeShape[] = [
      {
        x: width * 0.72,
        y: height * 0.3,
        rotation: 0,
        rotationSpeed: 0.003,
        size: Math.min(width, height) * 0.13,
        opacity: 0.12,
        type: "icosahedron",
        floatOffset: 0,
        floatSpeed: 0.008,
      },
      {
        x: width * 0.85,
        y: height * 0.6,
        rotation: Math.PI / 4,
        rotationSpeed: -0.002,
        size: Math.min(width, height) * 0.09,
        opacity: 0.08,
        type: "cube",
        floatOffset: Math.PI,
        floatSpeed: 0.006,
      },
      {
        x: width * 0.62,
        y: height * 0.72,
        rotation: 0,
        rotationSpeed: 0.004,
        size: Math.min(width, height) * 0.07,
        opacity: 0.1,
        type: "triangle",
        floatOffset: Math.PI / 2,
        floatSpeed: 0.01,
      },
      {
        x: width * 0.9,
        y: height * 0.18,
        rotation: 0,
        rotationSpeed: -0.003,
        size: Math.min(width, height) * 0.05,
        opacity: 0.07,
        type: "hexagon",
        floatOffset: Math.PI / 3,
        floatSpeed: 0.007,
      },
    ];

    const drawGrid = (time: number) => {
      ctx.strokeStyle = "rgba(255, 255, 255, 0.025)";
      ctx.lineWidth = 0.5;
      const gridSize = 60;
      const offsetX = (time * 0.01) % gridSize;
      const offsetY = (time * 0.005) % gridSize;

      for (let x = -gridSize + offsetX; x < width + gridSize; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = -gridSize + offsetY; y < height + gridSize; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
    };

    const drawShape = (shape: WireframeShape, time: number) => {
      ctx.save();
      const floatY =
        Math.sin(time * shape.floatSpeed + shape.floatOffset) * 15;
      ctx.translate(shape.x, shape.y + floatY);
      ctx.rotate(shape.rotation);
      ctx.strokeStyle = `rgba(255, 255, 255, ${shape.opacity})`;
      ctx.lineWidth = 0.8;

      const s = shape.size;

      switch (shape.type) {
        case "icosahedron": {
          const points = [];
          for (let i = 0; i < 12; i++) {
            const angle = (i / 12) * Math.PI * 2;
            const r = i % 2 === 0 ? s : s * 0.6;
            points.push({ x: Math.cos(angle) * r, y: Math.sin(angle) * r });
          }
          ctx.beginPath();
          points.forEach((p, i) => {
            if (i === 0) ctx.moveTo(p.x, p.y);
            else ctx.lineTo(p.x, p.y);
          });
          ctx.closePath();
          ctx.stroke();
          for (let i = 0; i < points.length; i += 2) {
            const j = (i + 4) % points.length;
            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.stroke();
          }
          // Center dot with glow
          const glowOpacity = 0.3 + Math.sin(time * 0.02) * 0.2;
          ctx.beginPath();
          ctx.arc(0, 0, 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${glowOpacity})`;
          ctx.fill();
          break;
        }
        case "cube": {
          const h = s * 0.5;
          const off = s * 0.3;
          ctx.strokeRect(-h, -h, s, s);
          ctx.strokeRect(-h + off, -h - off, s, s);
          ctx.beginPath();
          [
            [-h, -h],
            [h, -h],
            [h, h],
            [-h, h],
          ].forEach(([x, y]) => {
            ctx.moveTo(x, y);
            ctx.lineTo(x + off, y - off);
          });
          ctx.stroke();
          break;
        }
        case "triangle": {
          ctx.beginPath();
          for (let i = 0; i < 3; i++) {
            const angle = (i / 3) * Math.PI * 2 - Math.PI / 2;
            const px = Math.cos(angle) * s;
            const py = Math.sin(angle) * s;
            if (i === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
          }
          ctx.closePath();
          ctx.stroke();
          ctx.beginPath();
          for (let i = 0; i < 3; i++) {
            const angle = (i / 3) * Math.PI * 2 + Math.PI / 6;
            const px = Math.cos(angle) * s * 0.5;
            const py = Math.sin(angle) * s * 0.5;
            if (i === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
          }
          ctx.closePath();
          ctx.stroke();
          break;
        }
        case "hexagon": {
          ctx.beginPath();
          for (let i = 0; i < 6; i++) {
            const angle = (i / 6) * Math.PI * 2;
            const px = Math.cos(angle) * s;
            const py = Math.sin(angle) * s;
            if (i === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
          }
          ctx.closePath();
          ctx.stroke();
          // Inner spokes
          for (let i = 0; i < 6; i++) {
            const angle = (i / 6) * Math.PI * 2;
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(Math.cos(angle) * s, Math.sin(angle) * s);
            ctx.stroke();
          }
          break;
        }
      }
      ctx.restore();
    };

    const drawParticles = () => {
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.fill();
      });

      const connectionDistance = 120;
      ctx.lineWidth = 0.3;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < connectionDistance) {
            const alpha = (1 - dist / connectionDistance) * 0.12;
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const updateParticles = () => {
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      });
    };

    let time = 0;

    if (prefersReducedMotion) {
      ctx.clearRect(0, 0, width, height);
      drawGrid(0);
      shapes.forEach((s) => drawShape(s, 0));
      drawParticles();
      return () => window.removeEventListener("resize", setSize);
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      time += 1;
      drawGrid(time);
      shapes.forEach((shape) => {
        shape.rotation += shape.rotationSpeed;
        drawShape(shape, time);
      });
      updateParticles();
      drawParticles();
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setSize);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
