import reactLogo from './assets/react.svg'
import './App.css'
import ReactConcept from './components/ReactConcept';
import { reactConcepts } from './data/init-data';

const conceptsWithLogos = reactConcepts.map((concept) => ({
  ...concept,
  logo: reactLogo,
}));

function App() {
  return (
    <div style={{ margin: 'auto', width: '80%' }}>
      <h1>React Key Concepts</h1>
      {conceptsWithLogos.map((concept, index) => (
        <ReactConcept key={index} title={concept.title} description={concept.description} logo = {concept.logo} />
      ))}
    </div>
  );
}

export default App
