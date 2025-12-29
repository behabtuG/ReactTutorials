// Don't rename the "Button" component
// TODO: Read the 'onClick' prop in the component */
export function Button({ day, onClick }) {
  // TODO: Handle button click event and pass the 'day' into `onClick' function */

  // return <button>{day}</button>;
  return <button onClick={() => onClick(day)}>{day}</button>;
}
