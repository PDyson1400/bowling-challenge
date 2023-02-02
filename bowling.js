class Bowling {
    constructor() {
        this.current_frame = 1;
        this.current_frame_score = [];
        this.total_score = 0;
        this.framescore = [];
        this.potential_score = [];
        this.roll = 1;
    };

    insertScore(score) {
        this.addScore(score);
        this.update();
    };

    frametotal(frarray) {
        let sum = 0;
        frarray.forEach((num) => {sum += num});
        return sum;
    }

    currentFrameTotal() {
        let frarray = this.current_frame_score;
        let sum = 0;
        frarray.forEach((num) => {sum += num});
        return sum;
    };

    currentFrameSize() {
        if (this.current_frame === 10) {
            return this.current_frame_score.length;
        } else {
            return this.framescore[this.current_frame - 1].length;
        };
    };

    update() {
        if (this.roll === 2 && this.current_frame === 10 && this.currentFrameTotal() === 10) {
            this.roll += 1;
        } else if (this.roll === 3 && this.current_frame === 10) {
            this.framescore.push(this.current_frame_score);
            this.total_score += this.currentFrameTotal();

            this.potentialScoreAdd();
        } else if (this.roll === 2 && this.currentFrameTotal() < 10) {
            this.framescore.push(this.current_frame_score);
            this.total_score += this.currentFrameTotal();

            this.potentialScoreAdd();

            this.current_frame_score = [];

            this.current_frame += 1;
            this.roll = 1;
        } else if (this.currentFrameTotal() === 10 && this.current_frame != 10) {
            this.framescore.push(this.current_frame_score);

            this.potentialScoreAdd();

            this.current_frame_score = [];

            this.current_frame += 1;
            this.roll = 1;
        } else if (this.currentFrameTotal() === 10 && this.current_frame === 10) {

            this.potentialScoreAdd();

            this.roll += 1;
        } else {
            this.roll += 1;
        };
    };

    addScore(score) {
        this.current_frame_score.push(score)
        if (this.roll === 1 && this.currentFrameTotal() === 10 && this.current_frame != 10) {
            this.potential_score.push(
            {
                frame: this.current_frame,
                amount: 2
            });
        } else if (this.roll === 2 && this.currentFrameTotal() === 10 && this.current_frame != 10) {
            this.potential_score.push(
            {
                frame: this.current_frame,
                amount: 1
            });
        };
    };

    potentialScoreAdd() {
        let ticket = [];
        for (let i = 0; i < this.potential_score.length; i++) {
            if (this.current_frame === this.potential_score[i].frame + 1 && this.potential_score[i].amount === 1) {
                this.total_score += this.frametotal(this.framescore[this.potential_score[i].frame - 1])
                this.framescore[this.current_frame - 2][1] += this.current_frame_score[0];
                this.total_score += this.current_frame_score[0];

                ticket.push(i);
            } else if (this.current_frame === this.potential_score[i].frame + 1 && this.potential_score[i].amount === 2) {
                if (this.currentFrameSize() === 1) {
                    this.framescore[this.current_frame - 2][0] += this.currentFrameTotal();
                    this.total_score += this.frametotal(this.framescore[this.current_frame-2]);
                } else if (this.currentFrameSize() === 2) {
                    this.framescore[this.current_frame - 2][0] += this.currentFrameTotal();
                    this.total_score += this.frametotal(this.framescore[this.current_frame-2]);

                    ticket.push(i);
                } else if (this.currentFrameSize() === 3) {
                    this.framescore[this.current_frame - 2][0] += this.current_frame_score[2];
                    this.total_score += this.current_frame_score[2];

                    ticket.push(i);
                };
            } else if (this.current_frame === this.potential_score[i].frame + 2 && this.potential_score[i].amount === 2 && this.current_frame === 10) {
                this.framescore[this.current_frame - 3][0] += this.current_frame_score[0];
                this.total_score += this.current_frame_score[0];;

                ticket.push(i);
            }  else if (this.current_frame === this.potential_score[i].frame + 2 && this.potential_score[i].amount === 2) {
                this.framescore[this.current_frame - 3][0] += this.framescore[this.current_frame - 1][0];
                this.total_score += this.framescore[this.current_frame - 1][0];

                ticket.push(i);
            } else if (this.current_frame === 10 && this.potential_score[i].frame === 10 && this.potential_score[i].amount === 1) {
                this.framescore[this.current_frame - 1][1] += this.current_frame_score[2];
                this.total_score += this.current_frame_score[2];

                ticket.push(i);
            } else if (this.current_frame === 10 && this.roll === 3) {
                this.framescore[this.current_frame - 1][0] += this.current_frame_score[1];
                this.framescore[this.current_frame - 1][0] += this.current_frame_score[2];
                this.total_score += this.current_frame_score[1];
                this.total_score += this.current_frame_score[2];

                ticket.push(i);
            };
        }
        for (let i = 0; i < ticket.length; i++) {
            this.potential_score.splice(i, 1);
        };
    };

    getScore() {
        return this.total_score;
    };
};

module.exports = Bowling;