window.addEventListener('load', () => {
    const board = new Board();
    const game = new Game();
    const status = new Status();

    board.init(game,status);
    game.init(status);

    board.renderMap();
    board.initEventHandlers();
});

