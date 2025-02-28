import "./_Carousel.css"; // Import custom styles for animation

import img_carousel from '../../assets/Body2/carousel-1.png';
import {COLORS} from "../../utils/constants/constants.ts";
import {useEffect, useRef, useState} from "react";


const CircularCarousel: React.FC = () => {
    const length = '420px';

    const [startStep1Transition, setStartTransitionStep1] =
        useState(false);
    const [startStep2Transition, setStartTransitionStep2] =
        useState(false);
    const carouselWrapperRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        // Create an Intersection Observer instance
        const observer = new IntersectionObserver(
            ([entry]) => {
                // If the element is in view, set visibility to true
                setStartTransitionStep1(entry.isIntersecting);
            },
            {threshold: 0.5} // 50% of the element must be visible to trigger
        );

        // Start observing the element
        if (carouselWrapperRef.current) {
            observer.observe(carouselWrapperRef.current);
        }

        // Cleanup the observer on unmount
        return () => {
            if (carouselWrapperRef.current) {
                observer.unobserve(carouselWrapperRef.current);
            }
        };
    }, []);

    const step1DurationSeconds = 4;
    useEffect(() => {
        if (startStep1Transition) {
            setTimeout(() => {
                setStartTransitionStep2(true);
            }, step1DurationSeconds * 1000);
        }
    }, [startStep1Transition]);

    const carouselTransitionStep1 = startStep1Transition ? `transform ${step1DurationSeconds}s ease-in` : "";

    return (
        <div className="carousel-container"
             style={{
                 paddingTop: "180px",
                 paddingBottom: "100px",
                 width: "100%",
                 display: "flex",
                 justifyContent: "center"
             }}>
            <div className="ao-carousel-wrapper"
                 ref={carouselWrapperRef}
                 style={{
                     display: "flex",
                     justifyContent: "center",
                     alignItems: "center",
                     borderRadius: "50%",
                     width: length,
                     height: length,
                     position: "relative",

                 }}>
                <div className="ao-carousel-wrapper-background-underlying-hue"
                     style={{
                         display: "flex",
                         justifyContent: "center",
                         alignItems: "center",
                         background: `linear-gradient(to bottom, ${COLORS.GOLDEN_AMBER}, ${COLORS.WALNUT_BROWN})`,
                         opacity: 0.7,
                         borderRadius: "50%",
                         width: "100%",
                         height: "100%",
                         position: "absolute",
                     }}></div>
                <div className="ao-carousel-wrapper-background-background-blend"
                     style={{
                         display: "flex",
                         justifyContent: "center",
                         alignItems: "center",
                         background: COLORS.CHARCOAL_SLATE,
                         borderRadius: "50%",
                         width: "90%",
                         height: "90%",
                         position: "absolute",
                     }}></div>
                <img style={{
                    transform: startStep1Transition ? "translateX(0) rotate(0)" : "translateX(-200%) rotate(-270deg)",
                    transition: carouselTransitionStep1,
                    width: "90%",
                    height: "90%"
                }}
                     src={img_carousel} alt={""}></img>
                <div style={{
                    display: "flex",
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    transform: "translateY(40%) translateX(50%)",
                    zIndex: 1000,
                }}>
                    {startStep2Transition &&
                        <>
                            <div className="carousel-focus-center-circle-mark" style={{
                                display: "flex",
                                background: COLORS.PURE_WHITE,
                                width: "18px",
                                height: "18px",
                                borderRadius: "50%",
                                alignItems: "center",
                                justifyContent: "center",
                                position: "absolute",
                            }}>

                            </div>
                            <div className="carousel-outer-bubble" style={{
                                display: "flex",
                                background: COLORS.BURNISHED_GOLD,
                                width: "18px",
                                height: "18px",
                                borderRadius: "50%",
                                alignItems: "center",
                                justifyContent: "center",
                            }}></div>
                        </>
                    }
                </div>
                <div className="carousel-overlay" style={{
                    display: "flex", position: "absolute",
                    height: "100%", width: "100%",
                    // background: COLORS.GOLDEN_AMBER,
                    transform: startStep1Transition ? "translateX(0) rotate(0)" : "translateX(-200%) rotate(-270deg)",
                    transition: carouselTransitionStep1,
                }}>
                    <div className="carousel-dots-wrapper" style={{
                        display: "flex",
                        height: "100%",
                        width: "100%",
                        // background: "red",
                        position: "relative",
                        justifyContent: "center",
                    }}>
                        <div className="carousel-dots-panel" style={{
                            display: "flex",
                            position: "absolute",
                            alignItems: "flex-end",
                            bottom: "40px",
                            justifyContent: "center",
                        }}>
                            <div className="carousel-dots" style={{display: "flex", flexDirection: "row"}}>
                                {[1, 2, 3, 4].map((dot, index) => {
                                    return <div key={index}
                                                className={`carousel-dot`}
                                                style={{
                                                    background: COLORS.PURE_WHITE,
                                                    display: "flex",
                                                    height: "25px",
                                                    width: "25px",
                                                    margin: "0px 10px 0 10px",
                                                    alignItems: "center",
                                                    borderRadius: "50%",
                                                    justifyContent: "center",
                                                }}>{`${dot}`}</div>;
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CircularCarousel;