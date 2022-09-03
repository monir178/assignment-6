const cardDetails = async (id) => {
    const url = `https://openapi.programming-hero.com/api/news/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    displayDetailsByModal(data.data[0]);
}
const displayDetailsByModal = (auth) => {
    // console.log(author);
    const cardModalTitle = document.getElementById('cardModalLabel');
    cardModalTitle.innerText = auth.title;
    const writerDetails = document.getElementById('writer-name');
    writerDetails.innerText = auth.details;
}
cardDetails();