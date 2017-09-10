import _ from 'lodash';
import styles from './less/styles.less';

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  element.classList.add('greeting');

  return element;
}

document.body.appendChild(component());
