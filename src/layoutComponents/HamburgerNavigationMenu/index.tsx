import {COLORS, Device} from "../../utils/constants/constants.ts";

import nav_arrow_up from "../../assets/Navbar/nav-arrow-up.svg";
import nav_share from "../../assets/Navbar/nav-share.svg";
import nav_hamburger from "../../assets/Navbar/nav-hamburger.svg";

import nav_telegram from "../../assets/Navbar/nav-telegram.svg";
import nav_whatsapp from "../../assets/Navbar/nav-whatsapp.svg";
import nav_facebook from "../../assets/Navbar/nav-facebook.svg";
import nav_twitter from "../../assets/Navbar/nav-twitter.svg";
import nav_instagram from "../../assets/Navbar/nav-instagram.svg";

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
    };
    if (device == Device.desktop || device == Device.tablet) {
        opts = {
            topLevelDirection: 'column',
            optionsDirection: 'column',
            optionsWidth: '40px',
            optionsHeight: '100%',
            length: '40px',
            borderRadius: "0% 0% 50% 50%",
            rotateArrow: false,
        };
    } else if (device == Device.mobile) {
        opts = {
            topLevelDirection: 'row-reverse',
            optionsDirection: 'row',
            optionsHeight: '40px',
            optionsWidth: '100%',
            borderRadius: "50% 0% 0% 50%",
            length: '40px',
            rotateArrow: true,
        };
    }
    // shareOptions
    // shareOptions.label should be unique
    const shareOptions: { label: string, iconUrl: string }[] = [
        {label: "TG", iconUrl: nav_telegram},
        {label: "WA", iconUrl: nav_whatsapp},
        {label: "FB", iconUrl: nav_facebook},
        {label: "TT", iconUrl: nav_twitter},
        {label: "IG", iconUrl: nav_instagram},
    ];

    const shareOptionsComponents = shareOptions.map((item) => {
        return <div className={`ao-hamburger-navigation-menu-share-options ${item.label}`}
                    onClick={() => setIsExpanded(true)}
                    style={{
                        display: "flex",
                        paddingRight: "4px",
                        paddingTop: "8px",
                        paddingBottom: "8px",
                        // backgroundColor: COLORS.GOLDEN_AMBER,
                    }}>
            <img src={item.iconUrl} alt={""}
                 style={{
                     // backgroundColor: COLORS.MOSSY_OLIVE,
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
                <img src={nav_hamburger} alt={""}
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
                        {/*<div className={'ao-hamburger-navigation-menu-share-sss'}*/}
                        {/*     style={{*/}
                        {/*         display: "flex",*/}
                        {/*         backgroundColor: COLORS.CHARCOAL_SLATE,*/}
                        {/*         flexDirection: opts.optionsDirection,*/}
                        {/*         boxSizing: "border-box",*/}
                        {/*         paddingTop: "10px",*/}
                        {/*         paddingBottom: "10px",*/}
                        {/*         width: "auto",*/}
                        {/*         height: "100%",*/}
                        {/*     }}>*/}
                        {shareOptionsComponents}
                        {/*</div>*/}
                    </div>
                    <div className={'ao-hamburger-navigation-menu-action-hide-share-options'}
                         onClick={() => setIsExpanded(false)}
                         style={{
                             display: "flex",
                             width: opts.length,
                             height: opts.length,
                             padding: "10px",
                             boxSizing: "border-box",
                             backgroundColor: COLORS.STEEL_BLUE,
                             borderRadius: opts.borderRadius,
                         }}>
                        <img src={nav_arrow_up} alt={""}
                             style={{
                                 width: "100%", height: "100%",
                                 transform: opts.rotateArrow ? "rotate(90deg)" : "rotate(0deg)"
                             }}/>
                    </div>
                </> :
                <>

                    <div className={'ao-hamburger-navigation-menu-action-open-share-options'}
                         onClick={() => setIsExpanded(true)}
                         style={{
                             display: "flex",
                             width: opts.length,
                             height: opts.length,
                             padding: "10px",
                             boxSizing: "border-box",
                             backgroundColor: COLORS.STEEL_BLUE,
                             borderRadius: opts.borderRadius,
                         }}>
                        <img src={nav_share} alt={""}
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