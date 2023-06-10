import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // Define players
  const players = ["Player 1", "Player 2"];
  let currentPlayerIndex = 0;
  let currentPlayer = players[currentPlayerIndex];

  // Function to switch the current player
  function switchPlayer() {
    currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
    currentPlayer = players[currentPlayerIndex];
  }

  const gameBoard = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
  ];

  let numRows = gameBoard.length - 1;

  function handleCellClick(event) {
    const cells = document.querySelectorAll(".pod");
    event.stopPropagation();
    let column = parseInt(event.target.id);

    const columnIndex = getColumnIndex(grid, column);

    let lastCell;

    for (let row = numRows; row >= 0; row--) {
      if (gameBoard[row][columnIndex] === 0) {
        if (currentPlayerIndex === 0) {
          gameBoard[row][columnIndex] = 1;
        }else{
          gameBoard[row][columnIndex] = 2;
        }
        lastCell = { row: row, column: columnIndex };
        break;
      }
    }

    updateGameBoard(lastCell);
    console.log(gameBoard);
  }

  // Example usage
  const grid = [
    [1, 2, 3, 4, 5, 6, 7],
    [8, 9, 10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19, 20, 21],
    [22, 23, 24, 25, 26, 27, 28],
    [29, 30, 31, 32, 33, 34, 35],
    [36, 37, 38, 39, 40, 41, 42],
  ];

  const updateGameBoard = (lastCell) => {
    const cells = document.querySelectorAll(".pod");
    if (lastCell && lastCell.row >= 0) {
      const lastIndex = grid[lastCell.row][lastCell.column];
      let lastCellPlayed = cells[lastIndex - 1];
      if (currentPlayerIndex === 0) {
        lastCellPlayed.style.backgroundColor = "blue";
        switchPlayer();
      } else {
        lastCellPlayed.style.backgroundColor = "orange";
        switchPlayer();
      }
    } else {
      alert("Please select a different column.");
      console.log("Column full");
    }
    console.log(currentPlayer);
  };

  function getColumnIndex(grid, value) {
    const numRows = grid.length;
    const numCols = grid[0].length;

    for (let col = 0; col < numCols; col++) {
      for (let row = 0; row < numRows; row++) {
        if (grid[row][col] === value) {
          return col;
        }
      }
    }

    return -1;
  }

  // Add click event listeners to cells
  useEffect(() => {
    const cells = document.querySelectorAll(".pod");
    cells.forEach((cell) => {
      cell.addEventListener("click", handleCellClick);
    });
  }, []);

  return (
    <main className="w-full h-screen lg:grid grid-cols-12">
      <div className="col-span-3 w-full lg:h-full flex flex-col items-center justify-center">
        <div className="w-60 h-60 rounded-3xl border-4 border-black relative">
          <div className="absolute w-16 h-16 rounded-full bg-white border-4 border-black left-2/4 -translate-x-2/4 -translate-y-2/4"></div>
          <h1 className="text-center mt-12 font-bebas text-4xl">Player 1</h1>
          <h1 className="font-bebas text-[7rem] text-center">0</h1>
        </div>
        <div className="w-60 h-16 border-4 flex rounded-lg items-center justify-evenly border-black mt-6">
          <div className="w-10 h-10 border-4 border-black rounded-full"></div>
          <div className="w-10 h-10 border-4 border-black rounded-full"></div>
        </div>
      </div>
      <div className="w-full h-full col-span-6 flex flex-col items-center justify-end">
        <div className="border-4 w-auto h-auto border-black grid grid-cols-7 grid-rows-6 pt-4 pb-8 rounded-3xl">
          <div className="w-full h-full md:p-4 p-2 flex items-center justify-center">
            <div
              id="1"
              data-state="inactive"
              className="md:w-16 md:h-16 h-12 w-12 border-4 pod rounded-full border-black"
            ></div>
          </div>
          <div className="w-full h-full md:p-4 p-2 flex items-center justify-center">
            <div
              id="2"
              data-state="inactive"
              className="md:w-16 md:h-16 h-12 w-12 border-4 pod rounded-full border-black"
            ></div>
          </div>
          <div className="w-full h-full md:p-4 p-2 flex items-center justify-center">
            <div
              id="3"
              data-state="inactive"
              className="md:w-16 md:h-16 h-12 w-12 border-4 pod rounded-full border-black"
            ></div>
          </div>
          <div className="w-full h-full md:p-4 p-2 flex items-center justify-center">
            <div
              id="4"
              data-state="inactive"
              className="md:w-16 md:h-16 h-12 w-12 border-4 pod rounded-full border-black"
            ></div>
          </div>
          <div className="w-full h-full md:p-4 p-2 flex items-center justify-center">
            <div
              id="5"
              data-state="inactive"
              className="md:w-16 md:h-16 h-12 w-12 border-4 pod rounded-full border-black"
            ></div>
          </div>
          <div className="w-full h-full md:p-4 p-2 flex items-center justify-center">
            <div
              id="6"
              data-state="inactive"
              className="md:w-16 md:h-16 h-12 w-12 border-4 pod rounded-full border-black"
            ></div>
          </div>
          <div className="w-full h-full md:p-4 p-2 flex items-center justify-center">
            <div
              id="7"
              data-state="inactive"
              className="md:w-16 md:h-16 h-12 w-12 border-4 pod rounded-full border-black"
            ></div>
          </div>
          <div className="w-full h-full md:p-4 p-2 flex items-center justify-center">
            <div
              id="8"
              data-state="inactive"
              className="md:w-16 md:h-16 h-12 w-12 border-4 pod rounded-full border-black"
            ></div>
          </div>
          <div className="w-full h-full md:p-4 p-2 flex items-center justify-center">
            <div
              id="9"
              data-state="inactive"
              className="md:w-16 md:h-16 h-12 w-12 border-4 pod rounded-full border-black"
            ></div>
          </div>
          <div className="w-full h-full md:p-4 p-2 flex items-center justify-center">
            <div
              id="10"
              data-state="inactive"
              className="md:w-16 md:h-16 h-12 w-12 border-4 pod rounded-full border-black"
            ></div>
          </div>
          <div className="w-full h-full md:p-4 p-2 flex items-center justify-center">
            <div
              id="11"
              data-state="inactive"
              className="md:w-16 md:h-16 h-12 w-12 border-4 pod rounded-full border-black"
            ></div>
          </div>
          <div className="w-full h-full md:p-4 p-2 flex items-center justify-center">
            <div
              id="12"
              data-state="inactive"
              className="md:w-16 md:h-16 h-12 w-12 border-4 pod rounded-full border-black"
            ></div>
          </div>
          <div className="w-full h-full md:p-4 p-2 flex items-center justify-center">
            <div
              id="13"
              data-state="inactive"
              className="md:w-16 md:h-16 h-12 w-12 border-4 pod rounded-full border-black"
            ></div>
          </div>
          <div className="w-full h-full md:p-4 p-2 flex items-center justify-center">
            <div
              id="14"
              data-state="inactive"
              className="md:w-16 md:h-16 h-12 w-12 border-4 pod rounded-full border-black"
            ></div>
          </div>
          <div className="w-full h-full md:p-4 p-2 flex items-center justify-center">
            <div
              id="15"
              data-state="inactive"
              className="md:w-16 md:h-16 h-12 w-12 border-4 pod rounded-full border-black"
            ></div>
          </div>
          <div className="w-full h-full md:p-4 p-2 flex items-center justify-center">
            <div
              id="16"
              data-state="inactive"
              className="md:w-16 md:h-16 h-12 w-12 border-4 pod rounded-full border-black"
            ></div>
          </div>
          <div className="w-full h-full md:p-4 p-2 flex items-center justify-center">
            <div
              id="17"
              data-state="inactive"
              className="md:w-16 md:h-16 h-12 w-12 border-4 pod rounded-full border-black"
            ></div>
          </div>
          <div className="w-full h-full md:p-4 p-2 flex items-center justify-center">
            <div
              id="18"
              data-state="inactive"
              className="md:w-16 md:h-16 h-12 w-12 border-4 pod rounded-full border-black"
            ></div>
          </div>
          <div className="w-full h-full md:p-4 p-2 flex items-center justify-center">
            <div
              id="19"
              data-state="inactive"
              className="md:w-16 md:h-16 h-12 w-12 border-4 pod rounded-full border-black"
            ></div>
          </div>
          <div className="w-full h-full md:p-4 p-2 flex items-center justify-center">
            <div
              id="20"
              data-state="inactive"
              className="md:w-16 md:h-16 h-12 w-12 border-4 pod rounded-full border-black"
            ></div>
          </div>
          <div className="w-full h-full md:p-4 p-2 flex items-center justify-center">
            <div
              id="21"
              data-state="inactive"
              className="md:w-16 md:h-16 h-12 w-12 border-4 pod rounded-full border-black"
            ></div>
          </div>
          <div className="w-full h-full md:p-4 p-2 flex items-center justify-center">
            <div
              id="22"
              data-state="inactive"
              className="md:w-16 md:h-16 h-12 w-12 border-4 pod rounded-full border-black"
            ></div>
          </div>
          <div className="w-full h-full md:p-4 p-2 flex items-center justify-center">
            <div
              id="23"
              data-state="inactive"
              className="md:w-16 md:h-16 h-12 w-12 border-4 pod rounded-full border-black"
            ></div>
          </div>
          <div className="w-full h-full md:p-4 p-2 flex items-center justify-center">
            <div
              id="24"
              data-state="inactive"
              className="md:w-16 md:h-16 h-12 w-12 border-4 pod rounded-full border-black"
            ></div>
          </div>
          <div className="w-full h-full md:p-4 p-2 flex items-center justify-center">
            <div
              id="25"
              data-state="inactive"
              className="md:w-16 md:h-16 h-12 w-12 border-4 pod rounded-full border-black"
            ></div>
          </div>
          <div className="w-full h-full md:p-4 p-2 flex items-center justify-center">
            <div
              id="26"
              data-state="inactive"
              className="md:w-16 md:h-16 h-12 w-12 border-4 pod rounded-full border-black"
            ></div>
          </div>
          <div className="w-full h-full md:p-4 p-2 flex items-center justify-center">
            <div
              id="27"
              data-state="inactive"
              className="md:w-16 md:h-16 h-12 w-12 border-4 pod rounded-full border-black"
            ></div>
          </div>
          <div className="w-full h-full md:p-4 p-2 flex items-center justify-center">
            <div
              id="28"
              data-state="inactive"
              className="md:w-16 md:h-16 h-12 w-12 border-4 pod rounded-full border-black"
            ></div>
          </div>
          <div className="w-full h-full md:p-4 p-2 flex items-center justify-center">
            <div
              id="29"
              data-state="inactive"
              className="md:w-16 md:h-16 h-12 w-12 border-4 pod rounded-full border-black"
            ></div>
          </div>
          <div className="w-full h-full md:p-4 p-2 flex items-center justify-center">
            <div
              id="30"
              data-state="inactive"
              className="md:w-16 md:h-16 h-12 w-12 border-4 pod rounded-full border-black"
            ></div>
          </div>
          <div className="w-full h-full md:p-4 p-2 flex items-center justify-center">
            <div
              id="31"
              data-state="inactive"
              className="md:w-16 md:h-16 h-12 w-12 border-4 pod rounded-full border-black"
            ></div>
          </div>
          <div className="w-full h-full md:p-4 p-2 flex items-center justify-center">
            <div
              id="32"
              data-state="inactive"
              className="md:w-16 md:h-16 h-12 w-12 border-4 pod rounded-full border-black"
            ></div>
          </div>
          <div className="w-full h-full md:p-4 p-2 flex items-center justify-center">
            <div
              id="33"
              data-state="inactive"
              className="md:w-16 md:h-16 h-12 w-12 border-4 pod rounded-full border-black"
            ></div>
          </div>
          <div className="w-full h-full md:p-4 p-2 flex items-center justify-center">
            <div
              id="34"
              data-state="inactive"
              className="md:w-16 md:h-16 h-12 w-12 border-4 pod rounded-full border-black"
            ></div>
          </div>
          <div className="w-full h-full md:p-4 p-2 flex items-center justify-center">
            <div
              id="35"
              data-state="inactive"
              className="md:w-16 md:h-16 h-12 w-12 border-4 pod rounded-full border-black"
            ></div>
          </div>
          <div className="w-full h-full md:p-4 p-2 flex items-center justify-center">
            <div
              id="36"
              data-state="inactive"
              className="md:w-16 md:h-16 h-12 w-12 border-4 pod rounded-full border-black"
            ></div>
          </div>
          <div className="w-full h-full md:p-4 p-2 flex items-center justify-center">
            <div
              id="37"
              data-state="inactive"
              className="md:w-16 md:h-16 h-12 w-12 border-4 pod rounded-full border-black"
            ></div>
          </div>
          <div className="w-full h-full md:p-4 p-2 flex items-center justify-center">
            <div
              id="38"
              data-state="inactive"
              className="md:w-16 md:h-16 h-12 w-12 border-4 pod rounded-full border-black"
            ></div>
          </div>
          <div className="w-full h-full md:p-4 p-2 flex items-center justify-center">
            <div
              id="39"
              data-state="inactive"
              className="md:w-16 md:h-16 h-12 w-12 border-4 pod rounded-full border-black"
            ></div>
          </div>
          <div className="w-full h-full md:p-4 p-2 flex items-center justify-center">
            <div
              id="40"
              data-state="inactive"
              className="md:w-16 md:h-16 h-12 w-12 border-4 pod rounded-full border-black"
            ></div>
          </div>
          <div className="w-full h-full md:p-4 p-2 flex items-center justify-center">
            <div
              id="41"
              data-state="inactive"
              className="md:w-16 md:h-16 h-12 w-12 border-4 pod rounded-full border-black"
            ></div>
          </div>
          <div className="w-full h-full md:p-4 p-2 flex items-center justify-center">
            <div
              id="42"
              data-state="inactive"
              className="md:w-16 md:h-16 h-12 w-12 border-4 pod rounded-full border-black"
            ></div>
          </div>
        </div>
        <div className="w-1/4 h-40 my-7 border-4 border-black overflow-hidden rounded-2xl">
          <h1 className="font-bebas text-center text-3xl mt-3">
            PLAYER 1'S TURN
          </h1>
          <div className="w-full h-auto grid place-items-center justify-center">
            <h1 className="font-bebas text-[5rem] p-0 m-0">
              30<span className="text-zinc-500 text-5xl">S</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="col-span-3 w-full lg:h-full flex flex-col items-center justify-center">
        <div className="w-60 h-60 rounded-3xl border-4 border-black relative">
          <div className="absolute w-16 h-16 rounded-full bg-white border-4 border-black left-2/4 -translate-x-2/4 -translate-y-2/4"></div>
          <h1 className="text-center mt-12 font-bebas text-4xl">Player 1</h1>
          <h1 className="font-bebas text-[7rem] text-center">0</h1>
        </div>
        <div className="w-60 h-16 border-4 flex rounded-lg items-center justify-evenly border-black mt-6">
          <div className="w-10 h-10 border-4 border-black rounded-full"></div>
          <div className="w-10 h-10 border-4 border-black rounded-full"></div>
        </div>
      </div>
    </main>
  );
}
