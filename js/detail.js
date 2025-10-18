const urlParams = new URLSearchParams(window.location.search);
const packageId = urlParams.get("id");

const heroImage = document.getElementById("hero-image");
const packageName = document.getElementById("package-name");
const packageDesc = document.getElementById("package-desc");
const featureList = document.getElementById("feature-list");
const galleryContainer = document.getElementById("gallery-container");

const selectedPackage = package.find((item) => item.id === packageId);

if (selectedPackage) {
  heroImage.src = selectedPackage.image;
  packageName.textContent = selectedPackage.name;
  packageDesc.textContent = selectedPackage.description;

  featureList.innerHTML = selectedPackage.features
    .map(
      (f) =>
        `<li class="flex items-center gap-2"><span class="text-green-600">✔</span> ${f}</li>`
    )
    .join("");

  galleryContainer.innerHTML = selectedPackage.gallery
    .map(
      (img) =>
        `<img src="${img}" alt="" class="rounded-xl shadow-md hover:scale-105 transition-transform duration-300">`
    )
    .join("");
} else {
  document.body.innerHTML = `<div class="text-center py-20 text-gray-600">Paket tidak ditemukan.</div>`;
}
