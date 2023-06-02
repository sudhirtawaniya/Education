export default function Card() {
    return <><div className="flex my-6 flex-col w-[100%] rounded-lg bg-white shadow-[0px_10px_36px_0px_rgba(0,0,0,0.16),0px_0px_0px_1px_rgba(0,0,0,0.06)] cursor-pointer hover:shadow-none transition-all duration-1000   md:flex-row">
    <img
      className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
      src="https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg"
      alt=""
    />
    <div className="flex flex-col justify-start p-6">
      <h5 className="mb-2 text-xl font-medium text-neutral-800 ">
        Card title
      </h5>
      <p className="mb-4 text-base text-neutral-600 ">
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </p>
      <p className="text-xs text-neutral-500 ">
        Last updated 3 mins ago
      </p>
    </div>
  </div></>
}