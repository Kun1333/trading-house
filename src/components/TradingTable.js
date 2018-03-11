import React from 'react'
import { connect } from 'react-redux'
import { Table, Icon, Button, Container, Header } from 'semantic-ui-react'


import { TradingItem } from './TradingItem';
import { CreateTradingItem } from './CreateTradingItem';


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

    return (<Container text><br/>
      <Header as='h3'>Inventory List</Header>
      <Table celled structured>
        <Table.Header><Table.Row>{headers}</Table.Row></Table.Header>
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
     items: state.config.get('testData'),
 };
},
 (dispatch, props) => {
   return {
     // setCreateItemActive: () => dispatch(setCreateItemActive(true))
   };
 }
) (TradingTableInternal);