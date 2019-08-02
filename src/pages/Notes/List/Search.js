import { Component } from 'react';
import { Form, Input, DatePicker, Row, Col, Button } from 'antd';

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
    this.props.onSubmit();
  };

  render() {
    const { form: { getFieldDecorator } } = this.props;
    return (
      <Form>
        <Row gutter={20}>
          <Col { ...formLayout }>
            <FormItem label={'录入时间'}>
              {getFieldDecorator('inputTime', {

              })(
                <RangePicker style={{width: '100%'}}/>
              )}
            </FormItem>
          </Col>
          <Col { ...formLayout }>
            <FormItem label={'修改时间'}>
              {getFieldDecorator('updateTime', {

              })(
                <RangePicker style={{width: '100%'}}/>
              )}
            </FormItem>
          </Col>
          <Col { ...formLayout }>
            <FormItem label={'标题'}>
              {getFieldDecorator('title', {

              })(
                <Input
                  placeholder={'请输入标题搜索'}
                />
              )}
            </FormItem>
          </Col>
          <Col { ...formLayout }>
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
          <Col>
            <Button type={'primary'} onClick={this.onSearch}>查询</Button>
            <Button style={{ marginLeft: 20 }}>重置</Button>
          </Col>
        </Row>
      </Form>
    )
  }
}

export default Form.create()(Search);
