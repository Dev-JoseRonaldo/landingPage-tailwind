import Header from "./components/Header"
import { Home } from "./components/Home"
import { JustDoIt } from "./components/JustDoIt"
import { Featured } from "./components/Featured"
import { PopularPick } from "./components/PopularPick"

export const App = () => {

  return (
    <>
      <Header/>
      <main>
        <Home />
        <JustDoIt />
        <Featured />
        <PopularPick />
      </main>

    </>
  )
}


