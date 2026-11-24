let current = 'X', cells = Array(9).fill(''), active = true;
const wins = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
function makeMove(idx) {
    if (!active || cells[idx]) return;
    cells[idx] = current;
    document.querySelectorAll('.cell')[idx].textContent = current;
    for (let w of wins) {
        if (cells[w[0]] && cells[w[0]] === cells[w[1]] && cells[w[0]] === cells[w[2]]) {
            document.getElementById('status').textContent = `Player ${current} Wins!`;
            active = false;
            return;
        }
    }
    if (!cells.includes('')) { document.getElementById('status').textContent = "It's a Draw!"; active = false; return; }
    current = current === 'X' ? 'O' : 'X';
    document.getElementById('status').textContent = `Player ${current}'s Turn`;
}
function resetGame() {
    cells.fill(''); active = true; current = 'X';
    document.querySelectorAll('.cell').forEach(c => c.textContent = '');
    document.getElementById('status').textContent = "Player X's Turn";
}