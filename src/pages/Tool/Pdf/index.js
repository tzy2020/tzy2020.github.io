import React, { Component } from 'react';
import { connect } from 'dva';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import PdfComponent from './pdf';

@connect(({ pdf, loading }) => ({
  pdf,
  loading: loading.models.pdf,
}))
class Pdf extends Component {

  render() {
    return (
      <PageHeaderWrapper>
        <PdfComponent />
      </PageHeaderWrapper>
    );
  }
}

export default Pdf;
