import React, { Component } from 'react';
import { connect } from 'dva';
import { Table, Divider, Popconfirm, Icon, Button, Spin, Tooltip, message } from 'antd';
import moment from 'moment';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import EditDrawer from './EditDrawer';
import styles from './index.less';

@connect(({ password, loading }) => ({
  password,
  loading: loading.effects['password/fetchPassword'],
  submitting: loading.effects['password/submitPassword'],
}))
class Password extends Component {
  toggleEditDrawer = ({ visible, record = {}, title }) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'password/saveState',
      payload: {
        drawerData: {
          visible,
          record,
          title,
        },
      },
    });
  };

  onSearch = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'password/fetchPassword',
    });
  };

  onSubmit = values => {
    const { dispatch } = this.props;
    dispatch({
      type: 'password/submitPassword',
      payload: values,
    }).then(res => {
      if (res) {
        this.toggleEditDrawer({
          visible: false,
          title: '',
          record: {},
        });
      }
    });
  };

  deletePassword = record => {
    const { dispatch } = this.props;
    dispatch({
      type: 'password/deletePassword',
      payload: {
        id: record.id,
      },
    });
  };

  columns = () => [
    {
      title: 'ID',
      dataIndex: 'id',
      className: styles.id,
    },
    {
      title: '标题',
      dataIndex: 'title',
    },
    {
      title: '网址',
      dataIndex: 'url',
      render: text => (
        <a href={text} target="_blank" rel="noopener noreferrer">
          {text}
        </a>
      ),
    },
    {
      title: '用户名',
      dataIndex: 'account',
      render: text => (
        <div>
          <CopyToClipboard text={text} onCopy={() => message.success('Account copied 🎉')}>
            <Tooltip title={`点击复制：${text}`}>
              <span style={{ cursor: 'pointer' }}>{text}</span>
              &nbsp;
              <Icon style={{ cursor: 'pointer' }} type="copy" />
            </Tooltip>
          </CopyToClipboard>
        </div>
      ),
    },
    {
      title: '密码',
      dataIndex: 'password',
      className: styles.password,
      render: text => (
        <div>
          <CopyToClipboard text={text} onCopy={() => message.success('Password copied 🎉')}>
            <Tooltip title={`点击复制：${text}`}>
              <span style={{ cursor: 'pointer' }}>••••••••</span>
              &nbsp;
              <Icon style={{ cursor: 'pointer' }} type="copy" />
            </Tooltip>
          </CopyToClipboard>
        </div>
      ),
    },
    {
      title: '创建时间',
      dataIndex: 'inputTime',
      render: text => moment(text).format('YYYY-MM-DD HH:mm:ss'),
    },
    {
      title: '修改时间',
      dataIndex: 'updateTime',
      render: text => (text ? moment(text).format('YYYY-MM-DD HH:mm:ss') : '-'),
    },
    {
      title: '备注',
      dataIndex: 'memo',
      className: styles.memo,
    },
    {
      title: '操作',
      dataIndex: 'operation',
      render: (text, record) => (
        <div>
          <Popconfirm title="确认删除？" onConfirm={() => this.deletePassword(record)}>
            <a>删除</a>
          </Popconfirm>
          <Divider type="vertical" />
          <a
            onClick={() => {
              this.toggleEditDrawer({ visible: true, title: '修改密码', record });
            }}
          >
            修改
          </a>
        </div>
      ),
    },
  ];

  render() {
    const {
      loading,
      submitting,
      password: {
        list,
        drawerData: { visible, title, record },
      },
    } = this.props;
    return (
      <PageHeaderWrapper>
        <Spin spinning={Boolean(loading)}>
          <div style={{ paddingTop: 10 }}>
            <Button
              type="primary"
              onClick={() =>
                this.toggleEditDrawer({ visible: true, title: '新建密码', record: {} })
              }
            >
              <Icon type="plus" />
              <span>新建</span>
            </Button>
            <Button type="primary" style={{ marginLeft: 10 }} onClick={this.onSearch}>
              <Icon type="reload" spin={Boolean(loading)} />
              <span>刷新</span>
            </Button>
          </div>
          <Divider />
          <Table
            rowKey="id"
            size="small"
            pagination={{
              showSizeChanger: true,
              defaultPageSize: 20,
              pageSizeOptions: ['20', '50', '100', '500'],
            }}
            columns={this.columns()}
            dataSource={list}
          />
          <EditDrawer
            toggleEditDrawer={this.toggleEditDrawer}
            record={record}
            title={title}
            visible={visible}
            onSubmit={this.onSubmit}
            submitting={submitting}
          />
        </Spin>
      </PageHeaderWrapper>
    );
  }
}

export default Password;
