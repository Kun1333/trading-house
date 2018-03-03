import React from 'react'
import { connect } from 'react-redux'
import { Button, Popup } from 'semantic-ui-react'

import { changeViewValue } from './../actions';


class ViewInternal extends React.Component {
  componentWillMount() {
  }

  render() {
    return (<div>
      <Popup
        trigger={<Button color='red' icon='flask' content='Activate doomsday device' />}
        content={<Button color='green' content='Confirm the launch'
          onClick={() => this.props.changeViewValue('booooo')}/>}
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
     changeViewValue: (value) => dispatch(changeViewValue(value))
   };
 }
) (ViewInternal);