import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'babel-polyfill';
import MutationObserver from 'mutation-observer';

global.MutationObserver = MutationObserver;
document.getSelection = jest.fn();


// global.MutationObserver = () => {};
configure({ adapter: new Adapter() });

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
};
global.localStorage = localStorageMock;
window.confirm = () => true; 
