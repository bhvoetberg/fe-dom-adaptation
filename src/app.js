console.log("Hallo!")

// Creëer en vul het titel-element
const popularBookTitle = document.createElement('h3');
popularBookTitle.textContent = 'The Great Gatsby';
popularBookTitle.setAttribute('class', 'pink-background');

// Creëer en vul het paragraaf-element
const popularBookAuthor = document.createElement('p');
popularBookAuthor.textContent = 'Door F. Scott Fitzgerald';

// Sla de referentie naar het omwikkelende element op
const popularBook = document.getElementById('popular-book');

// Voeg deze elementen toe aan dit element
popularBook.appendChild(popularBookTitle);
popularBook.appendChild(popularBookAuthor);
