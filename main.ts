//% color=#8600FF weight=100 icon="\uf005"
//% block="xgo" blockId="xgo"
namespace xgo {

    export enum direction_enum {
        //% block="Forward"
        Forward,
        //% block="Backward"
        Backward,
        //% block="left"
        Left,
        //% block="Right"
        Right
    }

    export enum action_enum {
        //% block="Default_posture"
        Default_posture,
        //% block="Go_prone"
        Go_prone,
        //% block="Stand"
        Stand,
        //% block="Crawl_forward"
        Crawl_forward,
        //% block="Whirl"
        Whirl,
        //% block="Sur_place"
        Sur_place,
        //% block="Squat"
        Squat,
        //% block="Twirl_Roll"
        Twirl_Roll,
        //% block="Twirl_Pitch"
        Twirl_Pitch,
        //% block="Twirl_Yaw"
        Twirl_Yaw,
        //% block="Triaxial_rotation"
        Triaxial_rotation,
        //% block="Pee"
        Pee,
        //% block="Sit_down"
        Sit_down,
        //% block="Wave"
        Wave,
        //% block="Stretch_oneself"
        Stretch_oneself,
        //% block="Play_pendulum"
        Play_pendulum,
        //% block="Request_feeding"
        Request_feeding,
        //% block="Looking_for_food"
        Looking_for_food,
        //% block="Handshake"
        Handshake
    }

    //% block="set XGO|RX %tx|TX %rx"
    export function init_xgo_serial(tx: SerialPin, rx: SerialPin) {
        serial.redirect(tx, rx, BaudRate.BaudRate115200)
    }

    //% block="move %direction speed %speed\\%"
    //% speed.min = 0 speed.max = 100
    export function move_xgo(direction: direction_enum,speed:number) {
        let move_buffer = pins.createBuffer(9)
        move_buffer[0] = 0x55
        move_buffer[1] = 0x00
        move_buffer[2] = 0x09
        move_buffer[3] = 0x00
        move_buffer[7] = 0x00
        move_buffer[8] = 0xAA
        switch (direction) {
            case direction_enum.Forward:
                move_buffer[4] = 0x30
                move_buffer[5] = Math.map(speed, 0, 100, 128, 255)
                move_buffer[6] = ~(0x90+0x00+0x30+move_buffer[5])
            case direction_enum.Backward:
                move_buffer[4] = 0x30
                move_buffer[5] = Math.map(speed, 0, 100, 128, 0)
                move_buffer[6] = ~(0x90+0x00+0x30+move_buffer[5])
            case direction_enum.Left:
                move_buffer[4] = 0x31
                move_buffer[5] = Math.map(speed, 0, 100, 128, 0)
                move_buffer[6] = ~(0x90+0x00+0x31+move_buffer[5])
            case direction_enum.Right:
                move_buffer[4] = 0x31
                move_buffer[5] = Math.map(speed, 0, 100, 128, 255)
                move_buffer[6] = ~(0x90+0x00+0x31+move_buffer[5])
        }
        serial.writeBuffer(move_buffer)
    }

    //% block="Execution action %action"
    export function execution_action(action: action_enum) {
        let commands_buffer = pins.createBuffer(9)
        commands_buffer[0] = 0x55
        commands_buffer[1] = 0x00
        commands_buffer[2] = 0x09
        commands_buffer[3] = 0x00
        commands_buffer[4] = 0x3E
        commands_buffer[7] = 0x00
        commands_buffer[8] = 0xAA
        switch (action) {
            case action_enum.Default_posture:
                commands_buffer[5] = 0x00
                commands_buffer[6] = 0xB8
                break
            case action_enum.Go_prone:
                commands_buffer[5] = 0x01
                commands_buffer[6] = 0xB7
                break
            case action_enum.Stand:
                commands_buffer[5] = 0x02
                commands_buffer[6] = 0xB6
                break
            case action_enum.Crawl_forward:
                commands_buffer[5] = 0x03
                commands_buffer[6] = 0xB5
                break
            case action_enum.Whirl:
                commands_buffer[5] = 0x04
                commands_buffer[6] = 0xB4
                break
            case action_enum.Sur_place:
                commands_buffer[5] = 0x05
                commands_buffer[6] = 0xB3
                break
            case action_enum.Squat:
                commands_buffer[5] = 0x06
                commands_buffer[6] = 0xB2
                break
            case action_enum.Twirl_Roll:
                commands_buffer[5] = 0x07
                commands_buffer[6] = 0xB1
                break
            case action_enum.Twirl_Pitch:
                commands_buffer[5] = 0x08
                commands_buffer[6] = 0xB0
                break
            case action_enum.Twirl_Yaw:
                commands_buffer[5] = 0x09
                commands_buffer[6] = 0xAF
                break
            case action_enum.Triaxial_rotation:
                commands_buffer[5] = 0x0A
                commands_buffer[6] = 0xAE
                break
            case action_enum.Pee:
                commands_buffer[5] = 0x0B
                commands_buffer[6] = 0xAD
                break
            case action_enum.Sit_down:
                commands_buffer[5] = 0x0C
                commands_buffer[6] = 0xAC
                break
            case action_enum.Wave:
                commands_buffer[5] = 0x0D
                commands_buffer[6] = 0xAB
                break
            case action_enum.Stretch_oneself:
                commands_buffer[5] = 0x0E
                commands_buffer[6] = 0xAA
                break
            case action_enum.Play_pendulum:
                commands_buffer[5] = 0x10
                commands_buffer[6] = 0xA8
                break
            case action_enum.Request_feeding:
                commands_buffer[5] = 0x11
                commands_buffer[6] = 0xA7
                break
            case action_enum.Looking_for_food:
                commands_buffer[5] = 0x12
                commands_buffer[6] = 0xA6
                break
            case action_enum.Handshake:
                commands_buffer[5] = 0x13
                commands_buffer[6] = 0xA5
                break
        }
        serial.writeBuffer(commands_buffer)
    }
}