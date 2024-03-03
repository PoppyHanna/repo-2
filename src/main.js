// const parentElement = document.querySelector('.support.container');

// const perPage = 6; // Кількість благодійних фондів на одній сторінці

// const charities = [
//   {
//     title: 'Save the Children',
//     url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
//     img: '',
//   },
//   {
//     title: 'Project HOPE',
//     url: 'https://www.projecthope.org/country/ukraine/',
//     img: 'project_hope.png',
//   },
//   {
//     title: 'UNITED24',
//     url: 'https://u24.gov.ua/uk',
//     img: 'united24.png',
//   },
//   {
//     title: 'International Medical Corps',
//     url: 'https://internationalmedicalcorps.org/country/ukraine/',
//     img: 'international_medical_corps.png',
//   },
//   {
//     title: 'Medicins Sans Frontieres',
//     url: 'https://www.msf.org/ukraine',
//     img: 'medicins_sans_frontieres.png',
//   },
//   {
//     title: 'RAZOM',
//     url: 'https://www.razomforukraine.org/',
//     img: 'razom.png',
//   },
//   {
//     title: 'Action against hunger',
//     url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
//     img: 'action_against_hunger.png',
//   },
//   {
//     title: 'World vision',
//     url: 'https://www.wvi.org/emergencies/ukraine',
//     img: 'world_vision.png',
//   },
//   {
//     title: 'Serhiy Prytula Charity Foundation',
//     url: 'https://prytulafoundation.org/en',
//     img: 'serhiy_prytula_charity_foundation.png',
//   },
// ];

// // Створюємо список благодійних фондів
// const charityList = document.createElement('ul');
// charityList.classList.add('support-list');


// // Проходимося по кожному благодійному фонду і створюємо посилання з логотипом
// function createListItem (charity) {
//     const listItem = document.createElement('li');
//     listItem.classList.add('list');
//     const link = document.createElement('a');
//     link.classList.add('link');
//   link.href = charity.url;
//   link.target = '_blank'; // Відкривати у новій вкладці
//     const img = document.createElement('img');
//     img.classList.add('img');
//   img.src = charity.img;
//     img.alt = charity.title;
//   link.appendChild(img);
//   listItem.appendChild(link);
//   charityList.appendChild(listItem);
// };

// // Показуємо перші благодійні фонди на сторінці
// charities.slice(0, perPage).forEach(charity => {
//   createListItem(charity);
// });

// // Додаємо список благодійних фондів до контейнера.
// parentElement.appendChild(charityList);


// // Створюємо кнопку для завантаження наступних благодійних фондів
// const loadMoreButton = document.createElement('button');
// loadMoreButton.textContent = 'Load More';
// loadMoreButton.classList.add('load-more');

// // Обробник події для кнопки завантаження наступних благодійних фондів
// loadMoreButton.addEventListener('click', () => {
//   const start = charityList.children.length;
//   const end = start + perPage;
//   charities.slice(start, end).forEach(charity => {
//     createListItem(charity);
//   });

//   // Приховуємо кнопку, якщо всі благодійні фонди вже показані
//   if (end >= charities.length) {
//     loadMoreButton.style.display = 'none';
//   }
// });

// // Додаємо кнопку завантаження наступних благодійних фондів до сторінки
// parentElement.appendChild(loadMoreButton);



// const parentElement = document.querySelector('.support.container');

// const perPage = 6; // Кількість благодійних фондів на одній сторінці
// let currentCharityIndex = 0; // Поточний індекс благодійного фонду

