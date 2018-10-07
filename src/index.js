module.exports = function solveSudoku(matrix) {
    for (let i = 0; i < 9; i++){
        for (let j = 0; j < 9; j++){
            if (!matrix[i][j]){
            for(let num = 1; num <= 9; num++){
                if(solveIndex(i, j, num, matrix)){
                    if(solveSudoku(matrix)){
                        return matrix;
                    }
                    matrix[i][j] = 0;
                }
            }
            return false;
            }
        }
    }
    return true;
}

function rowSearch(i, num, matrix){
    for(let j = 0; j < 9; j++){
        if(matrix[i][j] == num){
            return false;
        }
    }
    return true;
}

function colSearch(j, num, matrix){
    for (let i = 0; i < 9; i++){
        if(matrix[i][j] == num){
            return false;
        }
    }
    return true;
};

function boxSearch(i, j, num, matrix){
    const iBox = Math.floor(i / 3) * 3;
    const jBox = Math.floor(j / 3) * 3;
    for (let row = 0; row < 3; row++){
        for (let col = 0; col < 3; col++){
            if (matrix[iBox + row][jBox + col] == num){
                return false;
            }            
        }        
    }
    return true;
}

function solveIndex(i, j, num, matrix){
    const checkNum = rowSearch(i, num, matrix) && colSearch(j, num, matrix) && boxSearch(i, j, num, matrix);
    if(checkNum){
        matrix[i][j] = num;
        return true;
    }
    return false;
}