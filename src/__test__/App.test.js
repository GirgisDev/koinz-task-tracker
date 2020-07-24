import React from 'react';
import App from '../components/App';
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();
const store = mockStore({});

describe('App component', () => {
  let component;

  Enzyme.configure({
    adapter: new Adapter()
  });

  it('should render the right way', () => {
    component = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(component).toMatchSnapshot();
  })
})
