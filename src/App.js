import React from 'react';
import Editor from './Editor';

import './styles.css';

const changeColor = () => {
  const colors = ['red', 'blue', 'green', 'black', 'pink'];
  const ind = Math.floor(Math.random() * colors.length);
  return colors[ind];
};

function App() {
  const [fontSize, setFontSize] = React.useState(14);
  const [color, setColor] = React.useState('green');

  const EditButton = (props) => {
    return (
      <button
        onClick={props.onClick}
        key={props.name}
        onMouseDown={(evt) => {
          evt.preventDefault();
          if (color && fontSize) {
            const selection = window.getSelection().toString();
            const wrappedselection = `<p class="${color + ' f' + fontSize}">${selection}</p>`;
            console.log(selection, wrappedselection);
            document.execCommand('insertHTML', false, wrappedselection);
          }
        }}>
        {props.label}
      </button>
    );
  };

  return (
    <div className="App">
      <header className="App-header">Rich Text Editor Example</header>
      <nav>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <div>
            <EditButton
              onClick={() => setFontSize((prev) => (prev >= 20 ? prev : prev + 2))}
              label="Add font size"
              color={(prevcolor) => prevcolor}
              fontSize={fontSize}
            />
            <h2>{fontSize}</h2>
            <EditButton
              onClick={() => setFontSize((prev) => (prev <= 8 ? prev : prev - 2))}
              label="Remove font size"
              color={color}
              fontSize={fontSize}
            />
          </div>
          <div>
            <EditButton
              onClick={() => setColor(changeColor())}
              label="Change Color"
              color={color}
              fontSize={fontSize}
            />
            <h2>{color}</h2>
          </div>
        </div>
      </nav>
      <Editor color={color} fontSize={fontSize} />
    </div>
  );
}

export default App;
