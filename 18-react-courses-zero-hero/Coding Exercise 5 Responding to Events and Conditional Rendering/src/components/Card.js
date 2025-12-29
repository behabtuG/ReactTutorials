import React, { Fragment } from "react";

// Don't rename the "Card" component
export function Card({ player }) {
  return (
    // Don't change the "article" tag implementation
    <article>
      <h2>{player.fullName}</h2>
      <p>
        <strong>Position:</strong> {player.position}
      </p>
      <p>
        <strong>League:</strong> {player.league}
      </p>
      <h3>Career history:</h3>
      <dl>
        {/*// TODO: Display the career information in the loop using
        'React.Fragment' component // Below is an example of how information
        should be displayed:*/}
        {player.career.map((career, index) => (
          <Fragment key={index}>
            <dt>{career.period}</dt>
            <dd>{career.team}</dd>
          </Fragment>
        ))}
        {/* <dt>{career.period}</dt> */}
        {/* <dd>{career.team}</dd> */}
      </dl>
    </article>
  );
}
