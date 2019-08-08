import React, { Component } from 'react';
import { connect } from 'dva';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

@connect(({ laboratory, loading }) => ({
  laboratory,
  loading: loading.models.spider,
}))
class Laboratory extends Component {

  render() {
    return (
      <PageHeaderWrapper>
        实验室已关闭！
      </PageHeaderWrapper>
    );
  }
}

export default Laboratory;
