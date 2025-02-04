

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
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

  async function getData() {
    try {
        let data = await fetchData();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
    
  }
    getData();