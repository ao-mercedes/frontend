import './font-face.css';
import './App.css';

import Body1 from "./layoutComponents/Body1";


import {ConfigProvider, Drawer, Layout,} from "antd";
import * as React from "react";
import {useDevice} from "./hooks/useDevice.ts";


const Body2: React.FC<{ children: React.ReactNode }> = ({children}) => <div className="body2 ao-body">{children}</div>;
const Body3: React.FC<{ children: React.ReactNode }> = ({children}) => <div className="body3 ao-body">{children}</div>;
const Body4: React.FC<{ children: React.ReactNode }> = ({children}) => <div className="body4 ao-body">{children}</div>;
const Body5: React.FC<{ children: React.ReactNode }> = ({children}) => <div className="body5 ao-body">{children}</div>;
const Body6: React.FC<{ children: React.ReactNode }> = ({children}) => <div className="body6 ao-body">{children}</div>;
const Body7: React.FC<{ children: React.ReactNode }> = ({children}) => <div className="body6 ao-body">{children}</div>;
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
            <ConfigProvider
                theme={{
                    token: {
                        fontSizeHeading1: 55,
                        fontSizeHeading2: 50,
                        fontSizeHeading3: 30,
                        fontSizeHeading4: 24,
                        fontSizeHeading5: 20,
                        fontFamily: "'Visby CF', 'sans-serif'",
                    },
                }}
            >
                <Layout>
                    <Drawer className="ao-modal" open={true}>
                        <div>asdfasdfasfdasdf</div>
                    </Drawer>
                    <Body1 props={{
                        device: device
                    }}>content</Body1>
                    <Body2>content</Body2>
                    <Body3>content</Body3>
                    <Body4>content</Body4>
                    <Body5>content</Body5>
                    <Body6>content</Body6>
                    <Body7>content</Body7>
                    <Footer>footer</Footer>
                </Layout>
            </ConfigProvider>
        </>
    );
}

export default App;
