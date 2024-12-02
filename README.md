### micro:bit XGO Robot Kit Extension

![micro:bit XGO Robot Kit](/xgo.png/)

This extension is designed to program and control the micro:bit XGO Robot Kit. You can purchase the micro:bit XGO Robot Kit from the [Elecfreaks Official Store](https://shop.elecfreaks.com/products/elecfreaks-micro-bit-xgo-rider-kit).

## Key Features

- **Flexible Action Execution:** Use predefined actions to make the robot perform various tasks, such as sitting down, waving, etc.
- **Precise Direction Control:** Accurately control the robot's movement direction, such as forward, backward, and turning.
- **Battery Level Monitoring:** Real-time monitoring of the robot's battery level to ensure proper operation.
- **Serial Communication Initialization:** Initialize serial communication with the robot using specified pins.

## Quick Start

### Installing the Extension

1. Open the MakeCode editor and click the "Extensions" icon.
2. Search for "XGO-Rider" or paste the link "https://github.com/elecfreaks/XGO-Rider" to download and install the extension.

### Basic Examples

#### Action Execution Control

**Block Editor Example**

1. Drag the "on button A pressed" block into the script area.
2. Below it, insert the "XGO-Rider - Execute Action" block, set to "Sit Down".
3. For buttons AB and B, control other actions, such as moving forward and waving.

**JavaScript Example**

```javascript
input.onButtonPressed(Button.A, function () {
    xgoRider.setHeight(14)
})
input.onButtonPressed(Button.B, function () {
    xgoRider.setAngle(40)
})
xgoRider.initXGOSerial(SerialPin.P14, SerialPin.P13)
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

```

#### Get Battery Level

**Block Editor Example**

1. Use the "forever" loop block.
2. Inside it, insert the "set variable" block and set the variable to "XGO-Rider - Get Battery Level".

**JavaScript Example**

```javascript
let batteryLevel = 0;
basic.forever(function () {
    batteryLevel = xgoRider.get_battery_level();
    // Add more logic here, such as displaying the battery level
});
```

## Advanced Applications

Explore advanced features such as motor speed regulation and sensor data retrieval. For detailed examples and instructions, visit our [online tutorials](https://wiki.elecfreaks.com/en/microbit/robot/xgo-rider-kit/about-xgo-rider-kit/introduction/).

## Educational Materials and Tutorials

For more detailed guides and tutorials, including step-by-step instructions and project ideas, visit our [Educational Resources](https://wiki.elecfreaks.com/en/microbit/robot/xgo-rider-kit/).

## Supported Targets

- PXT/micro:bit

## License

This extension is licensed under the MIT License.