// const charities = [
//   {
//     title: 'Save the Children',
//     url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
//     img: './img/image 3-min.png',
//   },
//   {
//     title: 'Project HOPE',
//     url: 'https://www.projecthope.org/country/ukraine/',
//     img: './img/image 3 (1)-min.png',
//   },
//   {
//     title: 'UNITED24',
//     url: 'https://u24.gov.ua/uk',
//     img: './img/image 3 (2)-min.png',
//   },
//   {
//     title: 'International Medical Corps',
//     url: 'https://internationalmedicalcorps.org/country/ukraine/',
//     img: './img/image 3 (3)-min.png',
//   },
//   {
//     title: 'Medicins Sans Frontieres',
//     url: 'https://www.msf.org/ukraine',
//     img: './img/image 3 (4)-min.png',
//   },
//   {
//     title: 'RAZOM',
//     url: 'https://www.razomforukraine.org/',
//     img: './img/image 3 (5)-min.png',
//   },
//   {
//     title: 'Action against hunger',
//     url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
//     img: './img/image 3 (6)-min.png',
//   },
//   {
//     title: 'World vision',
//     url: 'https://www.wvi.org/emergencies/ukraine',
//     img: './img/image 3 (7)-min.png',
//   },
//   {
//     title: 'Serhiy Prytula Charity Foundation',
//     url: 'https://prytulafoundation.org/en',
//     img: './img/image 3 (8)-min.png',
//   },
// ];

// // Створюємо список благодійних фондів
// const charityList = document.createElement('ul');
// charityList.classList.add('support-list');

// // Проходимося по кожному благодійному фонду і створюємо посилання з логотипом
// function createListItem(charity) {
//   const listItem = document.createElement('li');
//   listItem.classList.add('list');

//   // Створюємо номер благодійного фонду з переднім нулем, якщо потрібно
//   const charityIndex = (currentCharityIndex + 1).toString().padStart(2, '0');
  
//   const link = document.createElement('a');
//   link.classList.add('link');
//   link.href = charity.url;
//   link.target = '_blank'; // Відкривати у новій вкладці

//   const img = document.createElement('img');
//   img.classList.add('img');
//   img.src = charity.img;
//   img.alt = charity.title;

//   link.appendChild(img);
//   listItem.appendChild(document.createTextNode(`${charityIndex}. `)); // Додаємо номер перед текстом посилання
//   listItem.appendChild(link);
//   charityList.appendChild(listItem);

//   currentCharityIndex++; // Збільшуємо поточний індекс
// }

// // Показуємо перші благодійні фонди на сторінці
// charities.slice(0, perPage).forEach(charity => {
//   createListItem(charity);
// });

// // Додаємо список благодійних фондів до контейнера.
// parentElement.appendChild(charityList);

// // // Створюємо кнопку для завантаження наступних благодійних фондів
// // const loadMoreButton = document.createElement('button');
// // loadMoreButton.textContent = 'Load More';
// // loadMoreButton.classList.add('load-more');

// // // Обробник події для кнопки завантаження наступних благодійних фондів
// // loadMoreButton.addEventListener('click', () => {
// //   const start = charityList.children.length;
// //   const end = start + perPage;
// //   charities.slice(start, end).forEach(charity => {
// //     createListItem(charity);
// //   });

// //   // Приховуємо кнопку, якщо всі благодійні фонди вже показані
// //   if (end >= charities.length) {
// //     loadMoreButton.style.display = 'none';
// //   }
// // });

// // // Додаємо кнопку завантаження наступних благодійних фондів до сторінки
// // parentElement.appendChild(loadMoreButton);


// // Створюємо кнопку для прокрутки вниз для завантаження наступних благодійних фондів
// const scrollButton = document.createElement('button');
// scrollButton.innerHTML = '<svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.40832 4.16676C5.48579 4.24486 5.57795 4.30686 5.6795 4.34917C5.78105 4.39147 5.88997 4.41326 5.99998 4.41326C6.10999 4.41326 6.21892 4.39147 6.32046 4.34917C6.42201 4.30686 6.51418 4.24486 6.59165 4.16676L10.4083 0.341757C10.4858 0.26365 10.578 0.201654 10.6795 0.159347C10.7811 0.11704 10.89 0.0952587 11 0.0952587C11.11 0.0952587 11.2189 0.11704 11.3205 0.159347C11.422 0.201654 11.5142 0.26365 11.5917 0.341757C11.7469 0.497893 11.834 0.709103 11.834 0.929257C11.834 1.14941 11.7469 1.36062 11.5917 1.51676L7.76665 5.34176C7.2979 5.80993 6.66249 6.07289 5.99998 6.07289C5.33748 6.07289 4.70207 5.80993 4.23331 5.34176L0.408311 1.51676C0.254357 1.36154 0.167564 1.15204 0.166643 0.933424C0.166009 0.823752 0.18703 0.715033 0.2285 0.613501C0.269971 0.51197 0.331077 0.419624 0.408311 0.341757C0.48578 0.26365 0.577947 0.201654 0.679497 0.159347C0.781046 0.11704 0.889968 0.0952587 0.999978 0.0952587C1.10999 0.0952587 1.21891 0.11704 1.32046 0.159347C1.42201 0.201654 1.51418 0.26365 1.59164 0.341757L5.40832 4.16676Z" fill="#4F2EE8" /></svg>';
// scrollButton.classList.add('scroll-button');

