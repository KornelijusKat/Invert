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
    console.log(flippedMat)
    return flippedMat
}
//iš pradžių bandžiau tiesiog primityviai sudėti arrayus atvirksčiai
// , bet aišku netaip suveikė, kaip galvojau :D
const invert = (N, A) => {
    const invertedMat = [];
    for(let x=0; x<N; x++){
        let tempArray = [];
        for(let row = N - 1; row >=0; row--){
            tempArray.push(A[row][x]);
        }
        invertedMat.push(tempArray);
    }
    console.log(invertedMat)
    return invertedMat
}
//flipColour(A)
//invert(N,A)
invert(N, flipColour(A))

