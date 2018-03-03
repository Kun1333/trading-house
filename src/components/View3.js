import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { } from 'semantic-ui-react'

import { View2 } from './View2'

// import { getEvent } from './actions';


class View3Internal extends React.Component {
  componentWillMount() {
    // console.log('');
  }

  static get propTypes() {
    return {
      value: PropTypes.string.isRequired,
      value2: PropTypes.string.isRequired,
    }
  }

  render() {
    return <div>
      <View2 />
      <div>{this.props.value}</div>
      <div>{this.props.value2}</div>
    </div>
  }
}

export const View3 = connect(
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
) (View3Internal);