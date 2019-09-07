/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/card-edit.js":
/*!*************************************!*\
  !*** ./src/components/card-edit.js ***!
  \*************************************/
/*! exports provided: CardEdit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardEdit", function() { return CardEdit; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");


class CardEdit {
  constructor({point}) {
    this._point = point;
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }

  getTemplate() {
    return `<li class="trip-events__item">
      <form class="event  event--edit" action="#" method="post">
        <header class="event__header">
          <div class="event__type-wrapper">
            <label class="event__type  event__type-btn" for="event-type-toggle-1">
              <span class="visually-hidden">Choose event type</span>
              <img class="event__type-icon" width="17" height="17" src="img/icons/${this._point.type.toLowerCase()}.png" alt="Event type icon">
            </label>
            <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

            <div class="event__type-list">
              <fieldset class="event__type-group">
                <legend class="visually-hidden">Transfer</legend>

                <div class="event__type-item">
                  <input id="event-type-taxi-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi">
                  <label class="event__type-label  event__type-label--taxi" for="event-type-taxi-1">Taxi</label>
                </div>

                <div class="event__type-item">
                  <input id="event-type-bus-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="bus">
                  <label class="event__type-label  event__type-label--bus" for="event-type-bus-1">Bus</label>
                </div>

                <div class="event__type-item">
                  <input id="event-type-train-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="train">
                  <label class="event__type-label  event__type-label--train" for="event-type-train-1">Train</label>
                </div>

                <div class="event__type-item">
                  <input id="event-type-ship-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="ship">
                  <label class="event__type-label  event__type-label--ship" for="event-type-ship-1">Ship</label>
                </div>

                <div class="event__type-item">
                  <input id="event-type-transport-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="transport">
                  <label class="event__type-label  event__type-label--transport" for="event-type-transport-1">Transport</label>
                </div>

                <div class="event__type-item">
                  <input id="event-type-drive-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="drive">
                  <label class="event__type-label  event__type-label--drive" for="event-type-drive-1">Drive</label>
                </div>

                <div class="event__type-item">
                  <input id="event-type-flight-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="flight" checked="">
                  <label class="event__type-label  event__type-label--flight" for="event-type-flight-1">Flight</label>
                </div>
              </fieldset>

              <fieldset class="event__type-group">
                <legend class="visually-hidden">Activity</legend>

                <div class="event__type-item">
                  <input id="event-type-check-in-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="check-in">
                  <label class="event__type-label  event__type-label--check-in" for="event-type-check-in-1">Check-in</label>
                </div>

                <div class="event__type-item">
                  <input id="event-type-sightseeing-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="sightseeing">
                  <label class="event__type-label  event__type-label--sightseeing" for="event-type-sightseeing-1">Sightseeing</label>
                </div>

                <div class="event__type-item">
                  <input id="event-type-restaurant-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="restaurant">
                  <label class="event__type-label  event__type-label--restaurant" for="event-type-restaurant-1">Restaurant</label>
                </div>
              </fieldset>
            </div>
          </div>

          <div class="event__field-group  event__field-group--destination">
            <label class="event__label  event__type-output" for="event-destination-1">
              ${this._point.type}
            </label>
            <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${this._point.destination.name}" list="destination-list-1">
            <datalist id="destination-list-1">
              <option value="Amsterdam"></option>
              <option value="Geneva"></option>
              <option value="Chamonix"></option>
            </datalist>
          </div>

          <div class="event__field-group  event__field-group--time">
            <label class="visually-hidden" for="event-start-time-1">
              From
            </label>
            <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${this._point.dateFrom.getUTCDate()}/${this._point.dateFrom.getUTCMonth()}/${this._point.dateFrom.getUTCFullYear().toString().substr(2, 2)} ${this._point.dateFrom.getUTCHours()}:${this._point.dateFrom.getUTCMinutes()}">
            —
            <label class="visually-hidden" for="event-end-time-1">
              To
            </label>
            <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${this._point.dateTo.getUTCDate()}/${this._point.dateTo.getUTCMonth()}/${this._point.dateTo.getUTCFullYear().toString().substr(2, 2)} ${this._point.dateTo.getUTCHours()}:${this._point.dateTo.getUTCMinutes()}">
          </div>

          <div class="event__field-group  event__field-group--price">
            <label class="event__label" for="event-price-1">
              <span class="visually-hidden">Price</span>
              €
            </label>
            <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${this._point.basePrice}">
          </div>

          <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
          <button class="event__reset-btn" type="reset">Delete</button>

          <input id="event-favorite-1" class="event__favorite-checkbox  visually-hidden" type="checkbox" name="event-favorite" checked="">
          <label class="event__favorite-btn" for="event-favorite-1">
            <span class="visually-hidden">Add to favorite</span>
            <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
              <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"></path>
            </svg>
          </label>

          <button class="event__rollup-btn" type="button">
            <span class="visually-hidden">Open event</span>
          </button>
        </header>

        <section class="event__details">

          <section class="event__section  event__section--offers">
            <h3 class="event__section-title  event__section-title--offers">Offers</h3>

            <div class="event__available-offers">
              <div class="event__offer-selector">
                <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1" type="checkbox" name="event-offer-luggage" checked>
                <label class="event__offer-label" for="event-offer-luggage-1">
                  <span class="event__offer-title">Add luggage</span>
                  +
                  €&nbsp;<span class="event__offer-price">30</span>
                </label>
              </div>

              <div class="event__offer-selector">
                <input class="event__offer-checkbox  visually-hidden" id="event-offer-comfort-1" type="checkbox" name="event-offer-comfort">
                  <label class="event__offer-label" for="event-offer-comfort-1">
                    <span class="event__offer-title">Switch to comfort class</span>
                    +
                    €&nbsp;<span class="event__offer-price">100</span>
                  </label>
                </div>
  
                <div class="event__offer-selector">
                  <input class="event__offer-checkbox  visually-hidden" id="event-offer-meal-1" type="checkbox" name="event-offer-meal" >
                    <label class="event__offer-label" for="event-offer-meal-1">
                      <span class="event__offer-title">Add meal</span>
                      +
                      €&nbsp;<span class="event__offer-price">15</span>
                    </label>
                  </div>
    
                  <div class="event__offer-selector">
                    <input class="event__offer-checkbox  visually-hidden" id="event-offer-seats-1" type="checkbox" name="event-offer-seats" >
                      <label class="event__offer-label" for="event-offer-seats-1">
                        <span class="event__offer-title">Choose seats</span>
                        +
                        €&nbsp;<span class="event__offer-price">5</span>
                      </label>
                    </div>
      
                    <div class="event__offer-selector">
                      <input class="event__offer-checkbox  visually-hidden" id="event-offer-train-1" type="checkbox" name="event-offer-train" >
                        <label class="event__offer-label" for="event-offer-train-1">
                          <span class="event__offer-title">Travel by train</span>
                          +
                          €&nbsp;<span class="event__offer-price">40</span>
                        </label>
                      </div>
                    </div>
                  </section>
        
                  <section class="event__section  event__section--destination">
                    <h3 class="event__section-title  event__section-title--destination">Destination</h3>
                    <p class="event__destination-description">${this._point.destination.description}</p>

            <div class="event__photos-container">
              <div class="event__photos-tape">
              ${this._point.destination.photos[0].src.map((photo) => `
                <img class="event__photo" src="${photo} + ${Math.random()}" alt="Event photo">
              `).join(``)}
              </div>
            </div>
          </section>
        </section>
      </form>
    </li>`;
  }
}



/***/ }),

