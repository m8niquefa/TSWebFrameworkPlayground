import { UserEdit } from './views/UserEdit';
import { User } from './models/User';

const user = User.buildUser({ name: 'Some OTher name', age: 20 });

const rootElement = document.getElementById('root');
if (rootElement) {
  console.log(rootElement);
  const userEdit = new UserEdit(rootElement, user);
  userEdit.render();
  console.log(userEdit);
} else {
  throw new Error('Root element not found');
}
