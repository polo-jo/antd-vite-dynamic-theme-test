import { Button } from "antd";
import * as React from "react";

// import "antd/dist/antd.css";
import "./styles.less";

function App(): JSX.Element {
    return (
        <>
            <h1 style={{ padding: "2rem" }}>antd Test</h1>
            <div className="app">
                <Button type="primary">Primary Button</Button>
                <Button>Default Button</Button>
                <Button type="dashed">Dashed Button</Button>

                <Button type="text">Text Button</Button>
                <Button type="link">Link Button</Button>
            </div>
        </>
    );
}

export default App;
