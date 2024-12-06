import { useCursor } from '../../context/CursorContext';
import { motion } from 'framer-motion';
import Button from '../Button/button';
import Badge from '../Badge/badge'
import Link from 'next/link';
import MotionImage from '../MotionImage/motionImage';

import { useRouter } from 'next/navigation'
import Image from 'next/image';

const heroImg = require('../../src/img/hero_img.svg')

const Hero = () => {
    const router = useRouter()
    const { setCursorText, setCursorVariant } = useCursor();

    const variants1 = {
        hidden: { filter: "blur(10px)", opacity: 0 },
        visible: { filter: "blur(0px)", opacity: 1 },
    };

    function contactEnter() {
        setCursorText("👋");
        setCursorVariant("contact");
    }

    function contactLeave() {
        setCursorText("");
        setCursorVariant("default");
    }

    function photoEnter() {
        setCursorText("📷");
        setCursorVariant("photo");
    }

    function photoLeave() {
        setCursorText("");
        setCursorVariant("default");
    }


    return (
        <>
            <div className='container mx-auto flex flex-col lg:flex-row items-center'>
                <div className='w-full lg:w-3/6 flex flex-col gap-4 items-center lg:items-start'>
                    <Badge text='Hey! I am' className='z-10 bg-secondary border-dark -rotate-12 -translate-x-24 lg:-translate-x-6 translate-y-4' />
                    <div
                        className="hoverable"
                        onMouseEnter={contactEnter}
                        onMouseLeave={contactLeave}
                    >

                        <motion.h1
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 3 }}
                            variants={variants1}
                            className="text-center lg:text-left z-0 text-7xl lg:text-9xl text-primary order-1"
                        >
                            Oscar I.<br />
                            Rojas
                        </motion.h1>

                    </div>
                    <div className='w-4/6 flex flex-col lg:flex-row items-center lg:items-start relative'>
                        <h2 className='font-Adam text-center lg:text-left uppercase text-xl lg:text-2xl z-10'>Frontend Developer</h2>
                        <Link
                            onMouseEnter={photoEnter}
                            onMouseLeave={photoLeave}
                            href={'https://ph.eldesernauta.com'} target='_blank'>
                            <Badge text={`n' film photographer`} className=' z-0 bg-accent border-dark rotate-0 lg:rotate-12 translate-0 lg:-translate-x-4 lg:-translate-y-4' />
                        </Link>
                    </div>
                    <Button
                        onClick={() => {
                            router.push('/portfolio/audi')
                        }}
                        className="hoverable bg-secondary hover:bg-warning shadow-dark border-dark"
                    >
                        View more &#8595;
                    </Button>
                </div>
                <div className='w-full lg:w-3/6 flex justify-center items-center'>
                    <MotionImage />
                </div>
            </div>
        </>
    );
}

export default Hero;