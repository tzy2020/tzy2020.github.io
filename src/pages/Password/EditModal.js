import { Modal, Select } from "antd";
import styles from "./index.less";
import { userRole } from "../../constant";
import { Component } from "react";


class EditModal extends Component {

  render() {
    return (
      <Modal
        title={`修改密码: ${editRecord.nickname}`}
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
    )
  }
}

export default EditModal;
