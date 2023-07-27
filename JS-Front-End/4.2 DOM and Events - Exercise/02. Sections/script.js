function create(words) {
   for (const word of words) {
      const e = document.createElement('div');
      e.innerHTML = `<p>${word}</p>`;
      document.getElementById('content').appendChild(e);
   }

   const paragraphs = Array.from(document.querySelectorAll('p'));

   for (const paragraph of paragraphs) {
      paragraph.style.display = "none";
   }

   const insideDivs = Array.from(document.getElementById('content').children);

   for (const insideDiv of insideDivs) {
      insideDiv.addEventListener('click', (e) => {
         e.target.firstChild.style.display = "block";
      })
   }



}