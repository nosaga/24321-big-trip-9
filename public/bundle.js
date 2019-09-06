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
  constructor({tripRoute, activity, description, options, photos, transfer}) {
    this._tripRoute = tripRoute;
    this._transfer = transfer;
    this._activity = activity;
    this._description = description;
    this._options = options;
    this._photos = photos;
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
    return `<li class="trip-events__item">
      <form class="event  event--edit" action="#" method="post">
        <header class="event__header">
          ${this._tripRoute.map((trip) => `
            <div class="event__type-wrapper">
              <label class="event__type  event__type-btn" for="event-type-toggle-1">
                <span class="visually-hidden">Choose event type</span>
                <img class="event__type-icon" width="17" height="17" src="${trip.icon}" alt="Event type icon">
              </label>
              <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">
        
              <div class="event__type-list">
                <fieldset class="event__type-group">
                  <legend class="visually-hidden">Transfer</legend>
                    ${this._transfer.map((option) => `
                      <div class="event__type-item">
                        <input id="event-type-${option}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${option}">
                        <label class="event__type-label  event__type-label--${option.toLowerCase()}" for="event-type-${option}-1">${option}</label>
                      </div>`).join(``)}
                </fieldset>
                <fieldset class="event__type-group">
                  <legend class="visually-hidden">Activity</legend>
                  ${this._activity.map((act) => `
                    <div class="event__type-item">
                      <input id="event-type-${act}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${act}">
                      <label class="event__type-label  event__type-label--${act.toLowerCase()}" for="event-type-check-in-1">${act}</label>
                    </div>
                  `).join(``)}
                </fieldset>
              </div>
          </div>`)[0]}
          <div class="event__field-group  event__field-group--destination">
            ${this._tripRoute.map((point) => `
              <label class="event__label  event__type-output" for="event-destination-1">
                ${point.type} to
              </label>
              <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${point.point}" list="destination-list-1">
             `)[0]}
              <datalist id="destination-list-1">
                ${this._tripRoute.map((points) => `
                  <option value="${points.point}"></option>
                `).join(``)}
              </datalist>
          </div>
          <div class="event__field-group  event__field-group--time">
            ${this._tripRoute.map((date) => `
              <label class="visually-hidden" for="event-start-time-1">
                From
              </label>
              <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${date.startDate.getDate()}/${date.startDate.getMonth()}/${date.startDate.getFullYear()} ${date.startTime[0]}:${date.startTime[1]}">
              —
              <label class="visually-hidden" for="event-end-time-1">
                To
              </label>
              <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${date.endDate.getDate()}/${date.endDate.getMonth()}/${date.endDate.getFullYear()} ${date.endTime[0]}:${date.endTime[0]}">
              `)[0]}
          </div>
          <div class="event__field-group  event__field-group--price">
            <label class="event__label" for="event-price-1">
              <span class="visually-hidden">Price</span>
              €
            </label>
              ${this._tripRoute.map((price) => `
                <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${price.price}">
                `)[Math.floor(Math.random() * this._tripRoute.length)]}
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
                ${this._options.map((it) => `
                  <div class="event__offer-selector">
                    <input class="event__offer-checkbox  visually-hidden" id="event-offer-${it.value}-1" type="checkbox" name="event-offer-${it.value}" ${it.isChecked ? `checked` : ``}>
                    <label class="event__offer-label" for="event-offer-${it.value}-1">
                      <span class="event__offer-title">${it.type}</span>
                      +
                      €&nbsp;<span class="event__offer-price">${it.price}</span>
                    </label>
                  </div>`).join(``)}
              </div>
          </section>
          <section class="event__section  event__section--destination">
            <h3 class="event__section-title  event__section-title--destination">Destination</h3>
            <p class="event__destination-description">${this._description}</p>
      
            <div class="event__photos-container">
              <div class="event__photos-tape">
               ${this._photos.map((photo) => `
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


class CreateCardRoute {
  constructor({cityStart, cityTransfer, cityEnd, startMonth, startDate, endDate}) {
    this._cityStart = cityStart;
    this._cityTransfer = cityTransfer;
    this._cityEnd = cityEnd;
    this._startMonth = startMonth;
    this._startDate = startDate;
    this._endDate = endDate;
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
      <h1 class="trip-info__title">${this._cityStart} &mdash; ${this._cityTransfer !== `` ? `...&mdash;` : ``}   ${this._cityEnd}</h1>
      <p class="trip-info__dates">${this._startMonth} ${this._startDate.getUTCDate()}&nbsp;—&nbsp;${this._endDate.getUTCDate()}</p>
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
  constructor({tripRoute, options}) {
    this._tripRoute = tripRoute;
    this._options = options;
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
    return `<li class="trip-events__item">
      ${this._tripRoute.map((trip) => `
        <div class="event">
          <div class="event__type">
            <img class="event__type-icon" width="42" height="42" src="${trip.icon}" alt="Event type icon">
          </div>
          <h3 class="event__title">${trip.type} ${trip.point}</h3>
          <div class="event__schedule">
            <p class="event__time">
              <time class="event__start-time" datetime="2019-03-18T10:30">${trip.startTime[0]}:${trip.startTime[1]}</time>
              —
              <time class="event__end-time" datetime="2019-03-18T11:00">${trip.endTime[0]}:${(trip.endTime[1])}</time>
            </p>
            <p class="event__duration">${trip.durationHours}H ${trip.durationMinutes}M</p>
          </div>
          <p class="event__price">
            €&nbsp;<span class="event__price-value">${trip.price}</span>
          </p>
          <h4 class="visually-hidden">Offers:</h4>
          <ul class="event__selected-offers">
          ${this._options.map((option) => ` 
            <li class="event__offer">
              <span class="event__offer-title">${option.type}</span>
              +
              €&nbsp;<span class="event__offer-price">${option.price}</span>
             </li>
             `)[Math.floor(Math.random() * this._options.length)]}
          </ul>
          <button class="event__rollup-btn" type="button">
            <span class="visually-hidden">Open event</span>
          </button>
        </div>
        `)[Math.floor(Math.random() * this._tripRoute.length)]}
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
/*! exports provided: tripInfo, tripControls, tripEvents, tripEventsList, form, CARD_COUNT, partialPath, cities, sightseeings, activity, transfer, startMonth, startDate, endDate, startTimeHours, startTimeMinutes, monthNames, photosArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tripInfo", function() { return tripInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tripControls", function() { return tripControls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tripEvents", function() { return tripEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tripEventsList", function() { return tripEventsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "form", function() { return form; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CARD_COUNT", function() { return CARD_COUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "partialPath", function() { return partialPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cities", function() { return cities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sightseeings", function() { return sightseeings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activity", function() { return activity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transfer", function() { return transfer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startMonth", function() { return startMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startDate", function() { return startDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endDate", function() { return endDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startTimeHours", function() { return startTimeHours; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startTimeMinutes", function() { return startTimeMinutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monthNames", function() { return monthNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "photosArray", function() { return photosArray; });
const tripInfo = document.querySelector(`.trip-main__trip-info`);
const tripControls = document.querySelector(`.trip-main__trip-controls`);
const tripEvents = document.querySelector(`.trip-events`);
const tripEventsList = document.querySelector(`.trip-events__list`);
const form = document.querySelector(`form`);


const CARD_COUNT = 3;

const partialPath = `img/icons/`;
const cities = [`Helsinki`, `Stockholm`, `Amsterdam`, `Airport`];
const sightseeings = [`Natural History Museum`, `Theater`, `Park`];
const activity = [`Sightseeing`, `Restaurant`, `Check-in`];
const transfer = [`Taxi`, `Bus`, `Train`, `Ship`, `Transport`, `Drive`, `Flight`];
const monthNames = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`];
const startMonth = new Date(2020, 5, 1, 8, 30, 0, 0).getMonth();
const startDate = new Date(2020, 5, 1, 8, 30, 0, 0);
const endDate = new Date(2020, 5, 8, 0, 30, 0, 0);
const startTimeHours = new Date(2020, 5, 1, 8, 30, 0, 0).getHours();
const startTimeMinutes = new Date(2020, 5, 1, 8, 30, 0, 0).getMinutes();
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
/* harmony import */ var _mocks_card_route__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mocks/card-route */ "./src/mocks/card-route.js");
/* harmony import */ var _mocks_controls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mocks/controls */ "./src/mocks/controls.js");
/* harmony import */ var _mocks_sorting__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mocks/sorting */ "./src/mocks/sorting.js");
/* harmony import */ var _mocks_trip_cost__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mocks/trip-cost */ "./src/mocks/trip-cost.js");
/* harmony import */ var _components_cards__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/cards */ "./src/components/cards.js");
/* harmony import */ var _components_card_edit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/card-edit */ "./src/components/card-edit.js");
/* harmony import */ var _components_card_route__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/card-route */ "./src/components/card-route.js");
/* harmony import */ var _components_controls__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/controls */ "./src/components/controls.js");
/* harmony import */ var _components_filters__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/filters */ "./src/components/filters.js");
/* harmony import */ var _components_sorting__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/sorting */ "./src/components/sorting.js");
/* harmony import */ var _components_trip_cost__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/trip-cost */ "./src/components/trip-cost.js");
/* harmony import */ var _components_card_new__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/card-new */ "./src/components/card-new.js");




















