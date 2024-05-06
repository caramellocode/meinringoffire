export class Game {
    public players: string[] = [];
    public stack: string[] = [];
    public playedCards: string[] = [];
    public currentPlayer: number = 0;

    constructor () {
        for (let i = 1; i <= 14; i++) {  // Adjusted loop to include card 14 if needed
            this.stack.push('spade_' + i);  // Removed space after underscore
            this.stack.push('hearts_' + i);
            this.stack.push('diamonds_' + i);
            this.stack.push('clubs_' + i);
        }

        shuffle(this.stack);
    }
}

function shuffle(array: string[]): string[] {  // Specify type here
    var currentIndex = array.length, tempValue, randomIndex;

    while (0 !== currentIndex) {

        // pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // and swap it with the current element.
        tempValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = tempValue;
    }

    return array;
}
