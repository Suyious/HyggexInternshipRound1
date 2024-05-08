import Hero from "./components/hero";
import Navigation from "./components/navigation";
import Path from "./components/path";

export default function App() {
  return (
    <div className="app__main">
      <Navigation/>
      <Path/>
      <Hero/>
    </div>
  )
}