import express from 'express';

import UserController from './controllers/UserController.js';
import CategoryController from './controllers/CategoryController.js';
import ProductController from './controllers/ProductController.js';
import ProductSoldController from './controllers/ProductSoldController.js';
import CartController from './controllers/CartController.js';
import SaleController from './controllers/SaleController.js';
import ExitController from './controllers/ExitController.js';
import EntranceController from './controllers/EntranceController.js';
import EntranceAndExitController from './controllers/EntranceAndExitController.js';
import SessionController from './controllers/SessionController.js';
import SellerController from './controllers/SellerController.js';
import SellerCommissionController from './controllers/SellerCommissionController.js';

import middleware from './middlewares/session.js';

const routes = express.Router();

// routes.use('/login', async (req, res) => {
//   console.log('rota acessada com sucesso')
//   return res.status(200)
// })

routes.get('/login', SessionController.loginForm);
routes.post('/logout', SessionController.logout);
routes.post('/session', SessionController.store);

routes.get('/sales/:id', SaleController.show);

// routes.use(middleware);

routes.get('/', (req, res) => {
  return res.render('home/index');
});

routes.get('/notpermission', (req, res) => {
  return res.render('notPermission/index');
});

routes.get('/userslist', UserController.index);
routes.get('/users', UserController.create);
routes.post('/users', UserController.store);
routes.get('/users/edit/:id', UserController.edit);
routes.put('/users/edit/:id', UserController.update);
routes.delete('/users/delete/:id', UserController.destroy);

routes.get('/sellers', SellerController.create);
routes.post('/sellers', SellerController.store);
routes.get('/sellerslist', SellerController.index);
routes.get('/sellerslist/:sucesso', SellerController.index);
routes.get('/sellers/edit/:id', SellerController.edit);
routes.put('/sellers/edit/:id', SellerController.update);

routes.get(
  '/sellerscommissions/:id',
  SellerCommissionController.index
);
routes.post(
  '/sellerscommissionsdate/:id',
  SellerCommissionController.index
);

routes.get('/categoryslist', CategoryController.index);
routes.get('/categorys', CategoryController.create);
routes.post('/categorys', CategoryController.store);
routes.get('/categorys/edit/:id', CategoryController.edit);
routes.put('/categorys/edit/:id', CategoryController.update);
routes.delete('/categorys/delete/:id', CategoryController.destroy);

routes.get('/productslist', ProductController.index);
routes.get('/productslist/:sucesso', ProductController.index);
routes.post('/productslist', ProductController.index);
routes.get('/products', ProductController.create);
routes.post('/products', ProductController.store);
routes.get('/products/edit/:id', ProductController.edit);
routes.put('/products/edit/:id', ProductController.update);
routes.delete('/products/delete/:id', ProductController.destroy);

routes.get('/productssoldslist', ProductSoldController.indexProduct);

routes.get('/cart', CartController.index);
routes.post('/cart', CartController.index);
routes.post('/cart/add-one/:id', CartController.addOne);
routes.post('/cart/add-one-barcode', CartController.addOne);
routes.post('/cart/remove-one/:id', CartController.removeOne);
routes.post('/cart/delete/:id', CartController.delete);

routes.post('/sales', SaleController.store);
routes.get('/sales', SaleController.index);
routes.post('/salesdates', SaleController.index);
routes.delete('/sales/delete/:id', SaleController.destroy);
routes.delete('/sales/deleteall', SaleController.destroyAll);

routes.get('/exits', ExitController.index);
routes.post('/exitsdates', ExitController.index);
routes.get('/exits', ExitController.index);
routes.post('/exits', ExitController.store);
routes.get('/exits/edit/:id', ExitController.edit);
routes.put('/exits/edit/:id', ExitController.update);
routes.delete('/exits/delete/:id', ExitController.destroy);

routes.get('/entrances', EntranceController.index);
routes.post('/entrancesdate', EntranceController.index);

routes.get(
  '/entrancesandexitsdatails',
  EntranceAndExitController.index
);
routes.post(
  '/entrancesandexitsdatailsdates',
  EntranceAndExitController.index
);
routes.get('/entrancesandexits', (req, res) => {
  return res.render('entranceandexit/list');
});

export default routes;
