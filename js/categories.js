const loadCategories = async () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    const res = await fetch(url);
    const data = await res.json();
    displayCategories(data.data.news_category);
}
const displayCategories = categories => {
    // console.log(categories);
    const categoriesContainer = document.getElementById('categories-container');

    // const categoriesDiv = document.createElement('div');

}
loadCategories();