// Random profile images
const profileImages = [
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/men/45.jpg",
  "https://randomuser.me/api/portraits/men/12.jpg",
  "https://randomuser.me/api/portraits/men/76.jpg"
];

// Random background images
const bgImages = [
  "https://source.unsplash.com/1600x900/?university",
  "https://source.unsplash.com/1600x900/?technology",
  "https://source.unsplash.com/1600x900/?research",
  "https://source.unsplash.com/1600x900/?campus"
];

// Pick random profile
const randomProfile = profileImages[Math.floor(Math.random() * profileImages.length)];
document.getElementById("profilePic").src = randomProfile;

// Pick random background
const randomBg = bgImages[Math.floor(Math.random() * bgImages.length)];
document.getElementById("hero").style.backgroundImage = `url(${randomBg})`;


// Scroll animation
const elements = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 50) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }
  });
});