/***/ "./src/components/card-new.js":
/*!************************************!*\
  !*** ./src/components/card-new.js ***!
  \************************************/
/*! exports provided: AddNewEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNewEvent", function() { return AddNewEvent; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");


class AddNewEvent {
  getElement() {
    if (!this._element) {
      this._element = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }

  getTemplate() {
    return `<form class="trip-events__item  event  event--edit" action="#" method="post">
      <header class="event__header">
        <div class="event__type-wrapper">
          <label class="event__type  event__type-btn" for="event-type-toggle-1">
            <span class="visually-hidden">Choose event type</span>
            <img class="event__type-icon" width="17" height="17" src="img/icons/flight.png" alt="Event type icon">
          </label>
          <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

          <div class="event__type-list">
            <fieldset class="event__type-group">
              <legend class="visually-hidden">Transfer</legend>

              <div class="event__type-item">
                <input id="event-type-taxi-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi">
                <label class="event__type-label  event__type-label--taxi" for="event-type-taxi-1">Taxi</label>
              </div>

              <div class="event__type-item">
                <input id="event-type-bus-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="bus">
                <label class="event__type-label  event__type-label--bus" for="event-type-bus-1">Bus</label>
              </div>

              <div class="event__type-item">
                <input id="event-type-train-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="train">
                <label class="event__type-label  event__type-label--train" for="event-type-train-1">Train</label>
              </div>

              <div class="event__type-item">
                <input id="event-type-ship-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="ship">
                <label class="event__type-label  event__type-label--ship" for="event-type-ship-1">Ship</label>
              </div>

              <div class="event__type-item">
                <input id="event-type-transport-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="transport">
                <label class="event__type-label  event__type-label--transport" for="event-type-transport-1">Transport</label>
              </div>

              <div class="event__type-item">
                <input id="event-type-drive-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="drive">
                <label class="event__type-label  event__type-label--drive" for="event-type-drive-1">Drive</label>
              </div>

              <div class="event__type-item">
                <input id="event-type-flight-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="flight" checked="">
                <label class="event__type-label  event__type-label--flight" for="event-type-flight-1">Flight</label>
              </div>
            </fieldset>

            <fieldset class="event__type-group">
              <legend class="visually-hidden">Activity</legend>

              <div class="event__type-item">
                <input id="event-type-check-in-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="check-in">
                <label class="event__type-label  event__type-label--check-in" for="event-type-check-in-1">Check-in</label>
              </div>

              <div class="event__type-item">
                <input id="event-type-sightseeing-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="sightseeing">
                <label class="event__type-label  event__type-label--sightseeing" for="event-type-sightseeing-1">Sightseeing</label>
              </div>

              <div class="event__type-item">
                <input id="event-type-restaurant-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="restaurant">
                <label class="event__type-label  event__type-label--restaurant" for="event-type-restaurant-1">Restaurant</label>
              </div>
            </fieldset>
          </div>
        </div>

        <div class="event__field-group  event__field-group--destination">
          <label class="event__label  event__type-output" for="event-destination-1">
            Sightseeing at
          </label>
          <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="" list="destination-list-1">
          <datalist id="destination-list-1">
            <option value="Amsterdam"></option>
            <option value="Geneva"></option>
            <option value="Chamonix"></option>
            <option value="Saint Petersburg"></option>
          </datalist>
        </div>

        <div class="event__field-group  event__field-group--time">
          <label class="visually-hidden" for="event-start-time-1">
            From
          </label>
          <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="18/03/19 00:00">
          —
          <label class="visually-hidden" for="event-end-time-1">
            To
          </label>
          <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="18/03/19 00:00">
        </div>

        <div class="event__field-group  event__field-group--price">
          <label class="event__label" for="event-price-1">
            <span class="visually-hidden">Price</span>
            €
          </label>
          <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="">
        </div>

        <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
        <button class="event__reset-btn" type="reset">Cancel</button>
      </header>
    </form>`;
  }
}


/***/ }),

