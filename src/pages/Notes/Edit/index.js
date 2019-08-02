import { Component } from 'react';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import { Form, Input, Button, message, Row, Col, Select, Spin } from 'antd';
import moment from 'moment';
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css'
import { connect } from "dva";

const { Item: FormItem } = Form;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};


@connect(({ notes, loading }) => ({
  notes,
  noteDetail: notes.noteDetail,
  fetching: loading.effects['notes/fetchNoteDetail'],
  submitting: loading.effects['notes/submitNote'],
}))
class Edit extends Component {
  state = {
    editorState: null
  };

  saveContent = async editorState => {
    // 在编辑器获得焦点时按下ctrl+s会执行此方法
    // 编辑器内容提交到服务端之前，可直接调用editorState.toHTML()来获取HTML格式的内容
    const { dispatch } = this.props;
    const htmlContent = editorState.toHTML();
    dispatch({
      type: 'notes/saveNoteDetail',
      payload: {
        htmlContent,
      }
    });
    message.success(`${moment().format('HH:mm:ss')} 保存成功！`);
  };

  handleEditorChange = editorState => {
    this.setState({ editorState });
  };

  buildPreviewHtml() {
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
          <div class="container">${this.state.editorState.toHTML()}</div>
        </body>
      </html>
    `
  }

  preview = () => {
    if (window.previewWindow) {
      window.previewWindow.close()
    }

    window.previewWindow = window.open();
    window.previewWindow.document.write(this.buildPreviewHtml());
    window.previewWindow.document.close();
  };

  onSubmit = () => {
    const { dispatch, form: { validateFieldsAndScroll }, noteDetail: { noteId } } = this.props;
    const htmlContent = this.state.editorState.toHTML();
    validateFieldsAndScroll((err, values) => {
      if (err === null) {
        dispatch({
          type: 'notes/submitNote',
          payload: {
            ...values,
            keyword: JSON.stringify(values.keyword),
            htmlContent,
            noteId,
          },
        })
      }
    })
  };

  render() {
    const extendControls = [
      {
        key: 'custom-button',
        type: 'button',
        text: '预览',
        onClick: this.preview
      }
    ];
    const {
      form: { getFieldDecorator },
      noteDetail: { noteId, htmlContent, title, keyword },
      submitting,
      fetching,
    } = this.props;
    const editorState = BraftEditor.createEditorState(htmlContent);

    return (
      <PageHeaderWrapper>
        <Spin spinning={Boolean(fetching)}>
          <h3>{noteId === undefined ? '添加笔记' : '更新笔记'}</h3>
          <Form
            style={{ width: '70%' }}
            {...formItemLayout}
          >
            <FormItem label={'标题'}>
              {getFieldDecorator('title', {
                initialValue: title
              })(
                <Input
                  placeholder={'请输入笔记标题'}
                />
              )}
            </FormItem>
            <FormItem label={'关键词'}>
              {getFieldDecorator('keyword', {
                initialValue: keyword,
              })(
                <Select
                  mode={'tags'}
                  placeholder={'请输入笔记关键词，按回车结束'}
                />
              )}
            </FormItem>
          </Form>
          <BraftEditor
            defaultValue={editorState}
            onChange={this.handleEditorChange}
            onSave={this.saveContent}
            extendControls={extendControls}
          />
          <Row style={{ textAlign: 'right' }}>
            <Col>
              <Button
                type={'primary'}
                onClick={this.onSubmit}
                loading={submitting}
              >提交</Button>
            </Col>
          </Row>
        </Spin>
      </PageHeaderWrapper>
    )
  }
}

export default Form.create()(Edit);
