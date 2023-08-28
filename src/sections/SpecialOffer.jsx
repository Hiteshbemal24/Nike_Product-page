import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
       <img src={offer} 
       width={773}
       height={687}
       className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
          <h2 className="font-palanquin text-4xl capitalize max-sm:text-[720px] max-sm:leading-[82] font-bold lg:max-w-lg">
            <span className="text-coral-red"> Special</span> Offer
            
            </h2>
            <p className="mt-4 lg:max-w-lg info-text">
            Unleash Your Inner Champion with Nike's Spectacular Special Offer! Don't just settle for ordinary; embrace the extraordinary with Nike. Claim your Special Offer now and let your ambitions soar higher than ever before! 
            </p>
            <p className="mt-6 lg:max-w-lg info-text">Whether you're a fitness enthusiast, a trendsetter, or a casual fashion connoisseur, this limited-time deal is designed to ignite your passion and boost your confidence.</p>
            <div className="mt-11 flex flex-wrap gap-4">
            <Button label="View details"/>
            <Button
            label="learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray" 
            />
            </div>
      </div> 
    </section>
  )
}

export default SpecialOffer