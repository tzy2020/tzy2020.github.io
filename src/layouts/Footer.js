import React, { Fragment } from 'react';
import { Layout } from 'antd';
import GlobalFooter from '@/components/GlobalFooter';

const { Footer } = Layout;
const FooterView = () => (
  <Footer style={{ padding: 0 }}>
    <GlobalFooter
      copyright={
        <Fragment>
          LiuShuaiqi.Top
          <span style={{ margin: '0px 5px 0 10px' }} role="img" aria-label="by hart">
            ❤️
          </span>
          2016 - 2019
        </Fragment>
      }
    />
  </Footer>
);
export default FooterView;
