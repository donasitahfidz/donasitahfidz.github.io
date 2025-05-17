// Sample data for donation list
const donationData = [
  {
    id: 1,
    title: "Clean Water for Villages",
    category: "Health",
    description: "Provide clean water access to 5 remote villages",
    raised: 3200,
    goal: 10000,
    image:
      "https://images.unsplash.com/photo-1509316785289-025f5b8b4b22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 2,
    title: "Animal Shelter Support",
    category: "Animals",
    description: "Help feed and care for abandoned animals",
    raised: 4500,
    goal: 8000,
    image:
      "https://images.unsplash.com/photo-1583511655826-057004d7f139?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 3,
    title: "School Supplies Drive",
    category: "Education",
    description: "Provide school supplies for 500 children",
    raised: 1800,
    goal: 3000,
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 4,
    title: "Disaster Relief Fund",
    category: "Emergency",
    description: "Support families affected by natural disasters",
    raised: 12500,
    goal: 25000,
    image:
      "https://images.unsplash.com/photo-1615789591457-74a63395c990?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 5,
    title: "Community Garden",
    category: "Hunger",
    description: "Create a sustainable food source for the community",
    raised: 2700,
    goal: 5000,
    image:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 6,
    title: "Medical Equipment",
    category: "Health",
    description: "Provide hospitals with essential medical equipment",
    raised: 8900,
    goal: 15000,
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 7,
    title: "Library Construction",
    category: "Education",
    description: "Build a community library in rural area",
    raised: 6200,
    goal: 12000,
    image:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 8,
    title: "Wildlife Conservation",
    category: "Animals",
    description: "Protect endangered species in their natural habitat",
    raised: 15400,
    goal: 20000,
    image:
      "https://images.unsplash.com/photo-1550358864-518f202c02ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 9,
    title: "Elderly Care Program",
    category: "Community",
    description: "Support for elderly living alone",
    raised: 4300,
    goal: 8000,
    image:
      "https://images.unsplash.com/photo-1506784365847-bbad939e9335?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 10,
    title: "Disability Support",
    category: "Community",
    description: "Provide mobility aids and therapy",
    raised: 6800,
    goal: 10000,
    image:
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
  },
];

// Sample data for search results
const searchData = [
  { id: 1, title: "School for 100 Kids", category: "Education" },
  { id: 2, title: "Medical Aid Fund", category: "Health" },
  { id: 3, title: "Hunger Relief Program", category: "Hunger" },
  { id: 4, title: "Animal Rescue Center", category: "Animals" },
  { id: 5, title: "Clean Water Initiative", category: "Health" },
];

