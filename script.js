const currentYear = new Date().getFullYear();
const galleryComponent = document.querySelector(
  ".realizations-section_gallery"
);
const galleryBackdropComponent = document.querySelector(
  ".realizations-section_backdrop"
);
const mobileNavComponent = document.querySelector(".mobile-navigation_content");
const bodyComponent = document.body;
const searchInputDesctopComponent = document.querySelector(
  ".navigation-searchbar_desctop"
);
const searchInputMobileComponent = document.querySelector(
  ".navigation-searchbar_mobile"
);

const showMoreImgBtn = document.getElementById("show-more");
const menuMobileBtn = document.getElementById("moblie-menu-btn");
const closeMobileMenuBtn = document.getElementById("close-menu-btn");
const showSearchInputDesctopBtn = document.getElementById(
  "open-search-input-btn_desctop"
);
const showSearchInputMobileBtn = document.getElementById(
  "open-search-input-btn_mobile"
);

const galleryItemsUrl = [
  { url: "public/img/gallery/Photo (1).png", alt: "Photo 1" },
  { url: "public/img/gallery/Photo (2).png", alt: "Photo 2" },
  { url: "public/img/gallery/Photo (3).png", alt: "Photo 3" },
  { url: "public/img/gallery/Photo (4).png", alt: "Photo 4" },
  { url: "public/img/gallery/Photo (5).png", alt: "Photo 5" },
  { url: "public/img/gallery/Photo (6).png", alt: "Photo 6" },
  { url: "public/img/gallery/Photo (7).png", alt: "Photo 7" },
  { url: "public/img/gallery/Photo (8).png", alt: "Photo 8" },
  { url: "public/img/gallery/Photo (9).png", alt: "Photo 9" },
  { url: "public/img/gallery/Photo (1).png", alt: "Photo 1" },
  { url: "public/img/gallery/Photo (2).png", alt: "Photo 2" },
  { url: "public/img/gallery/Photo (3).png", alt: "Photo 3" },
  { url: "public/img/gallery/Photo (4).png", alt: "Photo 4" },
  { url: "public/img/gallery/Photo (5).png", alt: "Photo 5" },
  { url: "public/img/gallery/Photo (6).png", alt: "Photo 6" },
  { url: "public/img/gallery/Photo (7).png", alt: "Photo 7" },
  { url: "public/img/gallery/Photo (8).png", alt: "Photo 8" },
  { url: "public/img/gallery/Photo (9).png", alt: "Photo 9" },
];

galleryItemsUrl.map(item => {
  const itemWrapper = document.createElement("div");
  itemWrapper.className = "gallery-item ";
  const itemImg = document.createElement("img");
  itemImg.src = item.url;
  itemImg.alt = item.alt;

  itemWrapper.appendChild(itemImg);
  galleryComponent.appendChild(itemWrapper);
});

document.getElementById("currentYear").textContent = currentYear;

window.onload = () => {
  const galleryMasonry = new Masonry(galleryComponent, {
    querySelector: ".gallery-item",
    columnWidth: ".grid-sizer",
    gutter: ".gutter-sizer",
    percentPosition: true,
  });
};

showMoreImgBtn.addEventListener("click", () => {
  galleryBackdropComponent.classList.remove("realizations-section_backdrop");
  galleryBackdropComponent.classList.add(
    "realizations-section_backdrop--hidden"
  );
  galleryComponent.classList.add("realizations-section_gallery--visible");
});

menuMobileBtn.addEventListener("click", () => {
  mobileNavComponent.classList.add("mobile-navigation_content--active");
  bodyComponent.classList.add("block-scroll");
});

closeMobileMenuBtn.addEventListener("click", () => {
  mobileNavComponent.classList.remove("mobile-navigation_content--active");
  bodyComponent.classList.remove("block-scroll");
});

showSearchInputDesctopBtn.addEventListener("click", () => {
  searchInputDesctopComponent.classList.toggle("navigation-searchabr--show");
});

showSearchInputMobileBtn.addEventListener("click", () => {
  searchInputMobileComponent.classList.toggle("navigation-searchbar--show");
});
