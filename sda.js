let selectedArtist = '';

document.querySelectorAll('.order-btn').forEach(button => {
    button.addEventListener('click', function() {
        selectedArtist = this.dataset.artist;

        document.getElementById('form').style.display = 'block';
        document.getElementById('artistName').innerText =
            "Артист: " + selectedArtist;
    });
});

function submitForm() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;

    if (!name || !phone) {
        alert("Заполни имя и телефон");
        return;
    }

    document.getElementById('success').innerText =
        "Заявка на " + selectedArtist + " отправлена!";
}