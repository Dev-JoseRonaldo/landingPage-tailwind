import { FeaturedCarousel } from "./components/Carousels/FeaturedCarousel"
import Header from "./components/Header"
import { Home } from "./components/Home"
import { JustDoIt } from "./components/JustDoIt"

export const App = () => {

  return (
    <>
      <Header/>
      <Home />
      <JustDoIt />
      <FeaturedCarousel />

    </>
  )
}


