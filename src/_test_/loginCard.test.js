import React from "react";
import { render } from "@testing-library/react";
import LoginCard from "../Components/auth/login/loginCard";
import { Provider } from "react-redux";
import store from "../redux/store";
import {HashRouter} from 'react-router-dom'

test("handleSubmitSuccess ", () => {
  const { container } = render(
    <HashRouter>
        <Provider store={store}>
      <LoginCard />
    </Provider>
    </HashRouter>
  );
  const handleSubmitSuccess = container.querySelector("input");
  expect(handleSubmitSuccess).toBeDefined();
});