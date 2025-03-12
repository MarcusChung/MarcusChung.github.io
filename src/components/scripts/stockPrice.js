
    var apiKey = import.meta.env.PUBLIC_STOCKS_API_KEY;
    var symbol = "RR.L"; // Rolls-Royce on the London Stock Exchange
    // const cacheKey = "stockData";
    const expirationKey = "stockDataExpiration";
    const oneDay = 24 * 60 * 60 * 1000; // 24hrs in milliseconds

    document.addEventListener("DOMContentLoaded", () => {
        // const cachedData = localStorage.getItem(cacheKey);
        const cachedExpiration = localStorage.getItem(expirationKey);
        // localStorage.removeItem("stockDataExpiration"); temp test
        console.log("cachedExpiration initial", cachedExpiration);
        // if (
        //     cachedData &&
        //     cachedExpiration &&
        //     Date.now() < Number(cachedExpiration)
        // ) {
        //     console.log("Using cached stock data.");
        //     return JSON.parse(cachedData);
        // }

        async function getStockData() {
            //get a specific stock data
            //https://financialmodelingprep.com/stable/grades?symbol=AAPL&apikey=YOUR_API_KEY
            const url = `https://financialmodelingprep.com/stable/profile?symbol=${symbol}&apikey=${apiKey}`;
            const stockContainer = document.querySelector("#stock-container");

            if (!stockContainer) return;
            try {
                const response = await fetch(url); //try to fetch the data
                const data = await response.json(); //check for response
                // console.log("API Response:", data);

                const stock = data[0];
                if (!stock) {
                    stockContainer.innerHTML = `<p>No stock data available!</p>`;
                    return;
                }
                stockContainer.innerHTML = `
                <div>
                    <h2>${stock.symbol} </h2>
                    <ul> <li> ${stock.price} </li> 
                    <li> ${stock.companyName} </li>
                    <li> ${stock.exchangeFullName} </li>
                    <li> ${stock.exchange} </li>
                    <li> ${stock.sector} </li>
                    </ul>
                </div>
            `;
            } catch (error) {
                console.error("Error fetching stock data:", error);
                stockContainer.innerHTML = `<p>Error loading stock data.</p>`;
            }
        }

        async function getGainersData() {
            const cacheKey = "gainersData"; // Define cache key
            const stockContainer = document.querySelector("#gainers-container");

            if (!stockContainer) return;

            // Check if data exists in localStorage
            const cachedData = localStorage.getItem(cacheKey);
            if (
                cachedData &&
                cachedExpiration &&
                Date.now() < Number(cachedExpiration)
            ) {
                console.log("Loading gainers data from cache...");
                console.log("cachedExpiration after addition of time", cachedExpiration);
                displayData(JSON.parse(cachedData), stockContainer);
                return;
            }

            // Fetch data if not cached
            const url = `https://financialmodelingprep.com/stable/biggest-gainers?apikey=${apiKey}`;

            try {
                const response = await fetch(url);
                const data = await response.json();

                if (!data || data.length === 0) {
                    stockContainer.innerHTML = `<p>No stock data available!</p>`;
                    return;
                }

                localStorage.setItem(
                    expirationKey,
                    (Date.now() + oneDay).toString(), //store the expiration time by adding 24hrs to the current time
                );
                // Store data in localStorage
                localStorage.setItem(cacheKey, JSON.stringify(data));

                // Display data
                displayData(data, stockContainer);
            } catch (error) {
                console.error("Error fetching gainers data:", error);
                stockContainer.innerHTML = `<p>Error loading stock data.</p>`;
            }
        }

        // Separate function to display stock data
        function displayData(data: string | any[], container: Element) {
            container.innerHTML = ""; // Clear previous content
            if (Array.isArray(data)) {
                const top12Gainers = data.slice(0, 12); // Take only the first 12

                top12Gainers.forEach((stock) => {
                    const changeColor =
                        parseFloat(stock.change) >= 0
                            ? "text-green-500"
                            : "text-red-500";

                    // Create stock div
                    const stockDiv = document.createElement("div");
                    stockDiv.classList.add(
                        "flex",
                        "flex-col",
                        "bg-gray-100",
                        "text-black",
                        "rounded-md",
                        "mb-1.5",
                        "max-w-sm",
                        "dark:bg-gray-800",
                        "dark:text-white",
                        "p-2",
                    );

                    // Fill in the HTML
                    stockDiv.innerHTML = `
            <div class="flex justify-between items-center w-full">
                <div class="flex flex-col items-left space-x-2">
                    <a href="#" class="text-blue-400 hover:underline font-semibold text-sm">
                        ${stock.symbol}
                    </a>
                    <span class="text-sm text-gray-400 text-ellipsis">
                        ${stock.name}
                    </span>
                </div>
                <div class="text-right">
                    <div class="text-xl font-bold">
                        ${stock.price}
                    </div>
                    <div class="${changeColor} text-sm">
                        ${stock.change} (${stock.changesPercentage}%)
                    </div>
                </div>
            </div>
        `;

                    container.appendChild(stockDiv);
                });
            } else {
                console.error("Data is not an array:", data);
                container.innerHTML = `<p>Error loading stock data.</p>`;
            }
        }

        async function getLosersData() {
            const cacheKey = "losersData"; // Define cache key
            const stockContainer = document.querySelector("#losers-container");

            if (!stockContainer) return;

            // Check if data exists in localStorage
            const cachedData = localStorage.getItem(cacheKey);
            if (
                cachedData &&
                cachedExpiration &&
                Date.now() < Number(cachedExpiration)
            ) {
                console.log("Loading gainers data from cache...");
                displayData(JSON.parse(cachedData), stockContainer);
                return;
            }

            // Fetch data if not cached
            const url = `https://financialmodelingprep.com/stable/biggest-losers?apikey=${apiKey}`;

            try {
                const response = await fetch(url);
                const data = await response.json();

                if (!data || data.length === 0) {
                    stockContainer.innerHTML = `<p>No stock data available!</p>`;
                    return;
                }

                localStorage.setItem(
                    expirationKey,
                    (Date.now() + oneDay).toString(), //store the expiration time by adding 24hrs to the current time
                );
                console.log("cachedExpiration after addition of time2", cachedExpiration);
                // Store data in localStorage
                localStorage.setItem(cacheKey, JSON.stringify(data));

                // Display data
                displayData(data, stockContainer);
            } catch (error) {
                console.error("Error fetching gainers data:", error);
                stockContainer.innerHTML = `<p>Error loading stock data.</p>`;
            }
        }

        async function getActiveData() {
            const cacheKey = "activesData"; // Define cache key
            const stockContainer = document.querySelector("#actives-container");

            if (!stockContainer) return;

            // Check if data exists in localStorage
            const cachedData = localStorage.getItem(cacheKey);
            if (
                cachedData &&
                cachedExpiration &&
                Date.now() < Number(cachedExpiration)
            ) {
                console.log("Loading gainers data from cache...");
                displayData(JSON.parse(cachedData), stockContainer);
                return;
            }

            // Fetch data if not cached
            const url = `https://financialmodelingprep.com/stable/most-actives?apikey=${apiKey}`;

            try {
                const response = await fetch(url);
                const data = await response.json();

                if (!data || data.length === 0) {
                    stockContainer.innerHTML = `<p>No stock data available!</p>`;
                    return;
                }

                localStorage.setItem(
                    expirationKey,
                    (Date.now() + oneDay).toString(), //store the expiration time by adding 24hrs to the current time
                );
                // Store data in localStorage
                localStorage.setItem(cacheKey, JSON.stringify(data));
                console.log("cachedExpiration after addition of time3", cachedExpiration);
                // Display data
                displayData(data, stockContainer);
            } catch (error) {
                console.error("Error fetching gainers data:", error);
                stockContainer.innerHTML = `<p>Error loading stock data.</p>`;
            }
        }

        const stockSubmit = document.querySelector("#stock-submit");
        if (!stockSubmit) return;
        stockSubmit.addEventListener("click", () => {
            const stockSymbol = document.querySelector(
                "#stock-symbol",
            ) as HTMLInputElement;
            if (!stockSymbol) return;
            symbol = stockSymbol.value;
            getStockData();
        });
        getGainersData();
        getLosersData();
        getActiveData();
    });
