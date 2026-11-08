import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'MSX CODE — Design com propósito. Código com precisão.', description: 'Sites modernos, personalizados e pensados para transformar ideias em experiências digitais únicas. Conheça a MSX CODE e inicie seu projeto.', robots: { index: true, follow: true }, openGraph: { title: 'MSX CODE — Experiências digitais', description: 'Design com propósito. Código com precisão.', locale: 'pt_BR', type: 'website' }, icons: { icon: '/favicon.svg' } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="pt-BR"><body>{children}</body></html>; }
