import justDoIt1 from "../assets/justdoit1.png"
import justDoIt2 from "../assets/justdoit2.png"
import justDoIt3 from "../assets/justdoit3.png"
import justDoIt4 from "../assets/justdoit4.png"

export const JustDoIt = () => {
  return (
    <section className="max-w-7xl mx-auto mb-24 px-4">
      <div className="w-full text-center">
        <h2 className="font-bold text-6xl mb-6">Just do it</h2>
        <p className="font-normal text-lg text-gray-500 mb-16">Captures messages that stands for more than just sport. </p>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-6 lg:flex-nowrap">
        <div className="relative before:absolute before:content-[''] before:w-full before:h-full before:top-0  before:bg-black before:bg-opacity-[0.65]  ">
          <img  src={justDoIt1} alt="" />
          <p className="absolute top-0 mt-[55%] text-white font-normal text-4xl w-full text-center">Newcomer</p>
        </div>

        <div className="relative before:absolute before:content-[''] before:w-full before:h-full before:top-0  before:bg-black before:bg-opacity-[0.65]  ">
          <img  src={justDoIt2} alt="" />
          <p className="absolute top-0 mt-[55%] text-white font-normal text-4xl w-full text-center">Men</p>
        </div>

        <div className="relative before:absolute before:content-[''] before:w-full before:h-full before:top-0  before:bg-black before:bg-opacity-[0.65]  ">
          <img  src={justDoIt3} alt="" />
          <p className="absolute top-0 mt-[55%] text-white font-normal text-4xl w-full text-center">Women</p>
        </div>

        <div className="relative before:absolute before:content-[''] before:w-full before:h-full before:top-0  before:bg-black before:bg-opacity-[0.65]  ">
          <img  src={justDoIt4} alt="" />
          <p className="absolute top-0 mt-[55%] text-white font-normal text-4xl w-full text-center">Kids</p>
        </div>
        

      </div>
    </section>

  )
}
