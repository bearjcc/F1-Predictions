let players = []

class Player{
    constructor(name) {
        players.push(this)
        this.name = name
        points = 0
    }
}

let joseph = new Player("Joseph")
let zoe = new Player("Zoe")

let bot2020 = new Player("Bot2020")
let bot2021 = new Player("Bot2021")
let maximum = new Player("Maximum")
let minimum = new Player("Minimum")
let prevRace = new Player("Previus Race Bot")
let random = new Player("Random Bot")