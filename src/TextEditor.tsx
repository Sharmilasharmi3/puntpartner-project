
import React from 'react';

interface TextEditorProps {
  text: string;
  setText: (text: string) => void;
  fontFamily: string;
  fontWeight: number;
  italic: boolean;
}

const TextEditor: React.FC<TextEditorProps> = ({ text, setText, fontFamily, fontWeight, italic }) => {
  return (
    <div className="text-editor" style={{ fontFamily, fontWeight, fontStyle: italic ? 'italic' : 'normal' }}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ width: '100%', height: '300px', fontFamily, fontWeight, fontStyle: italic ? 'italic' : 'normal' }}
      />
    </div>
  );
};

export default TextEditor;