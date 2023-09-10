import './CDU.css';

const sampleData = [
  [
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: '7', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: 'A', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: '3', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: '-', C: 0, F: 0 },
    { S: '<', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
  ],
  [
    { S: ' ', C: 0, F: 0 },
    { S: 'M', C: 0, F: 1 },
    { S: '3', C: 0, F: 0 },
    { S: 'N', C: 0, F: 1 },
    { S: 'I', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: 'O', C: 0, F: 1 },
    { S: '.', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: '-', C: 0, F: 0 },
    { S: 'I', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
  ],
  [
    { S: ' ', C: 0, F: 0 },
    { S: 'O', C: 0, F: 1 },
    { S: '7', C: 0, F: 0 },
    { S: 'A', C: 0, F: 1 },
    { S: 'R', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: 'P', C: 0, F: 1 },
    { S: '0', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: '-', C: 0, F: 0 },
    { S: 'N', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
  ],
  [
    { S: ' ', C: 0, F: 0 },
    { S: 'D', C: 0, F: 1 },
    { S: '-', C: 0, F: 0 },
    { S: 'V', C: 0, F: 1 },
    { S: 'A', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: '0', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: '-', C: 0, F: 0 },
    { S: 'D', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
  ],
  [
    { S: ' ', C: 0, F: 0 },
    { S: 'E', C: 0, F: 1 },
    { S: '8', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: 'C', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: 'P', C: 0, F: 1 },
    { S: '.', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: '-', C: 0, F: 0 },
    { S: 'E', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
  ],
  [
    { S: ' ', C: 0, F: 0 },
    { S: 'L', C: 0, F: 1 },
    { S: '0', C: 0, F: 0 },
    { S: 'D', C: 0, F: 1 },
    { S: '-', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: 'R', C: 0, F: 1 },
    { S: '0', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: '-', C: 0, F: 0 },
    { S: 'X', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
  ],
  [
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: '0', C: 0, F: 0 },
    { S: 'A', C: 0, F: 1 },
    { S: '2', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: 'O', C: 0, F: 1 },
    { S: '0', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: '-', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
  ],
  [
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: 'T', C: 0, F: 1 },
    { S: '2', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: 'G', C: 0, F: 1 },
    { S: '6', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: '-', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
  ],
  [
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: 'A', C: 0, F: 1 },
    { S: '0', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: 'R', C: 0, F: 1 },
    { S: '9', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: '-', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
  ],
  [
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: '4', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: 'A', C: 0, F: 1 },
    { S: '-', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: '-', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
  ],
  [
    { S: 'I', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: 'M', C: 0, F: 1 },
    { S: 'M', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: '-', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
  ],
  [
    { S: 'D', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: 'A', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: 'S', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: '-', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
  ],
  [
    { S: 'E', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: 'P', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: 'F', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: '-', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
  ],
  [
    { S: 'N', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: 'R', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: 'S', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: '-', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
  ],
  [
    { S: 'T', C: 0, F: 0 },
    { S: 'E', C: 0, F: 1 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: '2', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: '-', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
  ],
  [
    { S: ' ', C: 0, F: 0 },
    { S: 'N', C: 0, F: 1 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: '1', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: 'S', C: 0, F: 1 },
    { S: ' ', C: 0, F: 0 },
    { S: '-', C: 0, F: 0 },
    { S: 'P', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
  ],
  [
    { S: ' ', C: 0, F: 0 },
    { S: 'G', C: 0, F: 1 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: 'M', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: 'U', C: 0, F: 1 },
    { S: ' ', C: 0, F: 0 },
    { S: '-', C: 0, F: 0 },
    { S: 'O', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
  ],
  [
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: 'A', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: 'P', C: 0, F: 1 },
    { S: ' ', C: 0, F: 0 },
    { S: '-', C: 0, F: 0 },
    { S: 'S', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
  ],
  [
    { S: ' ', C: 0, F: 0 },
    { S: 'R', C: 0, F: 1 },
    { S: ' ', C: 0, F: 0 },
    { S: 'A', C: 0, F: 1 },
    { S: 'Y', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: 'P', C: 0, F: 1 },
    { S: ' ', C: 0, F: 0 },
    { S: '-', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
  ],
  [
    { S: ' ', C: 0, F: 0 },
    { S: 'A', C: 0, F: 1 },
    { S: ' ', C: 0, F: 0 },
    { S: 'C', C: 0, F: 1 },
    { S: '1', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: '-', C: 0, F: 0 },
    { S: 'I', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
  ],
  [
    { S: ' ', C: 0, F: 0 },
    { S: 'T', C: 0, F: 1 },
    { S: ' ', C: 0, F: 0 },
    { S: 'T', C: 0, F: 1 },
    { S: '9', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: 'D', C: 0, F: 1 },
    { S: ' ', C: 0, F: 0 },
    { S: '-', C: 0, F: 0 },
    { S: 'N', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
  ],
  [
    { S: ' ', C: 0, F: 0 },
    { S: 'I', C: 0, F: 1 },
    { S: '2', C: 0, F: 0 },
    { S: 'I', C: 0, F: 1 },
    { S: '/', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: 'A', C: 0, F: 1 },
    { S: ' ', C: 0, F: 0 },
    { S: '-', C: 0, F: 0 },
    { S: 'I', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
  ],
  [
    { S: ' ', C: 0, F: 0 },
    { S: 'N', C: 0, F: 1 },
    { S: '6', C: 0, F: 0 },
    { S: 'V', C: 0, F: 1 },
    { S: '2', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: 'T', C: 0, F: 1 },
    { S: ' ', C: 0, F: 0 },
    { S: '-', C: 0, F: 0 },
    { S: 'T', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
  ],
  [
    { S: ' ', C: 0, F: 0 },
    { S: 'G', C: 0, F: 1 },
    { S: 'K', C: 0, F: 0 },
    { S: 'E', C: 0, F: 1 },
    { S: '2', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
    { S: 'A', C: 0, F: 1 },
    { S: ' ', C: 0, F: 0 },
    { S: '-', C: 0, F: 0 },
    { S: '>', C: 0, F: 0 },
    { S: ' ', C: 0, F: 0 },
  ],
];

export default function CDU() {
  const getCharacter = (character: { S: string; C: number; F: number }) => {
    // eslint-disable-next-line prefer-const
    let char = character;
    if (char.S === '') char.S = '&#8205;';
    return char;
  };

  /**
   *
   * @param colums Number of rows to render
   * @param row The row we are currently rendering
   * @returns
   */
  const getColums = (colums: number, row: number) => {
    const content = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < colums; i++) {
      const char = getCharacter(sampleData[i][row]);
      content.push(
        <th key={i} className={`${char.F === 1 ? 'italic' : ''}`}>
          {char.S}
        </th>
      );
    }
    return content;
  };

  const getRows = (rows: number) => {
    const content = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < rows; i++) {
      content.push(<tr key={i}>{getColums(24, i)}</tr>);
    }
    return content;
  };

  return (
    <div className="text-3xl bg-black">
      <table className="table-fixed w-screen h-screen overflow-hidden">
        <tbody>{getRows(14)}</tbody>
      </table>
    </div>
  );
}