// let isScrolledToBottom = false;

// // Функція, яка перевіряє, чи сторінка прокручена до низу
// function isPageScrolledToBottom() {
//   return window.innerHeight + window.scrollY >= document.body.offsetHeight;
// }

// // Обробник події для кнопки прокрутки вниз для завантаження наступних благодійних фондів
// scrollButton.addEventListener('click', () => {
//   if (isScrolledToBottom) {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//     scrollButton.innerHTML = '<svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.40832 4.16676C5.48579 4.24486 5.57795 4.30686 5.6795 4.34917C5.78105 4.39147 5.88997 4.41326 5.99998 4.41326C6.10999 4.41326 6.21892 4.39147 6.32046 4.34917C6.42201 4.30686 6.51418 4.24486 6.59165 4.16676L10.4083 0.341757C10.4858 0.26365 10.578 0.201654 10.6795 0.159347C10.7811 0.11704 10.89 0.0952587 11 0.0952587C11.11 0.0952587 11.2189 0.11704 11.3205 0.159347C11.422 0.201654 11.5142 0.26365 11.5917 0.341757C11.7469 0.497893 11.834 0.709103 11.834 0.929257C11.834 1.14941 11.7469 1.36062 11.5917 1.51676L7.76665 5.34176C7.2979 5.80993 6.66249 6.07289 5.99998 6.07289C5.33748 6.07289 4.70207 5.80993 4.23331 5.34176L0.408311 1.51676C0.254357 1.36154 0.167564 1.15204 0.166643 0.933424C0.166009 0.823752 0.18703 0.715033 0.2285 0.613501C0.269971 0.51197 0.331077 0.419624 0.408311 0.341757C0.48578 0.26365 0.577947 0.201654 0.679497 0.159347C0.781046 0.11704 0.889968 0.0952587 0.999978 0.0952587C1.10999 0.0952587 1.21891 0.11704 1.32046 0.159347C1.42201 0.201654 1.51418 0.26365 1.59164 0.341757L5.40832 4.16676Z" fill="#4F2EE8" /></svg>';
//   } else {
//     window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
//     scrollButton.innerHTML = '<svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.40832 4.16676C5.48579 4.24486 5.57795 4.30686 5.6795 4.34917C5.78105 4.39147 5.88997 4.41326 5.99998 4.41326C6.10999 4.41326 6.21892 4.39147 6.32046 4.34917C6.42201 4.30686 6.51418 4.24486 6.59165 4.16676L10.4083 0.341757C10.4858 0.26365 10.578 0.201654 10.6795 0.159347C10.7811 0.11704 10.89 0.0952587 11 0.0952587C11.11 0.0952587 11.2189 0.11704 11.3205 0.159347C11.422 0.201654 11.5142 0.26365 11.5917 0.341757C11.7469 0.497893 11.834 0.709103 11.834 0.929257C11.834 1.14941 11.7469 1.36062 11.5917 1.51676L7.76665 5.34176C7.2979 5.80993 6.66249 6.07289 5.99998 6.07289C5.33748 6.07289 4.70207 5.80993 4.23331 5.34176L0.408311 1.51676C0.254357 1.36154 0.167564 1.15204 0.166643 0.933424C0.166009 0.823752 0.18703 0.715033 0.2285 0.613501C0.269971 0.51197 0.331077 0.419624 0.408311 0.341757C0.48578 0.26365 0.577947 0.201654 0.679497 0.159347C0.781046 0.11704 0.889968 0.0952587 0.999978 0.0952587C1.10999 0.0952587 1.21891 0.11704 1.32046 0.159347C1.42201 0.201654 1.51418 0.26365 1.59164 0.341757L5.40832 4.16676Z" fill="#4F2EE8" /></svg>';
//   }
//   isScrolledToBottom = !isScrolledToBottom;
// });

