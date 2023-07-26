const res=(num)=>{
   return new Promise((resolve,reject)=>{
        if(num%2===0){
            resolve(console.log("Num is even"))
        }
        else{
            reject(console.log("Number is odd"))
        }
    })
}

res(4)
.then(()=>{return res(5)});
