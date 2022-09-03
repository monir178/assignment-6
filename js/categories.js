const loadCategories = async () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    const res = await fetch(url);
    const data = await res.json();
    displayCategories(data.data.news_category);
}
const displayCategories = categories => {
    // console.log(categories);
    const categoriesContainer = document.getElementById('categories-container');
    categories.forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.classList.add('col');
        categoryDiv.innerHTML = `
            <div onclick="loadNewsInCategory('${category.category_id}')" class="col fs-6 fw-semibold px-2 text-secondary"><p>${category.category_name}</p></div>
        
        `;
        categoriesContainer.appendChild(categoryDiv);
    })
}

// loadNewsInCategory Function
const loadNewsInCategory = async (id) => {
    const url = `https://openapi.programming-hero.com/api/news/category/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    displaynewsInCategory(data.data);
};


const displaynewsInCategory = (news) => {
    console.log(news);
    const newsContainer = document.getElementById("news-container");
    newsContainer.textContent = '';
    news.forEach(singleNews => {
        const newsDiv = document.createElement("div");
        newsDiv.classList.add("card");
        newsDiv.innerHTML = `
        <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${singleNews.image_url}" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div> `;

        newsContainer.appendChild(newsDiv);
    });


};



loadCategories();
// loadNewsInCategory();