/***/ "./src/components/card-route.js":
/*!**************************************!*\
  !*** ./src/components/card-route.js ***!
  \**************************************/
/*! exports provided: CreateCardRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCardRoute", function() { return CreateCardRoute; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants.js");



class CreateCardRoute {
  constructor({point}) {
    this._point = point;
    this._element = null;
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }

  getTemplate() {
    return `<div class="trip-info__main">
      <h1 class="trip-info__title">${this._point.destination.name} &mdash; ${this._point.destination.name !== `` ? `...&mdash;` : ``}   ${this._point.destination.name}</h1>
      <p class="trip-info__dates">${_constants__WEBPACK_IMPORTED_MODULE_1__["monthNames"][this._point.dateFrom.getUTCMonth()]} ${this._point.dateFrom.getUTCDate()}&nbsp;—&nbsp;${this._point.dateTo.getUTCDate()}</p>
    </div>`;
  }
}




/***/ }),

/***/ "./src/components/cards.js":
/*!*********************************!*\
  !*** ./src/components/cards.js ***!
  \*********************************/
/*! exports provided: Card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");


class Card {
  constructor({point}) {
    this._point = point;
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }

  getTemplate() {
    return `<li class="trip-events__item">
      <div class="event">
        <div class="event__type">
          <img class="event__type-icon" width="42" height="42" src="img/icons/${this._point.type.toLowerCase()}.png" alt="Event type icon">
        </div>
        <h3 class="event__title">${this._point.type} ${this._point.destination.name}</h3>

        <div class="event__schedule">
          <p class="event__time">
            <time class="event__start-time" datetime="2019-03-18T12:25">${this._point.dateFrom.getUTCHours()} : ${this._point.dateFrom.getUTCMinutes()}</time>
            —
            <time class="event__end-time" datetime="2019-03-18T13:35">${this._point.dateTo.getUTCHours()} : ${this._point.dateTo.getUTCMinutes()}</time>
          </p>
          <p class="event__duration">${this._point.dateTo.getHours() - this._point.dateFrom.getHours()}H ${this._point.dateFrom.getMinutes() - this._point.dateTo.getMinutes()}M</p>
        </div>

        <p class="event__price">
          €&nbsp;<span class="event__price-value">${this._point.basePrice}</span>
        </p>

        <h4 class="visually-hidden">Offers:</h4>
        <ul class="event__selected-offers">
          ${this._point.offers.offer.map((offer) => `
            <li class="event__offer">
              <span class="event__offer-title">${offer.name}</span>
              +
              €&nbsp;<span class="event__offer-price">${offer.price}</span>
             </li>`).join(``)}
        </ul>

        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </div>
    </li>`;
  }
}



/***/ }),

