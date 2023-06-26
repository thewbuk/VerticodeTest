import { Routes, Route } from "react-router-dom";
import People from "./people";
import Layout from "./layout";

export default function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path="/" element={<People />} />
      </Route>
    </Routes>
  )
}
