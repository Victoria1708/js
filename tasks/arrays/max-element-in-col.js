const matrix = [
    [1, 33, 93],
    [44, 62, -9],
    [55, 11, 1]
];

const result = [];
for (let i = 0; i < matrix.length; i++){
    const row = matrix[i];
    const maxElemInRow = getMaxElem(row);
    result.push(maxElemInRow);
}
console.log(result);


function getMaxElem(arr) {
    if (!arr || arr.length === 0) {
        return null;
    }
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        const elem = arr[i];
        max = elem > max ? elem : max;
    }
    return max;
}

