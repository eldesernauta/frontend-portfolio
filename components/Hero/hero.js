import { useCursor } from '../../context/CursorContext';
import { motion } from 'framer-motion';
import { useRef } from 'react'; // Importar useRef
import Badge from '../Badge/badge';
import Link from 'next/link';
import Image from 'next/image';

import useDarkMode from '../utils/useDarkMode';

import Work from '../Work/work';



const heroImg = require('../../src/img/hero_img.svg');
const arrow = require('../../src/img/curl_arrow.svg');

const Hero = () => {
    const { setCursorText, setCursorVariant } = useCursor();
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    const workSectionRef = useRef(null); // Referencia para la sección #work

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

    function drawEnter() {
        setCursorText("👨🏻‍🎨");
        setCursorVariant("draw");
    }

    function drawLeave() {
        setCursorText("");
        setCursorVariant("default");
    }

    const handleScroll = () => {
        if (workSectionRef.current) {
            workSectionRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className='scroll-smooth'>
            <section id="main" className={`scroll-smooth  w-full h-auto lg:h-[calc(100vh+50px)] 2xl:h-[calc(100vh+100px)] relative flex px-5 lg:px-8 2xl:px-0 pt-16 sm:pt-24 lg:pt-0 justify-center items-center ${isDarkMode ? 'bg-light' : 'bg-dark'} bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:50px_50px]`}>
                <div className='container relative mx-auto flex flex-col lg:flex-row gap-8 justify-center items-center -translate-y-[0px] lg:-translate-y-[50px]'>
                    <div className='w-full lg:w-3/6 flex flex-col gap-4 items-center lg:items-start relative'>
                        <Badge text='Hey! I am' className={`z-10 font-Adam font-bold ${isDarkMode ? ' bg-secondary border-dark text-light' : 'bg-warning border-light'} -rotate-12 -translate-x-24 lg:-translate-x-6 translate-y-4`} />
                        <div
                            className="hoverable"
                            onMouseEnter={contactEnter}
                            onMouseLeave={contactLeave}
                        >
                            <motion.h1
                                initial="hidden"
                                animate="visible"
                                transition={{ duration: 1 }}
                                variants={variants1}
                                className="text-center font-France lg:text-left z-0 text-7xl lg:text-9xl text-primary order-1"
                            >
                                Oscar I.<br />
                                Rojas
                            </motion.h1>
                        </div>
                        <div className='w-full flex flex-col lg:flex-row items-center lg:items-start relative'>
                            <h2 className={`${isDarkMode ? 'text-dark' : 'text-light'} text-center lg:text-left font-Unbounded uppercase text-xl lg:text-2xl z-10`}>Frontend Developer</h2>
                            <Link
                                onMouseEnter={photoEnter}
                                onMouseLeave={photoLeave}
                                href={'https://ph.eldesernauta.com'} target='_blank'>
                                <Badge text={`n' film photographer`} className={`hidden font-Adam font-bold sm:block z-0 mt-2 lg:mt-0  ${isDarkMode ? 'bg-secondary text-light border-dark' : 'bg-accent border-light'} rotate-0 lg:rotate-12 translate-0 lg:-translate-x-4 lg:-translate-y-4`} />
                            </Link>
                        </div>
                        <button
                            onClick={handleScroll}
                            id='smooth'
                            className={`scroll-smooth hidden lg:flex text-text cursor-none items-center rounded-full border-2 border-border bg-main px-12 py-4 font-bold uppercase shadow-light dark:shadow-dark transition-all duration-300 hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none dark:hover:shadow-none hoverable font-Adam ${isDarkMode ? 'shadow-dark border-dark bg-accent hover:bg-primary' : 'bg-warning hover:bg-accent shadow-light border-light'}`}
                        >
                            Wanna see?
                        </button>
                        <Image
                            src={arrow}
                            width={'100'}
                            alt='hero arrow'
                            className={`hidden lg:block absolute -right-4 xl:right-[15%] 2xl:right-[35%] top-[35%] ${isDarkMode ? 'brightness-0' : 'brightness-100'}`}
                        />
                    </div>
                    <div className='w-full lg:w-3/6 flex justify-center items-center scale-x-[-1]'>
                        <Image
                            src={heroImg}
                            width={'700'}
                            alt='hero image'
                            className="hero-img"
                            onMouseEnter={drawEnter}
                            onMouseLeave={drawLeave}
                        />
                    </div>
                </div>

                <button
                    onClick={toggleDarkMode}
                    className={`absolute border-2 w-12 h-12 flex justify-center items-center bottom-8 lg:bottom-[124px] outline-none right-8 px-4 py-2 text-xl rounded-full ${isDarkMode ? 'shadow-dark bg-light border-dark' : 'shadow-light bg-dark border-light'} hover:bg-primary transition-all`}
                >
                    {isDarkMode ? '🌙' : '☀️'}
                </button>
            </section>

            <section
                id='work'
                ref={workSectionRef} // Asignar la referencia aquí
                className="scroll-smooth hidden lg:block z-20 lg:-translate-y-[50px] 2xl:-translate-y-[100px] bg-primary min-h-auto md:min-h-screen 2xl:min-h-[80vh]py-24 rounded-tl-3xl lg:rounded-tl-[50px] 2xl:rounded-tl-[100px] rounded-tr-3xl lg:rounded-tr-[50px] 2xl:rounded-tr-[100px]"
            >
                <Work />
            </section>
        </div>
    );
};

export default Hero;
