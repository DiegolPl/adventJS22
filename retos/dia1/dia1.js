function wrapping(gifts) {
    let regalosEnvueltos = gifts.map(regalo => {
        let cantidadPapel = regalo.length + 2;
        let envolturaLateral = '*'.repeat(cantidadPapel);
        return `${envolturaLateral}\n*${regalo}*\n${envolturaLateral}`
    })
    return regalosEnvueltos;
}

console.log(wrapping(['cat','game','socks']))