import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Form, Select, Button, Input } from 'antd';

import { fetchPokemon } from 'utils/actions';

const FormItem = Form.Item;
const Option = Select.Option;

class SearchForm extends React.Component {
  state = {
    queryType: 'name'
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  handleSelectChange = (value) => {
    console.log(value)
    this.props.form.setFieldsValue({
      queryType: `meow ${value}`,
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const fetchPokemon = this.props.fetchPokemon;
  
    return (
      <div style={styles.searchForm}>
        <h1>Search</h1>
        <Form onSubmit={this.handleSubmit}>
          <FormItem 
            label='Query'
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 12 }}
          >
            { getFieldDecorator('query', {
              rules: [{required: true, message: 'Please input your query!'}],
            })(
            <Input />
            )}
          </FormItem>
          <FormItem
            label='Query Type'
            labelCol={{ span: 5 }}
            wrapperCol = {{ span: 12 }} 
          >
            { getFieldDecorator('queryType', {
              rules: [{required: true, message: 'Please select a query type!'}],
            })(
              <Select
                placeholder='Select a option and change input text above'
                onChange={this.handleSelectChange}
              >
                <Option value='name'>name</Option>
                <Option value='type'>type</Option>
              </Select>
            )}
          </FormItem>  
          <FormItem
            wrapperCol={{ span: 12, offset: 5 }}
          >
            <Button type='primary' htmlType='submit'>
              Submit
            </Button>
          </FormItem>
        </Form>        
      </div>
    );
  }
}

const styles = {
  searchForm: {
    margin: 16,
    padding: 16,
    backgroundColor: 'white',
  }
};

const mapDispatchToProps = (dispatch) => ({
  fetchPokemon: (name) => {
    name = name.trim().toLowerCase();
    if (name) {
      dispatch(fetchPokemon(name));
    }
  },
});

const withConnect = connect(null, mapDispatchToProps);
const withForm = Form.create()(SearchForm);

export default compose(withConnect)(withForm);