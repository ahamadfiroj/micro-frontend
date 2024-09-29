import { Controller, Get, Param } from '@nestjs/common';
import products, {product} from 'src/products';

@Controller('products')
export class ProductsController {
  constructor() {}

  @Get()
  async index(): Promise<product[]> {
    return products;
  }

  @Get(':id')
  async show(@Param('id') id:string): Promise<product> {
    return products.find((product)=> product.id === parseInt(id));
  }
}
