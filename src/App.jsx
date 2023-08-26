import { NavigationMenu } from './components/NavigationMenu';
import { Error } from './components/Error';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Team from './components/Team';

export default function App() {
  return (
    <>
      <NavigationMenu />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Team />}>
            <Route index element={<Error />} />
            <Route path="blogs" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
