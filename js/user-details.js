const cardDetails = async (id) => {
    try {
        const url = `https://openapi.programming-hero.com/api/news/${id}`;
        const res = await fetch(url);
        const data = await res.json();
        displayDetailsByModal(data.data[0]);
    }
    catch (error) {
        console.log(error);
    }
}
const displayDetailsByModal = (auth) => {

    const cardModalTitle = document.getElementById('cardModalLabel');
    cardModalTitle.innerText = auth.title;
    const writerDetails = document.getElementById('writer-name');
    writerDetails.innerText = auth.details;

    let modalAuthor = document.getElementById('modal-author');
    modalAuthor.innerText = auth.author.name ? auth.author.name : 'No data found here';
}
cardDetails();