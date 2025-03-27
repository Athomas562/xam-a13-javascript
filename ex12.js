function filtrerLongsMots(mots) {
    return mots.filter(mot => mot.length > 5);
}

console.log(filtrerLongsMots(["chat", "éléphant", "chien", "lion"])); // Résultat attendu : ["éléphant"]
console.log(
    filtrerLongsMots(["counter-strike", "valorant", "overwatch", "diablo"])
); // Résultat attendu : ["counter-strike", "valorant", "overwatch", "diablo"]