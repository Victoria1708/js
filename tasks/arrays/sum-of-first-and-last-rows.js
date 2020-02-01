(function () {
    const arr = [
        [33, 2, 3],
        [777, 4, -100],
        [67, 4, 4],
    ];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (i === 0 || i === arr.length - 1) {
                sum = sum + arr[i][j];
            }
        }
    }

    console.log(sum);

})();