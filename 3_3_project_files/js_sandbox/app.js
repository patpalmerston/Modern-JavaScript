const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// clearBtn.addEventListener('click', runEvent);
clearBtn.addEventListener('keydown', runEvent);

function runEvent(e) {
    console.log(`Event TYPE: ${e.type} SUCKA`);
    console.log(e.target);
}