document.addEventListener("DOMContentLoaded", function () {
  // SPA Navigation
  const tabButtons = document.querySelectorAll(".tab-button");
  const pages = document.querySelectorAll(".page");

  tabButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      const targetPage = this.getAttribute("data-page");

      // Update active tab
      tabButtons.forEach((btn) => {
        btn.classList.remove("text-purple-600");
        btn.classList.add("text-gray-500");
      });
      this.classList.remove("text-gray-500");
      this.classList.add("text-purple-600");

      // Show target page
      pages.forEach((page) => {
        page.classList.remove("active");
      });
      document.getElementById(targetPage).classList.add("active");

      // Update header for non-home pages
      if (targetPage !== "homePage") {
        document.getElementById("appHeader").classList.add("hidden");
      } else {
        document.getElementById("appHeader").classList.remove("hidden");
      }
    });
  });

  // Back buttons for pages
  document
    .getElementById("backFromDiscover")
    .addEventListener("click", function () {
      document.getElementById("homePage").classList.add("active");
      document.getElementById("discoverPage").classList.remove("active");
      document.getElementById("appHeader").classList.remove("hidden");

      // Update tab
      tabButtons.forEach((btn) => {
        btn.classList.remove("text-purple-600");
        btn.classList.add("text-gray-500");
      });
      document
        .querySelector('[data-page="homePage"]')
        .classList.remove("text-gray-500");
      document
        .querySelector('[data-page="homePage"]')
        .classList.add("text-purple-600");
    });

  document
    .getElementById("backFromDonations")
    .addEventListener("click", function () {
      document.getElementById("homePage").classList.add("active");
      document.getElementById("donationsPage").classList.remove("active");
      document.getElementById("appHeader").classList.remove("hidden");

      // Update tab
      tabButtons.forEach((btn) => {
        btn.classList.remove("text-purple-600");
        btn.classList.add("text-gray-500");
      });
      document
        .querySelector('[data-page="homePage"]')
        .classList.remove("text-gray-500");
      document
        .querySelector('[data-page="homePage"]')
        .classList.add("text-purple-600");
    });

  document
    .getElementById("backFromProfile")
    .addEventListener("click", function () {
      document.getElementById("homePage").classList.add("active");
      document.getElementById("profilePage").classList.remove("active");
      document.getElementById("appHeader").classList.remove("hidden");

      // Update tab
      tabButtons.forEach((btn) => {
        btn.classList.remove("text-purple-600");
        btn.classList.add("text-gray-500");
      });
      document
        .querySelector('[data-page="homePage"]')
        .classList.remove("text-gray-500");
      document
        .querySelector('[data-page="homePage"]')
        .classList.add("text-purple-600");
    });

  // Search Modal
  const searchButton = document.getElementById("searchButton");
  const searchModal = document.getElementById("searchModal");
  const closeSearchModal = document.getElementById("closeSearchModal");
  const searchInput = document.getElementById("searchInput");
  const searchResults = document.querySelector(".search-results");

  searchButton.addEventListener("click", function () {
    searchModal.classList.remove("hidden");
  });

  closeSearchModal.addEventListener("click", function () {
    searchModal.classList.add("hidden");
  });

  searchInput.addEventListener("input", function () {
    const query = this.value.toLowerCase();
    const filteredResults = searchData.filter(
      (item) =>
        item.title.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query)
    );

    updateSearchResults(filteredResults);
  });

  function updateSearchResults(results) {
    searchResults.innerHTML = "";

    if (results.length === 0) {
      searchResults.innerHTML =
        '<p class="text-center text-gray-500 py-4">No results found</p>';
      return;
    }

    results.forEach((result) => {
      const resultItem = document.createElement("div");
      resultItem.className =
        "p-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer";
      resultItem.innerHTML = `
                    <h4 class="font-medium">${result.title}</h4>
                    <p class="text-xs text-gray-500">${result.category}</p>
                `;
      resultItem.addEventListener("click", function () {
        // In a real app, this would navigate to the donation detail
        alert(`Selected: ${result.title}`);
        searchModal.classList.add("hidden");
      });
      searchResults.appendChild(resultItem);
    });
  }

  // Initialize search results
  updateSearchResults(searchData);

  // Donation List
  const donationList = document.getElementById("donationList");
  const loadMoreButton = document.getElementById("loadMore");
  let visibleItems = 5;

  function renderDonationItems(itemsToShow) {
    donationList.innerHTML = "";

    for (let i = 0; i < Math.min(itemsToShow, donationData.length); i++) {
      const item = donationData[i];
      const percentage = Math.round((item.raised / item.goal) * 100);

      const donationItem = document.createElement("div");
      donationItem.className =
        "donation-card bg-white rounded-xl p-4 shadow-md transition duration-300";
      donationItem.innerHTML = `
                    <div class="relative h-32 mb-3 rounded-lg overflow-hidden">
                        <img src="${item.image}" alt="${
        item.title
      }" class="w-full h-full object-cover">
                        <div class="absolute bottom-2 left-2 bg-white bg-opacity-90 px-2 py-1 rounded-full text-xs font-medium">
                            <i class="fas ${getCategoryIcon(
                              item.category
                            )} ${getCategoryColor(item.category)} mr-1"></i>
                            ${item.category}
                        </div>
                    </div>
                    <h3 class="font-semibold text-gray-800 mb-1">${
                      item.title
                    }</h3>
                    <p class="text-xs text-gray-500 mb-3">${
                      item.description
                    }</p>
                    
                    <div class="progress-bar mb-2">
                        <div class="progress-fill" style="width: ${percentage}%"></div>
                    </div>
                    
                    <div class="flex justify-between text-xs">
                        <span class="text-gray-500">$${item.raised.toLocaleString()} raised</span>
                        <span class="font-medium text-purple-600">${percentage}%</span>
                    </div>
                `;

      donationItem.addEventListener("click", function () {
        document.getElementById("donationModal").classList.remove("hidden");
      });

      donationList.appendChild(donationItem);
    }
  }

  function getCategoryIcon(category) {
    switch (category.toLowerCase()) {
      case "education":
        return "fa-book";
      case "health":
        return "fa-heartbeat";
      case "hunger":
        return "fa-utensils";
      case "animals":
        return "fa-paw";
      case "emergency":
        return "fa-first-aid";
      default:
        return "fa-hands-helping";
    }
  }

  function getCategoryColor(category) {
    switch (category.toLowerCase()) {
      case "education":
        return "text-purple-600";
      case "health":
        return "text-red-500";
      case "hunger":
        return "text-yellow-500";
      case "animals":
        return "text-blue-500";
      case "emergency":
        return "text-orange-500";
      default:
        return "text-green-500";
    }
  }

  // Initial render
  renderDonationItems(visibleItems);

  // Load more functionality
  loadMoreButton.addEventListener("click", function () {
    visibleItems += 5;
    if (visibleItems >= donationData.length) {
      loadMoreButton.classList.add("hidden");
    }
    renderDonationItems(visibleItems);
  });

  // Donation Modal
  const donationModal = document.getElementById("donationModal");
  const closeModal = document.getElementById("closeModal");
  const paymentMethods = document.querySelectorAll(".payment-method");
  const paymentSections = document.querySelectorAll(".payment-section");
  const confirmDonationButton = document.getElementById("confirmDonation");
  const donationAmountInput = document.getElementById("donationAmount");

  // Get all quick donate buttons
  const quickDonateButtons = document.querySelectorAll(
    ".donation-card, .grid.grid-cols-4 button"
  );

  // Add click event to quick donate buttons
  quickDonateButtons.forEach((button) => {
    button.addEventListener("click", function () {
      donationModal.classList.remove("hidden");

      // If it's a quick donate button with a dollar amount
      if (button.textContent.startsWith("$")) {
        donationAmountInput.value = button.textContent.substring(1);
      }
    });
  });

  // Close modal when X is clicked
  closeModal.addEventListener("click", function () {
    donationModal.classList.add("hidden");
  });

  // Close modal when clicking outside
  donationModal.addEventListener("click", function (e) {
    if (e.target === donationModal) {
      donationModal.classList.add("hidden");
    }
  });

  // Payment method selection
  paymentMethods.forEach((method) => {
    method.addEventListener("click", function () {
      // Update active payment method button
      paymentMethods.forEach((m) => {
        m.classList.remove("border-purple-200", "bg-purple-50");
        m.classList.add("border-gray-200");
      });
      this.classList.remove("border-gray-200");
      this.classList.add("border-purple-200", "bg-purple-50");

      // Show corresponding payment section
      const methodType = this.getAttribute("data-method");
      paymentSections.forEach((section) => {
        section.classList.add("hidden");
      });
      document
        .getElementById(`${methodType}Payment`)
        .classList.remove("hidden");
    });
  });

  // Confirm donation - redirect to WhatsApp
  confirmDonationButton.addEventListener("click", function () {
    const amount = donationAmountInput.value || "0";
    const selectedMethod = document
      .querySelector(".payment-method.bg-purple-50")
      .getAttribute("data-method");

    // WhatsApp message
    const message = `Hi HeartGive, I would like to donate $${amount} via ${
      selectedMethod === "qris" ? "QRIS" : "Bank Transfer"
    }. Please confirm the payment details.`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);

    // WhatsApp API URL
    const whatsappUrl = `https://wa.me/6281234567890?text=${encodedMessage}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");

    // Close the modal
    donationModal.classList.add("hidden");
  });

  // Profile button
  document
    .getElementById("profileButton")
    .addEventListener("click", function () {
      // Show profile page
      pages.forEach((page) => {
        page.classList.remove("active");
      });
      document.getElementById("profilePage").classList.add("active");

      // Update tabs
      tabButtons.forEach((btn) => {
        btn.classList.remove("text-purple-600");
        btn.classList.add("text-gray-500");
      });
      document
        .querySelector('[data-page="profilePage"]')
        .classList.remove("text-gray-500");
      document
        .querySelector('[data-page="profilePage"]')
        .classList.add("text-purple-600");

      // Hide header
      document.getElementById("appHeader").classList.add("hidden");
    });
});
