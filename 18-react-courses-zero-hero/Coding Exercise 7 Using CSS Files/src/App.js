import { marvelHeroes } from "./components/marvelHeroes";

// Don't rename the "App" component
function App() {
  return (
    /* Don't change the structure */
    <ul /* TODO: Apply 'HeroesList' class name here */ className="HeroesList">
      {marvelHeroes.map((marvelHero) => (
        <li
          key={marvelHero.name}
          className="HeroCard" /* TODO: Apply 'HeroCard' class name here */
        >
          <strong>{marvelHero.name}</strong>
          <br />
          <br />
          {marvelHero.description}
        </li>
      ))}
    </ul>
  );
}

export default App;
