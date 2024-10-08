import { NextResponse } from "next/server";

const users = [
  {
    nim: "32240144",
    name: "Chelsea Arlyn",
    hasPassed: true,
    division: "Creative & Design",
    password: "pass32240144",
  },
  {
    nim: "32240114",
    name: "Reyes Thierry Kwa",
    hasPassed: false,
    password: "pass32240114",
  },
  {
    nim: "32240119",
    name: "Gwyneth Eunice Widjaja",
    hasPassed: true,
    division: "Mobile",
    password: "pass32240119",
  },
  {
    nim: "32240155",
    name: "Febriani Adeline",
    hasPassed: true,
    division: "Mobile",
    password: "pass32240155",
  },
  {
    nim: "32240147",
    name: "Steven",
    hasPassed: true,
    division: "Website",
    password: "pass32240147",
  },
  {
    nim: "32240127",
    name: "Corinthia Angie",
    hasPassed: true,
    division: "Mobile",
    password: "pass32240127",
  },
  {
    nim: "32240132",
    name: "Steven Wilbert Rafael",
    hasPassed: true,
    division: "Creative & Design",
    password: "pass32240132",
  },
  {
    nim: "32240131",
    name: "Steven Imanuel",
    hasPassed: true,
    division: "Editor",
    password: "pass32240131",
  },
  {
    nim: "32240151",
    name: "Aloysius Wiratetua",
    hasPassed: false,
    password: "pass32240151",
  },
  {
    nim: "32240129",
    name: "Christopher Nieville",
    hasPassed: false,
    password: "pass32240129",
  },
  {
    nim: "32240135",
    name: "Kevin Kan",
    hasPassed: false,
    password: "pass32240135",
  },
  {
    nim: "32240121",
    name: "Antonius Jason Setiawan",
    hasPassed: false,
    password: "pass32240121",
  },
  {
    nim: "32240141",
    name: "Bryan Allen",
    hasPassed: false,
    password: "pass32240141",
  },
  {
    nim: "32240149",
    name: "Jansen Octagon",
    hasPassed: false,
    password: "pass32240149",
  },
  {
    nim: "32240167",
    name: "Darren Aurelius Chandra",
    hasPassed: false,
    password: "pass32240167",
  },
  {
    nim: "32240170",
    name: "Richard Yulio Fernando",
    hasPassed: false,
    password: "pass32240170",
  },
  {
    nim: "32240194",
    name: "Egner Constantin",
    hasPassed: true,
    division: "Acara",
    password: "pass32240194",
  },
  {
    nim: "32240199",
    name: "Razzes Akram Putra Alexa",
    hasPassed: true,
    division: "Mobile",
    password: "pass32240199",
  },
  {
    nim: "32240200",
    name: "Samuel Karyoko",
    hasPassed: true,
    division: "Acara",
    password: "pass32240200",
  },
  {
    nim: "32240178",
    name: "Bun Jantolio",
    hasPassed: true,
    division: "Perkap",
    password: "pass32240178",
  },
  {
    nim: "32240156",
    name: "Kezia Calista Wongsowidjojo",
    hasPassed: true,
    division: "PR/Humas",
    password: "pass32240156",
  },
  {
    nim: "32240179",
    name: "Clarence Julian Sudrajat",
    hasPassed: true,
    division: "Perkap",
    password: "pass32240179",
  },
  {
    nim: "32240207",
    name: "Clay Micholaz Fu",
    hasPassed: true,
    division: "Website",
    password: "pass32240207",
  },
  {
    nim: "32240211",
    name: "Willy Setiawan",
    hasPassed: false,
    password: "pass32240211",
  },
  {
    nim: "32240174",
    name: "Gilbert Justin Prayoga",
    hasPassed: false,
    password: "pass32240174",
  },
  {
    nim: "32240169",
    name: "Kosmas Lebawayon Atulolon",
    hasPassed: false,
    password: "pass32240169",
  },
  {
    nim: "32240213",
    name: "Jovan Mevian Mulianto",
    hasPassed: true,
    division: "Acara",
    password: "pass32240213",
  },
  {
    nim: "32240162",
    name: "Jason Bong",
    hasPassed: true,
    division: "Creative & Design",
    password: "pass32240162",
  },
  {
    nim: "32240175",
    name: "Jessen Chang",
    hasPassed: true,
    division: "Website",
    password: "pass32240175",
  },
  {
    nim: "32240159",
    name: "Timothy Simon Sutandhi",
    hasPassed: true,
    division: "PR/Humas",
    password: "pass32240159",
  },
  {
    nim: "32230130",
    name: "Hansel Alexander Liem",
    hasPassed: true,
    division: "Mobile",
    password: "pass32230130",
  },
  {
    nim: "32230123",
    name: "Dennis Christan",
    hasPassed: true,
    division: "Mobile",
    password: "pass32230123",
  },
  {
    nim: "32230152",
    name: "David Haryono",
    hasPassed: false,
    password: "pass32230152",
  },
  {
    nim: "32230116",
    name: "Devin Alfred Taniaga",
    hasPassed: false,
    password: "pass32230116",
  },
  {
    nim: "32230184",
    name: "Ezra Dwi Anugrah",
    hasPassed: true,
    division: "Perkap",
    password: "pass32230184",
  },
  {
    nim: "32230151",
    name: "Jane Aveline",
    hasPassed: true,
    division: "Creative & Design",
    password: "pass32230151",
  },
  {
    nim: "32230183",
    name: "Brayn Moreno",
    hasPassed: true,
    division: "Acara",
    password: "pass32230183",
  },
  {
    nim: "32230088",
    name: "Sonny Jong",
    hasPassed: true,
    division: "Editor",
    password: "pass32230088",
  },
  {
    nim: "32230142",
    name: "Vincent Lee",
    hasPassed: true,
    division: "Editor",
    password: "pass32230142",
  },
  {
    nim: "32230090",
    name: "Nathanael Christian Gazali",
    hasPassed: false,
    password: "pass32230090",
  },
  {
    nim: "32240163",
    name: "Alissya Putri Ramadhani",
    hasPassed: false,
    password: "pass32240163",
  },
  {
    nim: "32240196",
    name: "Finsen",
    hasPassed: false,
    password: "pass32240196",
  },
  {
    nim: "32240148",
    name: "Justine Gui",
    hasPassed: true,
    division: "Creative & Design",
    password: "pass32240148",
  },
  {
    nim: "32230121",
    name: "Jonathan Wijaya",
    hasPassed: true,
    division: "Perkap",
    password: "pass32230121",
  },
];

export async function POST(req: Request) {
  try {
    const { nim, password } = await req.json();

    // Find the user based on NIM and password
    const user = users.find((u) => u.nim === nim && u.password === password);

    if (!user) {
      return new NextResponse("Invalid credentials", { status: 401 });
    }

    // Return user details including division and hasPassed flag
    return NextResponse.json({
      name: user.name,
      nim: user.nim,
      division: user.division,
      hasPassed: user.hasPassed,
    });
  } catch (error) {
    console.log("USER_FIND, error", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
