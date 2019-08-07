import React, { Component } from 'react';
import { connect } from 'dva';
import { Form, Input, Switch, Row, Col, Button, Spin } from 'antd';
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

@connect(({ system, loading }) => ({
  system,
  loading: loading.models.system,
  submiting: loading.effects['system/updateConfig'],
}))
class System extends Component {
  updateConfig = () => {
    const {
      dispatch,
      form: { getFieldsValue },
    } = this.props;
    const values = getFieldsValue();
    dispatch({
      type: 'system/updateConfig',
      payload: {
        ...values,
        mode: String(Number(values.mode)),
      },
    });
  };

  resetFields = () => {
    this.props.form.resetFields();
  };

  render() {
    const {
      form: { getFieldDecorator },
      system: { notice, mode },
      loading,
      submiting,
    } = this.props;

    return (
      <PageHeaderWrapper>
        <Spin spinning={Boolean(loading)}>
          <div className={styles['search-form']}>
            <Form>
              <Row>
                <Form.Item label="系统开关" {...formItemLayout}>
                  {getFieldDecorator('mode', {
                    initialValue: Boolean(Number(mode)),
                    valuePropName: 'checked',
                  })(<Switch unCheckedChildren="关闭中" checkedChildren="开放中" />)}
                </Form.Item>
              </Row>
              <Row>
                <Col>
                  <Form.Item label="公告栏内容" {...formItemLayout}>
                    {getFieldDecorator('notice', {
                      initialValue: notice,
                    })(
                      <TextArea
                        className={styles.textArea}
                        placeholder="支持html如：<span style='color: red; font-size:14px'>欢迎使用个人信息管理系统～</span>"
                      />
                    )}
                  </Form.Item>
                </Col>
              </Row>
              <Row style={{ textAlign: 'right' }}>
                <Col>
                  <Button onClick={this.resetFields} style={{ marginRight: 10 }}>
                    重置
                  </Button>
                  <Button type="primary" onClick={this.updateConfig} loading={submiting}>
                    提交
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
        </Spin>
      </PageHeaderWrapper>
    );
  }
}

export default Form.create()(System);
