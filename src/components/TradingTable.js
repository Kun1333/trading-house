import React from 'react'
import { connect } from 'react-redux'
import { Table, Icon, Button, Container, Header } from 'semantic-ui-react'


import { TradingItem } from './TradingItem';
import { CreateTradingItem } from './CreateTradingItem';


class TradingTableInternal extends React.Component {
  componentWillMount() {
    console.log(this.props.items);
  }

  createHeader(value, rowSpan, colSpan) {
    return <Table.HeaderCell
      key={value}
      rowSpan={rowSpan}
      colSpan={colSpan}>{value}</Table.HeaderCell>
      //<Table.Row>
      //          <Table.HeaderCell rowSpan='2'>Name</Table.HeaderCell>
      //          <Table.HeaderCell rowSpan='2'>Type</Table.HeaderCell>
      //          <Table.HeaderCell rowSpan='2'>Files</Table.HeaderCell>
      //          <Table.HeaderCell colSpan='3'>Languages</Table.HeaderCell>
      //        </Table.Row>
      //        <Table.Row>
      //          <Table.HeaderCell>Ruby</Table.HeaderCell>
      //          <Table.HeaderCell>JavaScript</Table.HeaderCell>
      //          <Table.HeaderCell>Python</Table.HeaderCell>
      //</Table.Row>
  }


  render() {
    let headers = [];

    headers.push(this.createHeader('id', 2));
    headers.push(this.createHeader('name', 2));
    headers.push(this.createHeader('price', null, 2));

    let priceHeaders = [];
    priceHeaders.push(this.createHeader('in'));
    priceHeaders.push(this.createHeader('out'));

    let items = this.props.items.map(item => <TradingItem key={item.id} value={item}/>)

    return (<Container text><br/>
      <Header as='h3'>Inventory List</Header>
      <Table celled structured>
        <Table.Header>
          <Table.Row>{headers}</Table.Row>
          <Table.Row>{priceHeaders}</Table.Row>
        </Table.Header>
        <Table.Body>{items}</Table.Body>
        <Table.Footer fullWidth>
          <Table.Row>
            <Table.HeaderCell colSpan='4'>
              <CreateTradingItem/>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table></Container>);
  }
}

export const TradingTable = connect(
 state => {
   return {
     items: state.config.getIn(['tradingTable', 'data']).toJS(),
 };
},
 (dispatch, props) => {
   return {
     // setCreateItemActive: () => dispatch(setCreateItemActive(true))
   };
 }
) (TradingTableInternal);