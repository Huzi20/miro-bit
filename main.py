def on_button_pressed_a():
    basic.show_number(input.light_level())
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_forever():
    if input.light_level() >= 50:
        pins.digital_write_pin(DigitalPin.P2, 0)
    if input.light_level() < 50:
        pins.digital_write_pin(DigitalPin.P2, 1)
    if input.light_level() >= 50:
        pins.digital_write_pin(DigitalPin.P2, 0)
basic.forever(on_forever)
