import Slides from "./components/Slides";

const title = "Slideshow App";

const App = ({ slides }) => {
  return (
    <div>
      <h8k-navbar header={title}></h8k-navbar>
      <div className="App">
        <Slides slides={slides} />
      </div>
    </div>
  );
};

export default App;
