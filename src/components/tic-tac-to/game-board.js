import {useState} from 'react';
import GameTile from './game-tile';
import styled from 'styled-components';
import checkForWin from './util/check-win';

const BoardWrapper = styled.div`
  border:1px solid black;
  height:153px;
  width:153px;
  display:flex;
  flex-wrap: wrap;
  margin:auto;
`;

export default function GameBoard(props) {

    const [gameState, setGameState] = useState(
        [
            [{tile:1, state:null}, {tile:2, state:null}, {tile:3, state:null}],
            [{tile:4, state:null}, {tile:5, state:null}, {tile:6, state:null}],
            [{tile:7, state:null}, {tile:8, state:null}, {tile:9, state:null}]
        ]
    )

    function updateRecord(tile) {
        let updatedRecord = [...gameState];
        updatedRecord.forEach((column) => {
            column.forEach((data) => {
                if (data.tile == tile) {
                    data.state = props.playerOneTurn ? 'x' : 'o';
                }
            });
        });
        setGameState(updatedRecord)
    }

    function handleTileClick(e) {
        updateRecord(e.target.id);
        props.onClick(props.state ? props.state.board : null, checkForWin(gameState));
    }

    return (
        <BoardWrapper>
            <GameTile playerOneTurn={props.playerOneTurn} state={gameState[0][0]} onClick={handleTileClick} />
            <GameTile playerOneTurn={props.playerOneTurn} state={gameState[0][1]} onClick={handleTileClick} />
            <GameTile playerOneTurn={props.playerOneTurn} state={gameState[0][2]} onClick={handleTileClick} />
            <GameTile playerOneTurn={props.playerOneTurn} state={gameState[1][0]} onClick={handleTileClick} />
            <GameTile playerOneTurn={props.playerOneTurn} state={gameState[1][1]} onClick={handleTileClick} />
            <GameTile playerOneTurn={props.playerOneTurn} state={gameState[1][2]} onClick={handleTileClick} />
            <GameTile playerOneTurn={props.playerOneTurn} state={gameState[2][0]} onClick={handleTileClick} />
            <GameTile playerOneTurn={props.playerOneTurn} state={gameState[2][1]} onClick={handleTileClick} />
            <GameTile playerOneTurn={props.playerOneTurn} state={gameState[2][2]} onClick={handleTileClick} />
        </BoardWrapper>
    )
}