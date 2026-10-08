const usersContainer = document.querySelector("#usersContainer");
const status = document.querySelector("#status");

const getUsers = async () => {

  // Loading state
  status.textContent = "Loading users...";
  usersContainer.innerHTML = "";

  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    // Check if request failed
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }

    const users = await response.json();

    console.log(users);

    // Empty state
    if (users.length === 0) {
      status.textContent = "No users found.";
      return;
    }

    // Success state
    status.textContent = `${users.length} users found.`;

    users.forEach((user) => {

      const userCard = document.createElement("div");

      userCard.classList.add("user-card");

      userCard.innerHTML = `
        <h2>${user.name}</h2>
        <p>${user.email}</p>
        <p>${user.phone}</p>
      `;

      usersContainer.appendChild(userCard);
    });

  } catch (error) {

    // Error state
    status.textContent =
      "Unable to load users. Please try again.";

    console.error(error);
  }
};

getUsers();