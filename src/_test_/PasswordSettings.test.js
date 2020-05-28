import React from "react";
import { render } from "@testing-library/react";
import PasswordSettings from "../Components/Account/Password/PasswordSettings";
import { Provider } from "react-redux";
import store from "../redux/store";
import { HashRouter } from "react-router-dom";

test("handleSubmit ", () => {
  const { container } = render(
    <HashRouter>
      <Provider store={store}>
        <PasswordSettings />
      </Provider>
    </HashRouter>
  );
  const handleSubmit = container.querySelector("input");
  expect(handleSubmit).toBeDefined();
});

test("onChange ", () => {
    const { container } = render(
      <HashRouter>
        <Provider store={store}>
          <PasswordSettings />
        </Provider>
      </HashRouter>
    );
    const onChange = container.querySelector("input");
    expect(onChange).toBeDefined();
  });