import { Driver } from "../classes/Drivers";
import { Race } from "../classes/Races";
import { Team } from "../classes/Teams";

// :root {
// 	--Mercedes: #6cd3bf;
// 	--Mercedes_2: #999;
// 	--RedBull: #1e5bc6;
// 	--RedBull_2: #000;
// 	--Ferrari: #ed1c24;
// 	--Ferrari_2: #000000;
// 	--McLaren: #f58020;
// 	--McLaren_2: #0078ff;
// 	--Alpine: #2293d1;
// 	--Alpine_2: #e73895;
// 	--AlphaTauri: #4e7c9b;
// 	--AlphaTauri_2: #fff;
// 	--AstonMartin: #2d826d;
// 	--AstonMartin_2: #cedc00;
// 	--Williams: #041e42;
// 	--Williams_2: red;
// 	--AlfaRomeo: #b12039;
// 	--AlfaRomeo_2: #fff;
// 	--Haas: #b6babd;
// 	--Haas_2: #e6002d;
// }

let ferrari = new Team("Ferrari", "Italy", "#ed1c24");
let mercedes = new Team("Mercedes", "Germany", "#6cd3bf");
let haas = new Team("Haas", "USA", "#b6babd");
let alfaRomeo = new Team("Alfa Romeo", "Italy", "#b12039");
let alpine = new Team("Alpine", "France", "#2293d1");
let alphaTauri = new Team("AlphaTauri", "Italy", "#4e7c9b");
let astonMartin = new Team("Aston Martin", "Great Britain", "#2d826d");
let williams = new Team("Williams", "Great Britain", "#041e42");
let mclaren = new Team("McLaren", "Great Britain", "#f58020");
let redBull = new Team("Red Bull", "Austria", "#1e5bc6");

let leclerc = new Driver("Leclerc", "Charles", ferrari, 16, "Monaco", "LEC");
let sainz = new Driver("Sainz", "Carlos", ferrari, 55, "Spain", "SAI");
let hamilton = new Driver("Hamilton", "Lewis", mercedes, 44, "Great Britain", "HAM");
let russell = new Driver("Russell", "George", mercedes, 63, "Great Britain", "RUS");
let magnussen = new Driver("Magnussen", "Kevin", haas, 20, "Denmark", "MAG");
let bottas = new Driver("Bottas", "Valtteri", alfaRomeo, 77, "Finland", "BOT");
let ocon = new Driver("Ocon", "Esteban", alpine, 31, "France", "OCO");
let tsunoda = new Driver("Tsunoda", "Yuki", alphaTauri, 22, "Japan", "TSU");
let alonso = new Driver("Alonso", "Fernando", alpine, 14, "Spain", "ALO");
let zhou = new Driver("Zhou", "Guanyu", alfaRomeo, 24, "China", "ZHO");
let schumacher = new Driver("Schumacher", "Mick", haas, 47, "Germany", "MSC");
let stroll = new Driver("Stroll", "Lance", astonMartin, 17, "Canada", "STR");
let albon = new Driver("Albon", "Alex", williams, 23, "Thailand", "ALB");
let ricciardo = new Driver("Ricciardo", "Daniel", mclaren, 3, "Australia", "RIC");
let norris = new Driver("Norris", "Lando", mclaren, 4, "Great Britain", "NOR");
let latifi = new Driver("Latifi", "Nicholas", williams, 33, "Canada", "LAT");
let hulkenberg = new Driver("Hulkenberg", "Nico", astonMartin, 27, "Germany", "HUL");
let perez = new Driver("Perez", "Sergio", redBull, 11, "Mexico", "PER");
let verstappen = new Driver("Verstappen", "Max", redBull, 1, "Netherlands", "VER");
let gasly = new Driver("Gasly", "Pierre", alphaTauri, 10, "France", "GAS");
let vettel = new Driver("Vettel", "Sebastian", astonMartin, 5, "Germany", "VET");

let bahrain = new Race("Bahrain", "Bahrain", "Mar 18-20");
bahrain.removeDriver(vettel);
bahrain.raceEnded(
	[
		leclerc,
		sainz,
		hamilton,
		russell,
		magnussen,
		bottas,
		ocon,
		tsunoda,
		alonso,
		zhou,
		schumacher,
		stroll,
		albon,
		ricciardo,
		norris,
		latifi,
		hulkenberg,
		perez,
		verstappen,
		gasly,
	],
	leclerc
);

let jeddah = new Race("Jeddah", "Saudi Arabia", "Mar 25-27");
let australia = new Race("Australia", "Australia", "Apr 08-10");
let imola = new Race("Imola", "Italy", "Apr 22-24");
// let imolaSprint = new Sprint(imola);
let miami = new Race("Miami", "USA", "May 06-08");
let spain = new Race("Spain", "Spain", "May 20-22");
let monaco = new Race("Monaco", "Monaco", "May 27-29");
let baku = new Race("Baku", "Azerbaijan", "Jun 20-12");
let canada = new Race("Canada", "Canada", "Jun 17-19");
let silverstone = new Race("Silverstone", "Great Britain", "Jul 01-03");
let austria = new Race("Austria", "Austria", "Jul 08-10");
// let austrianSprint = new Sprint(austria);
let france = new Race("France", "France", "Jul 22-24");
let hungary = new Race("Hungary", "Hungary", "Jul 29-31");
let spa = new Race("Spa", "Belgium", "Aug 26-28");
let dutch = new Race("Dutch", "Netherlands", "Sep 02-04");
let monza = new Race("Monza", "Italy", "Sep 09-11");
let singapore = new Race("Singapore", "Singapore", "Sep 30-02");
let japan = new Race("Japan", "Japan", "Oct 07-09");
let austin = new Race("COTA", "USA", "Oct 21-23");
let mexico = new Race("Mexico", "Mexico", "Oct 28-30");
let brazil = new Race("Brazil", "Brazil", "Nov 11-13");
// let brazilSprint = new Sprint(brazil);
let abudhabi = new Race("Abu Dhabi", "UAE", "Nov 18-20");
