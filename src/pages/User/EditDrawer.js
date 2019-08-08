import React, { Component } from 'react';
import { Drawer, Select, Form, Row, Input, Col, Button } from 'antd';
import { userRolesMap } from '@/constant';
import styles from "../Profile/index.less";

const { TextArea } = Input;
const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    md: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    md: { span: 18 },
  },
};

class EditDrawer extends Component {

  onSubmit = () => {
    const {
      form: { getFieldsValue },
      onSubmit,
    } = this.props;

    const values = getFieldsValue();
    onSubmit({
      ...values,
      username: undefined,
    });
  };

  resetFields = () => {
    this.props.form.resetFields();
  };

  render() {
    const {
      title,
      visible,
      submiting,
      record: {
        username,
        nickname,
        tel,
        wechat,
        qq,
        email,
        signature,
        userRole,
      },
      toggleEditDrawer,
      form: {
        getFieldDecorator,
      }
    } = this.props;
    return (
      <Drawer
        width={600}
        title={title}
        visible={visible}
        onClose={() => toggleEditDrawer({ title: '', visible: false, record: {} })}
        destroyOnClose
      >
        <Form>
          <Row>
            <Form.Item label="用户名" {...formItemLayout}>
              {getFieldDecorator('username', {
                initialValue: username,
              })(<Input disabled/>)}
            </Form.Item>
          </Row>
          <Row>
            <Form.Item label="昵称" {...formItemLayout}>
              {getFieldDecorator('nickname', {
                initialValue: nickname,
              })(<Input placeholder="请输入昵称！"/>)}
            </Form.Item>
          </Row>
          <Row>
            <Col>
              <Form.Item label="手机号" {...formItemLayout}>
                {getFieldDecorator('tel', {
                  initialValue: tel,
                })(<Input placeholder="请输入手机号！"/>)}
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Item label="微信号" {...formItemLayout}>
                {getFieldDecorator('wechat', {
                  initialValue: wechat,
                })(<Input placeholder="请输入微信号！"/>)}
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Item label="QQ号" {...formItemLayout}>
                {getFieldDecorator('qq', {
                  initialValue: qq,
                })(<Input placeholder="请输入QQ号！"/>)}
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Item label="电子邮箱" {...formItemLayout}>
                {getFieldDecorator('email', {
                  initialValue: email,
                })(<Input placeholder="请输入电子邮箱！"/>)}
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Item label="个性签名" {...formItemLayout}>
                {getFieldDecorator('signature', {
                  initialValue: signature,
                })(
                  <TextArea
                    className={styles.textArea}
                    placeholder="支持html如：<span style='color: red; font-size:14px'>共和国的接班人～</span>"
                  />
                )}
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Item label="权限" {...formItemLayout}>
                {getFieldDecorator('userRole', {
                  initialValue: userRole,
                })(
                  <Select>
                    {Object.keys(userRolesMap).map(item => <Option key={item}>{userRolesMap[item]}</Option>)}
                  </Select>
                )}
              </Form.Item>
            </Col>
          </Row>
          <Row style={{ textAlign: 'right' }}>
            <Col>
              <Button onClick={this.resetFields} style={{ marginRight: 10 }}>
                重置
              </Button>
              <Button type="primary" onClick={this.onSubmit} loading={submiting}>
                提交
              </Button>
            </Col>
          </Row>
        </Form>
      </Drawer>
    );
  }
}

export default Form.create()(EditDrawer);
