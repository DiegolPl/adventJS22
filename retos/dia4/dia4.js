function fitsInOneBox(boxes) {
    let sortBoxes = boxes.sort((a,b) => a.h - b.h )
    sortBoxes = boxes.sort((a,b) => a.w - b.w )
    sortBoxes = boxes.sort((a,b) => a.l - b.l )
    
    for(let i = 0; i < boxes.length - 1; i++){
        if(boxes[i]['l'] >= boxes[i+1]['l'] || 
        boxes[i]['w'] >= boxes[i+1]['w'] || 
        boxes[i]['h'] >= boxes[i+1]['h']){
            return false
        }
    }
    
    return true
}

// function fitsInOneBox(boxes) {
//     let sortBoxes = boxes.sort((a,b) => a.h - b.h )
//     sortBoxes = boxes.sort((a,b) => a.w - b.w )
//     sortBoxes = boxes.sort((a,b) => a.l - b.l )
//     let opciones = ['l','w','h']
      
//     for(let j=0; j < 3; j++){
//         for(let i = 0; i < boxes.length - 1; i++){
//             if(boxes[i][opciones[j]] >= boxes[i+1][opciones[j]]){
//                 return false
//             }
//         }
//     }
//     return true
// }

const boxes = [
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 },
    { l: 2, w: 10, h: 2}
]
console.log(fitsInOneBox(boxes))