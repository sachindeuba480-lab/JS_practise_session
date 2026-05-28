// Task 2 — "this" losing context

const button = {
  text: "Submit",

  click() {
    console.log(this.text);
  }
};

const handleClick = button.click.bind(button);

handleClick();