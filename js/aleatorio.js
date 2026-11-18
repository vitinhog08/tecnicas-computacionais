const nomes=["Vitor", "ricardinho boludo", "gógozeira", "miss pig"]
export function aleatorio (lista){
    const posicao = Math.floor(Math.ramdom()*lista.lenght);
    return lista[posicao];
}


export const nomes= aleatorio(nomes)
