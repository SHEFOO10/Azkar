export default function IslamicSection() {
    return (
        <div className="w-full mx-auto flex flex-col items-center max-w-6xl dark:bg-gray-800 shadow-lg rounded-2xl my-20">
            <h2 className="text-2xl md:text-3xl font-bold my-10">
                    Islamic Section
            </h2>
            <div className="w-full h-full flex flex-wrap justify-start items-center p-4 gap-5 mb-4">
                <iframe className="rounded-xl flex-grow" maxWidth="512" height="256" src="https://www.youtube.com/embed/videoseries?si=uYKZiGroym5cMIrx&amp;list=PL6C03BCFE87398A78" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" />
                <iframe className="rounded-xl flex-grow" width="512" height="256" src="https://www.youtube.com/embed/videoseries?si=uYKZiGroym5cMIrx&amp;list=PL6C03BCFE87398A78" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" />
                <iframe className="rounded-xl flex-grow" width="512" height="256" src="https://www.youtube.com/embed/videoseries?si=uYKZiGroym5cMIrx&amp;list=PL6C03BCFE87398A78" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" />
            </div>
        </div>
    );
}