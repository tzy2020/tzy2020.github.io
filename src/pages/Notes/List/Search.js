import { Component } from 'react';
import { Form, Input, DatePicker, Row, Col, Button, Select } from 'antd';

const { Item: FormItem } = Form;
const { RangePicker } = DatePicker;

const formLayout = {
  xs: { span: 24 },
  sm: { span: 12 },
  md: { span: 8 },
  lg: { span: 6 },
};

class Search extends Component {

  onSearch = () => {
    const { onSubmit, form: { getFieldsValue } } = this.props;
    const values = getFieldsValue();
    onSubmit({
      content: values.content,
      inputBeginTime: values['inputTime'] && values['inputTime'][0] ? values['inputTime'][0].valueOf() : undefined,
      inputEndTime: values['inputTime'] && values['inputTime'][1] ? values['inputTime'][1].valueOf() : undefined,
      updateBeginTime: values['updateTime'] && values['updateTime'][0] ? values['updateTime'][0].valueOf() : undefined,
      updateEndTime: values['updateTime'] && values['updateTime'][1] ? values['updateTime'][1].valueOf() : undefined,
    });
  };

  render() {
    const { form: { getFieldDecorator } } = this.props;
    return (
      <Form>
        <Row gutter={20}>
          <Col {...formLayout}>
            <FormItem label={'录入时间'}>
              {getFieldDecorator('inputTime', {})(
                <RangePicker style={{ width: '100%' }}/>
              )}
            </FormItem>
          </Col>
          <Col {...formLayout}>
            <FormItem label={'修改时间'}>
              {getFieldDecorator('updateTime', {})(
                <RangePicker style={{ width: '100%' }}/>
              )}
            </FormItem>
          </Col>
          <Col {...formLayout}>
            <FormItem label={'内容'}>
              {getFieldDecorator('content', {})(
                <Input
                  placeholder={'请输入关键词或内容搜索'}
                />
              )}
            </FormItem>
          </Col>
        </Row>
        <Row style={{ textAlign: 'right' }}>
          <Button type={'primary'} onClick={this.onSearch}>查询</Button>
          <Button style={{ marginLeft: 20 }}>重置</Button>
        </Row>
      </Form>
    )
  }
}

export default Form.create()(Search);
