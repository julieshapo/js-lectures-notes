// 1) Base URL
// 2) resources
// 3) Parameters
// const form = document.querySelector('.formFetch');
// const select = document.querySelector('.category');
// const pageNumber = document.querySelector('.input');
// const newsCounter = document.querySelector('.counter');
// const subTitle = document.querySelector('.totalPages');
// const loadMoreBtn = document.querySelector('.load');

// const list = document.querySelector('.list');

// const BASE_URL = 'https://newsapi.org/v2';
// const API_KEY = '6c988335d49243278dab9d2a1218b430';
// const URL = `${BASE_URL}/top-headlines?apiKey=${API_KEY}&category=sport&country=ua&pageSize=10`;

// let currentPage = 1;

// const updateUi = (data, pageSize) => {
//     newsCounter.textContent = `There are ${data?.totalResults} news related`;
//     subTitle.textContent = `There are ${Math.ceil(data?.totalResults / pageSize)} pages of news`;
//     list.innerHTML = '';
// };

// const createUrl = () => {
//     const category = select.value;
//     const pageSize = pageNumber.value;
//     const url = `${BASE_URL}/top-headlines?apiKey=${API_KEY}&category=${category}&country=ua&pageSize=${pageSize}&page=${currentPage}`;

//     return url;
// };

// const handleSubmit = e => {
//     e.preventDefault();
//     const url = createUrl();
//     fetch(url)
//         .then(response => response.json())
//         .then(data => {
//             // console.log(data);
//             if (e.type === 'submit') {
//                 updateUi(data);
//             }

//             insertContent(data.articles);
//             currentPage += 1;
//             if (currentPage > Math.ceil(data?.totalResults / pageSize)) {
//                 loadMoreBtn.classList.add('hide');
//             }
//         })
//         .catch(error => console.log(error));
// };

// form.addEventListener('submit', handleSubmit);
// loadMoreBtn.addEventListener('click', handleSubmit);

// const createListItem = item => `<li>
//     ${item.urlToImage ? `<img src="${item.urlToImage}" alt="${item.description}" >` : ''}
//     <h2>${item.title}</h2>
//     <p>${item.description ? item.description : ''}</p>
//     <p>${item.author ?? ''}</p>
//     <a href='${item.url}' target="_blank">Go to news</a>
// </li>`;

// const generateNews = items => items?.reduce((acc, item) => acc + createListItem(item), '');

// const insertContent = items => {
//     const result = generateNews(items);
//     list.insertAdjacentHTML('beforeend', result);
// };
