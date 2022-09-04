// loadNewsInCategory Function
const loadNewsInCategory = async (id) => {
    try {
        const url = `https://openapi.programming-hero.com/api/news/category/${id}`;
        const res = await fetch(url);
        const data = await res.json();
        displaynewsInCategory(data.data);
    }
    catch (error) {
        console.log(error);
    }
};


const displaynewsInCategory = (users) => {
    // console.log(users);
    const newsContainer = document.getElementById("news-container");
    newsContainer.textContent = '';
    users.forEach(singleUser => {
        const newsDiv = document.createElement("div");
        // newsDiv.classList.add("card");
        newsDiv.innerHTML = `
        <div onclick="cardDetails('${singleUser._id}')" class="card mb-3" data-bs-toggle="modal" data-bs-target="#cardModal">
        <div class="row g-2">
          <div class="col-md-2">
            <img src="${singleUser.thumbnail_url}" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${singleUser.title}</h5>
              <p class="card-text text-secondary">${singleUser.details.slice(0, 150)} </p> 
            
              <p>Total view: ${singleUser.total_view
            }</p>
            
            <img src="${singleUser.author.img}" class="img-responsive img-rounded rounded-lg" style="max-height: 40px; max-width: 50px; border-radius: 50px">
             
            </div>
          </div>
        </div>
      </div> `;

        newsContainer.appendChild(newsDiv);
    });


};
loadNewsInCategory();