// // Додаємо кнопку прокрутки вниз для завантаження наступних благодійних фондів до сторінки
// parentElement.appendChild(scrollButton);

// // Слухач подій прокрутки сторінки
// window.addEventListener('scroll', () => {
//   if (isPageScrolledToBottom()) {
//     isScrolledToBottom = true;
//     scrollButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/><path fill="none" d="M0 0h24v24H0z"/></svg>';
//   } else {
//     isScrolledToBottom = false;
//     scrollButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.59 15.41L12 10.83 7.41 15.41 6 14l6-6 6 6z"/><path fill="none" d="M0 0h24v24H0z"/></svg>';
//   }
// });


// // import Swiper JS
// import Swiper from 'swiper';
// // import Swiper styles
// import { Navigation} from 'swiper/modules';
// // import Swiper and modules styles
// import 'swiper/css';
// import 'swiper/css/navigation';


// const swiper = new Swiper('.support.container', {
//     direction: 'vertical',

//     navigation: {
//         nextEl: '.swiper-button-next',
//     },

//     slidesPerView: 'auto', // Змінив slidesPerView на 'auto'
// });

// // Решта вашого коду ...



// const parentElement = document.querySelector('.support.container');

// const perPage = 6; // Кількість благодійних фондів на одній сторінці
// let currentCharityIndex = 0; // Поточний індекс благодійного фонду

// const charities = [
//   {
//     title: 'Save the Children',
//     url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
//     img: './img/image 3-min.png',
//   },
//   {
//     title: 'Project HOPE',
//     url: 'https://www.projecthope.org/country/ukraine/',
//     img: './img/image 3 (1)-min.png',
//   },
//   {
//     title: 'UNITED24',
//     url: 'https://u24.gov.ua/uk',
//     img: './img/image 3 (2)-min.png',
//   },
//   {
//     title: 'International Medical Corps',
//     url: 'https://internationalmedicalcorps.org/country/ukraine/',
//     img: './img/image 3 (3)-min.png',
//   },
//   {
//     title: 'Medicins Sans Frontieres',
//     url: 'https://www.msf.org/ukraine',
//     img: './img/image 3 (4)-min.png',
//   },
//   {
//     title: 'RAZOM',
//     url: 'https://www.razomforukraine.org/',
//     img: './img/image 3 (5)-min.png',
//   },
//   {
//     title: 'Action against hunger',
//     url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
//     img: './img/image 3 (6)-min.png',
//   },
//   {
//     title: 'World vision',
//     url: 'https://www.wvi.org/emergencies/ukraine',
//     img: './img/image 3 (7)-min.png',
//   },
//   {
//     title: 'Serhiy Prytula Charity Foundation',
//     url: 'https://prytulafoundation.org/en',
//     img: './img/image 3 (8)-min.png',
//   },
// ];

// // Створюємо контейнер для swiper
// const swiperContainer = document.createElement('div');
// swiperContainer.classList.add('swiper-container');

// // Створюємо обгортку для слайдів (wrapper)
// const swiperWrapper = document.createElement('div');
// swiperWrapper.classList.add('swiper-wrapper');

// // Створюємо список благодійних фондів
// const charityList = document.createElement('ul');
// charityList.classList.add('support-list');

// // Проходимося по кожному благодійному фонду і створюємо посилання з логотипом
// function createListItem(charity) {
//   const listItem = document.createElement('li');
//   listItem.classList.add('list');

//   // Створюємо номер благодійного фонду з переднім нулем, якщо потрібно
//   const charityIndex = (currentCharityIndex + 1).toString().padStart(2, '0');
  
