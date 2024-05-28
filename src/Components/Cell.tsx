import React from 'react';

interface CellProps {
    id: number;
    onClick: (id: number) => void;
    isTouched: boolean;
    hasItem: boolean;
}

const Cell: React.FC<CellProps> = ({ id, onClick, isTouched, hasItem }) => {
    const handleClick = () => {
        if (!isTouched) {
            onClick(id);
        }
    };

    return (
        <div
            className={`cell ${isTouched ? (hasItem ? 'has-item' : 'touched') : ''}`}
            onClick={handleClick}
            style={{
                width: '50px',
                height: '50px',
                border: '1px solid black',
                display: 'inline-block',
                backgroundColor: isTouched ? (hasItem ? '#fd4c4c' : '#a0e0a0') : 'white',
                cursor: isTouched ? 'default' : 'pointer',
            }}
        />
    );
}

export default Cell;
