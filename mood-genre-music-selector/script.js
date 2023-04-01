function getUniqueValues(data, column) {
    const values = data.map(row => row[column]);
    return [...new Set(values)];
}

function populateDropdown(dropdownId, values) {
    const dropdown = document.getElementById(dropdownId);
    values.forEach(value => {
        const option = document.createElement('option');
        option.value = value;
        option.text = value;
        dropdown.add(option);
    });
}

function findMatchingSong(mood, genre, data) {
    let matchingSongs = data.filter(song => song.mood === mood && song.genre === genre);

    if (matchingSongs.length === 0) {
        matchingSongs = data.filter(song => song.mood === mood || song.genre === genre);
    }

    if (matchingSongs.length > 0) {
        const randomIndex = Math.floor(Math
