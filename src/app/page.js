import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        {/* Import Google Font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div
        className="min-h-screen bg-gradient-to-r from-blue-500 via-green-500 to-red-500 text-white"
        style={{ fontFamily: "'Poppins', sans-serif" }} // Apply the font globally
      >
        <header className="text-center py-10">
          <h1 className="text-5xl font-bold">Latin American (LATAM) Meme Coin</h1>
        </header>

        <main className="max-w-4xl mx-auto px-4">
          {/* Centralized Image */}
          <div className="flex justify-center mb-10">
            <img
              src="/latam.jpg" // Replace with your image path
              alt="Latin American Coin"
              className="w-64 h-64 object-contain"
            />
          </div>

          {/* About Section */}
          <section className="bg-white text-black rounded-lg shadow-lg p-6 mb-10">
            <h2 className="text-3xl font-bold text-center mb-4">About Latin American (LATAM)</h2>
            <p className="text-lg text-center">
              The Latin American Coin (LATAM) is the meme coin that unites the countries of Latin America
              with one purpose: to make Latin America great again! Join us on this fun and purposeful journey.
            </p>
          </section>

          {/* Countries Section */}
          <section>
            <h2 className="text-3xl font-bold text-center mb-6">Represented Countries</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { name: "Brazil", color: "bg-green-500" },
                { name: "Argentina", color: "bg-blue-500" },
                { name: "Mexico", color: "bg-red-500" },
              ].map((country) => (
                <div
                  key={country.name}
                  className={`${country.color} text-white rounded-lg shadow-lg p-4 text-center font-bold`}
                >
                  {country.name}
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <div className="text-center mt-10">
            <a 
              href="https://pancakeswap.finance/?outputCurrency=0x929c370a2407e7789000391db1a6439572081c10" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600">
                Buy LATAM Now
              </button>
            </a>
          </div>

          {/* Centralized GIF */}
          <div className="flex justify-center my-10 mb-10">
            <img
              src="https://media0.giphy.com/media/wGg2U8Hni2QiRWVHUm/giphy.gif?cid=6c09b9522ccw57ls1s1ezilwa6ppi055hocqoyr4673c5c4i&ep=v1_gifs_search&rid=giphy.gif&ct=g"
              alt="Latin American Meme Coin GIF"
              className="w-64 h-64 object-contain"
            />
          </div>

        </main>

        <footer className="text-center py-8 mt-10 bg-gray-800 text-white">
          <p className="text-lg">© 2025 Latin American Coin (LATAM). All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}