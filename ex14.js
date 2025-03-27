function filtrerAdultes(utilisateurs) {
   return utilisateurs.filter( utilisateurs => utilisateurs.age >= 18)
}

console.log(
    filtrerAdultes([
        { nom: "Alice", age: 17 },
        { nom: "Bob", age: 20 },
        { nom: "Charlie", age: 18 },
    ])
);
// Résultat attendu : [{nom: "Bob", age: 20}, {nom: "Charlie", age: 18}]
console.log(
    filtrerAdultes([
        { nom: "Luis", age: 27 },
        { nom: "Diego", age: 20 },
        { nom: "Maxime", age: 8 },
    ])
);
// Résultat attendu : [{nom: "Luis", age: 27}, {nom: "Diego", age: 20}]
console.log(
    filtrerAdultes([
        { nom: "pierre", age: 28 },
        { nom: "jane", age: 10 },
        { nom: "Maxime", age: 15 },
    ])
);