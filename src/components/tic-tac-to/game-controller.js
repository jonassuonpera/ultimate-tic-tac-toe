import {useState} from 'react';
import GameBoard from './game-board';
import GameMenu from './game-menu';
import checkForWin from './util/check-win';
import styled from 'styled-components';

const BoardsWrapper = styled.div`
    border:1px solid black;
    height:465px;
    width:465px;
    display:flex;
    flex-wrap: wrap;
    margin:auto;
`;

export default function GameController() {
    const [playing, setPlaying] = useState(false);
    const [playerOneTurn, setPlayerOneTurn] = useState(true);
    const [hardcore, setHardcore] = useState(null);
    const [won, setWon] = useState(null);

    function updateRecord(board) {
        let updatedRecord = [...hardcore];
        updatedRecord.forEach((column) => {
            column.forEach((data) => {
                if (data.board == board) {
                    data.state = playerOneTurn ? 'x' : 'o';
                }
            });
        });
        setHardcore(updatedRecord)
    }

    function handleClick(board, result) {
        if (result && hardcore === null) {
            setWon(playerOneTurn ? 'red' : 'blue');
        } 
        else if (result && hardcore !== null) {
            updateRecord(board);
            if (checkForWin(hardcore)) {
                setWon(playerOneTurn ? 'red' : 'blue');
            }
        } else {
            setPlayerOneTurn(!playerOneTurn);
        }
    }

    function preGameSettings(hardCoreSelected) {
        setWon(null);
        if (hardCoreSelected) {
            setHardcore(
                [
                    [{board:1, state:null}, {board:2, state:null}, {board:3, state:null}],
                    [{board:4, state:null}, {board:5, state:null}, {board:6, state:null}],
                    [{board:7, state:null}, {board:8, state:null}, {board:9, state:null}]
                ]
            )
        }
        setPlaying(true);
    }

    if (playing && won === null) {
        if (hardcore !== null) {
            return (
                <BoardsWrapper>
                    <GameBoard state={hardcore[0][0]} playerOneTurn={playerOneTurn} onClick={handleClick} />
                    <GameBoard state={hardcore[0][1]} playerOneTurn={playerOneTurn} onClick={handleClick} />
                    <GameBoard state={hardcore[0][2]} playerOneTurn={playerOneTurn} onClick={handleClick} />
                    <GameBoard state={hardcore[1][0]} playerOneTurn={playerOneTurn} onClick={handleClick} />
                    <GameBoard state={hardcore[1][1]} playerOneTurn={playerOneTurn} onClick={handleClick} />
                    <GameBoard state={hardcore[1][2]} playerOneTurn={playerOneTurn} onClick={handleClick} />
                    <GameBoard state={hardcore[2][0]} playerOneTurn={playerOneTurn} onClick={handleClick} />
                    <GameBoard state={hardcore[2][1]} playerOneTurn={playerOneTurn} onClick={handleClick} />
                    <GameBoard state={hardcore[2][2]} playerOneTurn={playerOneTurn} onClick={handleClick} />
                </BoardsWrapper>
            )    
        } else {
            return (
                <GameBoard playerOneTurn={playerOneTurn} onClick={handleClick} />
            )  
        }
     
    } else {
        return (
            <GameMenu previousResult={won} onAcceptPlay={preGameSettings} />
        )
    }
}