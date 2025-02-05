//get elements...

let output = document.getElementById("output");

//!. Arrow Function

document.getElementById("arrowElement").
addEventListener("click", () => {
    let greet = (name) => `Hello, ${name}!`;
    output.textContent = greet("World");
});

//2. Promises

document.getElementById("promiseElement").
addEventListener("click", () => {
    function fetchData() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let success = true; // Simulate success or failure
                if (success) {
                    resolve("Data fetched successfully!");
                } else {
                    reject("Error fetching data.");
                }
            }, 2000);
        });
    }
    
    fetchData()
        .then((data) => {
            output.textContent = data;
        })
        .catch((error) => {
            console.error(error);
        });
    });

//3. Async/Await

document.getElementById("asyncElement").
addEventListener("click", async () => {
    function fetchData() {
        return new Promise((resolve) => {
            setTimeout(() => {
                    resolve("Data fetched successfully!");
               
            }, 2000);
        });
    }
    let response = await fetchData();
    output.textContent = response;
});