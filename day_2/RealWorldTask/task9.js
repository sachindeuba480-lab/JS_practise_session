// Task 9 — try/catch handling API errors

function fetchUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5;

      if (success) {
        resolve([
          { id: 1, name: "Ram" },
          { id: 2, name: "Hari" }
        ]);
      } else {
        reject("Server error");
      }
    }, 1000);
  });
}

async function showUsers() {
  try {
    const users = await fetchUsers();
    console.log(users);
  } catch (error) {
    console.log("Failed to fetch users. Please try again.");
  }
}

showUsers();