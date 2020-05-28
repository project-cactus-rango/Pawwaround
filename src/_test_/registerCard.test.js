import React from "react";
import { render } from "@testing-library/react";
import RegisterCard from "../Components/auth/register/registerCard";
import { Provider } from "react-redux";
import store from "../redux/store";
import {HashRouter} from 'react-router-dom'

test("onSubmitSuccess ", () => {
  const { container } = render(
    <HashRouter>
        <Provider store={store}>
      <RegisterCard />
    </Provider>
    </HashRouter>
  );
  const onSubmitSuccess = container.querySelector("input");
  expect(onSubmitSuccess).toBeDefined();
});