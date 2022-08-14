import { PopularPickCarousel } from "./Carousels/PopularPicksCarousel"

export const PopularPick = () => {
  return (
    <section className="popular-pick max-w-7xl mx-auto mb-28 relative px-4">
      <div className="w-full text-start">
          <h2 className="font-bold text-6xl mb-6">Popular Picks</h2>
          <p className="font-normal text-lg text-gray-400 ">Our popular picks for most favorited Nike Men’s & Women’s shoes.</p>
        </div> 
      <PopularPickCarousel />
  
    </section>
  )
}
