import PledgeForm from "@/components/pledge/PledgeForm";
import PledgeList from "@/components/pledge/PledgeList";

export default function pledge() {
  return (
    <main className="container mx-auto my-20">
      <section className="text-center text-gray-800 mb-4 grid gap-2">
        <p className="text-6xl text-green-700">Pledge</p>
        <em>
          Join our community of environmental champions. Make a commitment to
          protect our planet and inspire others to take action.
        </em>
        <p className="text-sm text-yellow-700">
          Pledge to reduce, reuse, and recycle. Your commitment helps build a
          cleaner future.
        </p>
      </section>
      <PledgeForm />
      <PledgeList />
    </main>
  );
}
