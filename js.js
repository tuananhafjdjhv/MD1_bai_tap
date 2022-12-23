let canvas = document.getElementById('myCanvas');


class hinhChuNhat {
    x
    y
    dientich
    chuvi

    constructor(x, y, dientich, chuvi) {
        this.x = x;
        this.y = y;
        this.dientich = dientich;
        this.chuvi = chuvi;
    }

    setdientich(x, y) {
        this.dientich = this.x * this.y
    }

    getdientich() {
        return this.dientich
    }

    setchuvi() {
        this.chuvi = (this.x + this.y) * 2
    }

    getchuvi() {
        return this.chuvi
    }

    draw_chu_nhat(ctx) {
        ctx.beginPath();
        ctx.rect(0,0,this.x,this.y)
        ctx.stroke();
        ctx.closePath();
    }

}

function tinh() {
    let a = +document.getElementById('chieuCao').value;
    let b = +document.getElementById('chieuDai').value;
    let c = document.getElementById('myCanvas');
    ctx = c.getContext('2d')
    let hinh = new hinhChuNhat(a,b)
    hinh.draw_chu_nhat(ctx)
    hinh.setchuvi()
    hinh.setdientich()
    document.getElementById('dienTich').innerHTML = hinh.getdientich();
    document.getElementById('chuVi').innerHTML = hinh.getchuvi();
}
function clearCanvas() {
    
}