const $wr = document.querySelector('[data-wr]')

getCatHTML = (cat) => {
    return `
    <div class="card">
        <img src="${cat.image}" alt="Cat">
        <div class="card__body">
            <h3 class="card__body-name">${cat.name}</h3>
            <p class="card__close-icon hidden-info">&times;</p>
            <p class="card__body-age hidden-info">Возраст: ${cat.age}</p>
            <p class="card__body-rate hidden-info">Рейтинг: ${cat.rate}</p>
            <p class="card__body-favorite hidden-info">Нравится: ${cat.favorite}</p>
            <p class="card__body-id">id: ${cat.id}</p>
            <p class="card__body-description">Кратко: ${cat.description}</p>
            <div class="delete__cat hidden-info">
                    <form class ="form__delete-cat" action="https://cats.petiteweb.dev/api/single/Torerroo/delete" method="delete">
                        <input type="submit" class="submit" value="Удалить">
                    </form>
                </div>
        </div>
    </div>     
    `
}

document.querySelector('#btn').addEventListener('click', () => {
    const addCat = document.querySelector('.add__cat')
    addCat.style.display = 'flex'
    if(addCat.style.display = 'flex') {
        document.querySelector('.close__form').addEventListener('click', () => {
            addCat.style.display = 'none'
        })
    }
})

const modalWindow = (el) => {
	const modal = el.currentTarget;
	modal.querySelectorAll('.hidden-info').forEach((info) => info.classList.toggle('hidden-info-active'));
    modal.classList.toggle('modal')
}



fetch('https://cats.petiteweb.dev/api/single/Torerroo/show/')
	.then((res) => res.json())
	.then((data) => {
        console.log(data);
		$wr.insertAdjacentHTML('afterbegin', data.map(cat => getCatHTML(cat)).join('') )
	})
    .then(() => {
		document.querySelectorAll('.card').forEach((card) => card.addEventListener('click', modalWindow))
    })