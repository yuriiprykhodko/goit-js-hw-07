const categoriesEl = document.querySelectorAll(".item");
const quantityCategoriesEl = categoriesEl.length;
console.log(`В списке ${quantityCategoriesEl} категории.`);
const amounteElementsofCategories = categoriesEl.forEach((category) =>
  console.log(
    `Категория:${category.firstElementChild.textContent} 
Количество элементов:${category.lastElementChild.children.length}`
  )
);
