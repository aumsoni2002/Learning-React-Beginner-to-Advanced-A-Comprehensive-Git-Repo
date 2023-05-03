import Accordion from "./components/Accordion";

function App() {
  const items = [
    {
      id: 1,
      label: "Documentation on React",
      content:
        "React is a JavaScript Framework, used in making Single Page Web Application.",
    },
    {
      id: 2,
      label: "Documentation on Angular",
      content:
        "Angular is a JavaScript Framework, works very well with Java Backend Framework spring.",
    },
    {
      id: 3,
      label: "Documentation on Node",
      content: "Node is a JavaScript Framework, used in writing backend code.",
    },
  ];

  return (
    <div>
      <Accordion items={items} />
    </div>
  );
}

export default App;


