import "./index.css";
import {COLORS, Device} from "../../utils/constants/constants.ts";
import {PageA4} from "../pageSize.tsx";
import {ImageClient} from "../../assets/client/ImageClient/client.ts";
import {useEffect, useState} from "react";
import {FirstPitch} from "../../assets/textual/firstpitch.ts";
import {Divider, Typography} from "antd";
import CircularCarousel from "./_Carousel.tsx";


// TODO
// [ ] alts for images sources
export const Body2: React.FC<{ device: Device }> = ({device}) => {
    const [imageClient, setImageClient] = useState<ImageClient | null>(null);
    const [pitch, setPitch] = useState<ReturnType<typeof FirstPitch> | null>(null);

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

    const headerBylineFontSize = "18px";
    const headerDateFontSize = "14px";

    return <div className="ao-body2-container" style={{backgroundColor: COLORS.CHARCOAL_SLATE,}}><PageA4 device={device}
                                                                                                         style={{}}>
        <div
            style={{
                marginTop: "35px",
                display: "flex", flexDirection: "column", alignItems: "center"
            }}>
            <div className="ao-body2-header"
                 style={{
                     width: "100%",
                     paddingLeft: "20px",
                     paddingRight: "20px",
                     display: "flex",
                     flexDirection: "column",
                     alignItems: "center",
                 }}>
                <div style={{
                    display: "flex",
                    width: "100%",
                    flex: 1,
                    justifyContent: "space-around",
                    flexDirection: "row",
                    alignItems: "center"
                }}>
                    <div style={{display: "flex", gap: "10px"}}>
                        <Typography.Text
                            style={{fontSize: headerBylineFontSize, color: COLORS.WALNUT_BROWN, fontWeight: "600"}}>
                            {"TEXT"}
                        </Typography.Text>
                        <Typography.Text
                            style={{fontSize: headerBylineFontSize, color: COLORS.BURNISHED_GOLD, fontWeight: "600"}}>
                            {pitch?.Author ?? ""}
                        </Typography.Text></div>
                    <div style={{display: "flex", gap: "10px"}}>
                        <Typography.Text
                            style={{fontSize: headerBylineFontSize, color: COLORS.WALNUT_BROWN, fontWeight: "600"}}>
                            {"DESIGN"}
                        </Typography.Text>
                        <Typography.Text
                            style={{fontSize: headerBylineFontSize, color: COLORS.BURNISHED_GOLD, fontWeight: "600"}}>
                            {`${pitch?.Designer ?? ""}`}
                        </Typography.Text></div>
                </div>
                <Divider type="horizontal"
                         style={{
                             borderColor: COLORS.MOSSY_OLIVE,
                             width: "100%",
                             marginTop: "10px",
                             marginBottom: "10px",
                         }}/>
                <div style={{
                    display: "flex",
                    width: "100%",
                    flex: 1,
                    justifyContent: "space-around",
                    flexDirection: "row",
                    alignItems: "center"
                }}>
                    <Typography.Text
                        style={{
                            color: COLORS.MOSSY_OLIVE,
                            fontSize: headerDateFontSize,
                            fontWeight: "600",
                        }}>
                        {`Published on ${pitch?.DateCreated ?? ''}`}
                    </Typography.Text>
                </div>
            </div>
            <div className="ao-body2-content-paragraphs-container"
                 style={{display: "flex", flexDirection: "column", alignItems: "center", marginTop: "30px"}}>
                <div className="ao-body2-content-paragraphs">
                    {
                        pitch?.Paragraphs.map((paragraph, index) => {
                            return <Typography.Paragraph key={index}
                                                         style={{
                                                             fontSize: "20px",
                                                             fontWeight: "500",
                                                             color: COLORS.PURE_WHITE
                                                         }}>{paragraph}</Typography.Paragraph>;
                        })
                    }
                </div>
            </div>

        </div>
    </PageA4>
        <div className="ao-body2-carousel-container"
             style={{width: "100%", display: "flex"}}>
            <CircularCarousel/>
        </div>
    </div>;
};


export default Body2;