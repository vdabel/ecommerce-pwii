import { GiftIcon, UserGroupIcon, WalletIcon } from "@heroicons/react/24/outline"

const Features = () => {
  return (
    <section className="w-full flex justify-center items-center">
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 lg:gap-32 py-30">
        <div className="flex flex-row justify-center items-center gap-6">
          <GiftIcon className="h-16 w-16" />
          <div className="flex flex-col justify-center items-start">
            <h5 className="text-2xl font-medium mb-2.5 text-(--color-title)">Special gifts</h5>
            <p className="font-(family-name:--font-secondary) text-(--color-text)">Perfect gifts for every occasion!</p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-6">
          <WalletIcon className="h-16 w-16" />
          <div className="flex flex-col justify-center items-start">
            <h5 className="text-2xl font-medium mb-2.5 text-(--color-title)">Secure payments</h5>
            <p className="font-(family-name:--font-secondary) text-(--color-text)">Fast, secure, and easy payments!</p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-6">
          <UserGroupIcon className="h-16 w-16" />
          <div className="flex flex-col justify-center items-start">
            <h5 className="text-2xl font-medium mb-2.5 text-(--color-title)">Customer support</h5>
            <p className="font-(family-name:--font-secondary) text-(--color-text)">Always here to assist you!</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features