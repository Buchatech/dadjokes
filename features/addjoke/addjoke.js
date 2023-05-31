// Function to add a new joke
async function addJoke(question, answer, rating) {
  try {
    const response = await fetch('/japi/jokes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question, answer, rating }),
    });

    if (response.ok) {
      alert('Joke added successfully!');
    } else {
      alert('Failed to add joke.');
    }
  } catch (error) {
    console.log(error);
  }
}

// Attach event listener to the form outside the addJoke function
document.getElementById('add-joke-form').addEventListener('submit', async (event) => {
  event.preventDefault(); // Prevent default form submission behavior

  const questionElement = document.getElementById('question');
  const answerElement = document.getElementById('answer');
  const ratingElement = document.getElementById('rating');

  const question = questionElement.value;
  const answer = answerElement.value;
  const rating = ratingElement.value;

  await addJoke(question, answer, rating);
});

  