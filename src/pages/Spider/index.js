import React, { Component } from 'react';
import { connect } from 'dva';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

@connect(({ spider, loading }) => ({
  spider,
  loading: loading.models.spider,
}))
class Spider extends Component {

  render() {
    return (
      <PageHeaderWrapper>
        任重而道远的 Spider～
      </PageHeaderWrapper>
    );
  }
}

export default Spider;
