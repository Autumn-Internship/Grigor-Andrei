const n=9;
const ar=[1,2,2,1,1,3,5,1,2]

var res = 0;
    ar.sort((a, b) => a - b);
    for(let i=0; i<n;i++){
        if(ar[i] == ar[i+1]){
            i++;
            res++;
           }
    }
console.log(res);