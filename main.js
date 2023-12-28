const nomeHeroi = 'juan'
let vitoriasHeroi = partidas(200,10)
let ranques = ['ferro','bronze','prata','ouro','diamante','lendario','imortal'];
let frase = `O Herói: ${nomeHeroi} tem de saldo de vitorias igual a: ${vitoriasHeroi} está no nível de : `; 


function partidas(vitorias,derrotas){
    let ranque = vitorias - derrotas;
    return ranque
}
function ranqueHeroi(){
    for(let i = 0; i < ranques.length; i++){
        if(vitoriasHeroi < 10){
            console.log(`${frase} ${ranques[0]}`)
            break;
        }
        else if(vitoriasHeroi > 11 && vitoriasHeroi < 20){
            console.log(`${frase}${ranques[1]}`);
            break;
        }
        else if(vitoriasHeroi > 21 && vitoriasHeroi < 50){
            console.log(`${frase}${ranques[2]}`);
            break;
        }
        else if(vitoriasHeroi > 51 && vitoriasHeroi < 80){
            console.log(`${frase}${ranques[3]}`);
            break;
        }
        else if(vitoriasHeroi > 81 && vitoriasHeroi < 90){
            console.log(`${frase}${ranques[4]}`);
            break;
        }
        else if(vitoriasHeroi > 91 && vitoriasHeroi < 100){
            console.log(`${frase}${ranques[5]}`);
            break;
        }
        else if(vitoriasHeroi >= 101 ){
            console.log(`${frase}${ranques[6]}`);
            break;
        }
        else{
            console.log('erro tente novamente mais tarde!');
            break;
        }

    }
}
 ranqueHeroi()
