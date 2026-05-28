// Task 1 — "this" inside an object method

const user = {
  name: "Sachin",

  login() {
    console.log("Logged in user:", this.name);
  }
};

user.login();