import React, { Component } from 'react';
import { Form, Input } from 'antd';
import ItemMap from './map';
import LoginContext from './LoginContext';

const FormItem = Form.Item;

class WrapFormItem extends Component {

  getFormItemOptions = ({ onChange, defaultValue, customprops, rules }) => {
    const options = {
      rules: rules || customprops.rules,
    };
    if (onChange) {
      options.onChange = onChange;
    }
    if (defaultValue) {
      options.initialValue = defaultValue;
    }
    return options;
  };

  render() {
    const {
      form: { getFieldDecorator },
    } = this.props;

    const {
      customprops,
      name,
      ...restProps
    } = this.props;

    const options = this.getFormItemOptions(this.props);

    const otherProps = restProps || {};
    return (
      <FormItem>
        {getFieldDecorator(name, options)(<Input {...customprops} {...otherProps} />)}
      </FormItem>
    );
  }
}

const LoginItem = {};
Object.keys(ItemMap).forEach(key => {
  const item = ItemMap[key];
  LoginItem[key] = props => (
    <LoginContext.Consumer>
      {form => (
        <WrapFormItem
          customprops={item.props}
          rules={item.rules}
          {...props}
          type={key}
          form={form}
        />
      )}
    </LoginContext.Consumer>
  );
});

export default LoginItem;
