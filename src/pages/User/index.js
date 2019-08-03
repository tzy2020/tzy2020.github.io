import React, { Component } from 'react';
import { connect } from 'dva';
import { Modal, Select, Table, Tag, Popconfirm } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import styles from './index.less';
import { userRole } from '../../constant';

const { Option } = Select;

@connect(({ user, loading }) => ({
  user,
  loading: loading.models.user,
}))
class Users extends Component {
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
    dispatch({ type: 'user/updateUserRole', editRecord }).then(() => {
      this.toggleUpdateRoleModal(false, {});
    });
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
      title: '操作',
      dataIndex: 'operation',
      render: (text, record) => <Popconfirm
        title="确认删除？"
        onConfirm={() => this.deleteUser(record)}
      >
        <a>删除</a>
      </Popconfirm>
    },
    {
      title: '权限',
      dataIndex: 'role',
      className: styles['user-role'],
      render: (text, record) => (
        <Tag
          color={text === 2 ? 'blue' : text === 1024 ? 'red' : ''}
          onClick={() => this.toggleUpdateRoleModal(true, record)}
        >
          {userRole[text]}
        </Tag>
      ),
    },
  ];

  render() {
    const {
      loading,
      user: { list },
    } = this.props;
    const { showUpdateRoleModal, editRecord } = this.state;
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
        <Modal
          title={`修改权限: ${editRecord.nickname}`}
          visible={showUpdateRoleModal}
          onCancel={() => this.toggleUpdateRoleModal(false)}
          onOk={this.updateUserRole}
          destroyOnClose
          maskClosable={false}
        >
          <span>权限：</span>
          <Select
            className={styles['role-select']}
            defaultValue={editRecord.role && editRecord.role.toString()}
            onChange={value => this.changeUserRole(value)}
          >
            {Object.keys(userRole).map(item => (
              <Option key={item}>{userRole[item]}</Option>
            ))}
          </Select>
        </Modal>
      </PageHeaderWrapper>
    );
  }
}

export default Users;
