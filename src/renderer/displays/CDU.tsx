// import { useParams } from 'react-router-dom';
import './CDU.css';
import { RootState } from 'renderer/store';
import { CDUCharacter, CDUDisplayData } from 'renderer/store/cduData';
import { useAppSelector } from '../store/hooks';
import parseCDUData from 'renderer/data/cdu/parseCDUData';

export default function CDU() {
  // const params = useParams();
  // const { location } = params;

  const cduData = useAppSelector((state: RootState) => state.cduData);

  // Here we subscribe to the cdu updates from the main application
  window.electron.ipcRenderer.on('update/cdu', (arg) => {
    // eslint-disable-next-line no-console
    console.log(arg);
    parseCDUData(arg);
  });

  return (
    <div className="text-3xl bg-black">{CDURenderer(cduData['left'])}</div>
  );
}

/**
 * Seperate function to render the data provided
 * @param data The cdu data to render
 * @returns JSX object -> table
 */
function CDURenderer(data: CDUDisplayData) {
  return (
    <table className="table-fixed w-screen h-screen overflow-hidden">
      <tbody>{getRows(14, data)}</tbody>
    </table>
  );
}

/**
 * Automatically checkes the characters and ensures the correct ones are returned
 * @param character The character object
 * @returns {CDUCharacter} A character object that has been filtered and modified to ensure correct icons are display
 */
const getCharacter = (character: CDUCharacter) => {
  // eslint-disable-next-line prefer-const
  let char = character;
  if (char.S === '') char.S = '&#8205;';
  return char;
};

/**
 * Creates and renders the individual letters on the CDU Screen
 * @param colums Number of rows to render
 * @param row The row we are currently rendering
 * @returns
 */
const getColums = (colums: number, row: number, data: CDUDisplayData) => {
  const content = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < colums; i++) {
    const char = getCharacter(data[i][row]);
    content.push(
      <th key={i} className={`${char.F === 1 ? 'italic' : ''}`}>
        {char.S}
      </th>
    );
  }
  return content;
};

/**
 * Creates and renders the rows of the CDU Screen
 * @param rows Number of rows to render
 * @param data The CDU data object containing all character of that specific display
 * @returns
 */
const getRows = (rows: number, data: CDUDisplayData) => {
  const content = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < rows; i++) {
    content.push(<tr key={i}>{getColums(24, i, data)}</tr>);
  }
  return content;
};
