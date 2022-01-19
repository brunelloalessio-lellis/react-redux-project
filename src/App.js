import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import { useSelector } from "react-redux";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (!isAuthenticated) return <Auth />;

  return (
    <>
      <Header />
      <Counter />
    </>
  );
}

export default App;
