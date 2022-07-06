import { Component } from 'react'

let id = ''
let id2 = ''
export default class Api extends Component {
    static clickBuy(Id) {
        id = Id[0]
        id2 = Id[1]
    }
    static outBuy() {
        if (id) {
            document.getElementById(id).classList.toggle('pinck')
            document.getElementById(id2).classList.toggle('pinck')
            document.getElementById(id).nextElementSibling.classList.toggle('disabled')
            document.getElementById(id).nextElementSibling.nextElementSibling.classList.toggle('disabled')
        }

        id = ''
        id2 = ''
    }
}
