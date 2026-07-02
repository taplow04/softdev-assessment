// Reusable product card: floating plant image, frosted body, title,
// description, and a price + add-to-cart footer. Configurable via `plant` prop.
export default function PlantCard({ plant }) {
  return (
    <article className="group relative mt-24 flex flex-col rounded-[3.5rem] glass px-8 pb-8 pt-32 text-white/80 shadow-card transition-transform duration-300 hover:-translate-y-2">
      {/* Floating plant image */}
      <img
        src={plant.image}
        alt={plant.name}
        className="absolute -top-24 left-1/2 w-[230px] -translate-x-1/2 drop-shadow-2xl transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-105 sm:w-[250px]"
      />

      <h3 className="text-2xl font-normal sm:text-3xl">{plant.name}</h3>
      <p className="mt-3 min-h-[72px] text-base leading-relaxed sm:text-lg">
        {plant.description}
      </p>

      <div className="mt-auto flex items-center justify-between pt-6">
        <span className="text-2xl font-normal sm:text-3xl">{plant.price}</span>
        <button
          type="button"
          aria-label={`Add ${plant.name} to cart`}
          className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-white/10 transition-colors hover:bg-white hover:[&_img]:invert"
        >
          <img src="/assets/cart.png" alt="" className="h-5 w-5" />
        </button>
      </div>
    </article>
  )
}
