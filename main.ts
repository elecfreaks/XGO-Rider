/**
* Functions to micro:bit XGO Robot Kit by ELECFREAKS Co.,Ltd.
*/
//% color=#8600FF icon="\uf1b0"
//% block="xgo" blockId="xgo"
namespace xgo {

    export enum PerformanceEnum {

        //% block="normal mode"
        Normal,
        //% block="cyclical pattern1"
        Cyclical1,
        //% block="cyclical pattern2"
        Cyclical2,
    }

    export enum SelectRepeater {

        //% block="on"
        On,
        //% block="off"
        Off,
    }

    export enum DirectionEnum {

        //% block="forward"
        Forward,
        //% block="backward"
        Backward,
    }

    let headData = 0x5500
    let tailData = 0x00AA
    let headDataH = (headData >> 8) & 0xff;
    let headDataL = (headData >> 0) & 0xff;
    let tailDataH = (tailData >> 8) & 0xff;
    let tailDataL = (tailData >> 0) & 0xff;

    //////////----------------------------------- Basic--------------------------------/////////
    /**
    * TODO: xgo write interface
    */
    function writeCommand(len: number, addr: number, data: number, wait: number) {

        let commands_buffer = pins.createBuffer(len)
        commands_buffer[0] = headDataH
        commands_buffer[1] = headDataL
        commands_buffer[2] = len
        commands_buffer[3] = 0x00
        commands_buffer[4] = addr
        commands_buffer[5] = data
        commands_buffer[6] = ~(len + 0x00 + addr + data)
        commands_buffer[7] = tailDataH
        commands_buffer[8] = tailDataL
        serial.writeBuffer(commands_buffer)

        basic.pause(wait)
    }

    /**
    * TODO: xgo read interface
    */
    function readCommandOneData(len: number, addr: number, readlen: number, wait: number) {

        let commands_buffer = pins.createBuffer(len)
        commands_buffer[0] = headDataH
        commands_buffer[1] = headDataL
        commands_buffer[2] = len
        commands_buffer[3] = 0x02
        commands_buffer[4] = addr
        commands_buffer[5] = readlen
        commands_buffer[6] = ~(len + 0x02 + addr + readlen)
        commands_buffer[7] = tailDataH
        commands_buffer[8] = tailDataL
        serial.writeBuffer(commands_buffer)
        let read_data_buffer = pins.createBuffer(9)
        read_data_buffer = serial.readBuffer(9)

        return read_data_buffer[5]
    }

    /**
    * TODO: initialization xgo motor
    */
    //% group="Basic"
    //% block="Restore initial action"
    //% weight=199
    export function initActionMode() {

        writeCommand(0x09, 0x3E, 0xFF, 1000)
    }

    /**
    * TODO: initialization xgo
    * @param tx describe parameter here, eg: SerialPin.P13
    * @param rx describe parameter here, eg: SerialPin.P14
    */
    //% group="Basic"
    //% block="set XGO TX %tx RX %rx"
    //% weight=500
    export function initXGOSerial(tx: SerialPin, rx: SerialPin) {

        serial.redirect(tx, rx, BaudRate.BaudRate115200)
        initActionMode()
    }

    //% group="Basic"
    //% block="performance mode %mode"
    //% weight=199
    export function performanceMode(mode: PerformanceEnum) {

        let len, addr, data, wait
        len = 0x09
        addr = 0x03
        switch (mode) {

            case PerformanceEnum.Normal :
                data = 0x00
                wait = 1000
                break
            case PerformanceEnum.Cyclical1 :
                data = 0x01
                wait = 1000
                break
            case PerformanceEnum.Cyclical2 :
                data = 0x02
                wait = 1000
                break
        }

        writeCommand(len, addr, data, wait)
    }

    //% group="Basic"
    //% block="get XGO's current power"
    //% weight=199
    export function batteryStatus(): number {

        let len, addr, readlen, wait
        len = 0x09
        addr = 0x01
        readlen = 0x01
        wait = 0

        return readCommandOneData(len, addr, readlen, wait)
    }

