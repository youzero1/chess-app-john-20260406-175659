export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="relative">
        {/* Chess Board Container */}
        <div className="relative bg-amber-900 p-4 rounded-lg shadow-2xl">
          {/* Chess Board */}
          <div className="relative w-[500px] h-[500px] bg-amber-800 p-2 rounded">
            <div className="grid grid-cols-8 grid-rows-8 w-full h-full">
              {/* Chess Board Squares */}
              {Array.from({ length: 64 }).map((_, index) => {
                const row = Math.floor(index / 8);
                const col = index % 8;
                const isLight = (row + col) % 2 === 0;
                return (
                  <div
                    key={index}
                    className={`
                      ${isLight ? 'bg-amber-100' : 'bg-amber-700'}
                      flex items-center justify-center
                    `}
                  >
                    {/* Chess Pieces */}
                    {renderChessPiece(row, col)}
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Side Controls */}
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            <button className="bg-white bg-opacity-80 p-2 rounded-full shadow-md hover:bg-opacity-100 transition-all">
              <i className="fas fa-redo text-gray-700"></i>
            </button>
            <button className="bg-white bg-opacity-80 p-2 rounded-full shadow-md hover:bg-opacity-100 transition-all">
              <i className="fas fa-search text-gray-700"></i>
            </button>
            <button className="bg-white bg-opacity-80 p-2 rounded-full shadow-md hover:bg-opacity-100 transition-all">
              <i className="fas fa-user text-gray-700"></i>
            </button>
            <button className="bg-white bg-opacity-80 p-2 rounded-full shadow-md hover:bg-opacity-100 transition-all">
              <i className="fas fa-map-marker-alt text-gray-700"></i>
            </button>
          </div>
          
          {/* Bottom Controls */}
          <div className="absolute bottom-4 left-4 flex gap-2">
            <button className="bg-white bg-opacity-80 p-2 rounded-full shadow-md hover:bg-opacity-100 transition-all">
              <i className="fas fa-undo text-gray-700"></i>
            </button>
            <button className="bg-white bg-opacity-80 p-2 rounded-full shadow-md hover:bg-opacity-100 transition-all">
              <i className="fas fa-redo text-gray-700"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function renderChessPiece(row: number, col: number): JSX.Element | null {
  // Define piece positions
  const piecePositions: { [key: string]: string } = {
    // White pieces
    '0,0': '♜', '0,1': '♞', '0,2': '♝', '0,3': '♛', '0,4': '♚', '0,5': '♝', '0,6': '♞', '0,7': '♜',
    '1,0': '♟', '1,1': '♟', '1,2': '♟', '1,3': '♟', '1,4': '♟', '1,5': '♟', '1,6': '♟', '1,7': '♟',
    // Black pieces
    '7,0': '♖', '7,1': '♘', '7,2': '♗', '7,3': '♕', '7,4': '♔', '7,5': '♗', '7,6': '♘', '7,7': '♖',
    '6,0': '♙', '6,1': '♙', '6,2': '♙', '6,3': '♙', '6,4': '♙', '6,5': '♙', '6,6': '♙', '6,7': '♙'
  };
  
  const piece = piecePositions[`${row},${col}`];
  if (!piece) return null;
  
  const isWhite = row <= 1;
  
  return (
    <span className={`text-4xl ${isWhite ? 'text-white drop-shadow-lg' : 'text-gray-900 drop-shadow-lg'}`}>
      {piece}
    </span>
  );
}