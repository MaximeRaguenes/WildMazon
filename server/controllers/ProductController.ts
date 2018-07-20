import ProductModel from '../models/ProductModel';
import BaseController from './BaseController';

export default class ProductController extends BaseController {
  model = ProductModel;
}
