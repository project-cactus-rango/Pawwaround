import React from "react";
import { render } from "@testing-library/react";
import LoginCard from "../Components/auth/login/loginForm";
import { Provider } from "react-redux";
import store from "../redux/store";
import {HashRouter} from 'react-router-dom'

test("onSubmit ", () => {
  const { container } = render(
    <HashRouter>
        <Provider store={store}>
      <LoginCard />
    </Provider>
    </HashRouter>
  );
  const onSubmit = container.querySelector("input");
  expect(onSubmit).toBeDefined();
});

test("onChange ", () => {
    const { container } = render(
      <HashRouter>
          <Provider store={store}>
        <LoginCard />
      </Provider>
      </HashRouter>
    );
    const onChange = container.querySelector("input");
    expect(onChange).toBeDefined();
  });

  test("onBlur ", () => {
    const { container } = render(
      <HashRouter>
          <Provider store={store}>
        <LoginCard />
      </Provider>
      </HashRouter>
    );
    const onBlur = container.querySelector("input");
    expect(onBlur).toBeDefined();
  });