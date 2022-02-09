const { pow } = require('../src/utils.js');

test('0 во 2 степени = 0', () => {
    expect(pow(0, 2)).toBe(0);
});

test('2 в 0 степени = 1', () => {
    expect(pow(2, 0)).toBe(1);
});

test('-5 в 3 степени = -125', () => {
    expect(pow(-5, 3)).toBe(-125);
});

test('7 в -3 степени = 0.0029154518950437317', () => {
    expect(pow(7, -3)).toBe(0.0029154518950437317);
});

test('2 в 2 степени = 4', () => {
    expect(pow(2, 2)).toBe(4);
});
