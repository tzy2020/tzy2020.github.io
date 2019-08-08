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
        Spider 休息中～
      </PageHeaderWrapper>
    );
  }
}

export default Spider;
