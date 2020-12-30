export default function checkWin(gameState) {

    const check = (a, b, c) => {
        if (a === null || b === null || c === null) {
            return false;
        }
        return a === b && a === c && b === c;
    }

    //Horizontal check
    if (check(gameState[0][0].state, gameState[0][1].state, gameState[0][2].state)) {
        return true; 
    }

    if (check(gameState[1][0].state, gameState[1][1].state, gameState[1][2].state)) {
        return true;  
    }

    if (check(gameState[2][0].state, gameState[2][1].state, gameState[2][2].state)) {
        return true; 
    }

    //Vertical check
    if (check(gameState[0][0].state, gameState[1][0].state, gameState[2][0].state)) {
        return true;  
    }

    if (check(gameState[0][1].state, gameState[1][1].state, gameState[2][1].state)) {
        return true;
    }

    if (check(gameState[0][2].state, gameState[1][2].state, gameState[2][2].state)) {
        return true;  
    }

    //Diagonal check
    if (check(gameState[0][0].state, gameState[1][1].state, gameState[2][2].state)) {
        return true; 
    }

    if (check(gameState[0][2].state, gameState[1][1].state, gameState[2][0].state)) {
        return true; 
    }

    return false;
}