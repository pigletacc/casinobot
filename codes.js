module.exports = {
	0: [
		36,
		x => x === 37,
	],
	'00': [
		36,
		x => x === 38,
	],
	1: [
		36,
		x => x === 1,
	],
	2: [
		36,
		x => x === 2,
	],
	3: [
		36,
		x => x === 3,
	],
	4: [
		36,
		x => x === 4,
	],
	5: [
		36,
		x => x === 5,
	],
	6: [
		36,
		x => x === 6,
	],
	7: [
		36,
		x => x === 7,
	],
	8: [
		36,
		x => x === 8,
	],
	9: [
		36,
		x => x === 9,
	],
	10: [
		36,
		x => x === 10,
	],
	11: [
		36,
		x => x === 11,
	],
	12: [
		36,
		x => x === 12,
	],
	13: [
		36,
		x => x === 13,
	],
	14: [
		36,
		x => x === 14,
	],
	15: [
		36,
		x => x === 15,
	],
	16: [
		36,
		x => x === 16,
	],
	17: [
		36,
		x => x === 17,
	],
	18: [
		36,
		x => x === 18,
	],
	19: [
		36,
		x => x === 19,
	],
	20: [
		36,
		x => x === 20,
	],
	21: [
		36,
		x => x === 21,
	],
	22: [
		36,
		x => x === 22,
	],
	23: [
		36,
		x => x === 23,
	],
	24: [
		36,
		x => x === 24,
	],
	25: [
		36,
		x => x === 25,
	],
	26: [
		36,
		x => x === 26,
	],
	27: [
		36,
		x => x === 27,
	],
	28: [
		36,
		x => x === 28,
	],
	29: [
		36,
		x => x === 29,
	],
	30: [
		36,
		x => x === 30,
	],
	31: [
		36,
		x => x === 31,
	],
	32: [
		36,
		x => x === 32,
	],
	33: [
		36,
		x => x === 33,
	],
	34: [
		36,
		x => x === 34,
	],
	35: [
		36,
		x => x === 35,
	],
	36: [
		36,
		x => x === 36,
	],
	red: [
		2,
		x => [1, 3, 5, 7, 9, 12, 14, 16, 18, 21, 23, 25, 27, 28, 30, 32, 34, 36].includes(x),
	],
	black: [
		2,
		x => [2, 4, 6, 8, 10, 11, 13, 15, 17, 19, 20, 22, 24, 26, 29, 31, 33, 35].includes(x),
	],
	odd: [
		2,
		x => x % 2 === 1 && x < 37,
	],
	even: [
		2,
		x => x % 2 === 0 && x < 37,
	],
	high: [
		2,
		x => x < 37 && x > 18,
	],
	low: [
		2,
		x => x < 19,
	],
	112: [
		3,
		x => x < 13,
	],
	212: [
		3,
		x => x < 25 && x > 12,
	],
	312: [
		3,
		x => x < 37 && x > 24,
	],
	121: [
		3,
		x => x % 3 === 1 && x < 37,
	],
	221: [
		3,
		x => x % 3 === 2 && x < 37,
	],
	321: [
		3,
		x => x % 3 === 0 && x < 37,
	],
};