//   const link = document.createElement('a');
//   link.classList.add('link');
//   link.href = charity.url;
//   link.target = '_blank'; // Відкривати у новій вкладці

//   const img = document.createElement('img');
//   img.classList.add('img');
//   img.src = charity.img;
//   img.alt = charity.title;

//   link.appendChild(img);
//   listItem.appendChild(document.createTextNode(`${charityIndex}. `)); // Додаємо номер перед текстом посилання
//   listItem.appendChild(link);
//   charityList.appendChild(listItem);

//   // Створюємо слайд
//   const swiperSlide = document.createElement('div');
//   swiperSlide.classList.add('swiper-slide');
//   swiperSlide.appendChild(listItem);

//   swiperWrapper.appendChild(swiperSlide);

//   currentCharityIndex++; // Збільшуємо поточний індекс
// }

// // Показуємо перші благодійні фонди на сторінці
// charities.slice(0, perPage).forEach(charity => {
//   createListItem(charity);
// });

// // Додаємо список благодійних фондів до контейнера swiper
// swiperContainer.appendChild(swiperWrapper);

// // Додаємо контейнер swiper до батьківського елемента
// parentElement.appendChild(swiperContainer);

// // Створюємо кнопку прокрутки вниз для завантаження наступних благодійних фондів
// const nextButtonContainer = document.createElement('div');
// nextButtonContainer.classList.add('swiper-button-next');

// const scrollButton = document.createElement('button');
// scrollButton.innerHTML = '<svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.40832 4.16676C5.48579 4.24486 5.57795 4.30686 5.6795 4.34917C5.78105 4.39147 5.88997 4.41326 5.99998 4.41326C6.10999 4.41326 6.21892 4.39147 6.32046 4.34917C6.42201 4.30686 6.51418 4.24486 6.59165 4.16676L10.4083 0.341757C10.4858 0.26365 10.578 0.201654 10.6795 0.159347C10.7811 0.11704 10.89 0.0952587 11 0.0952587C11.11 0.0952587 11.2189 0.11704 11.3205 0.159347C11.422 0.201654 11.5142 0.26365 11.5917 0.341757C11.7469 0.497893 11.834 0.709103 11.834 0.929257C11.834 1.14941 11.7469 1.36062 11.5917 1.51676L7.76665 5.34176C7.2979 5.80993 6.66249 6.07289 5.99998 6.07289C5.33748 6.07289 4.70207 5.80993 4.23331 5.34176L0.408311 1.51676C0.254357 1.36154 0.167564 1.15204 0.166643 0.933424C0.166009 0.823752 0.18703 0.715033 0.2285 0.613501C0.269971 0.51197 0.331077 0.419624 0.408311 0.341757C0.48578 0.26365 0.577947 0.201654 0.679497 0.159347C0.781046 0.11704 0.889968 0.0952587 0.999978 0.0952587C1.10999 0.0952587 1.21891 0.11704 1.32046 0.159347C1.42201 0.201654 1.51418 0.26365 1.59164 0.341757L5.40832 4.16676Z" fill="#4F2EE8" /></svg>';
// scrollButton.classList.add('scroll-button');

// let isScrolledToBottom = false;

// // Функція, яка перевіряє, чи сторінка прокручена до низу
// function isPageScrolledToBottom() {
//   return window.innerHeight + window.scrollY >= document.body.offsetHeight;
// }

