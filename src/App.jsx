import Header from "./components/Header"
import { Home } from "./components/Home"
import { JustDoIt } from "./components/JustDoIt"
import { Featured } from "./components/Featured"
import { PopularPick } from "./components/PopularPick"
import { DaysRewarding } from "./components/DaysRewarding"
import { Footer } from "./components/Footer"

export const App = () => {

  return (
    <>
      <Header/>
      <main>
        <Home />
        <JustDoIt />
        <Featured />
        <PopularPick />
        <DaysRewarding />
      </main>
      <Footer />

    </>
  )
}


