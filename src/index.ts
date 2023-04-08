import { UserForm } from './views/UserForm';
import { User } from './models/User';

const user = User.buildUser({ name: 'Some OTher name', age: 20 });

const rootElement = document.getElementById('root');
if (rootElement) {
  console.log(rootElement);
  const userForm = new UserForm(rootElement, user);
  userForm.render();
} else {
  throw new Error('Root element not found');
}
