const loadCategories = async () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    const res = await fetch(url);
    const data = await res.json();
    displayCategories(data.data.news_category);
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

// loadNewsInCategory Function
const loadNewsInCategory = async (id) => {
    const url = `https://openapi.programming-hero.com/api/news/category/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    displaynewsInCategory(data.data);
};


const displaynewsInCategory = (user) => {
    console.log(user);
    const newsContainer = document.getElementById("news-container");
    newsContainer.textContent = '';
    user.forEach(singleUser => {
        const newsDiv = document.createElement("div");
        newsDiv.classList.add("card");
        newsDiv.innerHTML = `
        <div class="card mb-3">
        <div class="row g-2">
          <div class="col-md-2">
            <img src="${singleUser.thumbnail_url}" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${singleUser.author.name}</h5>
              <p class="card-text text-secondary">${singleUser.title}</p>
              <p class="card-text"><small class="text-muted">${singleUser.rating.badge} ${singleUser.rating.number}</small></p>
              <p>Total view: ${singleUser.total_view
            }</p>
             
            </div>
          </div>
        </div>
      </div> `;

        newsContainer.appendChild(newsDiv);
    });


};



loadCategories();
// loadNewsInCategory();