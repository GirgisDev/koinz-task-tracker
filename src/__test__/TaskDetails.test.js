import React from 'react';
import TaskDetails from '../components/TaskDetails';
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./../reducers/";
import middleware from "./../middlewares/";
import { formatDate } from "./../utils/helpers";

const store = createStore(reducer, middleware);

describe('TaskDetails component', () => {
  let component,
    task = {
      id: "simulatedId1",
      description: "Walk the dog",
      status: "todo",
      createdAt: "2020-07-24T21:36:49.895Z"
    },
    status = "Todo",
    props = {
      closeFN: jest.fn(),
      deleteTask: jest.fn(),
      updateTask: jest.fn(),
    }

  Enzyme.configure({
    adapter: new Adapter()
  });

  beforeEach(() => {

    component = mount(
      <Provider store={store}>
        <TaskDetails
          task={task}
          status={status}
          closeFN={props.closeFN}
          deleteTask={props.deleteTask}
          updateTask={props.updateTask} />
      </Provider>
    );
  });

  it('should have header with the right status', () => {
    expect(component.find(".task-details__header").text()).toEqual(`Task status: ${status}`);
  });

  it('should show created at with the right time', () => {
    expect(component.find(".task-details__details__pale").text()).toEqual(formatDate(task.createdAt));
  });

  it('should have input with task description as its default value', () => {
    expect(component.find("#description").prop("defaultValue")).toEqual(task.description);
  });

  it('should call the close function', () => {
    component.find(".btn").at(2).simulate("click");
    expect(props.closeFN).toHaveBeenCalled();
  });
})
