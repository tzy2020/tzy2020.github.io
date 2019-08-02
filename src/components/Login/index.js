import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'antd';
import classNames from 'classnames';
import LoginItem from './LoginItem';
import LoginSubmit from './LoginSubmit';
import styles from './index.less';
import LoginContext from './LoginContext';

class Login extends Component {
  static propTypes = {
    className: PropTypes.string,
    defaultActiveKey: PropTypes.string,
    onSubmit: PropTypes.func,
  };

  static defaultProps = {
    className: '',
    defaultActiveKey: '',
    onSubmit: () => {},
  };

  constructor(props) {
    super(props);
    this.state = {
      type: props.defaultActiveKey,
      tabs: [],
      active: {},
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const { active, type } = this.state;
    const { form, onSubmit } = this.props;
    const activeFileds = active[type];
    form.validateFields(activeFileds, { force: true }, (err, values) => {
      onSubmit(err, values);
    });
  };

  render() {
    const { className, children, form } = this.props;
    return (
      <LoginContext.Provider value={form}>
        <div className={classNames(className, styles.login)}>
          <Form onSubmit={this.handleSubmit}>
            {children}
          </Form>
        </div>
      </LoginContext.Provider>
    );
  }
}

Login.Submit = LoginSubmit;
Object.keys(LoginItem).forEach(item => {
  Login[item] = LoginItem[item];
});

export default Form.create()(Login);
