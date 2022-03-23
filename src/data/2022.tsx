import { Driver } from "../classes/Drivers";
import { Team } from "../classes/Teams";

export let ferrari = new Team("Ferrari", "Italy");
export let mercedes = new Team("Mercedes", "Germany");
export let haas = new Team("Haas", "USA");
export let alfaRomeo = new Team("Alfa Romeo", "Italy");
export let alpine = new Team("Alpine", "France");
export let alphaTauri = new Team("AlphaTauri", "Italy");
export let astonMartin = new Team("Aston Martin", "Great Britain");
export let williams = new Team("Williams", "Great Britain");
export let mclaren = new Team("McLaren", "Great Britain");
export let redBull = new Team("Red Bull", "Austria");

export let leclerc = new Driver("Leclerc", "Charles", ferrari, 16, "Monaco");
export let sainz = new Driver("Sainz", "Carlos", ferrari, 55, "Spain");
export let hamilton = new Driver(
	"Hamilton",
	"Lewis",
	mercedes,
	44,
	"Great Britain"
);
export let russell = new Driver(
	"Russell",
	"George",
	mercedes,
	63,
	"Great Britain"
);
export let magnussen = new Driver("Magnussen", "Kevin", haas, 20, "Denmark");
export let bottas = new Driver("Bottas", "Valtteri", alfaRomeo, 77, "Finland");
export let ocon = new Driver("Ocon", "Esteban", alpine, 31, "France");
export let tsunoda = new Driver("Tsunoda", "Yuki", alphaTauri, 22, "Japan");
export let alonso = new Driver("Alonso", "Fernando", alpine, 14, "Spain");
export let zhou = new Driver("Zhou", "Guanyu", alfaRomeo, 24, "China");
export let schumacher = new Driver("Schumacher", "Mick", haas, 47, "Germany");
export let stroll = new Driver("Stroll", "Lance", astonMartin, 17, "Canada");
export let albon = new Driver("Albon", "Alex", williams, 23, "Thailand");
export let ricciardo = new Driver(
	"Ricciardo",
	"Daniel",
	mclaren,
	3,
	"Australia"
);
export let norris = new Driver("Norris", "Lando", mclaren, 4, "Great Britain");
export let latifi = new Driver("Latifi", "Nicholas", williams, 33, "Canada");
export let hulkenberg = new Driver(
	"Hulkenberg",
	"Nico",
	astonMartin,
	27,
	"Germany"
);
export let perez = new Driver("Perez", "Sergio", redBull, 11, "Mexico");
export let verstappen = new Driver(
	"Verstappen",
	"Max",
	redBull,
	1,
	"Netherlands"
);
export let gasly = new Driver("Gasly", "Pierre", alphaTauri, 10, "France");
export let vettel = new Driver(
	"Vettel",
	"Sebastian",
	astonMartin,
	5,
	"Germany"
);
