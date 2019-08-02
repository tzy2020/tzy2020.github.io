import React, { PureComponent } from 'react';
import { Icon } from 'antd';
import Link from 'umi/link';
import Debounce from 'lodash-decorators/debounce';
import styles from './index.less';
import RightContent from './RightContent';

let timer = null;
const loopTime = 30;

export default class GlobalHeader extends PureComponent {
  componentDidMount() {
    this.noticeRun();
  }

  componentWillUnmount() {
    clearInterval(timer);
    this.triggerResizeEvent.cancel();
  }

  noticeRun = () => {
    const notice = document.getElementById('notice');
    const noticeText = document.getElementById('noticeText');
    const noticeWidth = notice.offsetWidth;
    const textWidth = noticeText.offsetWidth;

    let left = noticeWidth - textWidth;
    timer = setInterval(() => {
      if (left < -textWidth) {
        left = noticeWidth;
      } else {
        left -= 1;
      }

      noticeText.style.left = `${left}px`;
    }, loopTime);
  };

  /* eslint-disable*/
  @Debounce(600)
  triggerResizeEvent() {
    // eslint-disable-line
    const event = document.createEvent('HTMLEvents');
    event.initEvent('resize', true, false);
    window.dispatchEvent(event);
  }
  toggle = () => {
    const { collapsed, onCollapse } = this.props;
    onCollapse(!collapsed);
    this.triggerResizeEvent();
  };
  render() {
    const { collapsed, isMobile, logo, notice } = this.props;
    return (
      <div className={styles.header}>
        {isMobile && (
          <Link to="/" className={styles.logo} key="logo">
            <img src={logo} alt="logo" width="32" />
          </Link>
        )}
        <span className={styles.trigger} onClick={this.toggle}>
          <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'} />
        </span>
        <div className={styles.notice} id="notice">
          <span
            className={styles['notice-text']}
            id="noticeText"
            dangerouslySetInnerHTML={{ __html: notice }}
          />
        </div>
        <RightContent {...this.props} />
      </div>
    );
  }
}
