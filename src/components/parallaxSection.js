// src/components/parallaxSection.js
export function ParallaxSection({ imageUrl, children }) {
  return (
    <div
      className="relative flex items-center justify-center bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 text-white text-center px-4">
        {children}
      </div>
    </div>
  );
}
