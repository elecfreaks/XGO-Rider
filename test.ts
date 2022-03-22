input.onButtonPressed(Button.A, function () {
    xgo.translational_step_continue(xgo.translation_direction_enum.Forward, 10, 5)
})
input.onButtonPressed(Button.B, function () {
    xgo.rotate_angle_continue(xgo.rotate_direction_enum.turn_left, 60, 5)
})
xgo.init_xgo_serial(SerialPin.P1, SerialPin.P2)
xgo.execution_action(xgo.action_enum.Squat)
xgo.rotate_angle_reel(xgo.body_direction_xyz_enum.X, 120)
xgo.translational_motion_reciprocate(xgo.body_direction_xyz_enum.X, 6)
basic.forever(function () {
	
})