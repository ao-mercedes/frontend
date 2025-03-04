import "./font-face.css";
import "./App.css";

import {defaultTheme} from "./layoutComponents/themeDefault.ts";

import Body1 from "./layoutComponents/Body1";
import Body2 from "./layoutComponents/Body2";
import Body3 from "./layoutComponents/Body3";
import Body4 from "./layoutComponents/Body4";
import Body5 from "./layoutComponents/Body5";
import HamburgerNavigationMenu from "./layoutComponents/HamburgerNavigationMenu";

import {useDevice} from "./hooks/useDevice.ts";

import {ConfigProvider, Layout} from "antd";


const Body6: React.FC<{ children: React.ReactNode }> = ({children}) => (
    <div className="body6 ao-body">{children}</div>
);
const Body7: React.FC<{ children: React.ReactNode }> = ({children}) => (
    <div className="body7 ao-body">{children}</div>
);
const {Footer} = Layout;

const DEVICE_SIZE_BREAKPOINT = {
    mobile: {width: 480}, // 480 X 640
    tablet: {width: 800}, // 800 X 600
    desktop: {width: 2960}, // 2960 x 1440
};

function App() {
    const device = useDevice(DEVICE_SIZE_BREAKPOINT);
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
                    <Body3 device={device}/>
                    <Body4 device={device}/>
                    <Body5 device={device}></Body5>
                    <Body6>content</Body6>
                    <Body7>content</Body7>
                    <Footer>footer</Footer>
                </Layout>
            </ConfigProvider>
        </>
    );
}

export default App;
