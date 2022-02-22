//% color=#8600FF weight=100 icon="\uf005"
//% block="xgo" blockId="xgo"
namespace xgo {

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

    //% block="Execution action %action"
    export function execution_action(action: action_enum) {
        serial.writeString("\x55\x00\x09\x00")
        serial.writeString("\x3E")
        switch (action) {
            case action_enum.Default_posture:
                serial.writeString("\x00\xB8\x00\xAA")
                break
            case action_enum.Go_prone:
                serial.writeString("\x01\xB7\x00\xAA")
                break
            case action_enum.Stand:
                serial.writeString("\x02\xB6\x00\xAA")
                break
            case action_enum.Crawl_forward:
                serial.writeString("\x03\xB5\x00\xAA")
                break
            case action_enum.Whirl:
                serial.writeString("\x04\xB4\x00\xAA")
                break
            case action_enum.Sur_place:
                serial.writeString("\x05\xB3\x00\xAA")
                break
            case action_enum.Squat:
                serial.writeString("\x06\xB2\x00\xAA")
                break
            case action_enum.Twirl_Roll:
                serial.writeString("\x07\xB1\x00\xAA")
                break
            case action_enum.Twirl_Pitch:
                serial.writeString("\x08\xB0\x00\xAA")
                break
            case action_enum.Twirl_Yaw:
                serial.writeString("\x09\xAF\x00\xAA")
                break
            case action_enum.Triaxial_rotation:
                serial.writeString("\x0A\xAE\x00\xAA")
                break
            case action_enum.Pee:
                serial.writeString("\x0B\xAD\x00\xAA")
                break
            case action_enum.Sit_down:
                serial.writeString("\x0C\xAC\x00\xAA")
                break
            case action_enum.Wave:
                serial.writeString("\x0D\xAB\x00\xAA")
                break
            case action_enum.Stretch_oneself:
                serial.writeString("\x0E\xAA\x00\xAA")
                break
            case action_enum.Play_pendulum:
                serial.writeString("\x10\xA8\x00\xAA")
                break
            case action_enum.Request_feeding:
                serial.writeString("\x11\xA7\x00\xAA")
                break
            case action_enum.Looking_for_food:
                serial.writeString("\x12\xA6\x00\xAA")
                break
            case action_enum.Handshake:
                serial.writeString("\x13\xA5\x00\xAA")
                break
        }
    }
}