import mastheadback from '../../assets/Body1/masthead_back_img.jpg';
import mastheadbackmobile from '../../assets/Body1/mobile_masthead_back_img.jpg';
import {Image} from "antd";
import {Device} from "../../utils/constants/constants.ts";


export const Body1: React.FC<{ props: { device: Device }, children: React.ReactNode }> = ({props, children}) => {
    const {device} = props;
    return <>
        <Image preview={false} src={device == Device.mobile ? mastheadbackmobile : mastheadback}></Image>
        <div className="body1 oa-body">{children}</div>
    </>;
};


export default Body1;



