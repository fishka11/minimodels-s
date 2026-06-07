import { translateValue, translateLabel } from "@/lib/modelTranslations";

export function ModelData({ model, locale }) {
  const attributes = [
    { field: "eyeColor", value: model.eyeColor },
    { field: "hairColor", value: model.hairColor },
    { field: "hairLength", value: model.hairLength },
    { field: "hairType", value: model.hairType },
  ];

  return (
    <section className="container bg-white max-w-7xl mx-auto py-4 md:py-6">
      <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center gap-x-14">
        {attributes.map(({ field, value }) =>
          value ? (
            <div
              key={field}
              className="my-3 text-lg md:text-xl text-center sm:text-left"
            >
              <p className="text-slate-500 text-sm uppercase tracking-wide">
                {translateLabel(locale, field)}
              </p>
              <p className="text-slate-700 font-medium">
                {translateValue(locale, field, value)}
              </p>
            </div>
          ) : null,
        )}
      </div>
    </section>
  );
}
