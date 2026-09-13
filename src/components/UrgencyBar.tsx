export function UrgencyBar() {
  return (
    <aside
      id="urgency-bar"
      className="bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white text-xs sm:text-sm font-semibold py-2 px-4 sticky top-0 z-40 shadow-sm text-center"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-center">
        <p className="tracking-wide">
          Oferta válida até hoje
        </p>
      </div>
    </aside>
  );
}
