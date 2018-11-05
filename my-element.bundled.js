import { combineReducers, createStore } from 'redux';
import { LitElement, html, property } from '@polymer/lit-element';
import '@material/mwc-button';

/*
 * action types
 */

const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
/*
 * other constants
 */

const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

const { SHOW_ALL } = VisibilityFilters;

function visibilityFilter(state = SHOW_ALL, action) {
   switch (action.type) { 
     case SET_VISIBILITY_FILTER: 
      return action.filter 
     default:
      return state
  } 
}
    
function todos(state = [], action) { 
  switch (action.type) { 
    case ADD_TODO: 
      return [...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO: 
      return state.map((todo, index) => {
         if (index === action.index) {
           return Object.assign({}, todo, {
             completed: !todo.completed
            })
          }
        return todo
      }) 
      default:
        return state
  }
} 
      
const todoApp = combineReducers({
  visibilityFilter,
  todos
});

var _dec, _dec2, _class, _descriptor, _descriptor2;

function _initializerDefineProperty(target, property$$1, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property$$1, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property$$1, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property$$1, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property$$1, desc); desc = null; } return desc; }
const store = createStore(todoApp);
let MyElement = (_dec = property(), _dec2 = property({
  type: Number
}), (_class = class MyElement extends LitElement {
  // Public property API that triggers re-render (synced with attributes)
  constructor() {
    super();

    _initializerDefineProperty(this, "foo", _descriptor, this);

    _initializerDefineProperty(this, "whales", _descriptor2, this);

    this.addEventListener('click', async e => {
      this.whales++;
      await this.updateComplete;
      this.dispatchEvent(new CustomEvent('whales', {
        detail: {
          whales: this.whales
        }
      }));
    });
  } // Render method should return a `TemplateResult` using the provided lit-html `html` tag function


  render() {
    return html`
      <style>
        :host {
          display: block;
        }
        :host([hidden]) {
          display: none;
        }
      </style>
      <h4>Foo: ${this.foo}</h4>
      <mwc-button outlined @click="${this._Actionaufrufen}" >sentiment_very_satisfied</mwc-button>
      <div>whales: ${'🐳'.repeat(this.whales)}</div>
      <slot></slot>
    `;
  }

  _Actionaufrufen() {
    store.dispatch(increment());
  }

}, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "foo", [_dec], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 'foo';
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "whales", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 5;
  }
})), _class));
customElements.define('my-element', MyElement);
