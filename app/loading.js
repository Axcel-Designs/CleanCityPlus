import Spinner from "react-bootstrap/Spinner";

export default function Loading() {
  return (
    <>
      <main className="w-full h-100 flex justify-around items-center">
        <div className=" flex items-center gap-4">
          <div className="text-blue-600 flex justify-around">
            {/* <i className="fa-solid fa-spinner fa-pulse fa-3x"></i> */}
            <Spinner animation="border" size="lg" variant="primary" />;
          </div>
          {/* <h1 className="font-bold animate-pulse">Loading&hellip;</h1> */}
        </div>
      </main>
    </>
  );
}
