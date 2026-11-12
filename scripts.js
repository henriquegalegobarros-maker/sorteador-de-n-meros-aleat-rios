const buttonSortear = document.querySelector(".buttonSortear")
const entre = document.querySelector("#entre")
const e = document.querySelector("#e")
const total = document.querySelector("#total")

buttonSortear.addEventListener("click", function () {

    const min = Number(entre.value)
    const max = Number(e.value)

    const numeroSorteado = Math.floor(Math.random() * (max - min + 1)) + min

    total.value = numeroSorteado

})
