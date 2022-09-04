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

    // not found alert
    const message = document.getElementById('not-found');

    if (users.length === 0) {
        message.classList.remove('d-none')
    }
    else {
        message.classList.add('d-none')
    }
    //message found
    const foundMessage = document.getElementById('found');
    foundMessage.innerText = users.length + ' ' + 'Items available in this category';
    if (users.length > 0) {
        foundMessage.classList.remove('d-none');
    }
    else {
        foundMessage.classList.add('d-none')
    }


    users.forEach(singleUser => {
        const newsDiv = document.createElement("div");

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
            
              <p class = "text-info fw-semibold">Total view: ${singleUser.total_view
            }</p>
            
        <div  class = "d-flex">
        <div>
        <img src="${singleUser.author.img}" class="img-responsive img-rounded rounded-lg" style="max-height: 50px; max-width: 50px; border-radius: 50px"> 
        
        </div>
      <div class = "ms-2 text-secondary">
      <p class = "m-0 p-0">${singleUser.author.name}</p>
      <p> ${singleUser.author.published_date}</p>
      </div>
        </div>
             
            </div>
          </div>
        </div>
      </div> `;

        newsContainer.appendChild(newsDiv);

    });

    toggleLoader(false);

};

// loader
const toggleLoader = isLoading => {
    const loader = document.getElementById('loading')
    if (isLoading) {
        loader.classList.remove('d-none');
    }
    else {
        loader.classList.add('d-none');
    }
}




loadNewsInCategory();