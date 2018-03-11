import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { Table, Label } from 'semantic-ui-react'


class TradingItemInternal extends React.Component {
  componentWillMount() {
  }

  static get propTypes() {
    return {
      value: PropTypes.object.isRequired
    };
  }


  render() {
    return (<Table.Row>
              <Table.Cell>{this.props.value.id}</Table.Cell>
              <Table.Cell>{this.props.value.name}</Table.Cell>
              <Table.Cell>{this.props.value.price.in}</Table.Cell>
              <Table.Cell>{this.props.value.price.out}</Table.Cell>
            </Table.Row>);
  }
}

export const TradingItem = connect(
 state => {
   return {

 };
}
) (TradingItemInternal);