const Bowling = require('./bowling');

describe('bowling testing', () => {
    it ('should be able to add and get score for the frame', () => {
        const board = new Bowling();

        board.insertScore(5);
        board.insertScore(4);
        expect(board.getScore()).toEqual(9);
    });

    it ('should get the correct frame and rolls', () => {
        const board = new Bowling();

        board.insertScore(5);
        expect(board.roll).toEqual(2);
        expect(board.current_frame).toEqual(1);
        board.insertScore(4);
        expect(board.roll).toEqual(1);
        expect(board.current_frame).toEqual(2);
        expect(board.getScore()).toEqual(9);
    });

    it ('should be able to calculate spare scores', () => {
        const board = new Bowling();

        board.insertScore(5);
        board.insertScore(5);
        expect(board.getScore()).toEqual(0);
        board.insertScore(7);
        board.insertScore(2);
        expect(board.getScore()).toEqual(26);
    });

    it ('should be able to calculate spares back to back', () => {
        const board = new Bowling();

        board.insertScore(5);
        board.insertScore(5);
        expect(board.getScore()).toEqual(0);
        board.insertScore(7);
        board.insertScore(3);
        expect(board.getScore()).toEqual(17);
        board.insertScore(3);
        board.insertScore(3);
        expect(board.getScore()).toEqual(36);
    });

    it ('should be able to calculate 3 back to back spares', () => {
        const board = new Bowling();

        board.insertScore(5);
        board.insertScore(5);
        expect(board.getScore()).toEqual(0);
        board.insertScore(7);
        board.insertScore(3);
        expect(board.getScore()).toEqual(17);
        board.insertScore(3);
        board.insertScore(7);
        expect(board.getScore()).toEqual(30);
        board.insertScore(5);
        board.insertScore(2);
        expect(board.getScore()).toEqual(52);
    });

    it ('should be able to calculate strikes', () => {
        const board = new Bowling();

        board.insertScore(10);
        expect(board.getScore()).toEqual(0);
        board.insertScore(4);
        board.insertScore(3);
        expect(board.getScore()).toEqual(24);
    });

    it ('should be able to calculate back to back strikes', () => {
        const board = new Bowling();

        board.insertScore(10);
        expect(board.getScore()).toEqual(0);
        board.insertScore(10);
        expect(board.getScore()).toEqual(20);
        board.insertScore(8);
        board.insertScore(1);
        expect(board.getScore()).toEqual(56);
    });

    it ('should be able to calculate 3 back to back strikes', () => {
        const board = new Bowling();

        board.insertScore(10);
        expect(board.getScore()).toEqual(0);
        board.insertScore(10);
        expect(board.getScore()).toEqual(20);
        board.insertScore(10);
        expect(board.getScore()).toEqual(50);
        board.insertScore(4);
        board.insertScore(2);
        expect(board.getScore()).toEqual(76);
    });

    it ('should be able to calculate a strike into a spare', () => {
        const board = new Bowling();

        board.insertScore(10);
        expect(board.getScore()).toEqual(0);
        board.insertScore(8);
        board.insertScore(2);
        expect(board.getScore()).toEqual(20);
        board.insertScore(3);
        board.insertScore(2);
        expect(board.getScore()).toEqual(38);
    });

    it ('should be able to calculate a spare into a spare into a strike', () => {
        const board = new Bowling();

        board.insertScore(8);
        board.insertScore(2);
        expect(board.getScore()).toEqual(0);
        board.insertScore(3);
        board.insertScore(7);
        expect(board.getScore()).toEqual(13);
        board.insertScore(10);
        expect(board.getScore()).toEqual(33);
        board.insertScore(2);
        board.insertScore(4);
        expect(board.getScore()).toEqual(55);
    });

    it ('should be able to calculate a full game', () => {
        const board = new Bowling();

        board.insertScore(6);
        board.insertScore(2);

        board.insertScore(5);
        board.insertScore(3);

        board.insertScore(6);
        board.insertScore(3);

        board.insertScore(8);
        board.insertScore(1);

        board.insertScore(6);
        board.insertScore(2);

        board.insertScore(0);
        board.insertScore(8);

        board.insertScore(5);
        board.insertScore(4);

        board.insertScore(9);
        board.insertScore(0);

        board.insertScore(7);
        board.insertScore(1);

        board.insertScore(3);
        board.insertScore(4);

        expect(board.getScore()).toEqual(83);
    });

    it ('should be able to calculate a full game with spares', () => {
        const board = new Bowling();

        board.insertScore(6);
        board.insertScore(2);

        board.insertScore(5);
        board.insertScore(5);

        board.insertScore(6);
        board.insertScore(3);

        board.insertScore(8);
        board.insertScore(1);

        board.insertScore(6);
        board.insertScore(2);

        board.insertScore(2);
        board.insertScore(8);

        board.insertScore(5);
        board.insertScore(4);

        board.insertScore(9);
        board.insertScore(0);

        board.insertScore(7);
        board.insertScore(1);

        board.insertScore(3);
        board.insertScore(4);

        expect(board.getScore()).toEqual(98);
    });

    it ('should be able to calculate a full game with strikes', () => {
        const board = new Bowling();

        board.insertScore(6);
        board.insertScore(2);

        board.insertScore(5);
        board.insertScore(3);

        board.insertScore(10);

        board.insertScore(8);
        board.insertScore(1);

        board.insertScore(6);
        board.insertScore(2);

        board.insertScore(0);
        board.insertScore(8);

        board.insertScore(5);
        board.insertScore(4);

        board.insertScore(9);
        board.insertScore(0);

        board.insertScore(7);
        board.insertScore(1);

        board.insertScore(3);
        board.insertScore(4);

        expect(board.getScore()).toEqual(93);
    });

    it ('should be able to calculate a full game with spares on 10', () => {
        const board = new Bowling();

        board.insertScore(6);
        board.insertScore(2);

        board.insertScore(5);
        board.insertScore(3);

        board.insertScore(6);
        board.insertScore(3);

        board.insertScore(8);
        board.insertScore(1);

        board.insertScore(6);
        board.insertScore(2);

        board.insertScore(0);
        board.insertScore(8);

        board.insertScore(5);
        board.insertScore(4);

        board.insertScore(9);
        board.insertScore(0);

        board.insertScore(7);
        board.insertScore(1);

        board.insertScore(3);
        board.insertScore(7);
        board.insertScore(4);
        
        expect(board.getScore()).toEqual(90);
    });

    it ('should be able to calculate a full game with spares on 10 and back to back', () => {
        const board = new Bowling();

        board.insertScore(6);
        board.insertScore(2);

        board.insertScore(5);
        board.insertScore(3);

        board.insertScore(6);
        board.insertScore(3);

        board.insertScore(8);
        board.insertScore(1);

        board.insertScore(6);
        board.insertScore(2);

        board.insertScore(0);
        board.insertScore(8);

        board.insertScore(5);
        board.insertScore(4);

        board.insertScore(9);
        board.insertScore(0);

        board.insertScore(7);
        board.insertScore(3);

        board.insertScore(3);
        board.insertScore(7);
        board.insertScore(4);
        
        expect(board.getScore()).toEqual(95);
    });

    it ('should be able to calculate a full game with a strike on 10', () => {
        const board = new Bowling();

        board.insertScore(6);
        board.insertScore(2);

        board.insertScore(5);
        board.insertScore(3);

        board.insertScore(6);
        board.insertScore(3);

        board.insertScore(8);
        board.insertScore(1);

        board.insertScore(6);
        board.insertScore(2);

        board.insertScore(0);
        board.insertScore(8);

        board.insertScore(5);
        board.insertScore(4);

        board.insertScore(9);
        board.insertScore(0);

        board.insertScore(7);
        board.insertScore(1);

        board.insertScore(10);
        board.insertScore(7);
        board.insertScore(1);

        expect(board.getScore()).toEqual(94);
    });

    it ('should be able to calculate a full game with a strike on 10 and roll 2', () => {
        const board = new Bowling();

        board.insertScore(6);
        board.insertScore(2);

        board.insertScore(5);
        board.insertScore(3);

        board.insertScore(6);
        board.insertScore(3);

        board.insertScore(8);
        board.insertScore(1);

        board.insertScore(6);
        board.insertScore(2);

        board.insertScore(0);
        board.insertScore(8);

        board.insertScore(5);
        board.insertScore(4);

        board.insertScore(9);
        board.insertScore(0);

        board.insertScore(7);
        board.insertScore(1);

        board.insertScore(10);
        board.insertScore(10);
        board.insertScore(1);

        expect(board.getScore()).toEqual(97);
    });

    it ('should be able to calculate four strikes at the end', () => {
        const board = new Bowling();

        board.insertScore(1);
        board.insertScore(1);
        board.insertScore(1);
        board.insertScore(1);
        board.insertScore(1);
        board.insertScore(1);
        board.insertScore(1);
        board.insertScore(1);
        board.insertScore(1);
        board.insertScore(1);
        board.insertScore(1);
        board.insertScore(1);
        board.insertScore(1);
        board.insertScore(1);
        board.insertScore(1);
        board.insertScore(1);
        board.insertScore(0);
        board.insertScore(10);

        board.insertScore(10);
        board.insertScore(10);
        board.insertScore(10);
        expect(board.getScore()).toEqual(66);
    });

    it ('should be able to calculate a perfect game', () => {
        const board = new Bowling();

        board.insertScore(10);
        board.insertScore(10);
        board.insertScore(10);
        board.insertScore(10);
        board.insertScore(10);
        board.insertScore(10);
        board.insertScore(10);
        board.insertScore(10);
        board.insertScore(10);

        board.insertScore(10);
        board.insertScore(10);
        board.insertScore(10);
        expect(board.getScore()).toEqual(300);
    });
});