import img_asiaone_footer_desktop from "../../assets/Footer/asiaone_footer_desktop.png";
import img_asiaone_footer_mobile from "../../assets/Footer/asiaone_footer_mobile.png";

import {COLORS, Device} from "../../utils/constants/constants.ts";


const imageUrls: { [device in Device]: string | undefined } = {
    [Device.desktop]: img_asiaone_footer_desktop,
    [Device.mobile]: img_asiaone_footer_mobile,
    [Device.tablet]: undefined,
};


interface FooterProps {
    device: Device
}


const marginTops: { [device in Device]: string } = {
    [Device.desktop]: "50px",
    [Device.tablet]: "10px",
    [Device.mobile]: "20px",
};
const marginBottoms: { [device in Device]: string } = {
    [Device.desktop]: "90px",
    [Device.tablet]: "10px",
    [Device.mobile]: "10px",
};
export const Footer = ({device}: FooterProps) => {
    const imageUrl = imageUrls[device];


    const marginTop = marginTops[device];
    const marginBottom = marginBottoms[device];

    return <div style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "max-content"
    }}>
        <img src={imageUrl} alt={"footer display"} style={{
            marginTop: marginTop,
            marginBottom: marginBottom,
            zIndex: 6,
            display: "flex",
            alignItems: "center",
            height: "440px"
        }}/>
        <div style={{
            zIndex: 0,
            background: COLORS.MANDARIN_ORANGE,
            height: "100%",
            width: "100%",
            position: "absolute"
        }}></div>
        <div style={{
            zIndex: 1,
            background: COLORS.FADING_BROWN,
            height: "100%",
            width: "96%",
            position: "absolute"
        }}></div>
        <div style={{
            zIndex: 2,
            background: COLORS.DRYING_BLOOD,
            height: "100%",
            width: "92%",
            position: "absolute"
        }}></div>
        <div style={{
            zIndex: 3,
            background: COLORS.SEAL_BROWN,
            height: "100%",
            width: "88%",
            position: "absolute"
        }}></div>
        <div style={{
            zIndex: 4,
            background: COLORS.BROWN_ON_BLACK,
            height: "100%",
            width: "84%",
            position: "absolute"
        }}></div>
        <div style={{
            zIndex: 5,
            background: COLORS.DEEP_ORANGE,
            height: "100%",
            width: "84%",
            position: "absolute"
        }}></div>
    </div>;
};

export default Footer;