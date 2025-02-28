import "./_Carousel.css"; // Import custom styles for animation


import {COLORS} from "../../utils/constants/constants.ts";

import {useEffect, useMemo, useRef, useState} from "react";
import {Typography} from "antd";
import {ImageClient} from "../../assets/client/ImageClient/client.ts";


interface ItemData {
    bubbleBottomText: string;
    bubbleTopText: string;
    imgUrl: string;
    label: string;
    data_id: number
}

interface CircularCarouselProps {
    data?: ItemData[],
    imageClient?: ImageClient | null
}

interface ItemMetadata {
    isFocused: boolean;
    index: number;
}

interface ItemDataWithMetadata extends ItemData {
    metadata: ItemMetadata;
}

const CircularCarousel: React.FC<CircularCarouselProps> = ({data, imageClient}) => {

    // Focus Update
    // update all items -> update focus item -> update img
    const [items, setItems] = useState<ItemDataWithMetadata[]>([]);

    useEffect(() => {
        setItems(() => {
            if (data == undefined) {
                return [];
            }
            data?.sort((a, b) => {
                if (a.data_id > b.data_id) {
                    return 1;
                } else if (a.data_id < b.data_id) {
                    return -1;
                } else {
                    return 0;
                }
            });

            return data?.map((item, index) => {
                return {
                    ...item,
                    metadata: {
                        index,
                        isFocused: index == 0,
                    },
                };
            });
        });
    }, [data]);

    const [focusedItem, setFocusedItem] = useState<ItemData | null>(null);
    const [exteriorFocusImage, setExteriorFocusImage] = useState<string | null>(null);

    const setFocusByDataId = (data_id: number) => {
        setItems((items) => {
            return items.map((prevItem) => {
                return {
                    ...prevItem,
                    metadata: {
                        ...prevItem.metadata,
                        isFocused: prevItem.data_id == data_id
                    }
                };
            });
        });
    };


    const itemsCount = items.length;

    const requestImage = useMemo(() => {
        return async (imgRef: string) => {
            if (imageClient == null || imgRef == null) {
                return "";
            }
            return imageClient.getImage(imgRef);
        };
    }, [imageClient]);

    useEffect(() => {
        for (const item of items) {
            if (item.metadata.isFocused) {
                setFocusedItem(item);


                (async () => {
                    if (imageClient != null) {
                        const _exteriorFocusImage = await requestImage(item.imgUrl);
                        console.log(`requestImage() <- exteriorFocusImage: ${_exteriorFocusImage}`);
                        setExteriorFocusImage(_exteriorFocusImage);
                    }
                })();

                break;
            }
        }
        return;
    }, [imageClient, items, requestImage]);


    const length = '420px';

    const [startStep1Transition, setStartTransitionStep1] =
        useState(false);
    const [stoppedStep1Transition, setStopTransitionStep1] =
        useState(false);
    const [startStep2Transition, setStartTransitionStep2] =
        useState(false);
    const [stopStep2Transition, setStopTransitionStep2] =
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

    const step1DurationSeconds = 3;
    const step2DurationSeconds = 2;
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
    }, [stoppedStep1Transition]);


    useEffect(() => {
        if (startStep2Transition) {
            setTimeout(() => {
                console.log("stopStep1Transition");
                setStopTransitionStep2(true);
            }, step2DurationSeconds * 1000);
        }
    }, [startStep2Transition]);

    const carouselTransitionStep1 = startStep1Transition ? `transform ${step1DurationSeconds}s ease-in` : "";
    console.log(`[]itemcount: ${itemsCount}`);
    console.log(`[]exteriorFocusImage: ${exteriorFocusImage}`);

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
                     src={exteriorFocusImage ?? undefined} alt={""}></img>
                {stoppedStep1Transition &&
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
                }
                {
                    <div className="carousel-outer-bubble-wrapper" style={{
                        display: "flex",
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        // transform: "translateY(-10%) translateX(0%)",
                        justifyContent: "center",
                        alignItems: "center",
                        transform: startStep2Transition ? "translateY(-40%) translateX(30%)" : "translateY(-10%) translateX(0%)",
                        animation: startStep2Transition ? `ao-carousel-second-transition-mobile ${step2DurationSeconds}s ease-in` : "",
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
                            animation: startStep2Transition ? `ao-carousel-second-transition-mobile-bubble ${step2DurationSeconds}s ease-in` : "",
                        }}>

                            <div className="carousel-outer-bubble-textuals"
                                 style={{
                                     display: "flex",
                                     flexDirection: "column",
                                     alignItems: "center",
                                     justifyContent: "center",
                                     width: "70%",
                                     height: "70%"
                                 }}>
                                <Typography.Text style={{
                                    fontSize: "0.8rem",
                                    lineHeight: "0.8rem",
                                    textAlign: "center",
                                    display: stopStep2Transition ? "flex" : "none",
                                    color: COLORS.PURE_WHITE,
                                }}>
                                    {focusedItem && focusedItem.bubbleTopText}
                                </Typography.Text>
                                <Typography.Text style={{
                                    marginTop: "35px",
                                    fontSize: "0.8rem",
                                    lineHeight: "0.8rem",
                                    textAlign: "center",
                                    display: stopStep2Transition ? "flex" : "none",
                                    color: COLORS.PURE_WHITE,
                                }}>
                                    {focusedItem && focusedItem.bubbleBottomText}
                                </Typography.Text>
                            </div>
                        </div>
                    </div>
                }


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
                            zIndex: 1000,
                        }}>
                            <div className="carousel-dots" style={{display: "flex", flexDirection: "row"}}>
                                {items?.map((dotItem) => {
                                    return <div key={dotItem.data_id}
                                                className={`carousel-dot`}
                                                onClick={() => {
                                                    console.log(`clicked dotItem.data_id: ${dotItem.data_id}`);
                                                    setFocusByDataId(dotItem.data_id);
                                                }}
                                                style={{
                                                    background: COLORS.PURE_WHITE,
                                                    display: "flex",
                                                    height: "25px",
                                                    width: "25px",
                                                    margin: "0px 10px 0 10px",
                                                    alignItems: "center",
                                                    borderRadius: "50%",
                                                    justifyContent: "center",
                                                }}></div>;
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