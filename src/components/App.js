import React, { Component } from 'react'
import './../App.css';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading';
import { handleInitialData } from '../actions/shared.action';
import TasksBoard from './TasksBoard';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div className="app">
        <LoadingBar />
        {this.props.loading 
          ? <h3 className="text-center">Loading...</h3> 
          : (
            <TasksBoard />
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ loadingBar }) => ({ loading: loadingBar.default })

export default connect(mapStateToProps)(App);
