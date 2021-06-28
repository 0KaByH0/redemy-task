import React from 'react';

// const content = [
//   { text: 'asdfxc', fontSize: 12, color: 'red' },
//   { text: 'wd', fontSize: 14, color: 'dark' },
//   { text: 'cdse', fontSize: 12, color: 'blue' },
//   { text: 'asdfxzc', fontSize: 16, color: 'red' },
//   { text: 's', fontSize: 12, color: 'red' },
// ];

const Editor = ({ color, fontSize }) => {
  const editor = React.useRef(null);
  const [input, setInput] = React.useState('');

  React.useEffect(() => {
    deletEmpty(editor.current);
    let p = document.createElement('p');
    p.classList.add(`${color}`, `f${fontSize}`);
    p.innerHTML = ' ';
    editor.current.appendChild(p);
    setCaretToEnd(p);
  }, [color, fontSize]);

  const handleChange = (e) => {
    if (editor.current.lastChild.localName === 'br') {
      editor.current.removeChild(editor.current.lastChild);
    }

    if (e.nativeEvent.key === 'Enter') {
      let p = document.createElement('p');
      p.classList.add(`${color}`, `f${fontSize}`);
      p.innerHTML = ' ';
      editor.current.appendChild(p);
    }
    setInput(e.nativeEvent.key);
  };

  return (
    <div
      ref={editor}
      contentEditable="true"
      role="textbox"
      spellCheck="true"
      onFocus={(e) => console.log(e)}
      onKeyDown={(e) => handleChange(e)}
      style={{
        border: '2px solid black',
        width: '500px',
        height: '400px',
        display: 'inline-block',
        outline: 'none',
        userSelect: 'text',
        whiteSpace: 'pre-wrap',
        overflowWrap: 'break-word',
      }}></div>
  );
};

// function attachSelectionListener(element) {
//   if (!element.contentEditable) {
//     return;
//   }
//   element.onselectstart = () => handleSelectionChange(element);
// }

// function handleSelectionChange(element) {
//   document.onmouseup = () => retrieveSelection(element);
//   document.onkeyup = () => retrieveSelection(element);
// }

// function retrieveSelection(element) {
//   const selection = document.getSelection();

//   // Ignore empty selection
//   if (!selection || !selection.toString()) {
//     return;
//   }
//   console.log(selection.toString());
// }

const setCaretToEnd = (element) => {
  const range = document.createRange();
  const selection = window.getSelection();
  range.selectNodeContents(element);
  range.collapse(false);
  selection.removeAllRanges();
  selection.addRange(range);
  element.focus();
};

const deletEmpty = (div) => {
  Array.from(div.children).map((el) =>
    el.innerHTML === ' ' || el.innerHTML === '' ? div.removeChild(el) : el,
  );
};

export default Editor;
