import "./index.css";
import {COLORS, Device, horizontalPaddings} from "../../utils/constants/constants.ts";
import {UnbrokenPage} from "../pageSizes.tsx";
import {ImageClient} from "../../assets/client/ImageClient/client.ts";
import {useEffect, useState} from "react";
import {FirstPitch} from "../../assets/textual/firstpitch.ts";
import {Divider, Typography} from "antd";
import CircularCarousel from "./Carousel.tsx";
import ByLineComponent from "./Byline.tsx";


const paragraphFontSizes: { [device in Device]: string } = {
    [Device.mobile]: "20px",
    [Device.tablet]: "14px",
    [Device.desktop]: "32px",
};

const headerHorizontalPaddings: { [device in Device]: string } = {
    [Device.mobile]: "20px",
    [Device.tablet]: "160px",
    [Device.desktop]: "150px",
};

const headerBylineFontSizes: { [device in Device]: string } = {
    [Device.mobile]: "18px",
    [Device.tablet]: "14px",
    [Device.desktop]: "26px",
};

const headerDateFontSizes: { [device in Device]: string } = {
    [Device.mobile]: "14px",
    [Device.tablet]: "12px",
    [Device.desktop]: "22px",
};

const carouselPaddingTops: { [device in Device]: string } = {
    [Device.mobile]: "120px",
    [Device.tablet]: "70px",
    [Device.desktop]: "80px",
};

const carouselPaddingBottoms: { [device in Device]: string } = {
    [Device.mobile]: "150px",
    [Device.tablet]: "65px",
    [Device.desktop]: "80px",
};


// TODO
// [ ] alts for images sources
export const Body2: React.FC<{ device: Device }> = ({device}) => {
    const [imageClient, setImageClient] = useState<ImageClient | null>(null);
    const [pitch, setPitch] = useState<ReturnType<typeof FirstPitch> | null>(
        null,
    );

    useEffect(() => {
        if (pitch == null) {
            setPitch(FirstPitch());
        }
    }, [pitch]);

    useEffect(() => {
        if (imageClient == null) {
            setImageClient(new ImageClient());
        }
    }, [imageClient]);

    /* FIXME update state on device change only. */
    const headerBylineFontSize = headerBylineFontSizes[device] ?? "18px";
    const headerDateFontSize = headerDateFontSizes[device] ?? "14px";
    const paragraphFontSize = paragraphFontSizes[device] ?? "20px";
    const headerHorizontalPadding = headerHorizontalPaddings[device] ?? "20px";
    const carouselPaddingTop = carouselPaddingTops[device] ?? "20px";
    const carouselPaddingBottom = carouselPaddingBottoms[device] ?? "150px";

    const extDescriptions =
        pitch && pitch.ExteriorDescriptions ? pitch.ExteriorDescriptions : [];
    const carouselItemsData = extDescriptions.map((extDescription, index) => {
        return {
            bubbleBottomText: extDescription.credit,
            bubbleTopText: extDescription.text,
            imgUrl: extDescription.imgRef,
            label: extDescription.label,
            data_id: index,
        };
    });

    return (
        <div
            className="ao-body2-container"
            style={{backgroundColor: COLORS.CHARCOAL_SLATE}}
        >
            <UnbrokenPage style={{
                paddingLeft: horizontalPaddings[device],
                paddingRight: horizontalPaddings[device],
            }}>
                <div
                    style={{
                        marginTop: "35px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <div
                        className="ao-body2-header"
                        style={{
                            width: "100%",
                            paddingLeft: headerHorizontalPadding,
                            paddingRight: headerHorizontalPadding,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                width: "100%",
                                flex: 1,
                                justifyContent: "space-around",
                                flexDirection: "row",
                                alignItems: "center",
                            }}
                        >
                            <div style={{display: "flex", gap: "10px"}}>
                                <ByLineComponent fontWeight={"600"} fontSize={headerBylineFontSize} tKey={"TEXT"}
                                                 tValue={pitch?.Author ?? ""}/>
                            </div>


                            <div style={{display: "flex", gap: "10px"}}>
                                <ByLineComponent fontWeight={"600"} fontSize={headerBylineFontSize} tKey={"DESIGN"}
                                                 tValue={pitch?.Designer ?? ""}/>
                            </div>
                        </div>
                        <Divider
                            type="horizontal"
                            style={{
                                borderColor: COLORS.MOSSY_OLIVE,
                                width: "100%",
                                marginTop: "10px",
                                marginBottom: "10px",
                            }}
                        />
                        <div
                            style={{
                                display: "flex",
                                width: "100%",
                                flex: 1,
                                justifyContent: "space-around",
                                flexDirection: "row",
                                alignItems: "center",
                            }}
                        >
                            <Typography.Text
                                style={{
                                    color: COLORS.MOSSY_OLIVE,
                                    fontSize: headerDateFontSize,
                                    fontWeight: "600",
                                }}
                            >
                                {`Published on ${pitch?.DateCreated ?? ""}`}
                            </Typography.Text>
                        </div>
                    </div>
                    <div
                        className="ao-body2-content-paragraphs-container"
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            marginTop: "30px",
                            width: "100%",
                        }}
                    >
                        <div className="ao-body2-content-paragraphs"
                             style={{display: "flex", width: "100%", flexDirection: "column"}}>
                            {pitch?.Paragraphs.map((paragraph, index) => {
                                return (
                                    <Typography.Paragraph
                                        key={index}
                                        style={{
                                            fontSize: paragraphFontSize,
                                            fontWeight: "500",
                                            color: COLORS.PURE_WHITE,
                                        }}
                                    >
                                        {paragraph}
                                    </Typography.Paragraph>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </UnbrokenPage>
            <div
                className="ao-body2-carousel-container"
                style={{width: "100%", display: "flex"}}
            >
                <CircularCarousel paddingBottom={carouselPaddingBottom} paddingTop={carouselPaddingTop} device={device}
                                  data={carouselItemsData}
                                  imageClient={imageClient}/>
            </div>
        </div>
    );
};

export default Body2;
