var str = "this is some string";
document.getElementById("btn").addEventListener('click', ()=>{
    fetch('https://whatthecommit.com/index.json')
    .then(response => {
        if (!response.ok) {
        throw new Error('The API fetching has some error');
        }
        return response.text();
    })
    .then(jsonString => {
        console.log(jsonString);
        try {
        const data = JSON.parse(jsonString);
        str=data.commit_message;
        console.log(data.commit_message);
        } catch (error) {
        console.error('Error parsing JSON:', error);
        }
    })
    .catch(error => {
        console.error('Fetch error:', error);
    });
})
document.getElementById("show").addEventListener("click",()=>{
    
    document.write(str);
})