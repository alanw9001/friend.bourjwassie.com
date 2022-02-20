function onClick(e) {
    e.preventDefault();
    // get form values
    let seed = document.getElementById('seed').value;
    let mood = document.getElementById('mood').value;
    let randomAvatar = randomAvatarType();
    let picurl = "https://avatars.dicebear.com/api/" + randomAvatar + "/" + seed + ".svg?mood[]=" + mood;
    friend = '<img src="' + picurl + '" width="300px" height="300px">';
    fetch("https://randomuser.me/api/", {dataType: 'json'})
        .then(function (response) {
            return response.json();
        }).then(function (json) {
            let name = (((json || {}).results || {}).name || {}).first;
            let city = (((json || {}).results || {}).location || {}).city;
            friend += "<p>Hi! My name is " + name + 
                ", and I'm from " + city + 
                ". We're going to be best friends!!</p>";
        });
    document.getElementById('results').innerHTML = friend;
}

function randomAvatarType() {
    const types = ['adventurer', 'pixel-art', 'open-peeps', 'croodles',
        'big-smile', 'big-ears', 'miniavs', 'bottts', 'micah'];
    return types[Math.floor(Math.random() * types.length)];
}

document.getElementById('go').addEventListener('click', onClick);