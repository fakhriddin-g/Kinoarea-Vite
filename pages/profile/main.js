import { headerFunction } from "../../modules/header";

headerFunction()

let containers = document.querySelectorAll('main .wrapper')
let tabs = document.querySelectorAll('aside img')

containers.forEach((container, idx) => {
  if (idx !== 0) {
    container.classList.add('hide')
  }
})

tabs.forEach((btn) => {
  let key = btn.id;

  btn.onclick = () => {
     tabs.forEach(btn => btn.classList.remove("active_link"))
     btn.classList.add("active_link")
     if (key !== "ellipse" && key !== "out") {

        containers.forEach(cont => cont.classList.add('hide'))

        let cont = document.querySelector(`#cont-${key}`)
        cont.classList.remove('hide')
     }
  }
})