    //% group="Basic"
    //% weight=199
    //%block="get XGO's version"
    export function getVersion(): string {
        let commands_buffer = pins.createBuffer(9)
        commands_buffer[0] = headDataH
        commands_buffer[1] = headDataL
        commands_buffer[2] = 0x09
        commands_buffer[3] = 0x02
        commands_buffer[4] = 0x07
        commands_buffer[5] = 0x00
        commands_buffer[6] = 0xED
        commands_buffer[7] = tailDataH
        commands_buffer[8] = tailDataL
        serial.writeBuffer(commands_buffer)
        let read_data_buffer = pins.createBuffer(9)
        read_data_buffer = serial.readBuffer(18)
        let version = String.fromCharCode(read_data_buffer[5]) + String.fromCharCode(read_data_buffer[6]) + String.fromCharCode(read_data_buffer[7]) + String.fromCharCode(read_data_buffer[8]) + String.fromCharCode(read_data_buffer[9])
        return version
    }

    /**
    * TODO: set Rider height
    * @param high describe parameter here, eg: 0
    */
    //% group="Basic"
    //% block="set Rider height %high mm"
    //% high.min=-20 high.max=20
    //% weight=199
    export function setHeight(high: number) {

        let len, addr, data, wait
        len = 0x09
        addr = 0x35
        data = Math.map(high, -20, 20, 0, 255)
        wait = 100

        writeCommand(len, addr, data, wait)
    }

    /**
    * TODO: Adjust the left and right tilt of the fuselage angle °
    * @param angle describe parameter here, eg: 0
    */
    //% group="Basic"
    //% block="Adjust the left and right tilt of the fuselage %angle °"
    //% angle.min=-100 angle.max=100
    //% weight=199
    export function setAngle(angle: number) {

        let len, addr, data, wait
        len = 0x09
        addr = 0x36
        data = Math.map(angle, -100, 100, 0, 255)
        wait = 100

        writeCommand(len, addr, data, wait)
    }

    // /**
    // * TODO: set Rider height
    // * @param high describe parameter here, eg: 0
    // */
    // //% group="Basic"
    // //% block="set Rider height %high mm"
    // //% high.min=-20 high.max=20
    // //% weight=199
    // export function fluctuationFunc(time: number) {

    //     let len, addr, data, wait
    //     len = 0x09
    //     addr = 0x35
    //     data = Math.map(high, -20, 20, 0, 255)
    //     wait = 100

    //     writeCommand(len, addr, data, wait)
    // }

    // /**
    // * TODO: Adjust the left and right tilt of the fuselage angle °
    // * @param angle describe parameter here, eg: 0
    // */
    // //% group="Basic"
    // //% block="Adjust the left and right tilt of the fuselage %angle °"
    // //% angle.min=-100 angle.max=100
    // //% weight=199
    // export function shufflingFunc(time: number) {

    //     let len, addr, data, wait
    //     len = 0x09
    //     addr = 0x36
    //     data = Math.map(angle, -100, 100, 0, 255)
    //     wait = 100

    //     writeCommand(len, addr, data, wait)
    // }

    /**
    * TODO: Move at any speed for any s
    * @param speed describe parameter here, eg: 0
    * @param time describe parameter here, eg: 5
    */
    //% group="Basic"
    //% block="Move %direct at %speed speed for %time s"
    //% speed.min=-100 speed.max=100
    //% weight=199
    export function moveRider(direct: DirectionEnum, speed: number, time: number) {

        let len, addr, data, wait
        len = 0x09
        addr = 0x30
        data = Math.map(speed, -100, 100, 0, 255)
        wait = time

        writeCommand(len, addr, data, wait)

        data = 0
        wait = 100
        writeCommand(len, addr, data, wait)
    }

    /**
    * TODO: Set the dynamic balance mode
    */
    //% group="Basic"
    //% block="%val Dynamic balancing mode"
    //% weight=199
    export function setBalanceMode(val: SelectRepeater) {

        let len, addr, data, wait
        len = 0x09
        addr = 0x61
        switch(val) {

            case SelectRepeater.On :
                data = 0x01
                break
            case SelectRepeater.Off :
                data = 0x00
                break
        }
        wait = 100

        writeCommand(len, addr, data, wait)
    }

}