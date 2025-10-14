

const Suscripcion = () => {
  return (
    <section className="flex flex-col justify-center items-center font-(family-name:--font-secondary) pb-30">
      <h2 className="text-4xl font-medium mb-4">Join the Elementra family</h2>
      <p className="text-(--color-text) font-normal mb-12.5">Subscribe now to stay updated with the latest trends and exclusive offers from Elementra.</p>
      <div className="flex flex-row gap-2 mb-7">
        <input type="text" className="border border-[#D33610] rounded-full py-3 pl-12.5 pr-5 outline-0 w-[450px]" placeholder="Your Email Address" />
        <button className="bg-[#D33610] text-white py-3.5 px-10 rounded-full cursor-pointer hover:bg-[#C32A05]">Get Started</button>
      </div>
      <div className="flex flex-row gap-2">
        <input type="checkbox" />
        <label htmlFor="" className="text-sm text-(--color-subtitle)">I agree that my submitted data is being collected and stored.</label>
      </div>
    </section>
  )
}

export default Suscripcion