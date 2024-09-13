

export function StudioCard(){
    return(
        <>
        <div className="flex flex-col rounded-2xl w-96 bg-neutral-100 shadow-xl hover:shadow-2xl">
            <figure className="flex justify-center items-center rounded-2xl text-white shadow-lg bg-gradient-to-tl from-darkcharcol from-10% to-DeepTeal to-75%">
                <div className="flex h-48 w-full flex-col justify-center p-6 text-center">
                    <div className="flex flex-row items-end justify-center">
                        <p className="font-Montserrat text-8xl font-extrabold italic">D3</p>
                        <p className="font-Montserrat text-5xl font-extrabold italic">STUDIO</p>
                    </div>
                </div>
            </figure>
            <div className="flex flex-col p-8">
                <div className="text-2xl font-bold   text-[#374151] pb-6">Coming Soon</div>
                <div className=" text-lg   text-[#374151]">Cutting-edge film conversion for high-quality digital images using advanced formulas like Cineon, delivering precision with every frame.</div>
                <div className="flex justify-end pt-6">
                    <a className="inline-block px-4 py-2 text-lg font-medium text-white bg-steelblue  rounded-lg hover:bg-DeepTeal">
                        Coming Soon
                    </a>
                </div>
            </div>
        </div>
        </>
    );
}

export function GalleryCard(){
    return(
        <>
        <div className="flex flex-col rounded-2xl w-96 bg-neutral-100 shadow-xl hover:shadow-2xl">
            <figure className="flex justify-center items-center rounded-2xl text-white shadow-lg bg-gradient-to-tl from-darkcharcol from-10% to-DeepTeal to-75%">
                <div className="flex h-48 w-full flex-col justify-center p-6 text-center">
                    <div className="flex flex-row items-end justify-center">
                        <p className="font-Montserrat text-8xl font-extrabold italic">D3</p>
                        <p className="font-Montserrat text-5xl font-extrabold italic">Archive</p>
                    </div>
                </div>
            </figure>
            <div className="flex flex-col p-8">
                <div className="text-2xl font-bold   text-[#374151] pb-6">Coming Soon</div>
                <div className=" text-lg   text-[#374151]">Your Powerful Cloud Solution for Storing and Managing Images.</div>
                <div className="flex justify-end pt-6">
                    <a className="inline-block px-4 py-2 text-lg font-medium text-white bg-steelblue  rounded-lg hover:bg-DeepTeal">
                        Coming Soon
                    </a>
                </div>
            </div>
        </div>
        </>
    );
}