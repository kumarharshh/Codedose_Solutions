function makeRequest(index) {
  return fetch('https://whatthecommit.com/index.json')
    .then(response => response.json())
    .then(data => {
      console.log(data.commit_message);
    })
    .catch(error => console.error('error'));
}

const requests = Array.from({ length: 10 }, (_, index) => makeRequest(index));

Promise.all(requests)
  .then(() => {
    alert('Done!');
  })
  .catch(error => console.error(`Error: ${error.message}`));