/***/ "./src/components/controls.js":
/*!************************************!*\
  !*** ./src/components/controls.js ***!
  \************************************/
/*! exports provided: CreateControls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateControls", function() { return CreateControls; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");


class CreateControls {
  constructor(controls) {
    this._controls = controls;
    this._element = null;
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }

  getTemplate() {
    return `<nav class="trip-controls__trip-tabs  trip-tabs">
      ${this._controls.map((control) => `
        <a class="trip-tabs__btn  trip-tabs__btn--active" href="#">${control}</a>
      `).join(``)}
    </nav>`;
  }
}


/***/ }),

/***/ "./src/components/filters.js":
/*!***********************************!*\
  !*** ./src/components/filters.js ***!
  \***********************************/
/*! exports provided: CreateFilters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateFilters", function() { return CreateFilters; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");


class CreateFilters {
  constructor(filters) {
    this._filters = filters;
    this._element = null;
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }

  getTemplate() {
    return `<form class="trip-filters" action="#" method="get">${this._filters.map((filter) => `
      <div class="trip-filters__filter">
        <input id="filter-${filter.filter}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${filter.filter.toLowerCase()}" ${filter.isChecked ? `checked` : ``}>
        <label class="trip-filters__filter-label" for="filter-${filter.filter}">${filter.filter}</label>
      </div>
      `).join(``)}
  </form>`;
  }
}


/***/ }),

/***/ "./src/components/sorting.js":
/*!***********************************!*\
  !*** ./src/components/sorting.js ***!
  \***********************************/
