const addTodoList = (text) => {
    let elemContainer = document.createElement('div');
    elemContainer.classList.add('card', 'todo-item');
    elemContainer.id = itemCount;
    let elem = `
        <div class="card-body">
            <div class="row">
                <div class="col-sm-9">
                    <span class="todo-item-text">
                        ${text}
                    </span>
                </div>
                <div class="col-sm-3 text-right">
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Action
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item edit" id="edit-${itemCount}" href="#">Edit</a>
                            <a class="dropdown-item remove" id="remove-${itemCount}" href="#">Remove</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
    elemContainer.innerHTML = elem;

    const itemContainer = document.getElementById('item-container');
    itemContainer.append(elemContainer);
}

const printAlert = (type, message) => {
    let alertContainer = document.createElement('div');
    alertContainer.classList.add('alert', 'alert-' + type);
    alertContainer.setAttribute('role', 'alert');
    alertContainer.innerText = message;

    const container = document.getElementById('alert-container');
    container.append(alertContainer);
    setTimeout(() => {
        container.innerHTML = '';
    }, 3000);
}