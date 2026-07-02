// Reusable product card: floating plant image, frosted body, title,
// description, and a price + add-to-cart footer. Configurable via `plant` prop.
export default function PlantCard({ plant }) {
  return (
    <article className="group mt-16 flex flex-col rounded-[3.5rem] glass px-8 pb-8 pt-6 text-white/80 shadow-card transition-transform duration-300 hover:-translate-y-2">
      {/* Fixed image zone: the plant floats above the card and every pot is
          bottom-aligned so all cards line up regardless of the PNG framing. */}
      <div className="-mt-24 mb-2 flex h-44 items-end justify-center">
        <img
          src={plant.image}
          alt={plant.name}
          className="max-h-56 w-auto max-w-[85%] object-contain object-bottom drop-shadow-2xl transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-105"
        />
      </div>

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
