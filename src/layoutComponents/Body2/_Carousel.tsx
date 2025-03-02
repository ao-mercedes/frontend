import "./_Carousel.css"; // Import custom styles for animation
import img_right_arrow from "../../assets/Body2/carousel-arrow-right.svg";
import img_left_arrow from "../../assets/Body2/carousel-arrow-left.svg";

import {COLORS, Device} from "../../utils/constants/constants.ts";

import {ImageClient} from "../../assets/client/ImageClient/client.ts";

import {useEffect, useMemo, useRef, useState} from "react";
import {Typography} from "antd";


const lengths = {
    [Device.mobile]: "420px",
    [Device.tablet]: "510px",
    [Device.desktop]: "420px",
};


interface ItemData {
    bubbleBottomText: string;
    bubbleTopText: string;
    imgUrl: string;
    label: string;
    data_id: number;
}


interface ItemMetadata {
    isFocused: boolean;
    index: number;
}

interface ItemDataWithMetadata extends ItemData {
    metadata: ItemMetadata;
}


type circleLaserOffsetsT = {
    [device in Device]: {
        [index: string]: {
            x: string;
            y: string;
        };
    };
};

const _circleLaserOffsets: circleLaserOffsetsT = {
    [Device.mobile]: {
        "bonnet": {x: "140px", y: "55px"},
        "exhaust": {x: "140px", y: "55px"},
        "wheel": {x: "140px", y: "55px"},
        "side_profile": {x: "140px", y: "55px"},
    },
    [Device.tablet]: {
        "bonnet": {x: "250px", y: "150px"},
        "exhaust": {x: "0px", y: "0px"},
        "wheel": {x: "0px", y: "0px"},
        "side_profile": {x: "0px", y: "0px"},
    },
    [Device.desktop]: {
        "bonnet": {x: "0px", y: "0px"},
        "exhaust": {x: "0px", y: "0px"},
        "wheel": {x: "0px", y: "0px"},
        "side_profile": {x: "0px", y: "0px"},
    }
};

const defaultCircleLaserOffsets = {x: "0", y: "0"};

const calcCarouselCircleLaserOffsets = (device: Device, label: string | undefined) => {
    console.log(`calcCarouselCircleLaserOffsets ${device} ${label}}`);
    const defaultOffsets = defaultCircleLaserOffsets;
    if (label == undefined) {
        return defaultOffsets;
    }
    const byDevice = _circleLaserOffsets[device];
    if (byDevice == null || byDevice[label] == null) {
        return defaultOffsets;

    }

    const byIndex = byDevice[label];
    if (byIndex == null) {
        return defaultOffsets;
    }


    return byIndex ? byIndex : defaultOffsets;
};


interface CircularCarouselProps {
    data?: ItemData[];
    imageClient?: ImageClient | null;
    device: Device;
    paddingTop: string;
}

