import { Driver } from "../classes/Drivers";
import { Race } from "../classes/Races";
import { Team } from "../classes/Teams";

let ferrari = new Team("Ferrari", "Italy");
let mercedes = new Team("Mercedes", "Germany");
let haas = new Team("Haas", "USA");
let alfaRomeo = new Team("Alfa Romeo", "Italy");
let alpine = new Team("Alpine", "France");
let alphaTauri = new Team("AlphaTauri", "Italy");
let astonMartin = new Team("Aston Martin", "Great Britain");
let williams = new Team("Williams", "Great Britain");
let mclaren = new Team("McLaren", "Great Britain");
let redBull = new Team("Red Bull", "Austria");

let leclerc = new Driver("Leclerc", "Charles", ferrari, 16, "Monaco");
let sainz = new Driver("Sainz", "Carlos", ferrari, 55, "Spain");
let hamilton = new Driver("Hamilton", "Lewis", mercedes, 44, "Great Britain");
let russell = new Driver("Russell", "George", mercedes, 63, "Great Britain");
let magnussen = new Driver("Magnussen", "Kevin", haas, 20, "Denmark");
let bottas = new Driver("Bottas", "Valtteri", alfaRomeo, 77, "Finland");
let ocon = new Driver("Ocon", "Esteban", alpine, 31, "France");
let tsunoda = new Driver("Tsunoda", "Yuki", alphaTauri, 22, "Japan");
let alonso = new Driver("Alonso", "Fernando", alpine, 14, "Spain");
let zhou = new Driver("Zhou", "Guanyu", alfaRomeo, 24, "China");
let schumacher = new Driver("Schumacher", "Mick", haas, 47, "Germany");
let stroll = new Driver("Stroll", "Lance", astonMartin, 17, "Canada");
let albon = new Driver("Albon", "Alex", williams, 23, "Thailand");
let ricciardo = new Driver("Ricciardo", "Daniel", mclaren, 3, "Australia");
let norris = new Driver("Norris", "Lando", mclaren, 4, "Great Britain");
let latifi = new Driver("Latifi", "Nicholas", williams, 33, "Canada");
let hulkenberg = new Driver("Hulkenberg", "Nico", astonMartin, 27, "Germany");
let perez = new Driver("Perez", "Sergio", redBull, 11, "Mexico");
let verstappen = new Driver("Verstappen", "Max", redBull, 1, "Netherlands");
let gasly = new Driver("Gasly", "Pierre", alphaTauri, 10, "France");
let vettel = new Driver("Vettel", "Sebastian", astonMartin, 5, "Germany");

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
