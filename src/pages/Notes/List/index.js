import React, { Component } from 'react';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import { Divider, Spin } from 'antd';
import { connect } from 'dva';
import Search from './Search';
import List from './List';

@connect(({ notes, loading }) => ({
  notes,
  loading: loading.effects['notes/fetchNotesList'],
  list: notes.list,
}))
class Noets extends Component {
  onSubmit = params => {
    const { dispatch } = this.props;
    dispatch({
      type: 'notes/fetchNotesList',
      params,
    });
  };

  render() {
    const { list, loading, dispatch } = this.props;
    return (
      <PageHeaderWrapper>
        <Spin spinning={Boolean(loading)}>
          <Search onSubmit={this.onSubmit} loading={loading} />
          <Divider />
          <List dispatch={dispatch} data={list} />
        </Spin>
      </PageHeaderWrapper>
    );
  }
}

export default Noets;
