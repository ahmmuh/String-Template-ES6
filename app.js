(function() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => {
      return res.json();
    })
    .then(data => {
      const markUp = `
        <div class="row">
        ${data.map(
          post => `
        <div class="col">
           <h1>${post.title}</h1>
                <p>${post.body}</p>
                <p>${post.id}</p>
                <a href="#">Buy</a>
            </div>
      `
        )}
               
            </div>

            `;
      document.body.innerHTML = markUp;
    });
})();
