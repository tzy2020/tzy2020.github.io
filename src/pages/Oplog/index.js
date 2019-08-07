import React, { Component } from 'react';
import { connect } from 'dva';
import { Table } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import moment from 'moment';
import styles from './index.less'

@connect(({ oplog, loading }) => ({
  oplog,
  loading: loading.models.oplog,
}))
class Oplog extends Component {

  columns = () => [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: '用户名',
      dataIndex: 'nickname',
    },
    {
      className: styles.href,
      title: 'HREF',
      dataIndex: 'href',
    },
    {
      title: 'IP',
      dataIndex: 'ip',
    },
    {
      title: '时间',
      dataIndex: 'inputTime',
      render: text => moment(text).format('YYYY-MM-DD HH:mm:ss'),
    },
  ];

  render() {
    const {
      loading,
      oplog: { list },
    } = this.props;
    return (
      <PageHeaderWrapper>
        <Table
          rowKey="id"
          size="small"
          loading={loading}
          pagination={{
            showSizeChanger: true,
            defaultPageSize: 20,
            pageSizeOptions: ['20', '50', '100', '500'],
          }}
          columns={this.columns()}
          dataSource={list}
        />
      </PageHeaderWrapper>
    );
  }
}

export default Oplog;
