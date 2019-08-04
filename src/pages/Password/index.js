import React, { Component } from 'react';
import { connect } from 'dva';
import { Table, Divider, Popconfirm } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import styles from './index.less';
import moment from "moment";

@connect(({ password, loading }) => ({
  password,
  loading: loading.models.password,
}))
class Password extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showUpdateRoleModal: false,
      editRecord: {},
    };
  }

  toggleUpdateRoleModal = (visible, record = {}) => {
    this.setState({
      showUpdateRoleModal: visible,
      editRecord: record,
    });
  };

  changeUserRole = value => {
    const { editRecord } = this.state;
    this.setState({
      editRecord: {
        ...editRecord,
        role: value,
      },
    });
  };

  updateUserRole = () => {
    const { dispatch } = this.props;
    const { editRecord } = this.state;
    dispatch({ type: 'password/updateUserRole', editRecord }).then(() => {
      this.toggleUpdateRoleModal(false, {});
    });
  };

  deleteUser = record => {
    const { dispatch } = this.props;
    dispatch({
      type: 'password/deleteUser',
      payload: {
        uid: record.uid,
      }
    })
  };

  columns = () => [
    {
      title: 'ID',
      dataIndex: 'id',
      className: styles['id'],
    },
    {
      title: '用户名',
      dataIndex: 'username',
      className: styles['usename'],
    },
    {
      title: '密码',
      dataIndex: 'password',
      className: styles['password'],
    },
    {
      title: '创建时间',
      dataIndex: 'inputTime',
      render: text => moment(text).format('YYYY-MM-DD HH:mm:ss'),
    },
    {
      title: '修改时间',
      dataIndex: 'updateTime',
      render: text => moment(text).format('YYYY-MM-DD HH:mm:ss'),
    },
    {
      title: '备注',
      dataIndex: 'memo',
      className: styles['memo'],
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
        <Divider/>
        <a>修改</a>
      </div>
    },
  ];

  render() {
    const {
      loading,
      password: { list },
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

export default Password;
