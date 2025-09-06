import Spinner from "react-bootstrap/Spinner";

export default function Loading() {
  return (
    <>
      <main className="w-full min-h-[70vh] flex justify-around items-center">
        {/* <i className="fa-solid fa-spinner fa-pulse fa-3x"></i> */}
        <Spinner animation="border" size="lg" variant="primary" />
        {/* <h1 className="font-bold animate-pulse">Loading&hellip;</h1> */}
      </main>
    </>
  );
}
