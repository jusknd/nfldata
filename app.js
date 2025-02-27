const data = [
    {
        id: 1,
        team: 'cardinals',
        location: 'arizona',
        city: 'phoenix',
        state: 'arizona',
        conference: 'nfc',
        division: 'west',
        superBowlWins: 0,
        notablePlayers: {
            past: 'aeneas williams',
            present: 'kyler murray'
        }
    },
    {
        id: 2,
        team: 'falcons',
        location: 'atlanta',
        city: 'atlanta',
        state: 'georgia',
        conference: 'nfc',
        division: 'south',
        superBowlWins: 0,
        notablePlayers: {
            past: 'michael vick',
            present: 'kirk cousins'
        }
    },
    {
        id: 3,
        team: 'ravens',
        location: 'baltimore',
        city: 'baltimore',
        state: 'maryland',
        conference: 'afc',
        division: 'north',
        superBowlWins: 2,
        notablePlayers: {
            past: 'ray lewis',
            present: 'lamar jackson'
        }
    },
    {
        id: 4,
        team: 'bills',
        location: 'buffalo',
        city: 'buffalo',
        state: 'new york',
        conference: 'afc',
        division: 'east',
        superBowlWins: 0,
        notablePlayers: {
            past: 'bruce smith',
            present: 'josh allen'
        }
    },
    {
        id: 5,
        team: 'panthers',
        location: 'carolina',
        city: 'charlotte',
        state: 'north carolina',
        conference: 'nfc',
        division: 'south',
        superBowlWins: 0,
        notablePlayers: {
            past: 'steve smith',
            present: 'bryce young'
        }
    },
    {
        id: 6,
        team: 'bears',
        location: 'chicago',
        city: 'chicago',
        state: 'illinois',
        conference: 'nfc',
        division: 'north',
        superBowlWins: 1,
        notablePlayers: {
            past: 'walter payton',
            present: 'caleb williams'
        }
    },
    {
        id: 7,
        team: 'bengals',
        location: 'cincinnatti',
        city: 'cincinnatti',
        state: 'ohio',
        conference: 'afc',
        division: 'north',
        superBowlWins: 0,
        notablePlayers: {
            past: 'anthony munoz',
            present: 'joe burrow'
        }
    },
    {
        id: 8,
        team: 'browns',
        location: 'cleveland',
        city: 'cleveland',
        state: 'ohio',
        conference: 'afc',
        division: 'north',
        superBowlWins: 0,
        notablePlayers: {
            past: 'jim brown',
            present: 'myles garrett'
        }
    },
    {
        id: 9,
        team: 'cowboys',
        location: 'dallas',
        city: 'dallas',
        state: 'texas',
        conference: 'nfc',
        division: 'east',
        superBowlWins: 5,
        notablePlayers: {
            past: 'emmitt smith',
            present: 'dak prescott'
        }
    },
    {
        id: 10,
        team: 'broncos',
        location: 'denver',
        city: 'denver',
        state: 'colorado',
        conference: 'afc',
        division: 'west',
        superBowlWins: 3,
        notablePlayers: {
            past: 'john elway',
            present: 'bo nix'
        }
    },
    {
        id: 11,
        team: 'lions',
        location: 'detroit',
        city: 'detroit',
        state: 'michigan',
        conference: 'nfc',
        division: 'north',
        superBowlWins: 0,
        notablePlayers: {
            past: 'barry sanders',
            present: 'amon-ra st. brown'
        }
    },
    {
        id: 12,
        team: 'packers',
        location: 'green bay',
        city: 'green bay',
        state: 'wisconsin',
        conference: 'nfc',
        division: 'north',
        superBowlWins: 4,
        notablePlayers: {
            past: 'reggie white',
            present: 'jordan love'
        }
    },
    {
        id: 13,
        team: 'texans',
        location: 'houston',
        city: 'houston',
        state: 'texas',
        conference: 'afc',
        division: 'south',
        superBowlWins: 0,
        notablePlayers: {
            past: 'jj watt',
            present: 'cj stroud'
        }
    },
    {
        id: 14,
        team: 'colts',
        location: 'indianopolis',
        city: 'indianopolis',
        state: 'indiana',
        conference: 'afc',
        division: 'south',
        superBowlWins: 3,
        notablePlayers: {
            past: 'peyton manning',
            present: 'johnathan taylor'
        }
    },
    {
        id: 15,
        team: 'jaguars',
        location: 'jacksonville',
        city: 'jacksonville',
        state: 'florida',
        conference: 'afc',
        division: 'south',
        superBowlWins: 0,
        notablePlayers: {
            past: 'maurice jones-drew',
            present: 'trevor lawrence'
        }
    },
    {
        id: 16,
        team: 'chiefs',
        location: 'kansas city',
        city: 'kansas city',
        state: 'missouri',
        conference: 'afc',
        division: 'west',
        superBowlWins: 4,
        notablePlayers: {
            past: 'priest holmes',
            present: 'patrick mahomes'
        }
    },
    {
        id: 17,
        team: 'raiders',
        location: 'las vegas',
        city: 'las vegas',
        state: 'nevada',
        conference: 'afc',
        division: 'west',
        superBowlWins: 3,
        notablePlayers: {
            past: 'marcus allen',
            present: 'brock bowers'
        }
    },
    {
        id: 18,
        team: 'chargers',
        location: 'los angeles',
        city: 'los angeles',
        state: 'california',
        conference: 'afc',
        division: 'west',
        superBowlWins: 0,
        notablePlayers: {
            past: 'junior seau',
            present: 'justin herbert'
        }
    },
    {
        id: 19,
        team: 'rams',
        location: 'los angeles',
        city: 'los angeles',
        state: 'california',
        conference: 'nfc',
        division: 'west',
        superBowlWins: 2,
        notablePlayers: {
            past: 'jackie slater',
            present: 'matthew stafford'
        }
    },
    {
        id: 20,
        team: 'dolphins',
        location: 'miami',
        city: 'miami',
        state: 'florida',
        conference: 'afc',
        division: 'east',
        superBowlWins: 2,
        notablePlayers: {
            past: 'dan marino',
            present: 'tyreek hill'
        }
    },
    {
        id: 21,
        team: 'vikings',
        location: 'minnesota',
        city: 'minneapolis',
        state: 'minnesota',
        conference: 'nfc',
        division: 'north',
        superBowlWins: 0,
        notablePlayers: {
            past: 'randy moss',
            present: 'justin jefferson'
        }
    },
    {
        id: 22,
        team: 'patriots',
        location: 'new england',
        city: 'foxboro',
        state: 'massachusetts',
        conference: 'afc',
        division: 'east',
        superBowlWins: 6,
        notablePlayers: {
            past: 'tom brady',
            present: 'drake maye'
        }
    },
    {
        id: 23,
        team: 'saints',
        location: 'new orleans',
        city: 'new orleans',
        state: 'louisiana',
        conference: 'nfc',
        division: 'south',
        superBowlWins: 1,
        notablePlayers: {
            past: 'drew brees',
            present: 'demario davis'
        }
    },
    {
        id: 24,
        team: 'giants',
        location: 'new york',
        city: 'new york city',
        state: 'new york',
        conference: 'nfc',
        division: 'east',
        superBowlWins: 4,
        notablePlayers: {
            past: 'lawrence taylor',
            present: 'malik nabors'
        }
    },
    {
        id: 25,
        team: 'jets',
        location: 'new york',
        city: 'new york city',
        state: 'new york',
        conference: 'afc',
        division: 'east',
        superBowlWins: 1,
        notablePlayers: {
            past: 'joe namath',
            present: 'quinnen williams'
        }
    },
    {
        id: 26,
        team: 'eagles',
        location: 'philadelphia',
        city: 'philadelphia',
        state: 'pennsylvania',
        conference: 'nfc',
        division: 'east',
        superBowlWins: 2,
        notablePlayers: {
            past: 'randall cunningham',
            present: 'jalen hurts'
        }
    },
    {
        id: 27,
        team: 'steelers',
        location: 'pittsburgh',
        city: 'pittsburgh',
        state: 'pennsylvania',
        conference: 'afc',
        division: 'north',
        superBowlWins: 6,
        notablePlayers: {
            past: 'joe greene',
            present: 'russell wilson'
        }
    },
    {
        id: 28,
        team: '49ers',
        location: 'san francisco',
        city: 'san francisco',
        state: 'california',
        conference: 'nfc',
        division: 'west',
        superBowlWins: 5,
        notablePlayers: {
            past: 'jerry rice',
            present: 'christian mccaffery'
        }
    },
    {
        id: 29,
        team: 'seahawks',
        location: 'seattle',
        city: 'seattle',
        state: 'washington',
        conference: 'nfc',
        division: 'west',
        superBowlWins: 1,
        notablePlayers: {
            past: 'russell wilson',
            present: 'dk metcalf'
        }
    },
    {
        id: 30,
        team: 'buccaneers',
        location: 'tampa bay',
        city: 'tampa',
        state: 'florida',
        conference: 'nfc',
        division: 'south',
        superBowlWins: 2,
        notablePlayers: {
            past: 'warren sapp',
            present: 'mike evans'
        }
    },
    {
        id: 31,
        team: 'titans',
        location: 'tennessee',
        city: 'nashville',
        state: 'tennessee',
        conference: 'afc',
        division: 'south',
        superBowlWins: 0,
        notablePlayers: {
            past: 'steve mcnair',
            present: 'jeffrey simmons'
        }
    },
    {
        id: 32,
        team: 'commanders',
        location: 'washington',
        city: 'landover',
        state: 'maryland',
        conference: 'nfc',
        division: 'east',
        superBowlWins: 3,
        notablePlayers: {
            past: 'darrell green',
            present: 'jayden daniels'
        }
    }
]

