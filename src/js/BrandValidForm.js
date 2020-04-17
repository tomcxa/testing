import brands from './brandsList';
import isValidBrand from './isValidBrand';
import luhnAlgorithm from './isValidNumber';

/* eslint-disable class-methods-use-this */
export default class BrandValidForm {
    constructor(parentEl) {
        this.parentEl = parentEl;
        this.brands = brands;
    }

    static get HTML() {
        return `<ul class="cards list-unstyled">
          <li class="card" data-name="Visa"><img src="https://toplogos.ru/images/thumbs/preview-logo-visa.png" alt="Логотип Visa" title="Visa"/></li>
          <li class="card" data-name="MasterCard"><img src="https://toplogos.ru/images/thumbs/preview-logo-mastercard.png" alt="Логотип MasterCard" title="MasterCard"/></li>
          <li class="card" data-name="AmericanExpress"><img src="https://toplogos.ru/images/thumbs/preview-logo-american-express.jpg"  alt="Логотип American Express" title="American Express"/></li>
          <li class="card" data-name="DinersClub"><img src="https://toplogos.ru/images/thumbs/preview-logo-diners-club-international.jpg"  alt="Логотип Diners Club International" title="Diners Club"/></li>
          <li class="card" data-name="Unionpay"><img src="https://toplogos.ru/images/thumbs/preview-logo-unionpay.png"  alt="Логотип UnionPay" title="UnionPay"/></li>
          <li class="card" data-name="Maestro"><img src="https://toplogos.ru/images/thumbs/preview-logo-maestro.png" alt="Логотип Maestro" title="Maestro"/></li>
          <li class="card" data-name="Mir"><img src="https://toplogos.ru/images/thumbs/preview-logo-mir.png" alt="Логотип Мир" title="Mir"/></li>
        </ul>
        <form id="form" class="form">
          <input class="form-input" id="card-number" name="card-number" type="text" required
            placeholder="Credit card number">
          <button id="submitform" class="btn btn-success">Click to Validate</button>
        </form>`;
    }

    bindToDOM() {
        this.parentEl.innerHTML = this.constructor.HTML;
        const btn = document.getElementById('submitform');
        btn.addEventListener('click', (event) => {
            this.onSubmit(event);
        });
    }

    onSubmit(event) {
        event.preventDefault();
        const selected = document.getElementsByClassName('card-selected')[0];
        if (selected) {
            selected.classList.remove('card-selected');
        }
        const cardNumber = document.getElementById('card-number');
        if (!cardNumber.value) {
            cardNumber.placeholder = 'Empty input!';
            return null;
        }
        if (!luhnAlgorithm(cardNumber.value)) {
            cardNumber.value = '';
            cardNumber.placeholder = 'Unvalid card number!';
            return null;
        }
        const brandName = isValidBrand(cardNumber.value, this.brands);
        if (!brandName) {
            cardNumber.value = '';
            cardNumber.placeholder = 'Brand not define!';
            return null;
        }

        const brandSelect = this.parentEl.querySelector(`[data-name=${brandName}]`);
        brandSelect.classList.add('card-selected');

        return null;
    }
}
