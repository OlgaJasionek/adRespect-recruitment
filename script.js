const currentYear = new Date().getFullYear();

const bodyEl = document.body;
const galleryEl = document.querySelector(".realizations-section_gallery");
const galleryBackdropEl = document.querySelector(
  ".realizations-section_backdrop"
);
const mobileNavEl = document.querySelector(".mobile-navigation_content");
const searchInputDesktopEl = document.querySelector(
  ".navigation-searchbar_desktop"
);
const searchInputMobileEl = document.querySelector(
  ".navigation-searchbar_mobile"
);

const showMoreImgBtn = document.getElementById("show-more");
const menuMobileBtn = document.getElementById("mobile-menu-btn");
const closeMobileMenuBtn = document.getElementById("close-menu-btn");
const showSearchInputdesktopBtn = document.getElementById(
  "open-search-input-btn_desktop"
);
const showSearchInputMobileBtn = document.getElementById(
  "open-search-input-btn_mobile"
);

const galleryItems = [
  { url: "public/img/gallery/Photo (1).png", alt: "Photo 1" },
  { url: "public/img/gallery/Photo (2).png", alt: "Photo 2" },
  { url: "public/img/gallery/Photo (3).png", alt: "Photo 3" },
  { url: "public/img/gallery/Photo (4).png", alt: "Photo 4" },
  { url: "public/img/gallery/Photo (5).png", alt: "Photo 5" },
  { url: "public/img/gallery/Photo (6).png", alt: "Photo 6" },
  { url: "public/img/gallery/Photo (7).png", alt: "Photo 7" },
  { url: "public/img/gallery/Photo (8).png", alt: "Photo 8" },
  { url: "public/img/gallery/Photo (9).png", alt: "Photo 9" },
  { url: "public/img/gallery/Photo (1).png", alt: "Photo 11" },
  { url: "public/img/gallery/Photo (2).png", alt: "Photo 12" },
  { url: "public/img/gallery/Photo (3).png", alt: "Photo 13" },
  { url: "public/img/gallery/Photo (4).png", alt: "Photo 14" },
  { url: "public/img/gallery/Photo (5).png", alt: "Photo 15" },
  { url: "public/img/gallery/Photo (6).png", alt: "Photo 16" },
  { url: "public/img/gallery/Photo (7).png", alt: "Photo 17" },
  { url: "public/img/gallery/Photo (8).png", alt: "Photo 18" },
  { url: "public/img/gallery/Photo (9).png", alt: "Photo 19" },
];

galleryItems.map(item => {
  const itemWrapper = document.createElement("div");
  const itemImg = document.createElement("img");

  itemWrapper.className = "gallery-item";
  itemImg.src = item.url;
  itemImg.alt = item.alt;

  itemWrapper.appendChild(itemImg);
  galleryEl.appendChild(itemWrapper);
});

document.getElementById("currentYear").textContent = currentYear;

window.onload = () => {
  new Masonry(galleryEl, {
    querySelector: ".gallery-item",
    columnWidth: ".grid-sizer",
    gutter: ".gutter-sizer",
    percentPosition: true,
  });
};

showMoreImgBtn.addEventListener("click", () => {
  galleryBackdropEl.classList.remove("realizations-section_backdrop");
  galleryBackdropEl.classList.add("realizations-section_backdrop--hidden");
  galleryEl.classList.add("realizations-section_gallery--visible");
});

menuMobileBtn.addEventListener("click", () => {
  mobileNavEl.classList.add("mobile-navigation_content--active");
  bodyEl.classList.add("block-scroll");
});

closeMobileMenuBtn.addEventListener("click", () => {
  mobileNavEl.classList.remove("mobile-navigation_content--active");
  bodyEl.classList.remove("block-scroll");
});

showSearchInputdesktopBtn.addEventListener("click", () => {
  searchInputDesktopEl.classList.toggle("navigation-searchbar--show");
});

showSearchInputMobileBtn.addEventListener("click", () => {
  searchInputMobileEl.classList.toggle("navigation-searchbar--show");
});
