import React, { useState } from 'react';
import Cell from './Cell';
import ResetButton from "./ResetButton.tsx";

interface CellState {
    hasItem: boolean;
    clicked: boolean;
}

const generateCells = (): CellState[] => {
    const cells: CellState[] = [];
    for (let i = 0; i < 36; i++) {
        cells.push({ hasItem: false, clicked: false });
    }
    const randomIndex = Math.floor(Math.random() * 36);
    cells[randomIndex] = { ...cells[randomIndex], hasItem: true };
    return cells;
}

const CellField: React.FC = () => {
    const [cells, setCells] = useState<CellState[]>(generateCells());
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const handleCellClick = (id: number) => {
        setCells(prevCells => {
            const newCells = [...prevCells];
            if (!newCells[id].clicked) {
                newCells[id].clicked = true;
                if (newCells[id].hasItem) {
                    alert('Клетка найдена!');
                }
                increment();
            }
            return newCells;
        });
    }

    const resetGame = () => {
        const newCells = generateCells();
        setCells(newCells);
        setCount(0);
    }

    return (
        <div>
            <p>Количество попыток: {count}</p>
            <div className="cell-field">
                {cells.map((cell, index) => (
                    <Cell
                        key={index}
                        id={index}
                        onClick={handleCellClick}
                        isTouched={cell.clicked}
                        hasItem={cell.hasItem}
                    />
                ))}
            </div>
            <ResetButton onReset={resetGame} />
        </div>
    );
}

export default CellField;