const renderCards = (cardMock) => {
  const card = new _components_cards__WEBPACK_IMPORTED_MODULE_8__["Card"](cardMock);
  const cardEdit = new _components_card_edit__WEBPACK_IMPORTED_MODULE_9__["CardEdit"](cardMock);

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


  _constants__WEBPACK_IMPORTED_MODULE_0__["tripEventsList"]
    .addEventListener(`submit`, (evt) => {
      let target = evt.target;
      if (target.tagName === `FORM`) {
        evt.preventDefault();
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["replaceElement"])(_constants__WEBPACK_IMPORTED_MODULE_0__["tripEventsList"], card, cardEdit, _utils__WEBPACK_IMPORTED_MODULE_1__["EventOption"].removeEvent, onEscKeyDown);
      }
    });

  Object(_utils__WEBPACK_IMPORTED_MODULE_1__["render"])(_constants__WEBPACK_IMPORTED_MODULE_0__["tripEventsList"], card.getElement(), _utils__WEBPACK_IMPORTED_MODULE_1__["Position"].BEFOREEND);
};

const renderCardAdd = () => {
  const cardAdd = new _components_card_new__WEBPACK_IMPORTED_MODULE_15__["AddNewEvent"]();
  Object(_utils__WEBPACK_IMPORTED_MODULE_1__["render"])(_constants__WEBPACK_IMPORTED_MODULE_0__["tripEvents"], cardAdd.getElement(), _utils__WEBPACK_IMPORTED_MODULE_1__["Position"].AFTERBEGIN);
};

