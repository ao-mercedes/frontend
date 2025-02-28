import {COLORS, Device} from "../../utils/constants/constants.ts";

import icon_nav_arrow_up from "../../assets/Navbar/nav-arrow-up.svg";
import icon_nav_share from "../../assets/Navbar/nav-share.svg";
import icon_nav_hamburger from "../../assets/Navbar/nav-hamburger.svg";
import icon_nav_telegram from "../../assets/Navbar/nav-telegram.svg";
import icon_nav_whatsapp from "../../assets/Navbar/nav-whatsapp.svg";
import icon_nav_facebook from "../../assets/Navbar/nav-facebook.svg";
import icon_nav_twitter from "../../assets/Navbar/nav-twitter.svg";
import icon_nav_instagram from "../../assets/Navbar/nav-instagram.svg";

import icon_nav_telegram_black from "../../assets/Navbar/nav-telegram-black.svg";
import icon_nav_whatsapp_black from "../../assets/Navbar/nav-whatsapp-black.svg";
import icon_nav_facebook_black from "../../assets/Navbar/nav-facebook-black.svg";
import icon_nav_twitter_black from "../../assets/Navbar/nav-twitter-black.svg";
import icon_nav_instagram_black from "../../assets/Navbar/nav-instagram-black.svg";

import {useState} from "react";

interface HamburgerNavigationMenuProps {
    device?: Device
}

/*
    Mobile
    Horizontal Bar
    RARROW <- [WA <- IG <- TG <- FB <- TWITTER] <- PIVOT

    Tablet/Desktop
    Vertical Bar
        PIVOT
        -
        WA
        IG
        TG
        FB
        TWITTER
        -
        UARROW
*/
export const HamburgerNavigationMenu = ({device}: HamburgerNavigationMenuProps) => {

    const [isExpanded, setIsExpanded] = useState(false);

    let opts: {
        topLevelDirection: React.CSSProperties['flexDirection'],
        optionsDirection: React.CSSProperties['flexDirection'],
        optionsWidth: React.CSSProperties['width'],
        optionsHeight: React.CSSProperties['width'],
        optionsIconColor: React.CSSProperties['color'],
        useBlackIcons: boolean,
        length: React.CSSProperties['width'],
        rotateArrow: boolean,
        borderRadius: string,
    } = {
        topLevelDirection: 'column',
        optionsDirection: 'column',
        length: '10px',
        optionsHeight: '10px',
        optionsWidth: '10px',
        rotateArrow: false,
        borderRadius: "50% 0% 0% 50%",
        useBlackIcons: false,
        optionsIconColor: "",
    };
    if (device == Device.desktop || device == Device.tablet) {
        opts = {
            topLevelDirection: 'column',
            optionsDirection: 'column',
            optionsWidth: '40px',
            optionsHeight: '100%',
            length: '40px',
            useBlackIcons: true,
            borderRadius: "0% 0% 50% 50%",
            rotateArrow: false,
            optionsIconColor: "",
        };
    } else if (device == Device.mobile) {
        opts = {
            topLevelDirection: 'row-reverse',
            useBlackIcons: false,
            optionsIconColor: "",
            optionsDirection: 'row',
            optionsHeight: '40px',
            optionsWidth: '100%',
            borderRadius: "50% 0% 0% 50%",
            length: '40px',
            rotateArrow: true,
        };
    }


    let shareOptionStyle = {};
    if (device == Device.mobile) {
        shareOptionStyle = {
            display: "flex",
            paddingRight: "4px",
            paddingTop: "8px",
            paddingBottom: "8px",
        };
    } else if (device == Device.tablet || device == Device.desktop) {
        shareOptionStyle = {
            display: "flex",
            paddingRight: "8px",
            paddingTop: "4px",
            paddingLeft: "8px",
        };
    }

    // shareOptionsProps
    // shareOptionsProps.label should be unique
    const shareOptionsProps: { label: string, iconUrl: string, iconUrlBlack: string }[] = [
        {label: "WA", iconUrl: icon_nav_whatsapp, iconUrlBlack: icon_nav_whatsapp_black},
        {label: "IG", iconUrl: icon_nav_instagram, iconUrlBlack: icon_nav_instagram_black},
        {label: "TG", iconUrl: icon_nav_telegram, iconUrlBlack: icon_nav_telegram_black},
        {label: "FB", iconUrl: icon_nav_facebook, iconUrlBlack: icon_nav_facebook_black},
        {label: "TT", iconUrl: icon_nav_twitter, iconUrlBlack: icon_nav_twitter_black},
    ];

    const shareOptionsComponents = shareOptionsProps.map((item) => {
        return <div key={`${item.label}`} className={`ao-hamburger-navigation-menu-share-options ${item.label}`}
                    onClick={() => setIsExpanded(true)}
                    style={{...shareOptionStyle}}>
            <img src={opts.useBlackIcons ? item.iconUrlBlack : item.iconUrl} alt={""}
                 style={{
                     width: "100%", height: "100%",
                 }}/>
        </div>;
    });

    return <>
        <div className={'ao-hamburger-navigation-menu'}
             style={{display: "flex", flexDirection: opts.topLevelDirection}}>
            <div className={'ao-hamburger-navigation-menu-pivot'} style={{
                display: "flex",
                width: opts.length,
                backgroundColor: COLORS.STEEL_BLUE,
                height: opts.length,
                padding: "10px",
                boxSizing: "border-box",
                flexShrink: 0,
            }}>
                <img src={icon_nav_hamburger} alt={""}
                     style={{
                         width: "100%", height: "100%",
                     }}/>
            </div>
            <div className={'ao-hamburger-navigation-menu-divider'} style={{margin: "1px"}}>
            </div>
            {isExpanded ? <>
                    <div className={'ao-hamburger-navigation-menu-share-options'}
                         style={{
                             display: "flex",
                             backgroundColor: COLORS.STEEL_BLUE,
                             flexDirection: opts.optionsDirection,
                             boxSizing: "border-box",
                             paddingTop: "0px",
                             paddingBottom: "0px",
                             width: opts.optionsWidth,
                             height: opts.optionsHeight,
                         }}>
                        {shareOptionsComponents}
                    </div>
                    <div className={'ao-hamburger-navigation-menu-action-hide-share-options'}
                         onClick={() => {
                             console.log("hide");
                             setIsExpanded(false);
                         }}
                         style={{
                             display: "flex",
                             width: opts.length,
                             height: opts.length,
                             padding: "10px",
                             boxSizing: "border-box",
                             backgroundColor: COLORS.STEEL_BLUE,
                             borderRadius: opts.borderRadius,
                         }}>
                        <img src={icon_nav_arrow_up} alt={""}
                             style={{
                                 width: "100%", height: "100%",
                                 transform: opts.rotateArrow ? "rotate(90deg)" : "rotate(0deg)"
                             }}/>
                    </div>
                </> :
                <>

                    <div className={'ao-hamburger-navigation-menu-action-open-share-options'}
                         onClick={() => {
                             console.log("show");
                             setIsExpanded(true);
                         }}
                         style={{
                             display: "flex",
                             width: opts.length,
                             height: opts.length,
                             padding: "10px",
                             boxSizing: "border-box",
                             backgroundColor: COLORS.STEEL_BLUE,
                             borderRadius: opts.borderRadius,
                         }}>
                        <img src={icon_nav_share} alt={""}
                             style={{
                                 width: "80%", height: "100%",
                             }}/>
                    </div>
                </>
            }
        </div>
    </>;
};

export default HamburgerNavigationMenu;