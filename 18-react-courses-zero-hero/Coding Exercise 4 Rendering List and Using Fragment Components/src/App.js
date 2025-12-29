import { Card } from "./components/Card";

// Don't change players array
export const players = [
  {
    fullName: "LeBron James",
    position: "Small forward / power forward",
    league: "NBA",
    career: [
      { period: "2003–2010", team: "Cleveland Cavaliers" },
      { period: "2010–2014", team: "Miami Heat" },
      { period: "2014–2018", team: "Cleveland Cavaliers" },
      { period: "2018–present", team: "Los Angeles Lakers" },
    ],
  },
  {
    fullName: "Michael Jordan",
    position: "	Minority owner",
    league: "NBA",
    career: [
      { period: "1984–1993", team: "Chicago Bulls" },
      { period: "1995–1998", team: "Chicago Bulls" },
      { period: "2001–2003", team: "Washington Wizards" },
    ],
  },
];

// Don't rename the "Card" component
function App() {
  return (
    // Don't change the "section" tag implementation
    // // TODO: Display the 'Card' component with 'players' data in the loop
    <section>
      {players.map((player, index) => (
        <Card key={index} player={player} />
      ))}
    </section>
  );
}

export default App;
