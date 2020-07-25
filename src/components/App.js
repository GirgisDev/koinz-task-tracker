import React, { useEffect } from 'react'
import './../App.css';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading';
import { handleInitialData } from '../actions/shared.action';
import TasksBoard from './TasksBoard';

const App = ({ dispatch, loading }) => {
  useEffect(() => {
    dispatch(handleInitialData())
  }, [])

  return (
    <div className="app">
      <LoadingBar />
      {loading
        ? <h3 className="text-center loading-txt">Loading...</h3>
        : <TasksBoard />
      }
    </div>
  );
}

const mapStateToProps = ({ loadingBar }) => ({ loading: loadingBar.default })

export default connect(mapStateToProps)(App);
