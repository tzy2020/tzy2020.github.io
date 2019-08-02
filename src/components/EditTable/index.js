import { Button, Icon, Table } from 'antd';
import React from 'react';

class EditableTable extends React.Component {
  render () {
    const { dataSource, components, handleAdd, columns, isEditing, rowKey } = this.props;
    const cols = columns.map(col => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          editing: isEditing(record),
          ...col,
        }),
      };
    });
    return (
      <div>
        <Table
          rowKey={record => (record[rowKey] || record.id || record.key)}
          size='small'
          components={components}
          rowClassName={() => 'editable-row'}
          bordered
          dataSource={dataSource}
          columns={cols}
          pagination={false}
        />
        <Button onClick={handleAdd} type="dashed" size='small' style={{ marginTop: 5, width: '100%' }}>
          <Icon type="plus" />
        </Button>
      </div>
    );
  }
}

export default EditableTable;
