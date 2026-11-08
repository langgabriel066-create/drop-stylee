'use client';
import { useEffect, useState } from 'react';
export function Arrow({ diagonal = false }: { diagonal?: boolean }) { return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={diagonal ? 'arrow diagonal' : 'arrow'}><path d="M4 12h15M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.4" /></svg>; }
export function Brand() { return <span className="brand">msx<span className="brand-code">code<span className="brand-dot">.</span></span></span>; }
export function Year() { const [year, setYear] = useState(2026); useEffect(() => setYear(new Date().getFullYear()), []); return <>{year}</>; }