/*! exports provided: CreateSorting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateSorting", function() { return CreateSorting; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");


class CreateSorting {
  constructor(sorting) {
    this._sorting = sorting;
    this._element = null;
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }

  getTemplate() {
    return `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
      <span class="trip-sort__item  trip-sort__item--day">Day</span>
      ${this._sorting.map((sort) => `
        <div class="trip-sort__item  trip-sort__item--${sort.sorting.toLowerCase()}">
          <input id="sort-${sort.sorting}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${sort.sorting}" ${sort.isChecked ? `checked` : ``}>
          <label class="trip-sort__btn" for="sort-${sort.sorting}">${sort.sorting}
          <svg class="trip-sort__direction-icon" width="8" height="10" viewBox="0 0 8 10">
              <path d="M2.888 4.852V9.694H5.588V4.852L7.91 5.068L4.238 0.00999987L0.548 5.068L2.888 4.852Z"/>
            </svg>
          </label>
        </div>`).join(``)}
      <span class="trip-sort__item  trip-sort__item--offers">Offers</span>
  </form>`;
  }
}


/***/ }),

/***/ "./src/components/trip-cost.js":
/*!*************************************!*\
  !*** ./src/components/trip-cost.js ***!
  \*************************************/
/*! exports provided: TripCost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripCost", function() { return TripCost; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");


class TripCost {
  constructor(cost) {
    this._cost = cost;
    this._element = null;
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }

  getTemplate() {
    return `<p class="trip-info__cost">
      Total: €&nbsp;<span class="trip-info__cost-value">${this._cost}</span>
    </p>`;
  }
}


/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! exports provided: tripInfo, tripControls, tripEvents, tripEventsList, CARD_COUNT, cities, startMonth, monthNames, photosArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tripInfo", function() { return tripInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tripControls", function() { return tripControls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tripEvents", function() { return tripEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tripEventsList", function() { return tripEventsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CARD_COUNT", function() { return CARD_COUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cities", function() { return cities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startMonth", function() { return startMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monthNames", function() { return monthNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "photosArray", function() { return photosArray; });
const tripInfo = document.querySelector(`.trip-main__trip-info`);
const tripControls = document.querySelector(`.trip-main__trip-controls`);
const tripEvents = document.querySelector(`.trip-events`);
const tripEventsList = document.querySelector(`.trip-events__list`);
const CARD_COUNT = 3;

const cities = [`Helsinki`, `Stockholm`, `Amsterdam`, `Airport`];
const monthNames = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`];
const startMonth = new Date(2020, 5, 1, 8, 30, 0, 0).getMonth();
const photosArray = new Array(5).fill(``);




/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var _mocks_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mocks/card */ "./src/mocks/card.js");
/* harmony import */ var _mocks_filters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mocks/filters */ "./src/mocks/filters.js");
/* harmony import */ var _mocks_controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mocks/controls */ "./src/mocks/controls.js");
/* harmony import */ var _mocks_sorting__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mocks/sorting */ "./src/mocks/sorting.js");
/* harmony import */ var _mocks_trip_cost__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mocks/trip-cost */ "./src/mocks/trip-cost.js");
/* harmony import */ var _components_cards__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/cards */ "./src/components/cards.js");
/* harmony import */ var _components_card_edit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/card-edit */ "./src/components/card-edit.js");
/* harmony import */ var _components_card_route__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/card-route */ "./src/components/card-route.js");
/* harmony import */ var _components_controls__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/controls */ "./src/components/controls.js");
/* harmony import */ var _components_filters__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/filters */ "./src/components/filters.js");
/* harmony import */ var _components_sorting__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/sorting */ "./src/components/sorting.js");
/* harmony import */ var _components_trip_cost__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/trip-cost */ "./src/components/trip-cost.js");
/* harmony import */ var _components_card_new__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/card-new */ "./src/components/card-new.js");



















