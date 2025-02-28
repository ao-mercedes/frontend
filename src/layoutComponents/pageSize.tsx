import {Device} from "../utils/constants/constants.ts";

interface PageA4Props {
    children: React.ReactNode; // Allows any valid React child
    device: Device;
    style?: React.CSSProperties;
}


const HorizontalPadding = {
    [Device.mobile]: "60px",
    [Device.tablet]: "20px",
    [Device.desktop]: "30px",
};

export const PageA4: React.FC<PageA4Props> = (props) => {
    const {children, device, style: pStyle} = props;

    const hPadding = HorizontalPadding[device];

    const style = {display: "flex", paddingRight: hPadding, paddingLeft: hPadding, ...pStyle};
    return <div style={style}> {children}</div>;
};