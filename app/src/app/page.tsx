export default function Home() {
  return (
    <main className="flex flex-col min-h-screen md:flex-row">
      {/* Black section (on top on mobile, on the left on larger screens) */}
      <div className="md:order-1 flex-1 bg-black p-4 text-white">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        {/* Add your content for the black section here */}
      </div>

      {/* White section (on the bottom on mobile, on the right on larger screens) */}
      <div className="md:order-2 flex-1 bg-white p-4 overflow-y-auto">
        {/* Populate the white section with lorem ipsum */}
        <h1 className="text-3xl font-bold underline text-black">Hello world!</h1>
      </div>
    </main>
  );
}