const renderCards = (cardMock) => {
  const card = new _components_cards__WEBPACK_IMPORTED_MODULE_7__["Card"](cardMock);
  const cardEdit = new _components_card_edit__WEBPACK_IMPORTED_MODULE_8__["CardEdit"](cardMock);

  const onEscKeyDown = (evt) => {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_1__["replaceElement"])(_constants__WEBPACK_IMPORTED_MODULE_0__["tripEventsList"], card, cardEdit, _utils__WEBPACK_IMPORTED_MODULE_1__["EventOption"].removeEvent, onEscKeyDown);
    }
  };

  card.getElement()
    .querySelector(`.event__rollup-btn`)
    .addEventListener(`click`, () => {
      Object(_utils__WEBPACK_IMPORTED_MODULE_1__["replaceElement"])(_constants__WEBPACK_IMPORTED_MODULE_0__["tripEventsList"], cardEdit, card, _utils__WEBPACK_IMPORTED_MODULE_1__["EventOption"].addEvent, onEscKeyDown);
    });

  cardEdit.getElement()
    .querySelector(`.event__input--destination`)
    .addEventListener(`focus`, () => {
      document.removeEventListener(`keydown`, onEscKeyDown);
    });

  cardEdit.getElement()
    .querySelector(`.event__input--destination`)
    .addEventListener(`blur`, () => {
      document.addEventListener(`keydown`, onEscKeyDown);
    });

  cardEdit.getElement()
    .querySelector(`.event__rollup-btn`)
    .addEventListener(`click`, () => {
      Object(_utils__WEBPACK_IMPORTED_MODULE_1__["replaceElement"])(_constants__WEBPACK_IMPORTED_MODULE_0__["tripEventsList"], card, cardEdit, _utils__WEBPACK_IMPORTED_MODULE_1__["EventOption"].removeEvent, onEscKeyDown);
    });


  cardEdit.getElement()
    .addEventListener(`submit`, (evt) => {
        evt.preventDefault();
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["replaceElement"])(_constants__WEBPACK_IMPORTED_MODULE_0__["tripEventsList"], card, cardEdit, _utils__WEBPACK_IMPORTED_MODULE_1__["EventOption"].removeEvent, onEscKeyDown);
    });

  Object(_utils__WEBPACK_IMPORTED_MODULE_1__["render"])(_constants__WEBPACK_IMPORTED_MODULE_0__["tripEventsList"], card.getElement(), _utils__WEBPACK_IMPORTED_MODULE_1__["Position"].BEFOREEND);
};

const renderCardAdd = () => {
  const cardAdd = new _components_card_new__WEBPACK_IMPORTED_MODULE_14__["AddNewEvent"]();
  Object(_utils__WEBPACK_IMPORTED_MODULE_1__["render"])(_constants__WEBPACK_IMPORTED_MODULE_0__["tripEvents"], cardAdd.getElement(), _utils__WEBPACK_IMPORTED_MODULE_1__["Position"].AFTERBEGIN);
};

const renderRoute = (route) => {
  const cardRoute = new _components_card_route__WEBPACK_IMPORTED_MODULE_9__["CreateCardRoute"](route);
  Object(_utils__WEBPACK_IMPORTED_MODULE_1__["render"])(_constants__WEBPACK_IMPORTED_MODULE_0__["tripInfo"], cardRoute.getElement(), _utils__WEBPACK_IMPORTED_MODULE_1__["Position"].AFTERBEGIN);
};

const renderControls = (controls) => {
  const controlRoute = new _components_controls__WEBPACK_IMPORTED_MODULE_10__["CreateControls"](controls);
  Object(_utils__WEBPACK_IMPORTED_MODULE_1__["render"])(_constants__WEBPACK_IMPORTED_MODULE_0__["tripControls"], controlRoute.getElement(), _utils__WEBPACK_IMPORTED_MODULE_1__["Position"].AFTERBEGIN);
};