// // Обробник події для кнопки прокрутки вниз для завантаження наступних благодійних фондів
// scrollButton.addEventListener('click', () => {
//   if (isScrolledToBottom) {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//     scrollButton.innerHTML = '<svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.40832 4.16676C5.48579 4.24486 5.57795 4.30686 5.6795 4.34917C5.78105 4.39147 5.88997 4.41326 5.99998 4.41326C6.10999 4.41326 6.21892 4.39147 6.32046 4.34917C6.42201 4.30686 6.51418 4.24486 6.59165 4.16676L10.4083 0.341757C10.4858 0.26365 10.578 0.201654 10.6795 0.159347C10.7811 0.11704 10.89 0.0952587 11 0.0952587C11.11 0.0952587 11.2189 0.11704 11.3205 0.159347C11.422 0.201654 11.5142 0.26365 11.5917 0.341757C11.7469 0.497893 11.834 0.709103 11.834 0.929257C11.834 1.14941 11.7469 1.36062 11.5917 1.51676L7.76665 5.34176C7.2979 5.80993 6.66249 6.07289 5.99998 6.07289C5.33748 6.07289 4.70207 5.80993 4.23331 5.34176L0.408311 1.51676C0.254357 1.36154 0.167564 1.15204 0.166643 0.933424C0.166009 0.823752 0.18703 0.715033 0.2285 0.613501C0.269971 0.51197 0.331077 0.419624 0.408311 0.341757C0.48578 0.26365 0.577947 0.201654 0.679497 0.159347C0.781046 0.11704 0.889968 0.0952587 0.999978 0.0952587C1.10999 0.0952587 1.21891 0.11704 1.32046 0.159347C1.42201 0.201654 1.51418 0.26365 1.59164 0.341757L5.40832 4.16676Z" fill="#4F2EE8" /></svg>';
//   } else {
//     window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
//     scrollButton.innerHTML = '<svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.40832 4.16676C5.48579 4.24486 5.57795 4.30686 5.6795 4.34917C5.78105 4.39147 5.88997 4.41326 5.99998 4.41326C6.10999 4.41326 6.21892 4.39147 6.32046 4.34917C6.42201 4.30686 6.51418 4.24486 6.59165 4.16676L10.4083 0.341757C10.4858 0.26365 10.578 0.201654 10.6795 0.159347C10.7811 0.11704 10.89 0.0952587 11 0.0952587C11.11 0.0952587 11.2189 0.11704 11.3205 0.159347C11.422 0.201654 11.5142 0.26365 11.5917 0.341757C11.7469 0.497893 11.834 0.709103 11.834 0.929257C11.834 1.14941 11.7469 1.36062 11.5917 1.51676L7.76665 5.34176C7.2979 5.80993 6.66249 6.07289 5.99998 6.07289C5.33748 6.07289 4.70207 5.80993 4.23331 5.34176L0.408311 1.51676C0.254357 1.36154 0.167564 1.15204 0.166643 0.933424C0.166009 0.823752 0.18703 0.715033 0.2285 0.613501C0.269971 0.51197 0.331077 0.419624 0.408311 0.341757C0.48578 0.26365 0.577947 0.201654 0.679497 0.159347C0.781046 0.11704 0.889968 0.0952587 0.999978 0.0952587C1.10999 0.0952587 1.21891 0.11704 1.32046 0.159347C1.42201 0.201654 1.51418 0.26365 1.59164 0.341757L5.40832 4.16676Z" fill="#4F2EE8" /></svg>';
//   }
//   isScrolledToBottom = !isScrolledToBottom;
// });

// // Додаємо кнопку прокрутки вниз для завантаження наступних благодійних фондів до контейнера swiper
// nextButtonContainer.appendChild(scrollButton);

// // Додаємо кнопку прокрутки вниз для завантаження наступних благодійних фондів до батьківського елемента
// swiperContainer.appendChild(nextButtonContainer);

// // Слухач подій прокрутки сторінки
// window.addEventListener('scroll', () => {
//   if (isPageScrolledToBottom()) {
//     isScrolledToBottom = true;
//     scrollButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/><path fill="none" d="M0 0h24v24H0z"/></svg>';
//   } else {
//     isScrolledToBottom = false;
//     scrollButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.59 15.41L12 10.83 7.41 15.41 6 14l6-6 6 6z"/><path fill="none" d="M0 0h24v24H0z"/></svg>';
//   }
// });


// import Swiper JS
// import Swiper from 'swiper';
// import Swiper from '/node_modules/swiper/swiper.js';

// import Swiper styles
// import { Navigation } from 'swiper';
// // import Swiper and modules styles
// import 'swiper/css';
// import 'swiper/css/navigation';

// // import Swiper bundle with all modules installed
// import Swiper from 'swiper/bundle';

