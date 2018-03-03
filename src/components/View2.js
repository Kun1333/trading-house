import React from 'react'
import { connect } from 'react-redux'
import { Segment, Dimmer, Loader } from 'semantic-ui-react'

// import { getEvent } from './actions';


class View2Internal extends React.Component {
  componentWillMount() {
  }

  render() {
    return (
      <Segment>
        <Dimmer active>
          <Loader />
        </Dimmer>
      </Segment>
    );
  }
}

export const View2 = connect(
 state => {
   return {
     config: state.config,
 };
},
 (dispatch, props) => {
   return {
     // getEvent: (url) => dispatch(getEvent(url))
   };
 }
) (View2Internal);