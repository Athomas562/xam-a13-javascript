function dansPlage(nombre, min, max) {
	if (nombre < max) {
        return true;
    }else {
        return false;
    }
}

console.log(dansPlage(5, 1, 10)); // Résultat attendu : true
console.log(dansPlage(15, 1, 10)); // Résultat attendu : false
console.log(dansPlage(30, 1, 10)); // Résultat attendu : false
console.log(dansPlage(2, 1, 10)); // Résultat attendu : true
