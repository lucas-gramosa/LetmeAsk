import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext";


import { Home} from "./components/Home/Home";
import { NewRoom } from "./components/NewRoom/NewRoom";
import { Room } from "./components/Room/Room";


function App(){
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/rooms/news" element={<NewRoom />} />
          <Route path="/rooms/:id" element={<Room />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
    );
}

export default App;