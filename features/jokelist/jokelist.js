// Joke List feature JavaScript code
// jokelist.js

// Function to display all jokes
function displayJokes() {
    fetch('/japi/jokes')
      .then(response => response.json())
      .then(data => {
        const jokeList = document.getElementById('joke-list');
        jokeList.innerHTML = '';
  
        data.forEach(joke => {
          const listItem = document.createElement('li');
          listItem.className = 'list-group-item';
          listItem.innerHTML = `
            <strong>Question:</strong> ${joke.question}<br>
            <strong>Answer:</strong> ${joke.answer}<br>
            <strong>Rating:</strong> ${joke.rating}<br>
            <button class="btn btn-sm btn-primary" onclick="editJoke(${joke.id})">Edit</button>
            <button class="btn btn-sm btn-danger" onclick="deleteJoke(${joke.id})">Delete</button>
          `;
          jokeList.appendChild(listItem);
        });
      })
      .catch(error => console.log(error));
  }
  
  // Function to edit a joke
  function editJoke(id) {
    const newQuestion = prompt('Enter the new question:');
    const newAnswer = prompt('Enter the new answer:');
    const newRating = prompt('Enter the new rating:');
  
    const joke = {
      question: newQuestion,
      answer: newAnswer,
      rating: newRating
    };
  
    fetch(`/japi/jokes/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(joke)
    })
      .then(response => response.text())
      .then(data => {
        alert(data);
        displayJokes();
      })
      .catch(error => console.log(error));
  }
  
  // Function to delete a joke
  function deleteJoke(id) {
    if (confirm('Are you sure you want to delete this joke?')) {
      fetch(`/japi/jokes/${id}`, {
        method: 'DELETE'
      })
        .then(response => response.text())
        .then(data => {
          alert(data);
          displayJokes();
        })
        .catch(error => console.log(error));
    }
  }
  
  // Call the displayJokes function to populate the list on page load
  displayJokes();
  
