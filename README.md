# micro:bit XGO Robot Kit

![Uploading xgo.png…]()


This extension is designed to programme and drive the micro:bit XGO Robot Kit. You can [get micro:bit XGO Robot Kit from the Elecfreaks store.](https://www.elecfreaks.com/micro-bit-xgo-robot-kit.html)

## Code Example
```JavaScript
input.onButtonPressed(Button.A, function () {
    xgo.execution_action(xgo.action_enum.Sit_down)
})
input.onButtonPressed(Button.AB, function () {
    xgo.move_xgo(xgo.direction_enum.Forward, 50)
})
input.onButtonPressed(Button.B, function () {
    xgo.execution_action(xgo.action_enum.Wave)
})
xgo.init_xgo_serial(SerialPin.P1, SerialPin.P2)
xgo.execution_action(xgo.action_enum.Default_posture)
xgo.leg_lift_continue(30, 3)
basic.forever(function () {
	
})
```

## Supported targets
for PXT/microbit

## License
MIT