const renderFilters = (filters) => {
  const filtersRoute = new _components_filters__WEBPACK_IMPORTED_MODULE_11__["CreateFilters"](filters);
  Object(_utils__WEBPACK_IMPORTED_MODULE_1__["render"])(_constants__WEBPACK_IMPORTED_MODULE_0__["tripControls"], filtersRoute.getElement(), _utils__WEBPACK_IMPORTED_MODULE_1__["Position"].BEFOREEND);
};

const renderSorting = (sorting) => {
  const sortingRoute = new _components_sorting__WEBPACK_IMPORTED_MODULE_12__["CreateSorting"](sorting);
  Object(_utils__WEBPACK_IMPORTED_MODULE_1__["render"])(_constants__WEBPACK_IMPORTED_MODULE_0__["tripEvents"], sortingRoute.getElement(), _utils__WEBPACK_IMPORTED_MODULE_1__["Position"].AFTERBEGIN);
};

const renderCosts = (costs) => {
  const costItems = new _components_trip_cost__WEBPACK_IMPORTED_MODULE_13__["TripCost"](costs);
  Object(_utils__WEBPACK_IMPORTED_MODULE_1__["render"])(_constants__WEBPACK_IMPORTED_MODULE_0__["tripInfo"], costItems.getElement(), _utils__WEBPACK_IMPORTED_MODULE_1__["Position"].BEFOREEND)
};

const cardMocks = new Array(_constants__WEBPACK_IMPORTED_MODULE_0__["CARD_COUNT"]).fill(``).map(_mocks_card__WEBPACK_IMPORTED_MODULE_2__["card"]);

const renderCardTypes = () => {
  if (cardMocks.length > 0) {
    cardMocks.forEach((cardMock) => renderCards(cardMock))
  } else {
    renderCardAdd();
  }
};

renderCardTypes();
renderRoute(Object(_mocks_card__WEBPACK_IMPORTED_MODULE_2__["card"])());
renderControls(_mocks_controls__WEBPACK_IMPORTED_MODULE_4__["controls"]);
renderFilters(_mocks_filters__WEBPACK_IMPORTED_MODULE_3__["filters"]);
renderSorting(_mocks_sorting__WEBPACK_IMPORTED_MODULE_5__["sorting"]);

const price = document.querySelectorAll(`.event__price-value`);
const addPrice = document.querySelectorAll(`.event__offer-price`);
renderCosts(Object(_mocks_trip_cost__WEBPACK_IMPORTED_MODULE_6__["tripCost"])(price, addPrice));


/***/ }),

/***/ "./src/mocks/card.js":
/*!***************************!*\
  !*** ./src/mocks/card.js ***!
  \***************************/
/*! exports provided: card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "card", function() { return card; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants.js");


const card = () => ({
  point: {
    basePrice: Math.floor(Math.random() * 1000),
    dateFrom: new Date(`2019-07-10T22:55:56.845Z`),
    dateTo: new Date(`2019-07-11T11:22:13.375Z`),
    destination: {
      description: [
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget.`,
        `Fusce tristique felis at fermentum pharetra.`,
        `Aliquam id orci ut lectus varius viverra.`,
        `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
        `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
        `Sed sed nisi sed augue convallis suscipit in sed felis.`,
        `Aliquam erat volutpat.`,
        `unc fermentum tortor ac porta dapibus.`,
        `In rutrum ac purus sit amet tempus.`
      ][Math.floor(Math.random() * 3)],
      name: _constants__WEBPACK_IMPORTED_MODULE_0__["cities"][Math.floor(Math.random() * _constants__WEBPACK_IMPORTED_MODULE_0__["cities"].length)],
      photos: [
        {
          src: _constants__WEBPACK_IMPORTED_MODULE_0__["photosArray"].map(() => `http://picsum.photos/300/150?r=`),
        }
      ]
    },
    isFavorite: Boolean(Math.round(Math.random())),
    offers: {
      type: [`Taxi`, `Bus`, `Train`, `Flight`, `Check-in`, `Sightseeing`][Math.floor(Math.random() * 6)],
      offer: [
        {
          name: [`Upgrade to a business class`, `Add luggage`, `Switch to comfort class`, `Add meal`, `Choose seats`][Math.floor(Math.random() * 5)],
          price: Math.floor(Math.random() * 250)
        }, {
          name: [`Upgrade to a business class`, `Add luggage`, `Switch to comfort class`, `Add meal`, `Choose seats`][Math.floor(Math.random() * 5)],
          price: Math.floor(Math.random() * 250)
        }
      ]
    },
    type: [`Taxi`, `Bus`, `Train`, `Flight`, `Check-in`, `Sightseeing`][Math.floor(Math.random() * 6)]
  },
});


/***/ }),

