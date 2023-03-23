document.addEventListener("DOMContentLoaded", () => {
  const cardsContainer = document.getElementById("cardsContainer");
  const searchInput = document.getElementById("searchInput");

  // Fetch JSON data from GitHub
  fetch(
    "https://raw.githubusercontent.com/X0RBYT3/OSINT-Tools/main/resources.json"
  )
    .then((response) => response.json())
    .then((jsonData) => {
      // Function to create cards
      const createCards = (data) => {
        cardsContainer.innerHTML = "";
        data.forEach((item) => {
          const card = document.createElement("div");
          card.className = "card";
          card.innerHTML = `
            <h2>${item.name}</h2>
            <p>${item.desc}</p>
            <a href="${item.link}" target="_blank">Visit Website</a>
          `;
          cardsContainer.appendChild(card);
        });
      };

      // Function to filter resources based on search input
      const searchResources = (event) => {
        const searchTerm = event.target.value.toLowerCase();
        const filteredData = jsonData.filter((item) => {
          return (
            item.name.toLowerCase().includes(searchTerm) ||
            item.desc.toLowerCase().includes(searchTerm) ||
            item.tags.some((tag) => tag.toLowerCase().includes(searchTerm))
          );
        });
        createCards(filteredData);
      };

      // Display all cards on page load
      createCards(jsonData);

      // Add event listener for search input
      searchInput.addEventListener("input", searchResources);
    })
    .catch((error) => {
      console.error("Error fetching JSON data:", error);
    });
});
