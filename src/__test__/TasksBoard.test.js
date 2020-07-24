import React from 'react';
import TasksBoard from '../components/TasksBoard';
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./../reducers/";
import middleware from "./../middlewares/";
const store = createStore(reducer, middleware);

describe('TasksBoard component', () => {
  let component;
  Enzyme.configure({
    adapter: new Adapter()
  });

  beforeEach(() => {
    component = shallow(
      <Provider store={store}>
        <TasksBoard />
      </Provider>
    );
  });

  it('should render the right way', () => {
    expect(component).toMatchSnapshot();
  })
  it('should render the header the right way', () => {
    let mountedComponent = mount(
      <Provider store={store}>
        <TasksBoard />
      </Provider>
    );
    expect(mountedComponent.find("h1").text()).toBe("Task tracking board");
  })
})
