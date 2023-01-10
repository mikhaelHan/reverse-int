class Reverse {
	numRevers(n) {
		return `${Math.abs(n)}`.split('').reverse().join('') * 1;
	}
}
module.exports = Reverse;