const renderRoute = (route) => {
  const cardRoute = new _components_card_route__WEBPACK_IMPORTED_MODULE_10__["CreateCardRoute"](route);
  Object(_utils__WEBPACK_IMPORTED_MODULE_1__["render"])(_constants__WEBPACK_IMPORTED_MODULE_0__["tripInfo"], cardRoute.getElement(), _utils__WEBPACK_IMPORTED_MODULE_1__["Position"].AFTERBEGIN);
};

const renderControls = (controls) => {
  const controlRoute = new _components_controls__WEBPACK_IMPORTED_MODULE_11__["CreateControls"](controls);
  Object(_utils__WEBPACK_IMPORTED_MODULE_1__["render"])(_constants__WEBPACK_IMPORTED_MODULE_0__["tripControls"], controlRoute.getElement(), _utils__WEBPACK_IMPORTED_MODULE_1__["Position"].AFTERBEGIN);
};

const renderFilters = (filters) => {
  const filtersRoute = new _components_filters__WEBPACK_IMPORTED_MODULE_12__["CreateFilters"](filters);
  Object(_utils__WEBPACK_IMPORTED_MODULE_1__["render"])(_constants__WEBPACK_IMPORTED_MODULE_0__["tripControls"], filtersRoute.getElement(), _utils__WEBPACK_IMPORTED_MODULE_1__["Position"].BEFOREEND);
};

const renderSorting = (sorting) => {
  const sortingRoute = new _components_sorting__WEBPACK_IMPORTED_MODULE_13__["CreateSorting"](sorting);
  Object(_utils__WEBPACK_IMPORTED_MODULE_1__["render"])(_constants__WEBPACK_IMPORTED_MODULE_0__["tripEvents"], sortingRoute.getElement(), _utils__WEBPACK_IMPORTED_MODULE_1__["Position"].AFTERBEGIN);
};

