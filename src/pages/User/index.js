import React, { Component } from 'react';
import { connect } from 'dva';
import { Table, Tag, Popconfirm, Divider } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import styles from './index.less';
import { userRolesMap } from '../../constant';
import EditDrawer from "./EditDrawer";


@connect(({ user, loading }) => ({
  user,
  loading: loading.effects['user/fetchUsers'],
  submiting: loading.effects['user/submitUserInfo']
}))
class Users extends Component {

  toggleEditDrawer = ({ title, visible, record = {} }) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'user/saveState',
      payload: {
        title, visible, record,
      }
    });
  };

  onSubmit = params => {
    const { dispatch } = this.props;
    dispatch({
      type: 'user/submitUserInfo',
      payload: params,
    })
  };

  deleteUser = record => {
    const { dispatch } = this.props;
    dispatch({
      type: 'user/deleteUser',
      payload: {
        uid: record.uid,
      }
    })
  };

  columns = () => [
    {
      title: '编号',
      dataIndex: 'uid',
      className: styles['user-id'],
    },
    {
      title: '用户名',
      dataIndex: 'username',
      className: styles['user-name'],
    },
    {
      title: '昵称',
      dataIndex: 'nickname',
      className: styles['user-name'],
    },
    {
      title: '权限',
      dataIndex: 'userRole',
      className: styles['user-role'],
      render: (text, record) => (
        <Tag color={text === 2 ? 'blue' : text === 1024 ? 'red' : ''}>
          {userRolesMap[text]}
        </Tag>
      ),
    },
    {
      title: '操作',
      dataIndex: 'operation',
      render: (text, record) => <div>
        <Popconfirm
          title="确认删除？"
          onConfirm={() => this.deleteUser(record)}
        >
          <a>删除</a>
        </Popconfirm>
        <Divider type="vertical" />
        <a onClick={() => this.toggleEditDrawer({ title: `用户编辑：${record.nickname}`, visible: true, record })}>编辑</a>
      </div>
    },
  ];

  render() {
    const {
      loading,
      submiting,
      user: { list, visible, title, record },
    } = this.props;
    return (
      <PageHeaderWrapper>
        <Table
          rowKey="uid"
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
        <EditDrawer
          onSubmit={this.onSubmit}
          submiting={submiting}
          title={title}
          visible={visible}
          record={record}
          toggleEditDrawer={this.toggleEditDrawer}
        />
      </PageHeaderWrapper>
    );
  }
}

export default Users;
