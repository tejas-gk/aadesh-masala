import { images } from "../data/images";

export default function EssenceOfSpices() {
  return (
    <div className="essence">
      <div className="text-center lg:mx-28 mx-5">
        <div className="relative w-fit text-center mx-auto mb-9 mt-4">
          <div className='txt cursor-pointer mx-auto text-5xl text-red-500 font-bold'>
            The Essence of Indian Spices
            <span className="underline-a bg-red-500"></span>
          </div>
        </div>
        <p className="lg:mx-[22rem]">
          Welcome to Aadesh Masala, an Indian spices brand that is dedicated to bringing the flavors of traditional Indian cuisine to every household in India. Our mission is to provide the best quality spices to our customers, ensuring that every meal is full of flavor and packed with nutrition. Over the years, we have grown from a small local business to a national brand, serving customers across India. We take pride in our commitment to quality, sourcing the freshest and finest ingredients to make our spices. Our products are free from any harmful additives, ensuring that our customers can enjoy healthy and delicious meals.
        </p>
        <div className="flex items-center justify-center relative mt-5 txt w-fit mx-auto">
          <div className="h-10 w-10 bg-black rounded-full text-white flex items-center justify-center fill">
            <img src={images.rightArrow} alt="rightArrow" className="svg-white" />
          </div>
          <p className="ml-10">
            View more
          </p>
          <div className="h-1 w-full bg-black transform scale-x-0 transition-transform duration-300 origin-left absolute bottom-0 left-0"></div>
        </div>
      </div>
      <div className="image-container">
        <div className="top-left-image"></div>
        <div className="bottom-left-image"></div>
        <div className="top-right-image"></div>
        <div className="bottom-right-image"></div>
      </div>
    </div>

  )
}
