"use client";

export default function LocationsList({ items, active, onPick }) {
  return (
    <div className="p-4">
      <p className="text-lg lg:text-2xl font-bold text-[#00A6B2] mb-4 dark:text-gray-100">
        Corporate Office Location
      </p>
      <div className="flex flex-col gap-2 space-y-1 mb-8">
        {items?.slice(0, 1).map((loc) => {
          const isActive = active?.name === loc.name;
          return (
            <button
              key={loc.name}
              onClick={() => onPick(loc)}
              className={[
                "text-left px-4 py-2 rounded-full border transition shadow-md",
                isActive
                  ? "bg-[#00A6B2] text-white border-[#00A6B2]"
                  : "bg-white text-gray-700 border-gray-200 hover:border-[#00A6B2]",
              ].join(" ")}
            >
              {loc.name}
            </button>
          );
        })}
      </div>

      <p className="text-lg lg:text-2xl font-bold text-[#00A6B2] mb-4 dark:text-gray-100 ">
        Locations We Cover in New Jersey
      </p>
      <div className="flex flex-col gap-2 space-y-1">
        {items?.slice(1, items?.length).map((loc) => {
          const isActive = active?.name === loc.name;
          return (
            <button
              key={loc.name}
              onClick={() => onPick(loc)}
              className={[
                "text-left px-4 py-2 rounded-full border transition shadow-md",
                isActive
                  ? "bg-[#00A6B2] text-white border-[#00A6B2]"
                  : "bg-white text-gray-700 border-gray-200 hover:border-[#00A6B2]",
              ].join(" ")}
            >
              {loc.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}
