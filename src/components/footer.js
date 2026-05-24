import { sanityFetch } from "@/sanity/lib/live";
import { CASTING_SECTION_QUERY } from "@/sanity/lib/queries";
import { lora } from "@/lib/fonts";
import { shadowsIntoLightTwo } from "@/lib/fonts";

export async function Footer({ locale }) {
  const { data: castingSection } = await sanityFetch({
    query: CASTING_SECTION_QUERY,
    tags: ["castingSection"],
  });
  return (
    <section className="bg-sky-500 py-16 lg:py-30">
      <div className="container max-w-7xl px-4 mx-auto w-full">
        <div className="container max-w-7xl mx-auto flex flex-row  gap-5 justify-center items-center">
          <hr className="text-white w-1/8" />
          <h2
            className={`${lora.className} text-[40px] lg:text-6xl font-light text-center lg:py-1 text-white`}
          >
            {castingSection.headline[locale]}
          </h2>
          <hr className="text-white w-1/8" />
        </div>
        <div>
          <p
            className={`${shadowsIntoLightTwo.className} text-[20px] lg:text-2xl text-center text-white`}
          >
            {castingSection.subheadline[locale]}
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-6 justify-center items-start text-sm lg:text-[16px] text-white font-bold pt-6 lg:pt-16">
          <div className="w-full lg:w-1/2">
            <div className="text-lg uppercase text-center">
              {castingSection.blocks[0].title[locale]}
            </div>
            <div className="text-justify">
              {castingSection.blocks[0].description[locale].map(
                (text, index) => (
                  <div key={index}>{text}</div>
                ),
              )}
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="text-lg uppercase text-center">
              {castingSection.blocks[1].title[locale]}
            </div>
            <div className="text-justify">
              {castingSection.blocks[1].description[locale].map(
                (text, index) => (
                  <div key={index}>{text}</div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
      <div id="section7" className="w-full" />
    </section>
  );
}
