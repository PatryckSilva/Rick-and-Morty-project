/* eslint-disable react/no-unescaped-entities */
import Script from "next/script";

/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      "neftyblocks-market": any;
    }
  }
}

const Market = () => {
  return (
    <>
      <section className={`mb-10 mt-40 min-h-screen`}>
        <div className={``}>
          <div className="flex justify-center">
            <neftyblocks-market collection="pr.funko"></neftyblocks-market>
          </div>
        </div>
      </section>{" "}
      <Script type="module">
        import 'https://cdn.jsdelivr.net/npm/@neftyblocks/market@latest';
      </Script>
    </>
  );
};

export default Market;
