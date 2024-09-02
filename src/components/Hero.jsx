const Hero = () => {
    return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2"> 
                <div className="flex flex-col items-center lg:items-start">
                    <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Felix Arbucias</h1>
                    <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">Full Stack Developer / Powerlifter</span>
                    <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
                    Building projects and exploring new programming challenges is my passion. Alongside my dedication to software development, I am a collegiate powerlifter with a current total of around 1400 lbs. I am particularly fascinated by AI development and eager to deepen my understanding of large language models.
                    </p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Hero;