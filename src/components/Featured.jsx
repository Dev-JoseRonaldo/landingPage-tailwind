import { FeaturedCarousel } from "./Carousels/FeaturedCarousel"

export const Featured = () => {
  return (
    <section className="w-full text-center mb-24">
      <div>
        <h2 className="font-bold text-6xl mb-6">Featured</h2>
        <p className="font-normal text-lg text-gray-500 mb-16">There are newest style of the season.</p>
      </div>
      <FeaturedCarousel />
      <p className="mt-3 text-sm text-gray-500">(Photo by Joe Felix/Liverpool.co)<br/>
        <span className="mt-1 block text-base text-black">Liverpool’s Home & Away Kit 2022/2023 Season.</span>
      </p>
    </section>
  )
}
