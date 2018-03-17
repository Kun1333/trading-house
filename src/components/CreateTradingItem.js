import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { Modal, Button, Icon, Form, Input } from 'semantic-ui-react'

import { setCreateItemActive, setCreateItemChangeValue, setCreateItemSave } from './../actions';


class CreateTradingItemInternal extends React.Component {
  componentWillMount() {
  }

  handleChange(id, event, entity) {
    this.props.setCreateItemChangeValue(id, entity.value);
  }

  handleSubmit() {
    this.props.setCreateItemSave(this.props.value.toJS());
  }

  render() {
    if(!this.props.active){
      return (<Button onClick={() => this.props.setCreateItemActive(true)} floated='right' icon labelPosition='left' primary size='small'>
                      <Icon name='cubes' /> Add Item
                    </Button>);
    }

    let content =  (<Form>
                  <Form.Field>
                    <label>Item Name</label>
                    <Input placeholder='Name'
                      defaultValue={this.props.value.get('name')}
                      onChange={this.handleChange.bind(this, 'name')}/>

                  </Form.Field>
                  <Form.Field>
                    <label>Item Price</label>
                    <Input placeholder='Price'
                      defaultValue={this.props.value.get('price')}
                      onChange={this.handleChange.bind(this, 'price')}/>
                  </Form.Field>
                </Form>);
    let submit = <Button type='submit' color='blue' onClick={this.handleSubmit.bind(this)}>Submit</Button>;
    let cancel = <Button type='submit' onClick={() => this.props.setCreateItemActive(false)}>Cancel</Button>;

    return (<Modal open={true}>
              <Modal.Header>Add New Trading Item</Modal.Header>
              <Modal.Content>{content}</Modal.Content>
              <Modal.Actions>{cancel}{submit}</Modal.Actions>
             </Modal>);
  }
}

export const CreateTradingItem = connect(
 state => {

   return {
     active: state.createItem.get('active'),
     value: state.createItem.get('value')
 };
},
  (dispatch, props) => {
     return {
       setCreateItemActive: (value) => dispatch(setCreateItemActive(value)),
       setCreateItemChangeValue: (id, value) => dispatch(setCreateItemChangeValue(id, value)),
       setCreateItemSave: (value) => dispatch(setCreateItemSave(value)),
     };
   }
) (CreateTradingItemInternal);