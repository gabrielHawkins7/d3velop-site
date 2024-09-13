import { GalleryCard, StudioCard } from "./card";

export function Showcase(){
    return(
        <div id="showcase" className="bg-slate-100 py-16 rounded-t-lg">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
                Our Products
                </h2>

                <div className="flex flex-row justify-center gap-4 flex-wrap">
                <StudioCard/>
                <GalleryCard/>
                </div>
            </div>
        </div>
    );
}