/***/ "./src/mocks/controls.js":
/*!*******************************!*\
  !*** ./src/mocks/controls.js ***!
  \*******************************/
/*! exports provided: controls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "controls", function() { return controls; });
const controls = [`Table`, `Stats`];



/***/ }),

/***/ "./src/mocks/filters.js":
/*!******************************!*\
  !*** ./src/mocks/filters.js ***!
  \******************************/
/*! exports provided: filters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filters", function() { return filters; });
const filters = [
  {
    filter: `Everything`,
    isChecked: Boolean(Math.round(Math.random()))
  },
  {
    filter: `Future`,
    isChecked: Boolean(Math.round(Math.random()))

  },
  {
    filter: `Past`,
    isChecked: Boolean(Math.round(Math.random()))

  }
];


/***/ }),

/***/ "./src/mocks/sorting.js":
/*!******************************!*\
  !*** ./src/mocks/sorting.js ***!
  \******************************/
/*! exports provided: sorting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sorting", function() { return sorting; });
const sorting = [
  {
    sorting: `Event`,
    isChecked: Boolean(Math.round(Math.random()))
  },
  {
    sorting: `Time`,
    isChecked: Boolean(Math.round(Math.random()))
  },
  {
    sorting: `Price`,
    isChecked: Boolean(Math.round(Math.random()))
  }
];


/***/ }),

/***/ "./src/mocks/trip-cost.js":
/*!********************************!*\
  !*** ./src/mocks/trip-cost.js ***!
  \********************************/
/*! exports provided: tripCost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tripCost", function() { return tripCost; });
const tripCost = (price, priceAdd) => {
  let totalPrice = 0;
  let totalPriceAdd = 0;

  price.forEach((item) => {
    totalPrice += +item.innerHTML;
  });

  priceAdd.forEach((add) => {
    totalPriceAdd += +add.innerHTML;
  });

  let total = totalPrice + totalPriceAdd;

  return total;
};


/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: getDuration, getMonth, EventOption, replaceElement, Position, createElement, render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDuration", function() { return getDuration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMonth", function() { return getMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventOption", function() { return EventOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceElement", function() { return replaceElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Position", function() { return Position; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.js");



const getDuration = (start, end) => end - start;

const getMonth = () => _constants__WEBPACK_IMPORTED_MODULE_0__["monthNames"][_constants__WEBPACK_IMPORTED_MODULE_0__["startMonth"]];

const EventOption = {
  addEvent: `addEventListener`,
  removeEvent: `removeEventListener`
};

const replaceElement = (container, replacedElem, replaceElem, option, onEscKeyDown) => {
  container.replaceChild(replacedElem.getElement(), replaceElem.getElement());
  switch (option) {
    case EventOption.addEvent:
      document.addEventListener(`keydown`, onEscKeyDown);
      break;
    case EventOption.removeEvent:
      document.removeEventListener(`keydown`, onEscKeyDown);
      break;
  }
};

const Position = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`
};

const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;
  return newElement.firstChild;
};

const render = (container, element, place) => {
  switch (place) {
    case Position.AFTERBEGIN:
      container.prepend(element);
      break;
    case Position.BEFOREEND:
      container.append(element);
      break;
  }
};

const unrender = (element) => {
  if (element) {
    element.remove();
  }
};




/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map