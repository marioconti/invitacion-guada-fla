import "./App.css";
import { NavBar } from "./components/navbar";
import { Home } from "./components/home";
import { Reserve } from "./components/reserve";
import { Location } from "./components/location";
// import Maps from "./components/maps";
import { Gifts } from "./components/gifts";
import { ListWedding } from "./components/musicList";
import { Gratitude } from "./components/gratitude";
import { Footer } from "./components/footer";
import { DressCode } from "./components/dressCode";
// import { Hotel } from "./components/hotel/index";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Reserve />
      <Location />
      {/* <Maps /> */}
      {/* <Hotel/> */}
      <DressCode />
      <Gifts />
      <Gratitude />
      <ListWedding />
      <Footer />
    </div>
  );
}

export default App;
