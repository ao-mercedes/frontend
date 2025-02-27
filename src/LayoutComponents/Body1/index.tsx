import mastheadback from '../../assets/Body1/masthead_back_img.jpg';
import mastheadbackmobile from '../../assets/Body1/mobile_masthead_back_img.jpg';
import mastheadring from '../../assets/Body1/masthead_ring.svg';
import mastheadfront from '../../assets/Body1/masthead_fore_img.png';
import mastheadfrontmobile from '../../assets/Body1/mobile_masthead_fore_img.png';
import {Device} from "../../utils/constants/constants.ts";

// TODO
// [ ] alts for images sources
export const Body1: React.FC<{ props: { device: Device }, children: React.ReactNode }> = ({props,}) => {
    const {device} = props;


    const ringStyle = device == Device.mobile ? {
        zIndex: 0,
        transform: "scale(1.4) translateX(-10%) translateY(20%)",
        width: '80%',
        height: '100%'
    } : {
        zIndex: 0,
        transform: "scale(1.4) translateY(-10%)",
        width: 'auto',
        height: '100%'
    };

    const ringFull = <img
        style={{...ringStyle, position: "absolute"}}
        src={mastheadring} alt={""}></img>;

    return <div style={{
        position: 'relative',
        display: "flex",
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'blue',
        padding: 0,
        width: '100vw',
        height: '100%'
    }}>
        <img style={{width: '100%', height: '100%'}}
             src={device == Device.mobile ? mastheadbackmobile : mastheadback} alt={""}></img>
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "10px",
            position: "absolute",
            width: '100%',
            height: '100%'
        }}>
            {ringFull}
        </div>
        <img
            style={{zIndex: 2, position: "absolute", width: '100%', height: '100%'}}
            src={device == Device.mobile ? mastheadfrontmobile : mastheadfront} alt={""}></img>
    </div>;
};


export default Body1;



