import Home from '../components/Home';
import CreateItem from '../components/CreateItems';
import ItemsDetails from '../components/ItemDetails';
import NotFound from '../components/NotFound';

export const routes = [
  {
    path: '/',
    exact: true,
    key:"Home",
    component: Home
  },
  {
    path: '/create-item',
    exact: true,
    key:"CreateItem",
    component: CreateItem
  },
  {
    path: '/item-details/:id',
    exact: true,
    key:"ItemsDetails",
    component: ItemsDetails
  },
  {
    path: '*',
    exact: true,
    key:"NotFound",
    component: NotFound
  }
];