// // import styles bundle
// import 'swiper/css/bundle';

// const swiper = new Swiper('.support.container', {
//     direction: 'vertical',
//     navigation: {
//         nextEl: '.swiper-button-next',
//     },
//     slidesPerView: 'auto',
//     modules: {
//         Navigation,
//     },
// });

const parentElement = document.querySelector('.support.container');

const perPage = 6;
let currentCharityIndex = 0;

 const charities = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: './img/save-the-children@2x.png',
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: './img/project-hope@2x.png',
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: './img/united24@2x.png',
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: './img/international-medical-corps@2x.png',
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: './img/medicins-sans-frontieres@2x.png',
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: './img/razom@2x.png',
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: './img/action-against-hunger@2x.png',
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: './img/world-vision@2x.png',
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: './img/serhiy-prytula-charity-foundation@2x.png',
  },
];

const swiperContainer = document.createElement('div');
swiperContainer.classList.add('swiper-container');

const swiperWrapper = document.createElement('div');
swiperWrapper.classList.add('swiper-wrapper');

function createListItem(charity) {
    const listItem = document.createElement('li');
    listItem.classList.add('list');

    const charityIndex = (currentCharityIndex + 1).toString().padStart(2, '0');
  
    const link = document.createElement('a');
    link.classList.add('link');
    link.href = charity.url;
    link.target = '_blank';

    const img = document.createElement('img');
    img.classList.add('img');
    img.src = charity.img;
    img.alt = charity.title;

    link.appendChild(img);
    listItem.appendChild(document.createTextNode(`${charityIndex}. `));
    listItem.appendChild(link);

    const swiperSlide = document.createElement('div');
    swiperSlide.classList.add('swiper-slide');
    swiperSlide.appendChild(listItem);

    swiperWrapper.appendChild(swiperSlide);

    currentCharityIndex++;
}

charities.slice(0, perPage).forEach(charity => {
    createListItem(charity);
});

swiperContainer.appendChild(swiperWrapper);
parentElement.appendChild(swiperContainer);

const nextButtonContainer = document.createElement('div');
nextButtonContainer.classList.add('swiper-button-next');

const scrollButton = document.createElement('button');
scrollButton.innerHTML = '<svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.40832 4.16676C5.48579 4.24486 5.57795 4.30686 5.6795 4.34917C5.78105 4.39147 5.88997 4.41326 5.99998 4.41326C6.10999 4.41326 6.21892 4.39147 6.32046 4.34917C6.42201 4.30686 6.51418 4.24486 6.59165 4.16676L10.4083 0.341757C10.4858 0.26365 10.578 0.201654 10.6795 0.159347C10.7811 0.11704 10.89 0.0952587 11 0.0952587C11.11 0.0952587 11.2189 0.11704 11.3205 0.159347C11.422 0.201654 11.5142 0.26365 11.5917 0.341757C11.7469 0.497893 11.834 0.709103 11.834 0.929257C11.834 1.14941 11.7469 1.36062 11.5917 1.51676L7.76665 5.34176C7.2979 5.80993 6.66249 6.07289 5.99998 6.07289C5.33748 6.07289 4.70207 5.80993 4.23331 5.34176L0.408311 1.51676C0.254357 1.36154 0.167564 1.15204 0.166643 0.933424C0.166009 0.823752 0.18703 0.715033 0.2285 0.613501C0.269971 0.51197 0.331077 0.419624 0.408311 0.341757C0.48578 0.26365 0.577947 0.201654 0.679497 0.159347C0.781046 0.11704 0.889968 0.0952587 0.999978 0.0952587C1.10999 0.0952587 1.21891 0.11704 1.32046 0.159347C1.42201 0.201654 1.51418 0.26365 1.59164 0.341757L5.40832 4.16676Z" fill="#4F2EE8" /></svg>';
scrollButton.classList.add('scroll-button');
scrollButton.classList.add('btn-up');

let isScrolledToBottom = false;

function isPageScrolledToBottom() {
    return window.innerHeight + window.scrollY >= document.body.offsetHeight;
}

