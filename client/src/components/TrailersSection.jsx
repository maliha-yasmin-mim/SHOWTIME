import React, { useState } from 'react'
import { dummyTrailers } from '../assets/assets'
import BlurCircle from './BlurCircle';
import { PlayCircleIcon } from 'lucide-react';

const TrailersSection = () => {
    const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0]);

    
    const getYouTubeId = (url) => {
        const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[7].length === 11) ? match[7] : null;
    };

    const videoId = getYouTubeId(currentTrailer.videoUrl);

    return (
        <div className='px-6 md:px-16 lg:px-24 xl:px-44 py-20 overflow-hidden'>
            <p className='text-gray-300 font-medium text-lg max-w-[960px] mx-auto'>Trailers</p>
            <div className='relative mt-6'>
                <BlurCircle top='-100px' right='-100px' />
                <div className='mx-auto max-w-full' style={{ width: '960px', height: '540px' }}>
                    {videoId ? (
                        <div className="relative w-full h-full rounded-lg overflow-hidden">
                            <iframe
                                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="absolute top-0 left-0 w-full h-full"
                            ></iframe>
                        </div>
                    ) : (
                        <div className="w-full h-full bg-gray-800 flex items-center justify-center rounded-lg">
                            <p className="text-white">Video not available</p>
                        </div>
                    )}
                </div>
            </div>
            <div className='group grid grid-cols-4 gap-4 md:gap-8 mt-8 max-w-3xl mx-auto'>
                {dummyTrailers.map((trailer) => {
                    const thumbId = getYouTubeId(trailer.videoUrl);
                    return (
                        <div
                            key={trailer.image}
                            className='relative group-hover:not-hover:opacity-50 hover:-translate-y-1 duration-300 transition max-md:h-60 md:max-h-60 cursor-pointer'
                            onClick={() => setCurrentTrailer(trailer)}
                        >
                            <img
                                src={trailer.image}
                                alt="trailer"
                                className='rounded-lg w-full h-full object-cover brightness-75'
                            />
                            <PlayCircleIcon
                                strokeWidth={1.6}
                                className='absolute top-1/2 left-1/2 w-5 md:w-12 h-5 md:h-12 transform -translate-x-1/2 -translate-y-1/2 text-white'
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};


export default TrailersSection;