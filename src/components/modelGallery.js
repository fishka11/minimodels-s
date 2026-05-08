// src/components/modelGallery.js
import Image from "next/image";

export function ModelGallery({ model }) {
  return (
    model.gallery?.length > 0 && (
      <section className="container bg-white mx-auto max-w-7xl py-4 md:py-6 ">
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-4 mx-auto">
          {model.gallery.map((photo, i) =>
            photo?.asset?._id ? (
              <figure className="overflow-hidden mx-auto" key={photo._key}>
                <Image
                  src={photo.asset.url}
                  width={photo.asset.metadata.dimensions.width}
                  height={photo.asset.metadata.dimensions.height}
                  quality={80}
                  alt={photo.alt || `${model.name} ${i + 1}`}
                  className="w-auto max-h-90 max-w-full"
                />
              </figure>
            ) : null,
          )}
        </div>
      </section>
    )
  );
}
