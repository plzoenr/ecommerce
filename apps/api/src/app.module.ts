import {TypeOrmModule} from "@nestjs/typeorm";
import {DataSource} from "typeorm";
import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import { UserModule } from './user/user.module';
import {User} from "./user/user.entity";
import {Product} from "./product/product.entity";
import {ProductModule} from "./product/product.module";

import {ServeStaticModule} from "@nestjs/serve-static";
import {join} from 'path'
import {OrderModule} from "./order/order.module";
import {Order} from "./order/order.entity";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: '',
            password: '',
            database: 'e-commerce',
            autoLoadEntities: true,
            synchronize: true,
            entities: [User, Product, Order]
        }),
        UserModule, ProductModule, OrderModule
        // ServeStaticModule.forRoot({
        //     rootPath: join(__dirname, '../..', 'client', 'dist')
        // }),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
