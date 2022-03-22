export let players:Player[] = [];

export class Player {
	public points:number = 0;

	constructor(
		public name:string
	) {
		players.push(this);
	}
}

// export function showPlayers(id) {
// 	var el = document.getElementById(id);
// 	let html = `<div class="list-group players">`;
// 	for (var i = 0; i < players.length; i++) {
// 		html += `<div class="list-group-item player">
//         <img class="player-icon" src="img/players/${players[i].name}.png"/>
//         <span class="player-name">${players[i].name}</span>
//         <span class="player-points">${players[i].points}</span>
//         </div>`;
// 	}
// 	html += `</div>`;
// 	el.innerHTML = html;
// }
