import "./font-face.css";
import "./App.css";

import { defaultTheme } from "./layoutComponents/themeDefault.ts";

import Body1 from "./layoutComponents/Body1";
import Body2 from "./layoutComponents/Body2";
import HamburgerNavigationMenu from "./layoutComponents/HamburgerNavigationMenu";

import { useDevice } from "./hooks/useDevice.ts";

import { ConfigProvider, Layout } from "antd";

const Body3: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="body3 ao-body">{children}</div>
);
const Body4: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="body4 ao-body">{children}</div>
);
const Body5: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="body5 ao-body">{children}</div>
);
const Body6: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="body6 ao-body">{children}</div>
);
const Body7: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="body6 ao-body">{children}</div>
);
const { Footer } = Layout;

const DEVICE_SIZE_BREAKPOINT = {
  mobile: { width: 480 }, // 480 X 640
  tablet: { width: 800 }, // 800 X 600
  desktop: { width: 2960 }, // 2960 x 1440
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
          <HamburgerNavigationMenu device={device} />
        </div>
        <Layout>
          <Body1 device={device} />
          <Body2 device={device} />
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
