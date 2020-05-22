import Home from '../components/Home';
import CreateItem from '../components/CreateItems';
import ItemsDetails from '../components/ItemDetails';

export const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/create-items',
    exact: true,
    component: CreateItem
  },
  {
    path: '/item-details/:id',
    exact: true,
    component: ItemsDetails
  },
  {
    path: '*',
    exact: true,
    component: Home
  }
];
