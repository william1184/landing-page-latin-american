'use client'
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const [nortamMarketCap, setNortamMarketCap] = useState(null);
  const [latamMarketCap, setLatamMarketCap] = useState(null);

  
  useEffect(() => {
    // Fetch NORTAM marketCap
    fetch(
      "https://springboard.pancakeswap.finance/meme-api/v1/private/token/get/v2?address=0xb3f3c9ec295f6c187b067766f30298c0118ac0df"
    )
      .then((response) => response.json())
      .then((data) => {
        let marketCap = data?.data?.tokenPrice?.marketCap
        if(marketCap){
          marketCap = parseFloat(marketCap).toFixed(2)
        }
        setNortamMarketCap(marketCap || "N/A");
      })
      .catch((error) => console.error("Error fetching NORTAM data:", error));

    // Fetch LATAM marketCap
    fetch(
      "https://springboard.pancakeswap.finance/meme-api/v1/private/token/get/v2?address=0xbd366e3805ff2e52c4c1f43835a3ebc7f92786cf"
    )
      .then((response) => response.json())
      .then((data) => {
        let marketCap = data?.data?.tokenPrice?.marketCap
        if(marketCap){
          marketCap = parseFloat(marketCap).toFixed(2)
        }
        setLatamMarketCap(marketCap || "N/A");
      })
      .catch((error) => console.error("Error fetching LATAM data:", error));
  }, []);

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
              href="https://springboard.pancakeswap.finance/bsc/token/0xbd366e3805ff2e52c4c1f43835a3ebc7f92786cf" 
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

          {/* Leaderboard Section */}
          <section className="bg-gray-800 text-black rounded-lg shadow-lg p-6 mb-10">
            <h2 className="text-3xl font-bold text-center mb-4 text-white">Leaderboard</h2>
            <ol className="list-none list-inside"> {/* Remove o marcador padrão da lista */}
              {[{ name: "NORTAM", marketCap: nortamMarketCap }, { name: "LATAM", marketCap: latamMarketCap }]
                .sort((a, b) => (b.marketCap || 0) - (a.marketCap || 0)) // Sort by MarketCap in descending order
                .map((token, index) => (
                  <li
                    key={token.name}
                    className="bg-white my-5 flex items-center rounded-lg shadow-lg p-4 relative"
                  >
                    {index === 0 ? (
                      <span className="text-2xl mr-4">🏆</span> 
                    ) : (
                      <span className="text-lg font-bold mr-4">{index + 1}</span>
                    )}
                    <div>
                      <h3 className="text-2xl font-bold">{token.name}</h3>
                      <p className="text-lg">
                        MarketCap: {token.marketCap !== null ? `$${token.marketCap}K` : "Loading..."}
                      </p>
                    </div>
                  </li>
                ))}
            </ol>
          </section>

        </main>

        <footer className="text-center py-8 mt-10 bg-gray-800 text-white">
          <p className="text-lg">© 2025 Latin American Coin (LATAM). All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}