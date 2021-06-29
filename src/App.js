import React from 'react';
import Editor from './Editor';
import './styles.css';

function App() {
  const [fontSize, setFontSize] = React.useState(14);
  const [color, setColor] = React.useState('black');
  const [bg, setBg] = React.useState('white');

  const EditButton = (props) => {
    return (
      <button
        onClick={props.onClick}
        key={props.name}
        onMouseDown={(evt) => {
          evt.preventDefault();
          if (props.color && props.fontSize) {
            const selection = window.getSelection().toString();
            const wrappedselection = `<p class="${
              props.color + ' f' + props.fontSize + ' bg-' + props.bg
            }">${selection}</p>`;
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
      <header className="App-header">Rich Text Redemy Task</header>
      <nav>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'space-between',
            justifyContent: 'space-around',
          }}>
          <div>
            <EditButton
              onClick={() => setFontSize((prev) => (prev >= 20 ? prev : prev + 2))}
              label="Increase fontsize"
              color={color}
              bg={bg}
              fontSize={fontSize + 2}
            />
            <h2>{fontSize}</h2>
            <EditButton
              onClick={() => setFontSize((prev) => (prev <= 8 ? prev : prev - 2))}
              label="Decrease fontsize"
              color={color}
              bg={bg}
              fontSize={fontSize - 2}
            />
          </div>
          <div>
            <EditButton
              label="Red"
              onClick={() => setColor('red')}
              color={'red'}
              bg={bg}
              fontSize={fontSize}>
              Red
            </EditButton>
            <EditButton
              label="blue"
              onClick={() => setColor('blue')}
              color={'blue'}
              bg={bg}
              fontSize={fontSize}>
              blue
            </EditButton>
            <EditButton
              label="pink"
              onClick={() => setColor('pink')}
              color={'pink'}
              bg={bg}
              fontSize={fontSize}>
              pink
            </EditButton>
            <EditButton
              label="green"
              onClick={() => setColor('green')}
              color={'green'}
              bg={bg}
              fontSize={fontSize}>
              green
            </EditButton>
            <h2 className={color}>
              Text color: <b>{color}</b>
            </h2>
          </div>
          <div>
            <EditButton
              label="Red"
              onClick={() => setBg('red')}
              bg={'red'}
              color={color}
              fontSize={fontSize}>
              Red
            </EditButton>
            <EditButton
              label="blue"
              onClick={() => setBg('blue')}
              bg={'blue'}
              color={color}
              fontSize={fontSize}>
              blue
            </EditButton>
            <EditButton
              label="pink"
              onClick={() => setBg('pink')}
              bg={'pink'}
              color={color}
              fontSize={fontSize}>
              pink
            </EditButton>
            <EditButton
              label="green"
              onClick={() => setBg('green')}
              bg={'green'}
              color={color}
              fontSize={fontSize}>
              green
            </EditButton>
            <EditButton
              label="white"
              onClick={() => setBg('white')}
              bg={'white'}
              color={color}
              fontSize={fontSize}>
              white
            </EditButton>
            <h2 className={'bg-' + bg}>
              Bg color: <b>{bg}</b>
            </h2>
          </div>
        </div>
      </nav>
      <Editor color={color} fontSize={fontSize} bg={bg} />
    </div>
  );
}

export default App;