/**
 * 1. write a function that takes a conference as an argument and will filter through the objects and return all teams in the conference
 * 
 * func(conf) => [teams]
 */

function filterTeamsByConference(teams, conference) {
    return teams.filter(team=> team.conference === conference);
}
const teams = [
    {name: 'Cowboys', conference: 'nfc'},
    {name: 'Lions', conference: 'nfc'},
    {name: 'Broncos', conference: 'afc'},
    {name: 'Packers', conference: 'nfc'}


]
 

/**
 * 2. write a function that takes a state as an argument and will filter through the objects and return all teams in that state.
 * 
 */

function getTeamsByState4(teams, state) {
    return teams.filter(team => team.state === state);

}
const teams = [
    {name: "Cowboys", state: "Texas"},
    {name: "Lions", state: "Michigan"},
    {name: "Broncos", state: "Colorado"},
    {name: "Packers", state: "Wisconsin"}

]

/**
 * 3. write a function that will map through the data and return an array of all teams by location and team.  ex ['arizona cardinals', 'atlanta falcons', etc]
 * 
 */
function getTeamsList(teams) {
    return teams.map(team => `${team.state} ${team.name}`);
}

// Example usage:
const teams = [
    { name: "Cowboys", state: "Texas" },
    { name: "Lions", state: "Michigan" },
    { name: "Broncos", state: "Colorado" },
    { name: "Packers", state: "Wisconsin" }
]

