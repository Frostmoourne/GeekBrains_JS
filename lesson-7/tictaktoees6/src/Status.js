class Status {
    constructor() {
        this.status = 'playing';
        this.phase = 'X';
        this.mapValues = [
            ['', '', ''],
            ['', '', ''],
            ['', '', ''],
        ];
    }

    setStatusStopped() {
        this.status = 'stopped';
    }

    isStatusPlaying() {
        return this.status === 'playing';
    }

    togglePhase() {
        this.phase = this.phase === 'X' ? '0' : 'X';
    }
}