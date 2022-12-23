class Mobile {
    battery = 100
    inbox = []
    messenger = ''
    outbox = []
    status = false
    turnOn

    constructor(bat, inbox, mes, outbox) {
        this.battery = bat;
        this.inbox = inbox;
        this.messenger = mes;
        this.outbox = outbox;
    }

    getBattery() {
        return this.battery
    }

    setBattery(bat) {
        this.battery = bat
    }

    getInbox() {
        return this.inbox
    }

    setInbox(inbox) {
        this.inbox = inbox
    }

    getMessenger() {
        return this.messenger
    }

    setMessenger(messenger) {
        this.messenger = messenger
    }

    getOutbox() {
        return this.outbox
    }

    setOutbox(outbox) {
        this.outbox = outbox
    }

    isStatus() {
        return this.status
    }

    turnOn() {
        this.status = true
    }

    turnOff() {
        this.status = false
    }

    toggleMobile() {
        this.status = !this.status
    }

    chargingPhone() {
        setInterval(function () {
            if (this.battery < 100) {
                this.battery++
            } else {
                console.log("Pin da day")
                clearInterval(kyuvsdiulviusd)  // id
            }
        }, 1000)
    }

    composeBox() {
        this.messenger = prompt('Nhap tin nhan moi')
    }

    sendMes(phone) {
        this.inbox.push(this.messenger)//lưu tin nhắn đang soạn thao vào hòm thư
        this.outbox.push(this.messenger)//thêm  tin nhắn đã gửi trong hộp thư
    }

    showBox() {
        console.log('Ho thu den:')
        for (let index = 0; index < this.inbox.length; index++) {
            console.log(this.inbox[index])
        }
    }

    showOutbox() {
        console.log("Hop thu di")
        for (let index = 0; index < this.outbox.length; index++) {
            console.log(this.outbox[index])
        }
    }

    decreaseBat() {
        this.battery -= 1
    }
}

let nokia = new Mobile(80)

let iphone11 = new Mobile(69)
if (nokia.isStatus() && iphone11.isStatus()) {
    console.log(nokia.getBattery())
    console.log(iphone11.getBattery())
    nokia.composeBox()
    nokia.sendMes(iphone11)
    iphone11.showBox()
} else {
    if (nokia.isStatus()) {
        console.log('iphone dang tat')
    } else {

    }
}