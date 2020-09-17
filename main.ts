input.onButtonPressed(Button.A, function () {
    basic.showNumber(cant_tacos)
    basic.showString("Tacos")
    basic.showNumber(cant_refrescos)
    basic.showString("Referscos")
    basic.showString("Total")
    total = cant_tacos * precio_tacos + cant_refrescos * precio_refresco
    basic.showNumber(total)
})
let total = 0
let precio_refresco = 0
let cant_refrescos = 0
let precio_tacos = 0
let cant_tacos = 0
basic.showString("Lizbeth Romo A01285200")
cant_tacos = randint(0, 20)
precio_tacos = 15
cant_refrescos = randint(0, 5)
precio_refresco = 10
