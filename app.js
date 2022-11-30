const form = document.myForm
const resetForm = document.resetForm

form.addEventListener("submit", (e, goo, bob, che) =>{
    e.preventDefault()

    goo = form.goo.value
    bob = form.bob.value
    che = form.che.value

    this.one = parseInt(goo)
    this.two = parseInt(bob)
    this.three = parseInt(che)

    let gResult = one * 5
    let bResult = two * 7
    let cResult = three * 11

    let result = gResult + bResult + cResult

    document.getElementById("totalResult").textContent = result + " Coins"
})

resetForm.addEventListener("submit", (e) =>{
    e.preventDefault()
    form.reset()
    document.getElementById("totalResult").textContent = ""
})
