const n=8;
const p='DDUUUUDD';

let valleys=0;
let elev=0;

for(let i =0;i<n;i++){
    if(p[i]=='D'){
        elev--;
    }
    else{
        if(elev==-1) valleys++;
        elev++;
    }
}

console.log(valleys);