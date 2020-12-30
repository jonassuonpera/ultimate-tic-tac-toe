import GameController from './components/tic-tac-to/game-controller';
import styled from 'styled-components';

const AppDiv = styled.div`
    display: flex;
    justify-content: center;
    height: 100vh;
`;

function App() {
  return (
    <AppDiv>
      <GameController />
    </AppDiv>
  );
}

export default App;
