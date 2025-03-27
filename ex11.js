function filtrerPairs(tab) {
    return tab.filter(tab => tab % 2 === 0);
}

console.log(filtrerPairs([1, 2, 3, 4, 5, 6])); // Résultat attendu : [2, 4, 6]
console.log(filtrerPairs([0, -2, -4, 18, 5, 6])); // Résultat attendu : [0, -2, -4, 18, 6]
console.log(filtrerPairs([15, -4, -2, 38, 8,])); // Résultat attendu : [0, -2, -4, 18, 6]
