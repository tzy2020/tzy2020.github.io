import React, { Component } from 'react';
import { connect } from 'dva';
import { Row, Col } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import PdfComponent from './pdf';
import Editor from './editor';

const layout = {
  mx: 24,
  md: 12,
};

@connect(({ pdf, loading }) => ({
  pdf,
  loading: loading.models.pdf,
}))
class Pdf extends Component {

  render() {
    return (
      <PageHeaderWrapper>
        <Row>
          <Col {...layout}>
            <Editor />
          </Col>
          <Col {...layout}>
            <PdfComponent/>
          </Col>
        </Row>
      </PageHeaderWrapper>
    );
  }
}

export default Pdf;
