import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: { default: 'Whiting Oilers Football | Historical Archive', template: '%s | Whiting Oilers Football' }, description: 'Preserving the teams, photographs, and history of Whiting High School football.' };
export default function RootLayout({children}: {children: React.ReactNode}) {
return <html lang="en"><body><a className="skip" href="#main">Skip to content</a><header className="masthead"><a href="/" className="brand"><span className="letter">W</span><span>WHITING OILERS<small>FOOTBALL HISTORICAL ARCHIVE</small></span></a><nav aria-label="Main navigation"><a href="/">Home</a><a href="/seasons">Seasons</a><a href="/history">History</a><a href="/photos">Photos</a></nav></header>{children}<footer><a href="/" className="footer-brand">Whiting Oilers Football</a><p>History · Tradition · Community</p><small>An independent historical archive of Whiting High School football.</small></footer></body></html>
}
