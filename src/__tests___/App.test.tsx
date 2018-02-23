import * as React from "react";
import { MemoryRouter } from "react-router";
import { render } from "enzyme";

import * as App from "../App";

describe("Test suite 'Smoke'", () => {
  it("should index (Home) component", function() {
    const app = render(
      <MemoryRouter>
        <App.Main />
      </MemoryRouter>
    );
    expect(app.text()).toMatch("Home");
  });

  it("should handle a URL", () => {
    const app = render(
      <MemoryRouter
        initialEntries={["/kubernetes/kubernetes", "/foo/bar"]}
        initialIndex={1}
      >
        <App.Main />
      </MemoryRouter>
    );

    expect(app.text()).toMatch("Repo: foo/bar");
  });
});
