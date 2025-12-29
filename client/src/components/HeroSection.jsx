import React from 'react'
import { ArrowRight, Play, Star, Ticket, Users, Sparkles, Calendar, TrendingUp } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {
    const navigate = useNavigate();
    
    return (
        <div className='relative flex flex-col items-center justify-center gap-8 px-6 md:px-16 lg:px-36 bg-gradient-to-br from-gray-900 via-black to-gray-900 min-h-screen overflow-hidden'>
            {/* Animated background elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
            
            <div className="relative z-10 text-center max-w-5xl">
                
                
                {/* Main Heading */}
                <h1 className='text-5xl mt-30 md:text-7xl lg:text-8xl font-bold mb-6 leading-tight'>
                    <span className="block text-gray-300">Where Every</span>
                    <span className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                        Seat Tells
                    </span>
                    <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                        A Story
                    </span>
                </h1>
                
                {/* Subtitle */}
                <p className='text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed'>
                    Step into a world of cinematic wonder. From blockbuster premieres to indie gems, 
                    your perfect movie night begins here.
                </p>
                
                {/* Main CTA - Explore Movies */}
                <div className="relative group mb-14 inline-block">
                    <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-orange-500 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-300"></div>
                    <button 
                        onClick={() => navigate('/movies')} 
                        className='relative flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-gray-900 to-black rounded-full font-bold text-lg border border-gray-800 hover:border-transparent transition-all group-hover:scale-105'
                    >
                        <Sparkles className="w-6 h-6 text-yellow-400" />
                        <span className="text-white">Explore Movies</span>
                        <ArrowRight className='w-5 h-5 text-white group-hover:translate-x-2 transition-transform' />
                    </button>
                </div>
                
                {/* Features Grid - Modified */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {/* Feature 1 */}
                    <div className="group relative p-6 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-gray-800 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
                        <div className="relative">
                            <div className="inline-flex p-3 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl mb-4">
                                <Calendar className="w-7 h-7 text-cyan-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">Real-time Showtimes</h3>
                            <p className="text-gray-400 text-sm">
                                Live updates on movie schedules across all theatres. Never miss a show again.
                            </p>
                        </div>
                    </div>
                    
                    {/* Feature 2 */}
                    <div className="group relative p-6 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-gray-800 hover:border-red-500 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
                        <div className="relative">
                            <div className="inline-flex p-3 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-xl mb-4">
                                <Ticket className="w-7 h-7 text-red-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">Smart Seat Selection</h3>
                            <p className="text-gray-400 text-sm">
                                Interactive seat maps with best-view recommendations for optimal cinema experience.
                            </p>
                        </div>
                    </div>
                    
                    {/* Feature 3 */}
                    <div className="group relative p-6 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-gray-800 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
                        <div className="relative">
                            <div className="inline-flex p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl mb-4">
                                <TrendingUp className="w-7 h-7 text-purple-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">Trending Now</h3>
                            <p className="text-gray-400 text-sm">
                                Discover what's hot based on real-time ratings and community reviews.
                            </p>
                        </div>
                    </div>
                </div>
                
                {/* Stats */}
                <div className="flex flex-wrap justify-center gap-12 mt-16 pt-8 border-t border-gray-800/50">
                    <div className="text-center">
                        <div className="text-3xl font-bold text-red-400 mb-2">98%</div>
                        <div className="text-sm text-gray-400">Customer Satisfaction</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
                        <div className="text-sm text-gray-400">Booking Support</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-yellow-400 mb-2">5M+</div>
                        <div className="text-sm text-gray-400">Happy Moviegoers</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
                        <div className="text-sm text-gray-400">Cities Served</div>
                    </div>
                </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute bottom-10 left-10 hidden lg:block">
                <div className="flex items-center space-x-2 p-3 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800">
                    <div className="w-10 h-14 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg"></div>
                    <div className="text-sm">
                        <div className="font-medium">Now Showing</div>
                        <div className="text-gray-400 text-xs">Trending movies</div>
                    </div>
                </div>
            </div>
            
           
        </div>
    )
}

export default HeroSection