import { Body, Controller, Post } from '@nestjs/common';
import { UppercasePipe } from 'src/common/pipe/uppercase/uppercase/uppercase.pipe';

@Controller('myinfo')
export class MyinfoController {
  @Post('custom')
  transform(@Body('name', new UppercasePipe()) name: string) {
    return {message: `Received Name : ${name}`};
  }
}
