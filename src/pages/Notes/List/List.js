import { Component } from 'react';
import { Table, Divider, Popconfirm } from 'antd';
import Link from 'umi/link';
import React from "react";
import moment from 'moment';

class Search extends Component {
  buildPreviewHtml(record) {
    return `
      <!Doctype html>
      <html>
        <head>
          <title>Preview Content</title>
          <style>
            html,body{
              height: 100%;
              margin: 0;
              padding: 0;
              overflow: auto;
              background-color: #f1f2f3;
            }
            .container{
              box-sizing: border-box;
              width: 1000px;
              max-width: 100%;
              min-height: 100%;
              margin: 0 auto;
              padding: 30px 20px;
              overflow: hidden;
              background-color: #fff;
              border-right: solid 1px #eee;
              border-left: solid 1px #eee;
            }
            .container img,
            .container audio,
            .container video{
              max-width: 100%;
              height: auto;
            }
            .container p{
              white-space: pre-wrap;
              min-height: 1em;
            }
            .container pre{
              padding: 15px;
              background-color: #f1f1f1;
              border-radius: 5px;
            }
            .container blockquote{
              margin: 0;
              padding: 15px;
              background-color: #f1f1f1;
              border-left: 3px solid #d1d1d1;
            }
          </style>
        </head>
        <body>
          <div class="container">${record.htmlContent}</div>
        </body>
      </html>
    `
  }

  preview = record => {
    if (window.previewWindow) {
      window.previewWindow.close()
    }

    window.previewWindow = window.open();
    window.previewWindow.document.write(this.buildPreviewHtml(record));
    window.previewWindow.document.close();
  };

  deleteNote = record => {
    const { noteId } = record;
    const { dispatch } = this.props;
    dispatch({
      type: 'notes/deleteNote',
      noteId,
    })

  };

  columns = () => {
    return [
      {
        title: '标题',
        dataIndex: 'title',
      },
      {
        title: '关键词',
        dataIndex: 'keyword',
      },
      {
        title: '创建人',
        dataIndex: 'inputMan',
      },
      {
        title: '创建时间',
        dataIndex: 'inputTime',
        render: text => moment(text).format('YYYY-MM-DD HH:mm:ss'),
      },
      {
        title: '修改人',
        dataIndex: 'updateMan',
      },
      {
        title: '修改时间',
        dataIndex: 'updateTime',
        render: text => text ? moment(text).format('YYYY-MM-DD HH:mm:ss') : '-',
      },
      {
        title: '操作',
        dataIndex: 'operation',
        render: (text, record) => {
          return <div>
            <Link to={`/notes/edit?noteId=${record.noteId}`}>编辑</Link>
            <Divider type="vertical"/>
            <Popconfirm
              title="确认删除？"
              onConfirm={() => this.deleteNote(record)}
            >
              <a>删除</a>
            </Popconfirm>
            <Divider type="vertical"/>
            <a onClick={() => this.preview(record)}>查看</a>
          </div>
        }
      },
    ]
  };

  render() {
    const { data } = this.props;
    return (
      <Table
        rowKey={'noteId'}
        dataSource={data}
        columns={this.columns()}
      />
    )
  }
}

export default Search;
