// import TemplatePointers from "./components/TemplatePointers";

function LandingIntro() {
  return (
    <div className="hero min-h-full rounded-l-xl bg-base-200">
      <div className="hero-content py-12">
        <div className="max-w-md">
          <h1 className="text-3xl text-center font-bold uppercase ">
            <img
              src="/logos/logo-lg.jpeg"
              className="w-12 inline-block mr-2 mask mask-circle"
              alt="FinData-Bureau"
            />
            FinData Bureau
          </h1>
          <h1 className="text-3xl text-center font-bold">Dashboard</h1>

          <div className="text-center mt-12">
            <img
              src="/logos/logo-lg.jpeg"
              alt="inData-Bureau"
              className="w-48 inline-block"
            ></img>
          </div>

          {/* Importing pointers component */}
          {/* <TemplatePointers /> */}
        </div>
      </div>
    </div>
  );
}

export default LandingIntro;
