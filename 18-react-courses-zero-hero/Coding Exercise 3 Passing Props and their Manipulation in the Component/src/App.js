import { Card } from "./components/Card";

// Don't change singer object
const singer = {
  name: "Rihanna",
  born: "February 20, 1988",
  instruments: "Vocals",
  genres: "R&B, pop, dance",
  partners: [
    { name: "Chris Brown", period: "2007–2009; 2012–2013" },
    { name: "Hassan Jameel", period: "2017–2020" },
    { name: "ASAP Rocky", period: "2020–present" },
  ],
};

// Don't rename the "Card" component
function App() {
  return (
    // Don't change the "section" tag implementation
    <section className="App">
      <Card background="ivory" singer={singer} />
      <Card singer={singer} />
      <Card background="wheat" singer={singer} />
    </section>
  );
}

export default App;
