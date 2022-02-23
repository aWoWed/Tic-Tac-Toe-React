export function calculateWinner(marks: Array<string>) {
    const winningPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    for (let i = 0; i < winningPatterns.length; i++) {
        const [a, b, c] = winningPatterns[i];
        const condition = marks[a] && marks[a] === marks[b] && marks[a] === marks[c];

        if (condition) {
            return `Winner - player ${marks[a]}`;
        }
    }

    if (!marks.includes("")) {
        return "Draw";
    }

    return null;
}