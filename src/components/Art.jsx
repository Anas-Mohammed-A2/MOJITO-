import React, { useRef } from 'react'
import { goodLists, featureLists } from "../../constants/index"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useMediaQuery } from 'react-responsive'
const Art = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const ArtSic = useRef()
    useGSAP(() => {
        const start = isMobile ? "top 20%" : "top top";
        const maskTl = gsap.timeline({
            scrollTrigger: {
                trigger: ArtSic.current,
                start: start,
                end: "bottom center",
                scrub: 1.5,
                pin: true,
            },
            ease: 'power1.inOut'
        }).to(".will-fade", {
            opacity: 0,
            stagger: 0.2,
            ease: 'power1.inOut'

        }).to('.masked-img', {
            scale: 1.5, maskPosition: "center", maskSize: "400%", duration: 1, ease: 'power1.inOut'
        }).to('#masked-content', { opacity: 1, duration: 1, ease: 'power1.inOut'})
    })
    return (
        <div id="art" ref={ArtSic}>
            <div className="container mx-auto h-full pt-20">
                <h2 className="will-fade">The ART</h2>
                <div className="content">
                    <div className="space-y-4 will-fade">
                        <ul>
                            {goodLists.map((feature, i) => (
                                <li className="flex items-center gap-2" key={i}>
                                    <img src="/public/images/check.png" alt="check_icon" />
                                    <p>{feature}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="cocktail-img">
                        <img
                            src="/images/under-img.jpg"
                            alt="cocktail"
                            className="abs-center masked-img size-full object-contain"
                        />
                    </div>
                    <div className="space-y-4 will-fade">
                        <ul>
                            {featureLists.map((feature, i) => (
                                <li key={i} className="flex items-center justify-start gap-2">
                                    <img src="/public/images/check.png" alt="check_icon" />
                                    <p className='md:w-fit w-60'>{feature}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="masked-container">
                    <h2 className="will-fade">Sip-Worthy Perfection</h2>
                    <div id="masked-content">
                        <h3>Made with Craft, Poured with Passion</h3>
                        <p>This isn’t just a drink. It’s a carefully crafted moment made just for you.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Art