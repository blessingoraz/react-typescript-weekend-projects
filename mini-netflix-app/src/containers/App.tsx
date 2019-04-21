import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';

import { getVideos } from '../actions/videos';

interface IProps {
  dispatch: () => void
}

interface IState {

}

interface ComponentDispatchProps {
  getVideos: typeof getVideos;
}
// not necessary to combine them into another type, but it cleans up the next line
type ComponentProps = IState & ComponentDispatchProps & IProps;

class App extends Component<ComponentProps> {
  constructor(prop: IProps) {
    super(prop);

    // this.state = {

    // }
  }
  componentDidMount() {
    this.props.dispatch(getVideos());
  }
  render() {
    return (
      <div className="App">
        hello here
      </div>
    );
  }
}

// Connect App to the Redux store so that it has this.props.matchesStore
const mapStateToProps = (state: object) => {
  return {
    
  };
};


export default connect<IState, ComponentDispatchProps, IProps>(
  mapStateToProps,
  // mapDispatchToProps
)(App);