scrollButton.addEventListener('click', () => {
    if (isScrolledToBottom) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        scrollButton.innerHTML = '<svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.40832 4.16676C5.48579 4.24486 5.57795 4.30686 5.6795 4.34917C5.78105 4.39147 5.88997 4.41326 5.99998 4.41326C6.10999 4.41326 6.21892 4.39147 6.32046 4.34917C6.42201 4.30686 6.51418 4.24486 6.59165 4.16676L10.4083 0.341757C10.4858 0.26365 10.578 0.201654 10.6795 0.159347C10.7811 0.11704 10.89 0.0952587 11 0.0952587C11.11 0.0952587 11.2189 0.11704 11.3205 0.159347C11.422 0.201654 11.5142 0.26365 11.5917 0.341757C11.7469 0.497893 11.834 0.709103 11.834 0.929257C11.834 1.14941 11.7469 1.36062 11.5917 1.51676L7.76665 5.34176C7.2979 5.80993 6.66249 6.07289 5.99998 6.07289C5.33748 6.07289 4.70207 5.80993 4.23331 5.34176L0.408311 1.51676C0.254357 1.36154 0.167564 1.15204 0.166643 0.933424C0.166009 0.823752 0.18703 0.715033 0.2285 0.613501C0.269971 0.51197 0.331077 0.419624 0.408311 0.341757C0.48578 0.26365 0.577947 0.201654 0.679497 0.159347C0.781046 0.11704 0.889968 0.0952587 0.999978 0.0952587C1.10999 0.0952587 1.21891 0.11704 1.32046 0.159347C1.42201 0.201654 1.51418 0.26365 1.59164 0.341757L5.40832 4.16676Z" fill="#4F2EE8" /></svg>';
    } else {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        scrollButton.innerHTML = '<svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.40832 4.16676C5.48579 4.24486 5.57795 4.30686 5.6795 4.34917C5.78105 4.39147 5.88997 4.41326 5.99998 4.41326C6.10999 4.41326 6.21892 4.39147 6.32046 4.34917C6.42201 4.30686 6.51418 4.24486 6.59165 4.16676L10.4083 0.341757C10.4858 0.26365 10.578 0.201654 10.6795 0.159347C10.7811 0.11704 10.89 0.0952587 11 0.0952587C11.11 0.0952587 11.2189 0.11704 11.3205 0.159347C11.422 0.201654 11.5142 0.26365 11.5917 0.341757C11.7469 0.497893 11.834 0.709103 11.834 0.929257C11.834 1.14941 11.7469 1.36062 11.5917 1.51676L7.76665 5.34176C7.2979 5.80993 6.66249 6.07289 5.99998 6.07289C5.33748 6.07289 4.70207 5.80993 4.23331 5.34176L0.408311 1.51676C0.254357 1.36154 0.167564 1.15204 0.166643 0.933424C0.166009 0.823752 0.18703 0.715033 0.2285 0.613501C0.269971 0.51197 0.331077 0.419624 0.408311 0.341757C0.48578 0.26365 0.577947 0.201654 0.679497 0.159347C0.781046 0.11704 0.889968 0.0952587 0.999978 0.0952587C1.10999 0.0952587 1.21891 0.11704 1.32046 0.159347C1.42201 0.201654 1.51418 0.26365 1.59164 0.341757L5.40832 4.16676Z" fill="#4F2EE8" /></svg>';
    }
    isScrolledToBottom = !isScrolledToBottom;
});

nextButtonContainer.appendChild(scrollButton);
swiperContainer.appendChild(nextButtonContainer);

window.addEventListener('scroll', () => {
    if (isPageScrolledToBottom()) {
        isScrolledToBottom = true;
        scrollButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.59 15.41L12 10.83 7.41 15.41 6 14l6-6 6 6z"/><path fill="none" d="M0 0h24v24H0z"/></svg>';
    } else {
        isScrolledToBottom = false;
        scrollButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.59 15.41L12 10.83 7.41 15.41 6 14l6-6 6 6z"/><path fill="none" d="M0 0h24v24H0z"/></svg>';
    }
});
