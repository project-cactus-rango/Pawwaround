import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Account from "../Components/DashboardLayout/TopBar/Account";
import { Provider } from "react-redux";
import store from "../redux/store";
import { HashRouter } from "react-router-dom";


test("handleOpen ", () => {
  const { container } = render(
    <HashRouter>
      <Provider store={store}>
        <Account />
      </Provider>
    </HashRouter>
  );
  const handleOpen = container.querySelector("input");
  expect(handleOpen).toBeDefined();
});

test("handleClose ", () => {
  const { container } = render(
    <HashRouter>
      <Provider store={store}>
        <Account />
      </Provider>
    </HashRouter>
  );
  const handleClose = container.querySelector("input");
  expect(handleClose).toBeDefined();
});

test("handleLogout ", () => {
  const { container } = render(
    <HashRouter>
      <Provider store={store}>
        <Account />
      </Provider>
    </HashRouter>
  );
  const handleLogout = container.querySelector("input");
  expect(handleLogout).toBeDefined();
});

test("onclick ", () => {
  const { container } = render(
    <HashRouter>
      <Provider store={store}>
        <Account />
      </Provider>
    </HashRouter>
  );
  const onClick = container.querySelector("input");
  expect(onClick).toBeDefined();
});

test("onclose ", () => {
  const { container } = render(
    <HashRouter>
      <Provider store={store}>
        <Account />
      </Provider>
    </HashRouter>
  );
  const onClose = container.querySelector("input");
  expect(onClose).toBeDefined();
});



