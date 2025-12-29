//Let’s say you want multiple headings within the same Section to always have the same size:

import Heading from "./Heading.js";
import Section from "./Section.js";
import "./styles.css";
export default function NewApp() {
  return (
    <Section>
      <Heading level={1}>Title</Heading>
      <Section>
        <Heading level={2}>Heading</Heading>
        <Heading level={2}>Heading</Heading>
        <Heading level={2}>Heading</Heading>
        <Section>
          <Heading level={3}>Sub-heading</Heading>
          <Heading level={3}>Sub-heading</Heading>
          <Heading level={3}>Sub-heading</Heading>
          <Section>
            <Heading level={4}>Sub-sub-heading</Heading>
            <Heading level={4}>Sub-sub-heading</Heading>
            <Heading level={4}>Sub-sub-heading</Heading>
          </Section>
        </Section>
      </Section>
    </Section>
    //?Currently, you pass the level prop to each <Heading> separately:
    /*<Section>
      <Heading level={3}>About</Heading>
      <Heading level={3}>Photos</Heading>
      <Heading level={3}>Videos</Heading>
    </Section>*/
    //?It would be nice if you could pass the level prop to the <Section> component instead and remove it from
    //?the <Heading>. This way you could enforce that all headings in the same section have the same size:
    /* <Section level={3}>
      <Heading>About</Heading>
      <Heading>Photos</Heading>
      <Heading>Videos</Heading>
    </Section>*/
  );
}
//?But how can the <Heading> component know the level of its closest <Section>? That would require some way for

//? a child to “ask” for data from somewhere above in the tree.

//?You can’t do it with props alone. This is where context comes into play. You will do it in three steps:

//?Create a context. (You can call it LevelContext, since it’s for the heading level.)
//?Use that context from the component that needs the data. (Heading will use LevelContext.)
//?Provide that context from the component that specifies the data. (Section will provide LevelContext.)

//?Context lets a parent—even a distant one!—provide some data to the entire tree inside of it.
