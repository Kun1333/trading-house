import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { Modal, Button, Icon, Form, } from 'semantic-ui-react'

import { setCreateItemActive } from './../actions';


class CreateTradingItemInternal extends React.Component {
  componentWillMount() {
  }

  static get propTypes() {
    return {
      value: PropTypes.object.isRequired
    };
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
                    <input placeholder='Name' />
                  </Form.Field>
                </Form>);
    let submit = <Button type='submit' color='blue' >Submit</Button>;
    let cancel = <Button type='submit' onClick={() => this.props.setCreateItemActive(false)}>Cancel</Button>;

    return (<Modal
              open={true}
              header=''

              actions={[
                'Cancel',
                { key: 'done', content: 'Done', positive: true },
              ]}>

              <Modal.Header>Add New Trading Item</Modal.Header>
              <Modal.Content>{content}</Modal.Content>
              <Modal.Actions>{cancel}{submit}</Modal.Actions>
             </Modal>);
  }
}

export const CreateTradingItem = connect(
 state => {
   return {
     active: state.createItem.get('active')
 };
},
  (dispatch, props) => {
     return {
       setCreateItemActive: (value) => dispatch(setCreateItemActive(value))
     };
   }
) (CreateTradingItemInternal);