import React, { Component } from 'react';
import { connect } from 'dva';
import { Form, Input, Row, Col, Button, Spin } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import styles from './index.less';

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

const { TextArea } = Input;

@connect(({ profile, loading }) => ({
  profile,
  loading: loading.models.profile,
  submiting: loading.effects['profile/updateProfile'],
}))
class Profile extends Component {
  updateConfig = () => {
    const {
      dispatch,
      form: { getFieldsValue },
    } = this.props;
    const values = getFieldsValue();
    dispatch({
      type: 'profile/updateProfile',
      payload: {
        ...values,
      },
    });
  };

  resetFields = () => {
    this.props.form.resetFields();
  };

  render() {
    const {
      form: { getFieldDecorator },
      profile: {
        username, qq, tel, wechat, email, nickname, signature,
      },
      loading,
      submiting,
    } = this.props;

    return (
      <PageHeaderWrapper>
        <Spin spinning={Boolean(loading)}>
          <div className={styles['search-form']}>
            <Form>
              <Row>
                <Form.Item label="用户名" {...formItemLayout}>
                  {getFieldDecorator('username', {
                    initialValue: username,
                  })(
                    <Input disabled/>
                  )}
                </Form.Item>
              </Row>
              <Row>
                <Form.Item label="昵称" {...formItemLayout}>
                  {getFieldDecorator('nickname', {
                    initialValue: nickname,
                  })(
                    <Input
                      placeholder={'请输入昵称！'}
                    />
                  )}
                </Form.Item>
              </Row>
              <Row>
                <Col>
                  <Form.Item label="手机号" {...formItemLayout}>
                    {getFieldDecorator('tel', {
                      initialValue: tel,
                    })(
                      <Input
                        placeholder={'请输入手机号！'}
                      />
                    )}
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Item label="微信号" {...formItemLayout}>
                    {getFieldDecorator('wechat', {
                      initialValue: wechat,
                    })(
                      <Input
                        placeholder={'请输入微信号！'}
                      />
                    )}
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Item label="QQ号" {...formItemLayout}>
                    {getFieldDecorator('qq', {
                      initialValue: qq,
                    })(
                      <Input
                        placeholder={'请输入QQ号！'}
                      />
                    )}
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Item label="电子邮箱" {...formItemLayout}>
                    {getFieldDecorator('email', {
                      initialValue: email,
                    })(
                      <Input
                        placeholder={'请输入电子邮箱！'}
                      />
                    )}
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
              <Row style={{ textAlign: 'right' }}>
                <Col>
                  <Button onClick={this.resetFields} style={{ marginRight: 10 }}>重置</Button>
                  <Button type={'primary'} onClick={this.updateConfig} loading={submiting}>提交</Button>
                </Col>
              </Row>
            </Form>
          </div>
        </Spin>
      </PageHeaderWrapper>
    );
  }
}

export default Form.create()(Profile);
