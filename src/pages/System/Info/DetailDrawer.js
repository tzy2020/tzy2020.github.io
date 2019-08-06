import React from 'react';
import { Drawer } from 'antd';

function detailDrawer({ data, title, visible, toogolDrawerVisible }) {
  return (
    <Drawer
      title={title}
      visible={visible}
      width={600}
      onClose={() => toogolDrawerVisible({ visible: false, title: '', data: [] })}
    >
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Drawer>
  );
}

export default detailDrawer;
