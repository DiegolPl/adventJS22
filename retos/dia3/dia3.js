function distributeGifts(packOfGifts, reindeers) {
    let pesoPack = 0;
    let pesoMax = 0;

    packOfGifts.forEach(gift => {
        pesoPack += gift.length
    })

    reindeers.forEach(reno => {
        pesoMax += reno.length * 2
    })

    return Math.floor(pesoMax/pesoPack)
}

const packOfGifts = ['book', 'doll', 'ball']
const reindeers = ['dasher', 'dancer']

console.log(distributeGifts(packOfGifts, reindeers))