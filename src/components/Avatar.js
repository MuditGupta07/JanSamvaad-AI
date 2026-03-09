'use client';
import { useState, useEffect, useRef } from 'react';
import styles from './Avatar.module.css';

export default function Avatar({ state = 'idle', size = 280 }) {
  const canvasRef = useRef(null);
  const animFrameRef = useRef(null);
  const stateRef = useRef(state);
  const timeRef = useRef(0);

  useEffect(() => {
    stateRef.current = state;
  }, [state]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.scale(dpr, dpr);

    function draw(timestamp) {
      timeRef.current = timestamp || 0;
      const t = timeRef.current * 0.001;
      const currentState = stateRef.current;

      ctx.clearRect(0, 0, size, size);
      const cx = size / 2;
      const cy = size / 2;

      // Background glow
      const gradient = ctx.createRadialGradient(cx, cy, size * 0.15, cx, cy, size * 0.48);
      gradient.addColorStop(0, 'rgba(16, 185, 129, 0.12)');
      gradient.addColorStop(0.7, 'rgba(16, 185, 129, 0.04)');
      gradient.addColorStop(1, 'rgba(16, 185, 129, 0)');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(cx, cy, size * 0.48, 0, Math.PI * 2);
      ctx.fill();

      // Head outline circle
      const headRadius = size * 0.28;
      const breatheOffset = currentState === 'idle' ? Math.sin(t * 1.5) * 2 : 0;
      const headY = cy - size * 0.02 + breatheOffset;

      // Avatar circle background
      const headGrad = ctx.createLinearGradient(cx - headRadius, headY - headRadius, cx + headRadius, headY + headRadius);
      headGrad.addColorStop(0, '#1E3A5F');
      headGrad.addColorStop(1, '#0F2440');
      ctx.beginPath();
      ctx.arc(cx, headY, headRadius, 0, Math.PI * 2);
      ctx.fillStyle = headGrad;
      ctx.fill();
      ctx.strokeStyle = 'rgba(16, 185, 129, 0.6)';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Face - Skin
      const faceRadius = headRadius * 0.65;
      const faceY = headY - headRadius * 0.05;
      const skinGrad = ctx.createRadialGradient(cx, faceY, 0, cx, faceY, faceRadius);
      skinGrad.addColorStop(0, '#D4A76A');
      skinGrad.addColorStop(1, '#C09060');
      ctx.beginPath();
      ctx.arc(cx, faceY, faceRadius, 0, Math.PI * 2);
      ctx.fillStyle = skinGrad;
      ctx.fill();

      // Hair
      ctx.beginPath();
      ctx.arc(cx, faceY - faceRadius * 0.3, faceRadius * 1.05, Math.PI, Math.PI * 2);
      ctx.fillStyle = '#1a1a2e';
      ctx.fill();

      // Eyebrows
      const eyeY = faceY - faceRadius * 0.1;
      const eyeSpacing = faceRadius * 0.35;
      ctx.strokeStyle = '#1a1a2e';
      ctx.lineWidth = 2.5;
      ctx.lineCap = 'round';
      
      // Left eyebrow
      ctx.beginPath();
      ctx.moveTo(cx - eyeSpacing - 8, eyeY - 12);
      ctx.quadraticCurveTo(cx - eyeSpacing, eyeY - 16, cx - eyeSpacing + 8, eyeY - 12);
      ctx.stroke();
      
      // Right eyebrow
      ctx.beginPath();
      ctx.moveTo(cx + eyeSpacing - 8, eyeY - 12);
      ctx.quadraticCurveTo(cx + eyeSpacing, eyeY - 16, cx + eyeSpacing + 8, eyeY - 12);
      ctx.stroke();

      // Eyes
      const blinkAmount = currentState === 'thinking' 
        ? Math.abs(Math.sin(t * 3)) < 0.1 ? 0.1 : 1
        : Math.abs(Math.sin(t * 0.5)) < 0.02 ? 0.1 : 1;
      
      const eyeW = 7;
      const eyeH = 8 * blinkAmount;

      // Left eye
      ctx.beginPath();
      ctx.ellipse(cx - eyeSpacing, eyeY, eyeW, eyeH, 0, 0, Math.PI * 2);
      ctx.fillStyle = '#FFFFFF';
      ctx.fill();
      ctx.beginPath();
      ctx.arc(cx - eyeSpacing, eyeY, 4 * blinkAmount, 0, Math.PI * 2);
      ctx.fillStyle = '#1a1a2e';
      ctx.fill();
      // Eye highlight
      ctx.beginPath();
      ctx.arc(cx - eyeSpacing + 2, eyeY - 2 * blinkAmount, 1.5, 0, Math.PI * 2);
      ctx.fillStyle = '#FFFFFF';
      ctx.fill();

      // Right eye
      ctx.beginPath();
      ctx.ellipse(cx + eyeSpacing, eyeY, eyeW, eyeH, 0, 0, Math.PI * 2);
      ctx.fillStyle = '#FFFFFF';
      ctx.fill();
      ctx.beginPath();
      ctx.arc(cx + eyeSpacing, eyeY, 4 * blinkAmount, 0, Math.PI * 2);
      ctx.fillStyle = '#1a1a2e';
      ctx.fill();
      ctx.beginPath();
      ctx.arc(cx + eyeSpacing + 2, eyeY - 2 * blinkAmount, 1.5, 0, Math.PI * 2);
      ctx.fillStyle = '#FFFFFF';
      ctx.fill();

      // Nose
      ctx.beginPath();
      ctx.moveTo(cx, faceY + faceRadius * 0.05);
      ctx.lineTo(cx - 4, faceY + faceRadius * 0.22);
      ctx.lineTo(cx + 4, faceY + faceRadius * 0.22);
      ctx.strokeStyle = '#B08050';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Mouth
      const mouthY = faceY + faceRadius * 0.38;
      const mouthWidth = faceRadius * 0.4;
      
      if (currentState === 'speaking') {
        // Animated speaking mouth
        const mouthOpen = Math.abs(Math.sin(t * 8)) * 8 + 2;
        ctx.beginPath();
        ctx.ellipse(cx, mouthY, mouthWidth * 0.6, mouthOpen, 0, 0, Math.PI * 2);
        ctx.fillStyle = '#8B0000';
        ctx.fill();
        ctx.strokeStyle = '#B08050';
        ctx.lineWidth = 1;
        ctx.stroke();
        // Teeth hint
        if (mouthOpen > 4) {
          ctx.beginPath();
          ctx.rect(cx - mouthWidth * 0.3, mouthY - mouthOpen + 2, mouthWidth * 0.6, 3);
          ctx.fillStyle = 'rgba(255,255,255,0.7)';
          ctx.fill();
        }
      } else if (currentState === 'thinking') {
        // Thinking - slight O shape
        ctx.beginPath();
        ctx.ellipse(cx + 5, mouthY, 5, 4, 0, 0, Math.PI * 2);
        ctx.fillStyle = '#8B0000';
        ctx.fill();
      } else {
        // Smile
        ctx.beginPath();
        ctx.arc(cx, mouthY - 3, mouthWidth * 0.55, 0.1 * Math.PI, 0.9 * Math.PI);
        ctx.strokeStyle = '#8B4513';
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.stroke();
      }

      // Collar / Shirt
      ctx.beginPath();
      ctx.moveTo(cx - headRadius * 0.7, headY + headRadius * 0.85);
      ctx.quadraticCurveTo(cx, headY + headRadius * 1.3, cx + headRadius * 0.7, headY + headRadius * 0.85);
      ctx.fillStyle = '#FFFFFF';
      ctx.fill();
      ctx.strokeStyle = 'rgba(0,0,0,0.1)';
      ctx.lineWidth = 1;
      ctx.stroke();
      
      // Collar line
      ctx.beginPath();
      ctx.moveTo(cx, headY + headRadius * 0.88);
      ctx.lineTo(cx, headY + headRadius * 1.2);
      ctx.strokeStyle = '#DDD';
      ctx.lineWidth = 1;
      ctx.stroke();

      // State indicator ring
      if (currentState === 'speaking') {
        const pulseSize = headRadius + 8 + Math.sin(t * 4) * 4;
        ctx.beginPath();
        ctx.arc(cx, headY, pulseSize, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(16, 185, 129, ${0.4 + Math.sin(t * 4) * 0.2})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      } else if (currentState === 'thinking') {
        // Thinking dots
        for (let i = 0; i < 3; i++) {
          const dotX = cx - 12 + i * 12;
          const dotY = headY + headRadius + 20 + Math.sin(t * 3 + i * 0.8) * 4;
          ctx.beginPath();
          ctx.arc(dotX, dotY, 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(16, 185, 129, ${0.5 + Math.sin(t * 3 + i) * 0.3})`;
          ctx.fill();
        }
      }

      animFrameRef.current = requestAnimationFrame(draw);
    }

    draw(0);

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [size]);

  return (
    <div className={styles.avatarContainer} style={{ width: size, height: size }}>
      <div className={`${styles.avatarGlow} ${state === 'speaking' ? styles.speaking : ''}`} />
      <canvas
        ref={canvasRef}
        className={styles.avatarCanvas}
        style={{ width: size, height: size }}
      />
      <div className={styles.statusIndicator}>
        <span className={`${styles.statusDot} ${styles[state]}`} />
        <span className={styles.statusText}>
          {state === 'idle' ? 'Ready' : state === 'speaking' ? 'Speaking' : state === 'thinking' ? 'Processing' : 'Listening'}
        </span>
      </div>
    </div>
  );
}
