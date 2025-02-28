import {Device} from "../utils/constants/constants.ts";

interface PageA4Props {
    children: React.ReactNode; // Allows any valid React child
    device: Device;
}


const HorizontalMargins = {
    [Device.mobile]: "60px",
    [Device.tablet]: "20px",
    [Device.desktop]: "30px",
};

export const PageA4: React.FC<PageA4Props> = (props) => {
    const {children, device} = props;

    const hMargin = HorizontalMargins[device];

    return <div style={{display: "flex", marginLeft: hMargin, marginRight: hMargin}}> {children}</div>;
};