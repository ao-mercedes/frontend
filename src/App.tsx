import "./font-face.css";
import "./App.css";

import {defaultTheme} from "./layoutComponents/themeDefault.ts";

import HamburgerNavigationMenu from "./layoutComponents/HamburgerNavigationMenu";
import Body1 from "./layoutComponents/Body1";
import Body2 from "./layoutComponents/Body2";
// import Body3 from "./layoutComponents/Body3";
// import Body4 from "./layoutComponents/Body4";
// import Body5 from "./layoutComponents/Body5";
// import Body6 from "./layoutComponents/Body6";

import {useDevice} from "./hooks/useDevice.ts";
import {useViewPortWidth} from "./hooks/useViewPortWidth.tsx";

import {ConfigProvider, Layout} from "antd";
import {useTimeout} from "./hooks/useTimeout.tsx";
import { lazy} from "react";

const Body3 = lazy(() => import( "./layoutComponents/Body3"));
const Body4 = lazy(() => import( "./layoutComponents/Body4"));
const Body5 = lazy(() => import( "./layoutComponents/Body5"));
const Body6 = lazy(() => import( "./layoutComponents/Body6"));
// const {Footer} = Layout;

const DEVICE_SIZE_BREAKPOINT = {
    mobile: {width: 480}, // 480 X 640
    tablet: {width: 800}, // 800 X 600
    desktop: {width: 2960}, // 2960 x 1440
};



function App() {
    const device = useDevice(DEVICE_SIZE_BREAKPOINT);
    const viewPortWidth = useViewPortWidth();

    const loadRemaining = useTimeout(1000);
    return (
        <>
            <ConfigProvider theme={defaultTheme()}>
                <div
                    className={"ao-hamburger-navigation-menu-wrapper"}
                    style={{
                        position: "fixed",
                        top: 0,
                        right: 0,
                        zIndex: 99999,
                    }}
                >
                    <HamburgerNavigationMenu device={device}/>
                </div>
                <Layout>
                    <Body1 device={device}/>
                    <Body2 device={device}/>
                    {loadRemaining && <>
                        <Body3 device={device}/>
                        <Body4 device={device}/>
                        <Body5 device={device} viewPortWidth={viewPortWidth}></Body5>
                        <Body6 device={device}/></>}
                    {/*<Footer>footer</Footer>*/}
                </Layout>
            </ConfigProvider>
        </>
    );
}

export default App;
