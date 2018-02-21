import * as React from "react";
import * as ReactDOM from "react-dom";
import { MemoryRouter } from "react-router";
import { shallow, render } from "enzyme";

import App from "./App";
import { Link } from "react-router-dom";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
});

it("should render 2 Link components", function() {
    const app = shallow(<App />);
    expect(app.find(Link)).toHaveLength(2);
});

it("should handle a URL", () => {
    const app = render(
        <MemoryRouter initialEntries={["kubernetes/kubernetes", "foo/bar"]} initialIndex={1}>
            <App />
        </MemoryRouter>
    );
  
    expect(app.text()).toMatch("kubernetes/kubernetes");
});
