import React, { PureComponent } from 'react';
import { Skeleton } from 'antd';
import classNames from 'classnames';
import styles from './index.less';
import BreadcrumbView from './breadcrumb';

export default class PageHeader extends PureComponent {
  render() {
    const {
      className,
      loading = false,
      wide = false,
      hiddenBreadcrumb = false,
    } = this.props;

    const clsString = classNames(styles.pageHeader, className);
    return (
      <div className={clsString}>
        <div className={wide ? styles.wide : ''}>
          <Skeleton
            loading={loading}
            title={false}
            active
            paragraph={{ rows: 3 }}
          >
            {hiddenBreadcrumb ? null : <BreadcrumbView {...this.props} />}
          </Skeleton>
        </div>
      </div>
    );
  }
}
