import Header from "./components/Layout/Header";
import Meals from "./components/Meals";

export default function Restaurant() {
  return(
    <>
      <Header/>
      <main>
        <Meals/>
      </main>
    </>
  )
}