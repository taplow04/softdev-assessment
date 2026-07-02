// Centered section heading flanked by the two decorative gradient swashes from Figma.
export default function SectionTitle({ children, id }) {
  return (
    <div id={id} className="flex items-center justify-center gap-4 sm:gap-6">
      <span
        aria-hidden="true"
        className="hidden h-[3px] w-10 rotate-180 rounded-full title-swash sm:block md:w-16"
      />
      <h2 className="text-center text-3xl font-semibold sm:text-4xl md:text-5xl">
        {children}
      </h2>
      <span
        aria-hidden="true"
        className="hidden h-[3px] w-10 rounded-full title-swash sm:block md:w-16"
      />
    </div>
  )
}
