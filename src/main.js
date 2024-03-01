const parentElement = document.querySelector('.support.container');

const charities = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: '',
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: 'project_hope.png',
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: 'united24.png',
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: 'international_medical_corps.png',
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: 'medicins_sans_frontieres.png',
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: 'razom.png',
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: 'action_against_hunger.png',
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: 'world_vision.png',
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: 'serhiy_prytula_charity_foundation.png',
  },
];

// Створюємо список благодійних фондів
const charityList = document.createElement('ul');

// Проходимося по кожному благодійному фонду і створюємо посилання з логотипом
charities.forEach(charity => {
  const listItem = document.createElement('li');
  const link = document.createElement('a');
  link.href = charity.url;
  link.target = '_blank'; // Відкривати у новій вкладці
  const img = document.createElement('img');
  img.src = charity.img;
  img.alt = charity.title;
  link.appendChild(img);
  listItem.appendChild(link);
  charityList.appendChild(listItem);
});



// Додаємо список благодійних фондів до контейнера.
parentElement.appendChild(charityList);