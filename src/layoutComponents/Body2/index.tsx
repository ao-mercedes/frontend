import "./index.css";
import {COLORS, Device} from "../../utils/constants/constants.ts";
import {PageA4} from "../pageSize.tsx";
import {ImageClient} from "../../assets/client/ImageClient/client.ts";
import {useEffect, useState} from "react";
import {FirstPitch} from "../../assets/textual/firstpitch.ts";
import {Divider, Typography} from "antd";


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

    const headerFontSize = "18px";

    return <PageA4 device={device} style={{
        backgroundColor: COLORS.CHARCOAL_SLATE,
    }}>
        <div className="ao-body2-container"
             style={{
                 paddingTop: "35px",
                 display: "flex", flexDirection: "column", alignItems: "center"
             }}>
            <div className="body2-header"
                 style={{
                     paddingLeft: "10px",
                     paddingRight: "10px",
                     width: "100%",
                     display: "flex",
                     flexDirection: "row",
                     alignItems: "center",
                     justifyContent: "space-evenly",
                 }}>
                <div style={{
                    display: "flex",
                    flex: 1,
                    justifyContent: "space-around",
                    flexDirection: "row",
                    alignItems: "center"
                }}>
                    <div style={{display: "flex", gap: "10px"}}>
                        <Typography.Text
                            style={{fontSize: headerFontSize, color: COLORS.WALNUT_BROWN, fontWeight: "600"}}>
                            {"TEXT"}
                        </Typography.Text>
                        <Typography.Text
                            style={{fontSize: headerFontSize, color: COLORS.BURNISHED_GOLD, fontWeight: "600"}}>
                            {pitch?.Author ?? ""}
                        </Typography.Text></div>
                    <div style={{display: "flex", gap: "10px"}}>
                        <Typography.Text
                            style={{fontSize: headerFontSize, color: COLORS.WALNUT_BROWN, fontWeight: "600"}}>
                            {"DESIGN"}
                        </Typography.Text>
                        <Typography.Text
                            style={{fontSize: headerFontSize, color: COLORS.BURNISHED_GOLD, fontWeight: "600"}}>
                            {`${pitch?.Designer ?? ""}`}
                        </Typography.Text></div>
                </div>
            </div>

            <div className="body2-content">
                <div className="body2-content-text">
                    {
                        pitch?.Paragraphs.map((paragraph, index) => {
                            return <Typography.Paragraph key={index}
                                                         style={{color: COLORS.PURE_WHITE}}>{paragraph}</Typography.Paragraph>;
                        })
                    }
                </div>
            </div>
        </div>
    </PageA4>;
};


export default Body2;