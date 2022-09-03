const loadCategories = async () => {
    try {
        const url = `https://openapi.programming-hero.com/api/news/categories`;
        const res = await fetch(url);
        const data = await res.json();
        displayCategories(data.data.news_category);

    }
    catch (error) {
        console.error(error);
    }

}
const displayCategories = categories => {
    // console.log(categories);
    const categoriesContainer = document.getElementById('loaduser');
    categories.forEach(category => {
        const categoryLi = document.createElement('li');
        categoryLi.classList.add("mx-auto");
        categoryLi.innerHTML = `
            <div onclick="loadNewsInCategory('${category.category_id}')" class="col fs-6 fw-semibold px-2 text-secondary"><p>${category.category_name}</p></div>
        
        `;
        categoriesContainer.appendChild(categoryLi);
    })
}





loadCategories();
// loadNewsInCategory();