const renderCosts = (costs) => {
  const costItems = new _components_trip_cost__WEBPACK_IMPORTED_MODULE_14__["TripCost"](costs);
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
renderRoute(Object(_mocks_card_route__WEBPACK_IMPORTED_MODULE_4__["getCardRoute"])());
renderControls(_mocks_controls__WEBPACK_IMPORTED_MODULE_5__["controls"]);
renderFilters(_mocks_filters__WEBPACK_IMPORTED_MODULE_3__["filters"]);
renderSorting(_mocks_sorting__WEBPACK_IMPORTED_MODULE_6__["sorting"]);

const price = document.querySelectorAll(`.event__price-value`);
const addPrice = document.querySelectorAll(`.event__offer-price`);
renderCosts(Object(_mocks_trip_cost__WEBPACK_IMPORTED_MODULE_7__["tripCost"])(price, addPrice));


/***/ }),

/***/ "./src/mocks/card-route.js":
/*!*********************************!*\
  !*** ./src/mocks/card-route.js ***!
  \*********************************/
/*! exports provided: getCardRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCardRoute", function() { return getCardRoute; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants.js");



const getCardRoute = () => ({
  cityStart: [`Geneva`, `Chamonix`, `Amsterdam`, `Brussels`, `Stockholm`][Math.floor(Math.random() * 5)],
  cityTransfer: [``, `Chamonix`, ``, `Brussels`, `Stockholm`][Math.floor(Math.random() * 5)],
  cityEnd: [`Geneva`, `Chamonix`, `Amsterdam`, `Brussels`, `Stockholm`][Math.floor(Math.random() * 5)],
  startMonth: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getMonth"])(),
  startDate: _constants__WEBPACK_IMPORTED_MODULE_1__["startDate"],
  endDate: _constants__WEBPACK_IMPORTED_MODULE_1__["endDate"]
});


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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants.js");



const card = () => ({
  tripRoute: [
    {
      type: `Taxi`,
      icon: _constants__WEBPACK_IMPORTED_MODULE_1__["partialPath"] + `taxi.png`,
      point: `Airport`,
      price: Math.floor(Math.random() * 50),
      startTime: [_constants__WEBPACK_IMPORTED_MODULE_1__["startTimeHours"], _constants__WEBPACK_IMPORTED_MODULE_1__["startTimeMinutes"]],
      endTime: [_constants__WEBPACK_IMPORTED_MODULE_1__["startTimeHours"] + 1, _constants__WEBPACK_IMPORTED_MODULE_1__["startTimeMinutes"] + 30],
      durationHours: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getDuration"])(_constants__WEBPACK_IMPORTED_MODULE_1__["startTimeHours"], _constants__WEBPACK_IMPORTED_MODULE_1__["startTimeHours"] + 1),
      durationMinutes: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getDuration"])(_constants__WEBPACK_IMPORTED_MODULE_1__["startTimeMinutes"], _constants__WEBPACK_IMPORTED_MODULE_1__["startTimeMinutes"] + 30),
      startDate: _constants__WEBPACK_IMPORTED_MODULE_1__["startDate"],
      endDate: _constants__WEBPACK_IMPORTED_MODULE_1__["endDate"]
    },
    {
      type: `Flight`,
      icon: _constants__WEBPACK_IMPORTED_MODULE_1__["partialPath"] + `flight.png`,
      point: _constants__WEBPACK_IMPORTED_MODULE_1__["cities"][Math.floor(Math.random() * _constants__WEBPACK_IMPORTED_MODULE_1__["cities"].length)],
      price: Math.floor(Math.random() * 500),
      startTime: [_constants__WEBPACK_IMPORTED_MODULE_1__["startTimeHours"] + 1, _constants__WEBPACK_IMPORTED_MODULE_1__["startTimeMinutes"] + 30],
      endTime: [_constants__WEBPACK_IMPORTED_MODULE_1__["startTimeHours"] + 3, _constants__WEBPACK_IMPORTED_MODULE_1__["startTimeMinutes"] + 30],
      durationHours: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getDuration"])(_constants__WEBPACK_IMPORTED_MODULE_1__["startTimeHours"] + 1, _constants__WEBPACK_IMPORTED_MODULE_1__["startTimeHours"] + 3),
      durationMinutes: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getDuration"])(_constants__WEBPACK_IMPORTED_MODULE_1__["startTimeMinutes"] + 30, _constants__WEBPACK_IMPORTED_MODULE_1__["startTimeMinutes"] + 30),
      startDate: _constants__WEBPACK_IMPORTED_MODULE_1__["startDate"],
      endDate: _constants__WEBPACK_IMPORTED_MODULE_1__["endDate"]
    },
    {
      type: `Drive`,
      icon: _constants__WEBPACK_IMPORTED_MODULE_1__["partialPath"] + `bus.png`,
      point: _constants__WEBPACK_IMPORTED_MODULE_1__["cities"][Math.floor(Math.random() * _constants__WEBPACK_IMPORTED_MODULE_1__["cities"].length)],
      price: Math.floor(Math.random() * 50),
      startTime: [_constants__WEBPACK_IMPORTED_MODULE_1__["startTimeHours"] + 3, _constants__WEBPACK_IMPORTED_MODULE_1__["startTimeMinutes"] + 30],
      endTime: [_constants__WEBPACK_IMPORTED_MODULE_1__["startTimeHours"] + 3, _constants__WEBPACK_IMPORTED_MODULE_1__["startTimeMinutes"] + 30],
      durationHours: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getDuration"])(_constants__WEBPACK_IMPORTED_MODULE_1__["startTimeHours"] + 1, _constants__WEBPACK_IMPORTED_MODULE_1__["startTimeHours"] + 3),
      durationMinutes: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getDuration"])(_constants__WEBPACK_IMPORTED_MODULE_1__["startTimeMinutes"] + 30, _constants__WEBPACK_IMPORTED_MODULE_1__["startTimeMinutes"] + 30),
      startDate: _constants__WEBPACK_IMPORTED_MODULE_1__["startDate"],
      endDate: _constants__WEBPACK_IMPORTED_MODULE_1__["endDate"]
    },
    {
      type: `Check in`,
      icon: _constants__WEBPACK_IMPORTED_MODULE_1__["partialPath"] + `check-in.png`,
      point: `hotel`,
      price: Math.floor(Math.random() * 300),
      startTime: [_constants__WEBPACK_IMPORTED_MODULE_1__["startTimeHours"] + 3, _constants__WEBPACK_IMPORTED_MODULE_1__["startTimeMinutes"] + 30],
      endTime: [_constants__WEBPACK_IMPORTED_MODULE_1__["startTimeHours"] + 48, _constants__WEBPACK_IMPORTED_MODULE_1__["startTimeMinutes"] + 30],
      durationHours: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getDuration"])(_constants__WEBPACK_IMPORTED_MODULE_1__["startTimeHours"] + 3, _constants__WEBPACK_IMPORTED_MODULE_1__["startTimeHours"] + 48),
      durationMinutes: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getDuration"])(_constants__WEBPACK_IMPORTED_MODULE_1__["startTimeMinutes"] + 30, _constants__WEBPACK_IMPORTED_MODULE_1__["startTimeMinutes"] + 30),
      startDate: _constants__WEBPACK_IMPORTED_MODULE_1__["startDate"],
      endDate: _constants__WEBPACK_IMPORTED_MODULE_1__["endDate"]
    },
    {
      type: `Sightseeing`,
      icon: _constants__WEBPACK_IMPORTED_MODULE_1__["partialPath"] + `sightseeing.png`,
      point: _constants__WEBPACK_IMPORTED_MODULE_1__["sightseeings"][Math.floor(Math.random() * _constants__WEBPACK_IMPORTED_MODULE_1__["sightseeings"].length)],
      price: Math.floor(Math.random() * 10),
      startTime: [_constants__WEBPACK_IMPORTED_MODULE_1__["startTimeHours"] + 4, _constants__WEBPACK_IMPORTED_MODULE_1__["startTimeMinutes"] + 30],
      endTime: [_constants__WEBPACK_IMPORTED_MODULE_1__["startTimeHours"] + 6, _constants__WEBPACK_IMPORTED_MODULE_1__["startTimeMinutes"] + 30],
      durationHours: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getDuration"])(_constants__WEBPACK_IMPORTED_MODULE_1__["startTimeHours"] + 1, _constants__WEBPACK_IMPORTED_MODULE_1__["startTimeHours"] + 3),
      durationMinutes: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getDuration"])(_constants__WEBPACK_IMPORTED_MODULE_1__["startTimeMinutes"] + 30, _constants__WEBPACK_IMPORTED_MODULE_1__["startTimeMinutes"] + 30),
      startDate: _constants__WEBPACK_IMPORTED_MODULE_1__["startDate"],
      endDate: _constants__WEBPACK_IMPORTED_MODULE_1__["endDate"]
    },
    {
      type: `Restaurant`,
      icon: _constants__WEBPACK_IMPORTED_MODULE_1__["partialPath"] + `restaurant.png`,
      point: `hotel`,
      price: Math.floor(Math.random() * 60),
      startTime: [_constants__WEBPACK_IMPORTED_MODULE_1__["startTimeHours"] + 5, _constants__WEBPACK_IMPORTED_MODULE_1__["startTimeMinutes"] + 30],
      endTime: [_constants__WEBPACK_IMPORTED_MODULE_1__["startTimeHours"] + 7, _constants__WEBPACK_IMPORTED_MODULE_1__["startTimeMinutes"] + 30],
      durationHours: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getDuration"])(_constants__WEBPACK_IMPORTED_MODULE_1__["startTimeHours"] + 1, _constants__WEBPACK_IMPORTED_MODULE_1__["startTimeHours"] + 3),
      durationMinutes: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getDuration"])(_constants__WEBPACK_IMPORTED_MODULE_1__["startTimeMinutes"] + 30, _constants__WEBPACK_IMPORTED_MODULE_1__["startTimeMinutes"] + 30),
      startDate: _constants__WEBPACK_IMPORTED_MODULE_1__["startDate"],
      endDate: _constants__WEBPACK_IMPORTED_MODULE_1__["endDate"]
    },
    {
      type: `Ship`,
      icon: _constants__WEBPACK_IMPORTED_MODULE_1__["partialPath"] + `ship.png`,
      point: _constants__WEBPACK_IMPORTED_MODULE_1__["cities"][Math.floor(Math.random() * _constants__WEBPACK_IMPORTED_MODULE_1__["cities"].length)],
      price: Math.floor(Math.random() * 40),
      startTime: [_constants__WEBPACK_IMPORTED_MODULE_1__["startTimeHours"] + 6, _constants__WEBPACK_IMPORTED_MODULE_1__["startTimeMinutes"] + 30],
      endTime: [_constants__WEBPACK_IMPORTED_MODULE_1__["startTimeHours"] + 8, _constants__WEBPACK_IMPORTED_MODULE_1__["startTimeMinutes"] + 30],
      durationHours: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getDuration"])(_constants__WEBPACK_IMPORTED_MODULE_1__["startTimeHours"] + 1, _constants__WEBPACK_IMPORTED_MODULE_1__["startTimeHours"] + 3),
      durationMinutes: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getDuration"])(_constants__WEBPACK_IMPORTED_MODULE_1__["startTimeMinutes"] + 30, _constants__WEBPACK_IMPORTED_MODULE_1__["startTimeMinutes"] + 30),
      startDate: _constants__WEBPACK_IMPORTED_MODULE_1__["startDate"],
      endDate: _constants__WEBPACK_IMPORTED_MODULE_1__["endDate"]
    },
    {
      type: `Bus`,
      icon: _constants__WEBPACK_IMPORTED_MODULE_1__["partialPath"] + `bus.png`,
      point: _constants__WEBPACK_IMPORTED_MODULE_1__["sightseeings"][Math.floor(Math.random() * _constants__WEBPACK_IMPORTED_MODULE_1__["sightseeings"].length)],
      price: Math.floor(Math.random() * 50),
      startTime: [_constants__WEBPACK_IMPORTED_MODULE_1__["startTimeHours"] + 3, _constants__WEBPACK_IMPORTED_MODULE_1__["startTimeMinutes"] + 30],
      endTime: [_constants__WEBPACK_IMPORTED_MODULE_1__["startTimeHours"] + 3, _constants__WEBPACK_IMPORTED_MODULE_1__["startTimeMinutes"] + 30],
      durationHours: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getDuration"])(_constants__WEBPACK_IMPORTED_MODULE_1__["startTimeHours"] + 3, _constants__WEBPACK_IMPORTED_MODULE_1__["startTimeHours"] + 3),
      durationMinutes: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getDuration"])(_constants__WEBPACK_IMPORTED_MODULE_1__["startTimeMinutes"] + 30, _constants__WEBPACK_IMPORTED_MODULE_1__["startTimeMinutes"] + 30),
      startDate: _constants__WEBPACK_IMPORTED_MODULE_1__["startDate"],
      endDate: _constants__WEBPACK_IMPORTED_MODULE_1__["endDate"]
    },
    {
      type: `Train`,
      icon: _constants__WEBPACK_IMPORTED_MODULE_1__["partialPath"] + `train.png`,
      point: _constants__WEBPACK_IMPORTED_MODULE_1__["cities"][Math.floor(Math.random() * _constants__WEBPACK_IMPORTED_MODULE_1__["cities"].length)],
      price: Math.floor(Math.random() * 30),
      startTime: [_constants__WEBPACK_IMPORTED_MODULE_1__["startTimeHours"] + 1, _constants__WEBPACK_IMPORTED_MODULE_1__["startTimeMinutes"] + 30],
      endTime: [_constants__WEBPACK_IMPORTED_MODULE_1__["startTimeHours"] + 3, _constants__WEBPACK_IMPORTED_MODULE_1__["startTimeMinutes"] + 30],
      durationHours: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getDuration"])(_constants__WEBPACK_IMPORTED_MODULE_1__["startTimeHours"] + 1, _constants__WEBPACK_IMPORTED_MODULE_1__["startTimeHours"] + 3),
      durationMinutes: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getDuration"])(_constants__WEBPACK_IMPORTED_MODULE_1__["startTimeMinutes"] + 30, _constants__WEBPACK_IMPORTED_MODULE_1__["startTimeMinutes"] + 30),
      startDate: _constants__WEBPACK_IMPORTED_MODULE_1__["startDate"],
      endDate: _constants__WEBPACK_IMPORTED_MODULE_1__["endDate"]
    }

  ],

  activity: _constants__WEBPACK_IMPORTED_MODULE_1__["activity"],
  transfer: _constants__WEBPACK_IMPORTED_MODULE_1__["transfer"],

  options: [
    {
      type: `Add luggage`,
      value: `luggage`,
      price: Math.floor(Math.random() * 250),
      isChecked: Boolean(Math.round(Math.random()))
    },
    {
      type: `Switch to comfort class`,
      value: `class`,
      price: Math.floor(Math.random() * 250),
      isChecked: Boolean(Math.round(Math.random()))
    },
    {
      type: `Add meal`,
      value: `meal`,
      price: Math.floor(Math.random() * 5),
      isChecked: Boolean(Math.round(Math.random()))
    },
    {
      type: `Choose seats`,
      value: `seats`,
      price: Math.floor(Math.random() * 30),
      isChecked: Boolean(Math.round(Math.random()))
    }
  ],


  photos: _constants__WEBPACK_IMPORTED_MODULE_1__["photosArray"].map(() => `http://picsum.photos/300/150?r=`),

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
/*! exports provided: getDuration, getMonth, EventOption, replaceElement, Position, createElement, createCardElement, render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDuration", function() { return getDuration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMonth", function() { return getMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventOption", function() { return EventOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceElement", function() { return replaceElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Position", function() { return Position; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCardElement", function() { return createCardElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.js");



const getDuration = (start, end) => end - start;

const getMonth = () => _constants__WEBPACK_IMPORTED_MODULE_0__["monthNames"][_constants__WEBPACK_IMPORTED_MODULE_0__["startMonth"]];

const EventOption = {
  addEvent: `addEventListener`,
  removeEvent: `removeEventListener`
};

const replaceElement = (container, replacedElem, replaceElem, option, cb) => {
  container.replaceChild(replacedElem.getElement(), replaceElem.getElement());
  switch (option) {
    case EventOption.addEvent:
      document.addEventListener(`keydown`, cb);
      break;
    case EventOption.removeEvent:
      document.removeEventListener(`keydown`, cb);
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

const createCardElement = (template) => {
  const newElement = document.createElement(`li`);
  newElement.classList.add(`trip-events__item`);
  newElement.innerHTML = template;
  return newElement;
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