input.onButtonPressed(Button.A, function () {
    xgoRider.setHeight(14)
})
input.onButtonPressed(Button.B, function () {
    xgoRider.setAngle(40)
})
xgoRider.initXGOSerial(SerialPin.P13, SerialPin.P14)
loops.everyInterval(1000, function () {
    basic.showString(xgoRider.version())
})
loops.everyInterval(500, function () {
    basic.showNumber(xgoRider.readAngle(xgoRider.AngleEnum.Roll))
})
basic.forever(function () {
    xgoRider.setLEDMode(xgoRider.LEDNumber.All, 0xff0000)
    basic.pause(1000)
    xgoRider.setLEDMode(xgoRider.LEDNumber.All, 0x00ff00)
    basic.pause(1000)
    xgoRider.setLEDMode(xgoRider.LEDNumber.All, 0x0000ff)
    basic.pause(1000)
})
