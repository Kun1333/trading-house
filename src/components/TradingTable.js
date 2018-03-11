import React from 'react'
import { connect } from 'react-redux'
import { Table } from 'semantic-ui-react'

import {  } from './../actions';
import { TradingItem } from './TradingItem';


class TradingTableInternal extends React.Component {
  componentWillMount() {
    console.log(this.props.items);
  }

  createHeader(rowSpan, colSpan, value) {
    return <Table.HeaderCell
      key={value}
      rowSpan={rowSpan}
      colSpan={colSpan}>{value}</Table.HeaderCell>
  }


  render() {
    let headers = ['id', 'name', 'price in', 'price out']
      .map(header => this.createHeader(1, 1, header));
    let items = this.props.items
      .map(item => <TradingItem key={item.id} value={item}/>)
    return (
      <Table celled structured>
        <Table.Header><Table.Row>{headers}</Table.Row></Table.Header>
        <Table.Body>{items}</Table.Body>
      </Table>);
  }
}

export const TradingTable = connect(
 state => {
   return {
     items: state.config.get('testData'),
 };
},
 (dispatch, props) => {
   return {
     // changeViewValue: (value) => dispatch(changeViewValue(value))
   };
 }
) (TradingTableInternal);