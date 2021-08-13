import React from 'react';
import Editor, { OnChange, OnMount } from '@monaco-editor/react';
import prettier from 'prettier';
import parserBabel from 'prettier/parser-babel';
import codeShift from 'jscodeshift';
import Highlighter from 'monaco-jsx-highlighter';
import './index.css';

interface CodeEditorProps {
  onChange: OnChange;
  input: string;
  initialValue?: string;
  onFormat?: (value: string) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ onChange, onFormat, input, initialValue }) => {
  const handleOnFormat = () => {
    if (!onFormat) return;

    try {
      const formatted = prettier
        .format(input, {
          parser: 'babel',
          plugins: [parserBabel],
          useTabs: false,
          semi: true,
          singleQuote: true,
        })
        .replace(/\n$/, '');
      onFormat(formatted);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditorOnMount: OnMount = (monacoEditor) => {
    const highlighter = new Highlighter(
      // @ts-ignore
      window.monaco,
      codeShift,
      monacoEditor
    );
    highlighter.highLightOnDidChangeModelContent(
      () => {},
      () => {},
      undefined,
      () => {}
    );
  };

  return (
    <div className='editor-wrapper'>
      <button className='button button-format is-primary is-small' onClick={handleOnFormat}>
        Format
      </button>
      <Editor
        value={input}
        defaultValue={initialValue}
        onChange={onChange}
        onMount={handleEditorOnMount}
        height='100%'
        theme='vs-dark'
        language='javascript'
        options={{
          wordWrap: 'on',
          minimap: { enabled: false },
          folding: false,
          lineNumbersMinChars: 3,
          fontSize: 16,
          scrollBeyondLastLine: false,
          automaticLayout: true,
          tabSize: 2,
        }}
      />
    </div>
  );
};

export default CodeEditor;
