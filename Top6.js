// opdracht 1
const hitlijst = [
    "Vanish Mode - Lil Durk",
    "Why He Told - King Von",
    "Eat, Work, Pray - Sheff G",
    "Pelle Coat - Lil Durk",
    "Perc Talking- Sleepy Hallow",
    "Overseas - Ken Carson"
];
// opdracht 2
console.log("Eerste songtitel:", hitlijst[0]);

// opdracht 3
console.log("Verzoeknummer (3e):", hitlijst[2]);
// opdracht 4
console.log('\n Top 6 hitlijst Radio Oidar');
hitlijst.forEach((nummer, index) => {
    console.log(`${index + 1}. ${nummer}`);
});