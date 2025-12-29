// Don't rename the "Card" component
export function Card({ singer, background = "lightgrey" }) {
  return (
    // Don't change the "article" tag implementation
    <article style={{ background }}>
      <h2>{singer.name}</h2>
      <p>
        <strong>Born:</strong> {singer.born}
      </p>
      <p>
        <strong>Instruments:</strong> {singer.instruments}
      </p>
      <p>
        <strong>Genres:</strong> {singer.genres}
      </p>
      <h3>Partners:</h3>
      <dl>
        <dt>{singer.partners[0].name}</dt>
        <dd>{singer.partners[0].period}</dd>
        <dt>{singer.partners[1].name}</dt>
        <dd>{singer.partners[1].period}</dd>
        <dt>{singer.partners[2].name}</dt>
        <dd>{singer.partners[2].period}</dd>
      </dl>
    </article>
  );
}
