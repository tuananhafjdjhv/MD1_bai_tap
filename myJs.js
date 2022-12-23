class temperature {
    doC

    constructor(doC) {
        this.doC = doC;
    }
    chuyendoF(){
        return this.doC*1.8+32
    }
    chuyendoKevin(){
        return this.doC+273.15
    }
}
function chuyen() {
    let c = document.getElementById('chuyenDoi').value;
    let tempeRature = new temperature(c)
    let a = tempeRature.chuyendoF()
    let b = tempeRature.chuyendoKevin()
    document.getElementById('doF').innerHTML=a;
    document.getElementById('doK').innerHTML=b;
    console.log(a,b)
}