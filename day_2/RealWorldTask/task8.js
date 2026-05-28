// Task 8 — async/await fetching mock data

function fetchUsers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "Ram" },
        { id: 2, name: "Hari" }
      ]);
    }, 1000);
  });
}

async function showUsers() {
  const users = await fetchUsers();
  console.log(users);
}

showUsers();