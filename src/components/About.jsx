 import aboutImg from '../assets/fdcarpic.jpg';
import { motion } from "framer-motion";

const About = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h2 className="my-20 text-center text-4xl">About
                <span className="text-neutral-500"> Me</span>
            </h2>
            <div className="flex flex-wrap">
                <motion.div 
                whileInView={{ opacity: 1, x: 0}}
                initial={{ opacity: 0, x:-100 }}
                transition={{duration: 0.5 }}
                className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center ">
                        <img src={aboutImg} alt="about" style={{width: '500px', height: 'auto'}}/>
                    </div> 
                </motion.div>
                <motion.div
                whileInView={{ opacity: 1, x: 0}}
                initial={{ opacity: 0, x: 100 }}
                transition={{duration: 0.5 }} 
                className='w-full lg:w-1/2'>
                    <div className='flex justify-center lg:justify-start'>
                        <p className='my-2 maxw-xl py-6 text-2xl'>I am a collegiate powerlifter who got into software in my later years of high school. Coming from a Hispanic family with roots in Cuba and Puerto Rico, I have a deep connection to my cultural heritage. I particularly enjoy front-end development but am working hard to become a full-stack developer. On the side, you can see a picture of me standing under my car while I was replacing the cat-back exhaust. I’m a huge car enthusiast and love (almost) all cars. My future plans for my car include putting it on lowering springs, upgrading the brakes to bigger calipers, and eventually getting aftermarket headers.</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About; 