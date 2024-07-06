document.getElementById('agendaForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const activity = document.getElementById('activity').value;

    if (date && time && activity) {
        const agendaList = document.getElementById('agendaList');
        const agendaItem = document.createElement('li');
        agendaItem.innerHTML = `
            ${date} ${time} - ${activity}
            <div class="actions">
                <button onclick="editAgenda(this)">Edit</button>
                <button onclick="deleteAgenda(this)">Delete</button>
            </div>
        `;
        agendaList.appendChild(agendaItem);

        saveToLocalStorage();

        document.getElementById('agendaForm').reset();
    }
});

function deleteAgenda(button) {
    const li = button.parentElement.parentElement;
    li.remove();
    saveToLocalStorage();
}

function editAgenda(button) {
    const li = button.parentElement.parentElement;
    const textContent = li.childNodes[0].nodeValue.trim();
    const date = textContent.split(' ')[0];
    const time = textContent.split(' ')[1];
    const activity = textContent.split(' - ')[1];

    document.getElementById('date').value = date;
    document.getElementById('time').value = time;
    document.getElementById('activity').value = activity;

    document.getElementById('addButton').style.display = 'none';
    document.getElementById('updateButton').style.display = 'inline';

    document.getElementById('updateButton').onclick = function() {
        li.innerHTML = `
            ${document.getElementById('date').value} ${document.getElementById('time').value} - ${document.getElementById('activity').value}
            <div class="actions">
                <button onclick="editAgenda(this)">Edit</button>
                <button onclick="deleteAgenda(this)">Delete</button>
            </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        `;
        saveToLocalStorage();
        document.getElementById('agendaForm').reset();
        document.getElementById('addButton').style.display = 'inline';
        document.getElementById('updateButton').style.display = 'none';
    };
}

function saveToLocalStorage() {
    const agendaList = document.getElementById('agendaList');
    const items = [];
    for (let i = 0; i < agendaList.children.length; i++) {
        items.push(agendaList.children[i].innerHTML);
    }
    localStorage.setItem('nisa-uas', JSON.stringify(items));
}

function loadFromLocalStorage() {
    const items = JSON.parse(localStorage.getItem('nisa-uas'));
    if (items) {
        const agendaList = document.getElementById('agendaList');
        items.forEach(itemHTML => {
            const agendaItem = document.createElement('li');
            agendaItem.innerHTML = itemHTML;
            agendaList.appendChild(agendaItem);
        });
    }
}

document.addEventListener('DOMContentLoaded', loadFromLocalStorage);
