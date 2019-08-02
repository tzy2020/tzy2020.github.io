import React, { PureComponent } from 'react';
import { Spin, Menu, Icon, Avatar } from 'antd';
import HeaderDropdown from '../HeaderDropdown';
import styles from './index.less';

const colors = [
  '#FF1744',
  '#F50057',
  '#D500F9',
  '#651FFF',
  '#3D5AFE',
  '#2979FF',
  '#0091EA',
  '#006064',
  '#004D40',
  '#1B5E20',
  '#33691E',
  '#827717',
  '#FF3D00',
  '#263238',
  '#000000',
];

const avatarColor = colors[Math.floor(Math.random() * 15)];

export default class GlobalHeaderRight extends PureComponent {
  render() {
    const { currentUser, onMenuClick, theme, logouting } = this.props;
    const menu = (
      <Menu className={styles.menu} selectedKeys={[]} onClick={onMenuClick}>
        <Menu.Item key="logout">
          <Icon type="logout" />
          Logout
        </Menu.Item>
      </Menu>
    );
    let className = styles.right;
    if (theme === 'dark') {
      className = `${styles.right}  ${styles.dark}`;
    }
    return (
      <div className={className}>
        {currentUser && currentUser.nickname && !logouting ? (
          <HeaderDropdown overlay={menu}>
            <span className={`${styles.action} ${styles.account}`}>
              <Avatar
                size="small"
                className={styles.avatar}
                style={{ backgroundColor: avatarColor }}
                alt="avatar"
              >
                {currentUser.nickname[0].toUpperCase()}
              </Avatar>
              <span>{currentUser.nickname}</span>
            </span>
          </HeaderDropdown>
        ) : (
          <Spin size="small" style={{ marginLeft: 8, marginRight: 8 }} />
        )}
      </div>
    );
  }
}
