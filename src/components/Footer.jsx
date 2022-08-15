import { FaFacebookF, FaTwitter, FaEnvelope } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="w-full bg-black text-white px-4 py-16 font-normal">
      <div className="max-w-7xl mx-auto flex justify-between items-start">
        <div className="uppercase text-sm flex gap-20">
          <div className="flex flex-col items-start justify-start gap-5">
            <p className="font-semibold text-base">Menu</p>
            <a href="">FIND A STORE</a>
            <a href="">BECOME A MEMBER</a>
            <a href="">SIGN UP FOR EMAIL</a>
            <a href="">STUDENT DISCOUNTS</a>
            <a href="">SEND US FEEDBACK</a>
          </div>

          <div className="flex flex-col items-start justify-start gap-5">
            <p className="font-semibold text-base">HELPDESK</p>
            <a href="">Order Status</a>
            <a href="">Delivery</a>
            <a href="">Returns</a>
            <a href="">Payment Options</a>
            <a href="">Contact Us</a>
          </div>

          <div className="flex flex-col items-start justify-start gap-5">
            <p className="font-semibold text-base">ABOUT NIKE</p>
            <a href="">News</a>
            <a href="">Careers</a>
            <a href="">Investors</a>
            <a href="">Sustainability</a>
          </div>
        </div>

        <div className="text-end not-italic flex flex-col gap-6">
          <p>© 2022 Nike, Inc. All Rights Reserved</p>
          <address className="not-italic">
            <strong>Primary Address</strong>
            <p className='leading-6'>One Bowerman Drive <br /> Beaverton, OR 97005-6453 <br />USA</p>
          </address>
          <div className="flex justify-end items-end gap-4">
            <FaTwitter className='cursor-pointer text-xl'/>
            <FaFacebookF className='cursor-pointer text-xl'/>
            <FaEnvelope className='cursor-pointer text-xl'/>
          </div>
        </div>
      </div>
    </footer>
  )
}
