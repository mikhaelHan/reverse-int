module.exports = function reverse(n) {
	let mass = n < 0 ? Array.from(String(n * (-1)), Number) : Array.from(String(n), Number);
	let newMass = '';
	for (let i = (mass.length - 1); i >= 0; i--) {
		newMass += mass[i]
	}
	return Number(newMass)
}
