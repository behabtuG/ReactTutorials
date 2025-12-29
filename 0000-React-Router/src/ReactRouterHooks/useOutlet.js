//? 5.useOutlet
//?  if your component is rendering nested route, useOutlet allows you to render the child route elements within your layout
//? component.

import { useOutlet } from "react-router-dom";

const outlet = useOutlet();

return (
  <div>
    <Header />
    {outlet}
    <Footer />
  </div>
);

//? Here, useOutlet is used to render the nested route's component inside the main layout.
