input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.lightLevel())
})
input.onButtonPressed(Button.B, function () {
    手动控制 = 1
})
let 手动控制 = 0
手动控制 = 0
basic.forever(function () {
    if (手动控制 == 0) {
        if (input.lightLevel() >= 40 && input.lightLevel() < 120) {
            music.setVolume(127)
            music.stopAllSounds()
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            pins.digitalWritePin(DigitalPin.P2, 0)
        }
        if (input.lightLevel() < 40) {
            basic.showLeds(`
                . # # # .
                . # # # .
                . # # # .
                . . . . .
                . . # . .
                `)
            music.playMelody("C D C D C D C D ", 500)
            pins.digitalWritePin(DigitalPin.P2, 1)
            music.setVolume(0)
        }
        if (input.lightLevel() >= 120) {
            basic.showLeds(`
                . . . . .
                # # # # .
                # . . . #
                # # # # .
                . . . . .
                `)
            basic.showLeds(`
                . . . . .
                # # # # .
                # # . . #
                # # # # .
                . . . . .
                `)
            basic.showLeds(`
                . . . . .
                # # # # .
                # # # . #
                # # # # .
                . . . . .
                `)
            basic.showLeds(`
                . . . . .
                # # # # .
                # # # # #
                # # # # .
                . . . . .
                `)
            music.setVolume(127)
            pins.digitalWritePin(DigitalPin.P2, 0)
            music.stopAllSounds()
        }
    }
})
basic.forever(function () {
    while (手动控制 == 1) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.clearScreen()
    }
})
