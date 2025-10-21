import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';
import { EmployeeModule } from './employee/employee.module';
import { StudentModule } from './student/student.module';
import { CustomerModule } from './customer/customer.module';
import { MyinfoController } from './myinfo/myinfo.controller';
import { BannerModule } from './banner/banner.module';

@Module({
  imports: [EmployeeModule, StudentModule, CustomerModule, BannerModule],
  controllers: [AppController, UserController, ProductController, MyinfoController],
  providers: [AppService, ProductService],
})
export class AppModule {}
