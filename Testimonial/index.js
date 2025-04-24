const testimonials = [
  {
    name: "John Doe",
    photoUrl:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dXNlcnxlbnwwfDJ8MHx8fDA%3D",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    name: "Alice Smith",
    photoUrl:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfDJ8MHx8fDA%3D",
    text: "This product/service exceeded my expectations. Highly recommended!",
  },
  {
    name: "Bob Johnson",
    photoUrl:
      "https://images.unsplash.com/photo-1701615004837-40d8573b6652?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHwyfDB8fHww",
    text: "I've been using this for a while now and it has significantly improved my workflow.",
  },
  {
    name: "Eve Williams",
    photoUrl:
      "https://images.unsplash.com/photo-1726722886957-2ed42b15aaa3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHVzZXJ8ZW58MHwyfDB8fHww",
    text: "Amazing experience! The team was very helpful and responsive.",
  },
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text"); // Fixed: added dot for class selector
const usernameEl = document.querySelector(".username"); // Fixed: added dot for class selector

let idx = 0;

updateTestimonial();

function updateTestimonial() {
  const { name, photoUrl, text } = testimonials[idx];

  // Update DOM elements with new testimonial data
  imgEl.src = photoUrl;
  textEl.innerText = text;
  usernameEl.innerText = name;

  // Increment index or reset if at the end of the list
  idx = (idx + 1) % testimonials.length;

  // Call updateTestimonial every 1000ms (1 second)
  setTimeout(updateTestimonial, 2000);
}
