import React from 'react'
import { connect } from 'react-redux'
import { Button, Popup } from 'semantic-ui-react'

// import { getEvent } from './actions';


class ViewInternal extends React.Component {
  componentWillMount() {
  }

  render() {
    return (<div>
      <Popup
        trigger={<Button color='red' icon='flask' content='Activate doomsday device' />}
        content={<Button color='green' content='Confirm the launch' />}
        on='click'
        position='top right'
      />
    </div>);
  }
}

export const View = connect(
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
) (ViewInternal);