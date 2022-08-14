import rewardingImg from '../assets/rewarding.png'

export const DaysRewarding = () => {
  return (
    <section className="max-w-7xl mx-auto mb-24 flex items-start justify-between px-4">
      <div className="w-full max-w-sm text-start">
        <h2 className="font-bold text-6xl mb-6">Rewarding Days Ahead</h2>
        <p className="font-normal text-lg text-gray-500 mb-16 max-w-md">
          More rewards for Members as we celebrate the Nike App Anniversary.<br/><br />
          From 02 - 07 Aug, stand a chance to score a pair of Nike Air Max “all type” when you shop on the Nike App.<br/><br />
          Not a Nike Member?       
        </p>
        <a href="" className="bg-black py-4 px-9 text-white text-lg rounded">Join now</a>
      </div>
      <div>
        <img src={rewardingImg} alt="" />
      </div>
    </section>
  )
}
