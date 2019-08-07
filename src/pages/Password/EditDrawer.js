import React, { Component } from 'react';
import { Drawer, Form, Input, Button } from 'antd';

const { Item: FormItem } = Form;

class EditDrawer extends Component {
  onSubmit = () => {
    const {
      form: { validateFieldsAndScroll },
      onSubmit,
      record,
    } = this.props;
    validateFieldsAndScroll((err, values) => {
      if (!err) {
        onSubmit({
          ...values,
          id: record.id,
        });
      }
    });
  };

  render() {
    const {
      form: { getFieldDecorator },
      toggleEditDrawer,
      record,
      visible,
      title,
      submitting,
    } = this.props;
    return (
      <Drawer
        title={title}
        visible={visible}
        onClose={() => toggleEditDrawer({ visible: false, title: '', record: {} })}
        destroyOnClose
        width={600}
      >
        <Form>
          <FormItem label="标题">
            {getFieldDecorator('title', {
              initialValue: record.title,
            })(<Input placeholder="请输入标题" />)}
          </FormItem>
          <FormItem label="网址">
            {getFieldDecorator('url', {
              initialValue: record.url,
            })(<Input placeholder="请输入网址，形如：https://liushuaiqi.top" />)}
          </FormItem>
          <FormItem label="账号">
            {getFieldDecorator('account', {
              initialValue: record.account,
            })(<Input placeholder="请输入账号" />)}
          </FormItem>
          <FormItem label="密码">
            {getFieldDecorator('password', {
              initialValue: record.password,
            })(<Input placeholder="请输入密码" />)}
          </FormItem>
          <FormItem label="备注">
            {getFieldDecorator('memo', {
              initialValue: record.memo,
            })(<Input placeholder="备注" />)}
          </FormItem>
        </Form>
        <div style={{ textAlign: 'right' }}>
          <Button
            onClick={() => toggleEditDrawer({ visible: false, title: '', record: {} })}
            style={{ marginRight: 10 }}
          >
            取消
          </Button>
          <Button type="primary" onClick={this.onSubmit} loading={submitting}>
            提交
          </Button>
        </div>
      </Drawer>
    );
  }
}

export default Form.create()(EditDrawer);
