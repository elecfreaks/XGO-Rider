//% color=#8600FF weight=100 icon="\uf005"
//% block="xgo" blockId="xgo"
namespace xgo {

    export enum action_enum {
        //% block="Default_posture"
        Default_posture = "\x00",
        //% block="Go_prone"
        Go_prone = "\x01",
        //% block="Stand"
        Stand = "\x02",
        //% block="Crawl_forward"
        Crawl_forward = "\x03",
        //% block="Whirl"
        Whirl = "\x04",
        //% block="Sur_place"
        Sur_place = "\x05",
        //% block="Squat"
        Squat = "\x06",
        //% block="Twirl_Roll"
        Twirl_Roll = "\x07",
        //% block="Twirl_Pitch"
        Twirl_Pitch = "\x08",
        //% block="Twirl_Yaw"
        Twirl_Yaw = "\x09",
        //% block="Triaxial_rotation"
        Triaxial_rotation = "\x0A",
        //% block="Pee"
        Pee = "\x0B",
        //% block="Sit_down"
        Sit_down = "\x0C",
        //% block="Wave"
        Wave = "\x0D",
        //% block="Stretch_oneself"
        Stretch_oneself = "\x0E",
        //% block="Play_pendulum"
        Play_pendulum = "\x10",
        //% block="Request_feeding"
        Request_feeding = "\x11",
        //% block="Looking_for_food"
        Looking_for_food = "\x12",
        //% block="Handshake"
        Handshake = "\x13"
    }

    //% block="Execution action %action"
    export function execution_action(action: action_enum) {
        serial.writeString("\x55\x00\x09\x00")
        serial.writeString("\x3E" + action)
        switch (action) {
            case action_enum.Default_posture:
                serial.writeString("\xB8\x00\xAA")
                break
            case action_enum.Go_prone:
                serial.writeString("\xB7\x00\xAA")
                break
            case action_enum.Stand:
                serial.writeString("\xB6\x00\xAA")
                break
            case action_enum.Crawl_forward:
                serial.writeString("\xB5\x00\xAA")
                break
            case action_enum.Whirl:
                serial.writeString("\xB4\x00\xAA")
                break
            case action_enum.Sur_place:
                serial.writeString("\xB3\x00\xAA")
                break
            case action_enum.Squat:
                serial.writeString("\xB2\x00\xAA")
                break
            case action_enum.Twirl_Roll:
                serial.writeString("\xB1\x00\xAA")
                break
            case action_enum.Twirl_Pitch:
                serial.writeString("\xB0\x00\xAA")
                break
            case action_enum.Twirl_Yaw:
                serial.writeString("\xAF\x00\xAA")
                break
            case action_enum.Triaxial_rotation:
                serial.writeString("\xAE\x00\xAA")
                break
            case action_enum.Pee:
                serial.writeString("\xAD\x00\xAA")
                break
            case action_enum.Sit_down:
                serial.writeString("\xAC\x00\xAA")
                break
            case action_enum.Wave:
                serial.writeString("\xAB\x00\xAA")
                break
            case action_enum.Stretch_oneself:
                serial.writeString("\xAA\x00\xAA")
                break
            case action_enum.Play_pendulum:
                serial.writeString("\xA8\x00\xAA")
                break
            case action_enum.Request_feeding:
                serial.writeString("\xA7\x00\xAA")
                break
            case action_enum.Looking_for_food:
                serial.writeString("\xA6\x00\xAA")
                break
            case action_enum.Handshake:
                serial.writeString("\xA5\x00\xAA")
                break
        }
    }
}