const teamList = getTeamsList(teams);
console.log(teamList);

/**
 * 4. write a function that takes a conference and division as an argument and will filter 
 * through the data and return all teams from that conference and division  
 *  **hint each one should have four teams
 */
function getTeamsByConferenceAndDivision(teams, conference, division) {
    return teams.filter(team => team.conference === conference && team.division === division);
}

// Example usage:
const teams = [
    { name: "Cowboys", state: "Texas", conference: "NFC", division: "East" },
    { name: "Lions", state: "Michigan", conference: "NFC", division: "North" },
    { name: "Broncos", state: "Colorado", conference: "AFC", division: "West" },
    { name: "Packers", state: "Wisconsin", conference: "NFC", division: "North" }
];

const nfcNorthTeams = getTeamsByConferenceAndDivision(teams, "NFC", "North");
console.log(nfcNorthTeams);


/**
 * 5. write a function that will sort through the teams and place them in either 
 * one of two arrays: hasWonASuperBowl or hasNotWonASuperBowl
 */
function sortTeamsBySuperBowlWin(teams) {
    const hasWonASuperBowl = [];
    const hasNotWonASuperBowl = [];

    teams.forEach(team => {
        if (team.hasWonSuperBowl) {
            hasWonASuperBowl.push(team);
        } else {
            hasNotWonASuperBowl.push(team);
        }
    });

    return { hasWonASuperBowl, hasNotWonASuperBowl };
}

// Example usage:
const teams = [
    { name: "Cowboys", state: "Texas", conference: "NFC", division: "East", hasWonSuperBowl: true },
    { name: "Lions", state: "Michigan", conference: "NFC", division: "North", hasWonSuperBowl: false },
    { name: "Broncos", state: "Colorado", conference: "AFC", division: "West", hasWonSuperBowl: true },
    { name: "Packers", state: "Wisconsin", conference: "NFC", division: "North", hasWonSuperBowl: true }
];

const sortedTeams = sortTeamsBySuperBowlWin(teams);
console.log(sortedTeams);

/**
 * 6. Make a card for each team and display it on the browser
 * 
 */
function displayTeamCards(teams) {
    const container = document.getElementById("teamContainer");
    container.innerHTML = "";

    teams.forEach(team => {
        const card = document.createElement("div");
        card.classList.add("team-card");
        
        card.innerHTML = `
            <h2>${team.name}</h2>
            <p>State: ${team.state}</p>
            <p>Conference: ${team.conference}</p>
            <p>Division: ${team.division}</p>
            <p>Super Bowl Wins: ${team.hasWonSuperBowl ? "Yes" : "No"}</p>
        `;
        
        container.appendChild(card);
    });
}

// Example usage:
const teams = [
    { name: "Cowboys", state: "Texas", conference: "NFC", division: "East", hasWonSuperBowl: true },
    { name: "Lions", state: "Michigan", conference: "NFC", division: "North", hasWonSuperBowl: false },
    { name: "Broncos", state: "Colorado", conference: "AFC", division: "West", hasWonSuperBowl: true },
    { name: "Packers", state: "Wisconsin", conference: "NFC", division: "North", hasWonSuperBowl: true }
];

document.addEventListener("DOMContentLoaded", () => {
    displayTeamCards(teams);
});
