const N = 10;
const A = [
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ];
const flipColour = (A)=>{
    const flippedMat = [];
    for(let row of A){    
        let tempArray = [];  
        for (let element of row){
            element = 1 - element
            tempArray.push(element);
        }
        flippedMat.push(tempArray)
    }
    //console.log(flippedMat)
    return flippedMat
}
//iš pradžių bandžiau tiesiog primityviai sudėti arrayus atvirksčiai
// , bet aišku netaip suveikė, kaip galvojau :D
const invert = (N, A, direction) => {
    const invertedMat = [];
    if(direction === 'right'){
        for(let x=0; x<N; x++){
            let tempArray = [];
            for(let row = N - 1; row >=0; row--){
                tempArray.push(A[row][x]);
            }
            invertedMat.push(tempArray);
    }}else{
        for(let x=0; x<N; x++){
            let tempArray = [];
            for(let row = N - 1; row >=0; row--){
                tempArray.unshift(A[row][x]);
            }
            invertedMat.unshift(tempArray);
    }}
    //console.log(invertedMat)
    return invertedMat
}
//flipColour(A)
//invert(N,A)
const emojiArray = ['😀', '😁', '😂', '🤣', '😃', '😄', '😅', '😆'];
const ChangeValueToRandomEmoji = () =>{
    const randomEmojiMat = [];
    for(let row of A){    
        let tempArray = [];  
        for (let element of row){
            if(element === 1){
                let randomEmoji = Math.floor(Math.random() * emojiArray.length)
                element = emojiArray[randomEmoji]
                tempArray.push(element)
            }
            //  supratau, kad push(' ') nebus gera idėja sunkiuoju būdu. 
            else{
                element = '⬜'
                tempArray.push(element)
            }
        }
        randomEmojiMat.push(tempArray)
    }
    return randomEmojiMat
}
invert(N, flipColour(A))
//masyvo renderinimui
const appendInvertedArray = (coppyA, direction) =>{
    coppyA = invert(N, coppyA, direction)
    return appendArray(coppyA)
}
const appendArray = (coppyA) =>{
    const emojiBox = document.querySelector('.emojiBox');
    emojiBox.innerHTML = '';
    coppyA.forEach((row) => {
        const r = document.createElement('p');
        r.innerHTML = row.join(' '); 
        emojiBox.append(r);
    });
    return coppyA
}
//rotacijos event listeneris 
const rotateEvent = () => {
    let coppyA = appendArray(ChangeValueToRandomEmoji())
    document.getElementById('btnRight').addEventListener('click', () => {
        coppyA = appendInvertedArray(coppyA, 'right')
    });
    document.getElementById('btnLeft').addEventListener('click', () => {
        coppyA = appendInvertedArray(coppyA)
    })
};
rotateEvent();