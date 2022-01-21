const frutas = ["maçã fuji", "maçã verde", "laranja", "abacaxi"];
const outrasFrutas = frutas.filter(fruta => fruta.includes('maçã'));
console.log(outrasFrutas)

/*frutas.filter((fruta) => fruta.includes("maçã"));*/

/*frutas.filter((fruta) => {
    fruta.includes("maçã");
    console.log(outrasFrutas)
});*/

