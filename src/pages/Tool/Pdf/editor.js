import React, { Component } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2'

require('codemirror/lib/codemirror.css');
require('codemirror/theme/night.css');

import styles from './index.less';

require('codemirror/mode/jsx/jsx.js');


const options = {
  mode: 'jsx',
  theme: 'night',
  lineNumbers: true,
};

class Editor extends Component {

  state = {
    value: '',
  };
  onBeforeChange = (editor, data, value) => {
    console.log(value, '=======before');
    this.setState({ value });
  };
  onChange = (editor, data, value) => {
    console.log(value, '========onChange');
  };

  render() {
    return (
      <CodeMirror
        className={styles['pdf-editor']}
        value={this.state.value}
        options={options}
        onBeforeChange={this.onBeforeChange}
        onChange={this.onChange}
      />
    );
  }
}

export default Editor;
