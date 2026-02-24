let interviewCountArr = [];
let rejectedCountArr = [];

let totalCount = document.getElementById('total-count');
let interviewCount = document.getElementById('interview-count');
let rejectionCount = document.getElementById('rejection-count');
let availableJobsCount = document.getElementById('total-job');
const allCards = document.getElementById('all-cards');

function allCardsCalculate() {
    totalCount.innerText = allCards.children.length;
    availableJobsCount.innerText = allCards.children.length;
    interviewCount.innerText = interviewCountArr.length;
    rejectionCount.innerText = rejectedCountArr.length;
}
function checkEmpty() {

    const emptyState = document.getElementById('empty');
    const visibleCards = document.querySelectorAll('.card:not(.hidden)').length;
    if (visibleCards === 0) {
        emptyState.classList.remove('hidden');
    } else {
        emptyState.classList.add('hidden');
    }
}

allCardsCalculate();
checkEmpty();

allCards.addEventListener('click', function (event) {
    const clickedBtn = event.target;
    const card = clickedBtn.closest('.card');
    if (!card) {
        return;
    }

    if (clickedBtn.classList.contains('fa-trash-can')) {
        interviewCountArr = interviewCountArr.filter(function (item) {
            return item !== card;
        });
        rejectedCountArr = rejectedCountArr.filter(function (item) {
            return item !== card;
        });
        card.remove();
        allCardsCalculate();
        checkEmpty();
    }
    const statusDiv = card.querySelector('.notified');
    const statusText = statusDiv.querySelector('p');

    if (clickedBtn.innerText === 'INTERVIEW') {
        card.setAttribute('data-status', 'interview');
        statusText.innerText = 'Interview';
        statusDiv.className = 'notified bg-success/20 text-success w-fit p-2 rounded-sm';
        if (!interviewCountArr.includes(card)) {
            interviewCountArr.push(card);
        }
        rejectedCountArr = rejectedCountArr.filter(function (item) {
            return item !== card;
        });
        allCardsCalculate();
        checkEmpty();
    }

    if (clickedBtn.innerText === 'REJECTED') {
        card.setAttribute('data-status', 'rejected');
        statusText.innerText = 'Rejected';
        statusDiv.className = 'notified bg-error/20 text-error w-fit p-2 rounded-sm';
        if (!rejectedCountArr.includes(card)) {
            rejectedCountArr.push(card);
        }
        interviewCountArr = interviewCountArr.filter(function (item) {
            return item !== card;
        });
        allCardsCalculate();
            checkEmpty();
    }
});


function ToggleStyle(id) {

    const allFilterBtn=document.getElementById('all-btn');
    const interviewFilterBtn=document.getElementById('interview-btn');
    const rejectedFilterBtn=document.getElementById('rejected-btn');
    const buttons=[allFilterBtn, interviewFilterBtn, rejectedFilterBtn];
    buttons.forEach(btn => {
        btn.classList.remove("bg-primary", "text-white");
        btn.classList.add("bg-gray-300", "text-black");
    });
    const selected=document.getElementById(id);
    selected.classList.remove("bg-gray-300", "text-black");
    selected.classList.add("bg-primary", "text-white");
    const cards=allCards.children;
    for (let i=0; i < cards.length; i++) {
    const status=cards[i].getAttribute('data-status');
    if (id==='all-btn') {
        cards[i].classList.remove('hidden');
    } 
    else if (id==='interview-btn') {
        if (status==='interview') {
            cards[i].classList.remove('hidden');
        } else {
            cards[i].classList.add('hidden');
        }
    } 
    else if (id==='rejected-btn') {
        if (status==='rejected') {
            cards[i].classList.remove('hidden');
        } else {
            cards[i].classList.add('hidden');
        }
    }
}
    checkEmpty();
}
