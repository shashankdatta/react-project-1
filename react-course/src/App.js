import Todo from "./components/Todo";
import { Route, Routes } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="/new-meetup" element={<NewMeetupPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route
          path="/todo"
          element={
            <>
              <h1>My Todos</h1>
              <Todo title="Learn React" />
              <Todo title="Master React" />
              <Todo title="Use React" />
              <Todo title="Expore React" />
            </>
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;
