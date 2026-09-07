import {PhotoGallery} from '@/components/archive/lightbox';
import {notFound} from 'next/navigation';
import {seasons} from '@/data/seasons';
export function generateStaticParams(){return Object.values(seasons).filter(s=>s.photos.length).map(s=>({year:String(s.year)}))}
export async function generateMetadata({params}:{params:Promise<{year:string}>}){const {year}=await params;return {title:`${year} Photo Gallery`,alternates:{canonical:`/photos/${year}`}}}
export default async function Gallery({params}:{params:Promise<{year:string}>}){const {year}=await params;const s=seasons[year];if(!s||!s.photos.length)notFound();const photos=s.gallery||s.photos;return <main id="main" className="wrap page-content"><div className="gallery-return"><a className="text-link" href={`/seasons/${year}`}>← Back to the {year} season</a></div><p className="eyebrow">THE PHOTO ARCHIVE</p><h1>{year} photo gallery</h1><p className="page-lead">{photos.length} selected photographs from the season collection. Select a photograph to view it larger.</p><PhotoGallery photos={photos} captions year={s.year}/></main>}
