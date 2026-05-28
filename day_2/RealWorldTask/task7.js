// Task 7 — Promise for fetching settings

function fetchSettings() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        theme: "dark",
        language: "English"
      });
    }, 2000);
  });
}

fetchSettings().then((settings) => {
  console.log(settings);
});