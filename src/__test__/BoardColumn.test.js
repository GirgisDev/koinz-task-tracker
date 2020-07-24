import React from 'react';
import BoardColumn from '../components/BoardColumn';
import TaskDetails from '../components/TaskDetails';
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./../reducers/";
import middleware from "./../middlewares/";
const store = createStore(reducer, middleware);

describe('BoardColumn component', () => {
  let component;
  let items = [{ id: "simulatedId1", description: "Walk the dog", status: "todo" }];
  Enzyme.configure({
    adapter: new Adapter()
  });

  beforeEach(() => {
    component = mount(
      <Provider store={store}>
        <BoardColumn items={items} name="Todo" status="todo" />
      </Provider>
    );
  });

  it('should render the right column name', () => {
    expect(component.find('h2').hasClass('column-name')).toEqual(true);
  });

  it('should render task with the sent data', () => {
    expect(component.find(".board-column__task").text()).toEqual(items[0].description);
  });

  it('should show details component TaskDetails with the right data', () => {
    component.find(`div#${items[0].id}`).simulate('click');
    let detailsComponent = mount(
      <TaskDetails
        task={items[0]}
        status="Todo" />
    );
    expect(detailsComponent.find(".task-details__header").text()).toEqual("Task status: Todo");
  })
})
