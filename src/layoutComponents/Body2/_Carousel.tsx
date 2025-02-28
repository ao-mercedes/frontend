import "./_Carousel.css"; // Import custom styles for animation

import img_carousel from '../../assets/Body2/carousel-1.png';
import {COLORS} from "../../utils/constants/constants.ts";
import {useEffect, useRef, useState} from "react";


const CircularCarousel: React.FC = () => {
    const length = '420px';

    const [startStep1Transition, setStartTransitionStep1] =
        useState(false);
    const [stoppedStep1Transition, setStopTransitionStep1] =
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
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(carouselWrapperRef.current);
            }
        };
    }, []);

    const step1DurationSeconds = 1;
    useEffect(() => {
        if (startStep1Transition) {
            setTimeout(() => {
                console.log("stopStep1Transition");
                setStopTransitionStep1(true);
            }, step1DurationSeconds * 1000);
        }
    }, [startStep1Transition]);


    useEffect(() => {
        if (stoppedStep1Transition) {
            console.log("startStep2Transition");
            setStartTransitionStep2(true);
        }
    }, [stoppedStep1Transition]); // Dependency on `stoppedStep1Transition`

    const carouselTransitionStep1 = startStep1Transition ? `transform ${step1DurationSeconds}s ease-in` : "";
    // const carouselTransitionStep2 = startStep2Transition ? `transform ${step1DurationSeconds}s ease-in` : "";

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
                {stoppedStep1Transition &&
                    <>
                        <div className="carousel-focus-center-circle-mark-wrapper" style={{
                            display: "flex",
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            justifyContent: "center",
                            alignItems: "center",
                            transform: "translateY(-10%) translateX(0%)",
                            zIndex: 1000,
                        }}>
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
                        </div>
                    </>}


                {
                    <>
                        <div className="carousel-outer-bubble-wrapper" style={{
                            display: "flex",
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            // transform: "translateY(-10%) translateX(0%)",
                            justifyContent: "center",
                            alignItems: "center",
                            transform: startStep2Transition ? "translateY(-40%) translateX(30%)" : "translateY(-10%) translateX(0%)",
                            animation: startStep2Transition ? "ao-carousel-second-transition-mobile 4s ease-in" : "",
                            zIndex: 1000,
                        }}>
                            <div className="carousel-outer-bubble" style={{
                                display: "flex",
                                background: startStep2Transition ? COLORS.STEEL_BLUE : "", // COLORS.STEEL_BLUE
                                width: startStep2Transition ? "200px" : "18px",
                                height: startStep2Transition ? "200px" : "18px",
                                borderRadius: "50%",
                                alignItems: "center",
                                justifyContent: "center",
                                position: "absolute",
                                animation: startStep2Transition ? "ao-carousel-second-transition-mobile-bubble 4s ease-in" : "",
                            }}>
                            </div>
                        </div>
                    </>}


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