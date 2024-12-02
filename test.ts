input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showNumber(xgoRider.batteryStatus())
})
input.onButtonPressed(Button.A, function () {
    xgoRider.moveRider(xgoRider.DirectionEnum.Forward, 20, 5)
})
input.onButtonPressed(Button.AB, function () {
    xgoRider.squattingFunc(3)
})
input.onButtonPressed(Button.B, function () {
    xgoRider.rotateRider(xgoRider.RatateEnum.clockwise, 20, 5)
})
xgoRider.initxgoRiderSerial(SerialPin.P13, SerialPin.P14)
loops.everyInterval(500, function () {
    basic.showString(xgoRider.version())
})
basic.forever(function () {
    xgoRider.setLEDMode(xgoRider.LEDNumber.All, 0xff0000)
    basic.pause(1000)
    xgoRider.setLEDMode(xgoRider.LEDNumber.All, 0x00ff00)
    basic.pause(1000)
    xgoRider.setLEDMode(xgoRider.LEDNumber.All, 0x0000ff)
    basic.pause(1000)
})
