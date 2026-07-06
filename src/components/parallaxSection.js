// src/components/parallaxSection.js

export function ParallaxSection({
  bgImage,
  parralaxAnchor,
  sectionEnlargment,
  children,
}) {
  return (
    <div
      className="relative sm:min-h-(--sh) grid place-items-center bg-fixed bg-cover bg-top max-sm:min-h-250"
      // className={`relative min-h-dvh lg:min-h-(--sh) grid place-items-center bg-fixed bg-cover bg-top`}
      style={{
        backgroundImage: `url(${bgImage.src})`,
        "--sh": `calc(100dvh + ${sectionEnlargment}px)`,
      }}
    >
      <div
        id={parralaxAnchor}
        className="absolute top-2/7 sm:top-1/5 md:top-1/4 lg:top-5/12 xl:top-1/3 w-full"
      />

      {/* Treść */}
      <div className="[grid-area:1/1] h-full text-white w-full">{children}</div>
    </div>
  );
}

// export function DebugUA() {
//   const [info, setInfo] = useState({});

//   useEffect(() => {
//     setTimeout(() => {
//       setInfo({
//         innerHeight: window.innerHeight ?? "UNDEFINED",
//         innerWidth: window.innerWidth ?? "UNDEFINED",
//         clientHeight: document.documentElement.clientHeight,
//       });
//     }, 5000);
//   }, []);

//   return (
//     <pre
//       style={{
//         position: "fixed",
//         bottom: 0,
//         left: 0,
//         background: "black",
//         color: "lime",
//         padding: "10px",
//         fontSize: "12px",
//         zIndex: 999999,
//         maxWidth: "100vw",
//         maxHeight: "50vh",
//         overflow: "auto",
//       }}
//     >
//       {JSON.stringify(info, null, 2)}
//     </pre>
//   );
// }