const CircularCarousel: React.FC<CircularCarouselProps> = ({
                                                               data,
                                                               imageClient,
                                                               device,
                                                               paddingTop,
                                                           }) => {
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
    const [exteriorFocusImage, setExteriorFocusImage] = useState<string | null>(
        null,
    );

    const setFocusByDataId = (data_id: number) => {
        setItems((items) => {
            return items.map((prevItem) => {
                return {
                    ...prevItem,
                    metadata: {
                        ...prevItem.metadata,
                        isFocused: prevItem.data_id == data_id,
                    },
                };
            });
        });
    };

    const setFocusToCurrentNeighbour = (direction: string) => {
        setItems((items) => {
            if (direction != "right" && direction != "left") {
                return items;
            }

            const currFocusIdx = items.findIndex((item) => item.metadata.isFocused);
            if (currFocusIdx == -1) {
                return items;
            }

            const offset = direction == "right" ? 1 :/*left*/ -1;
            const newFocusIndex =
                (items.length +
                    items.findIndex((item) => item.metadata.isFocused) +
                    offset) %
                items.length;
            return items.map((item, index) => {
                return {
                    ...item,
                    metadata: {
                        ...item.metadata,
                        isFocused: newFocusIndex == index,
                    },
                };
            });
        });
    };

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
                        setExteriorFocusImage(_exteriorFocusImage);
                    }
                })();

                break;
            }
        }
        return;
    }, [imageClient, items, requestImage]);


    const length = lengths[device] ?? "420px";

    const [startStep1Transition, setStartTransitionStep1] = useState(false);
    const [stoppedStep1Transition, setStopTransitionStep1] = useState(false);
    const [startStep2Transition, setStartTransitionStep2] = useState(false);
    const [stopStep2Transition, setStopTransitionStep2] = useState(false);
    const carouselWrapperRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStartTransitionStep1(entry.isIntersecting);
                }
            },
            {threshold: 0.5},
        );

        const currRef = carouselWrapperRef.current;
        if (currRef) {
            observer.observe(currRef);
        }

        return () => {
            if (currRef) {
                observer.unobserve(currRef);
            }
        };
    }, []);

    const step1DurationSeconds = 1;
    const step2DurationSeconds = 2;
    useEffect(() => {
        if (startStep1Transition) {
            setTimeout(() => {
                setStopTransitionStep1(true);
            }, step1DurationSeconds * 1000);
        }
    }, [startStep1Transition]);

    useEffect(() => {
        if (stoppedStep1Transition) {
            setStartTransitionStep2(true);
        }
    }, [stoppedStep1Transition]);

    useEffect(() => {
        if (startStep2Transition) {
            setTimeout(() => {
                setStopTransitionStep2(true);
            }, step2DurationSeconds * 1000);
        }
    }, [startStep2Transition]);

    const carouselTransitionStep1 = startStep1Transition
        ? `transform ${step1DurationSeconds}s ease-in`
        : "";

    const [circleLaserOffsets, setCircleLaserOffsets] = useState(defaultCircleLaserOffsets);

    useEffect(() => {
        const _circleLaserOffsets = calcCarouselCircleLaserOffsets(device, focusedItem?.label);
        console.log(`_circleLaserOffsets ${JSON.stringify(_circleLaserOffsets)}`);
        setCircleLaserOffsets(_circleLaserOffsets);
    }, [device, focusedItem]);

    return (
        <div
            className="carousel-container"
            style={{
                paddingTop: paddingTop,
                paddingBottom: "150px",
                width: "100%",
                display: "flex",
                justifyContent: "center",
            }}
        >
            <div
                className="ao-carousel-wrapper"
                ref={carouselWrapperRef}
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "50%",
                    width: length,
                    height: length,
                    position: "relative",
                }}
            >
                <div
                    className="ao-carousel-wrapper-background-underlying-hue"
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
                    }}
                ></div>
                <div
                    className="ao-carousel-wrapper-background-background-blend"
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        background: COLORS.CHARCOAL_SLATE,
                        borderRadius: "50%",
                        width: "90%",
                        height: "90%",
                        position: "absolute",
                    }}
                ></div>
                <img
                    style={{
                        transform: startStep1Transition
                            ? "translateX(0) rotate(0)"
                            : "translateX(-200%) rotate(-270deg)",
                        transition: carouselTransitionStep1,
                        width: "90%",
                        height: "90%",
                    }}
                    src={exteriorFocusImage ?? undefined}
                    alt={""}
                ></img>
                {stoppedStep1Transition &&
                    <>
                        <div
                            className="carousel-circle-laser-wrapper"
                            style={{
                                display: "flex",
                                position: "absolute",
                                width: "min-content",
                                height: "min-content",
                                pointerEvents: "none",
                                zIndex: 1000,
                                top: circleLaserOffsets.y,
                                left: circleLaserOffsets.x,
                            }}
                        >
                            <div
                                className="carousel-circle-laser-mark"
                                style={{
                                    display: "flex",
                                    background: COLORS.PURE_WHITE,
                                    width: "18px",
                                    height: "18px",
                                    borderRadius: "50%",
                                    position: "absolute",
                                }}
                            ></div>
                        </div>
                        <div
                            className="carousel-outer-bubble-wrapper"
                            style={{
                                display: "flex",
                                position: "absolute",
                                width: "min-content",
                                height: "min-content",
                                pointerEvents: "none",
                                zIndex: 1000,
                                top: startStep2Transition ? "-90px" : circleLaserOffsets.y,
                                left: startStep2Transition ? "225px" : circleLaserOffsets.x,
                                transition: "top 2s ease-in, left 2s ease-in",
                            }}
                        >
                            <div
                                className="carousel-outer-bubble"
                                style={{
                                    display: "flex",
                                    background: startStep2Transition ? COLORS.STEEL_BLUE : "", // COLORS.STEEL_BLUE
                                    width: startStep2Transition ? "200px" : "18px",
                                    height: startStep2Transition ? "200px" : "18px",
                                    borderRadius: "50%",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    position: "relative",
                                    transition: "width 2s ease-in, height 2s ease-in",
                                }}
                            >
                                <div
                                    className="carousel-outer-bubble-textuals"
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        width: "70%",
                                        height: "70%",
                                    }}
                                >
                                    <Typography.Text
                                        style={{
                                            fontSize: "0.8rem",
                                            lineHeight: "0.8rem",
                                            textAlign: "center",
                                            display: stopStep2Transition ? "flex" : "none",
                                            color: COLORS.PURE_WHITE,
                                        }}
                                    >
                                        {focusedItem && focusedItem.bubbleTopText}
                                    </Typography.Text>
                                    <Typography.Text
                                        style={{
                                            marginTop: "35px",
                                            fontSize: "0.8rem",
                                            lineHeight: "0.8rem",
                                            textAlign: "center",
                                            display: stopStep2Transition ? "flex" : "none",
                                            color: COLORS.PURE_WHITE,
                                        }}
                                    >
                                        {focusedItem && focusedItem.bubbleBottomText}
                                    </Typography.Text>
                                </div>
                            </div>
                        </div>
                    </>
                }
                {
                    <div
                        className="carousel-dots-overlay"
                        style={{
                            display: "flex",
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            // background: COLORS.GOLDEN_AMBER,
                            transform: startStep1Transition
                                ? "translateX(0) rotate(0)"
                                : "translateX(-200%) rotate(-270deg)",
                            transition: carouselTransitionStep1,
                        }}
                    >
                        <div
                            className="carousel-dots-wrapper"
                            style={{
                                display: "flex",
                                height: "100%",
                                width: "100%",
                                position: "relative",
                                justifyContent: "center",
                            }}
                        >
                            <div
                                className="carousel-dots-panel"
                                style={{
                                    display: "flex",
                                    position: "absolute",
                                    alignItems: "flex-end",
                                    bottom: "40px",
                                    justifyContent: "center",
                                    zIndex: 1000,
                                }}
                            >
                                <div
                                    className="carousel-dots-row"
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    {items?.map((dotItem) => {
                                        return (
                                            <div
                                                key={dotItem.data_id}
                                                className={`carousel-dot`}
                                                onClick={() => {
                                                    setFocusByDataId(dotItem.data_id);
                                                }}
                                                style={{
                                                    background:
                                                        focusedItem?.data_id == dotItem.data_id
                                                            ? COLORS.GOLDEN_AMBER
                                                            : COLORS.PURE_WHITE,
                                                    display: "flex",
                                                    height: "25px",
                                                    width: "25px",
                                                    margin: "0px 10px 0 10px",
                                                    alignItems: "center",
                                                    borderRadius: "50%",
                                                    justifyContent: "center",
                                                }}
                                            ></div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                }
                {stoppedStep1Transition && (
                    <div
                        className={"ao-body2-carousel-arrows"}
                        style={{
                            display: "flex",
                            width: "95%",
                            position: "absolute",
                            justifyContent: "space-between",
                            alignItems: "center",
                            zIndex: 1000,
                        }}
                    >
                        <div
                            className="ao-body2-carousel-arrow-left-wrapper"
                            style={{
                                display: "flex",
                                width: "100%",
                                height: "100%",
                                justifyContent: "center",
                                alignItems: "center",
                                zIndex: 1000,
                            }}
                        >
                            <div
                                className="ao-body2-carousel-arrow-left"
                                style={{
                                    display: "flex",
                                    width: "100%",
                                    height: "100%",
                                    alignItems: "center",
                                    justifyContent: "flex-start",
                                    zIndex: 1000,
                                }}
                            >
                                <img
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                    src={img_left_arrow}
                                    alt={""}
                                    onClick={() => {
                                        setFocusToCurrentNeighbour("left");
                                    }}
                                />
                            </div>
                        </div>
                        <div
                            className="ao-body2-carousel-arrow-right-wrapper"
                            style={{
                                display: "flex",
                                width: "100%",
                                height: "100%",
                                justifyContent: "center",
                                alignItems: "right",
                                zIndex: 500,
                            }}
                        >
                            <div
                                className="ao-body2-carousel-arrow-right"
                                style={{
                                    display: "flex",
                                    width: "100%",
                                    height: "100%",
                                    justifyContent: "flex-end",
                                    alignItems: "center",
                                    zIndex: 500,
                                }}
                            >
                                <img
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                    src={img_right_arrow}
                                    alt={""}
                                    onClick={() => {
                                        setFocusToCurrentNeighbour("right");
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CircularCarousel;
