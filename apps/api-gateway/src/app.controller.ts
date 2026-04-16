import { Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import type { ClickActionResponse } from '@repo/types';

@Controller('v1/actions')
export class AppController {
  @Post('click')
  @HttpCode(HttpStatus.OK)
  handleClick(): ClickActionResponse {
    return {
      id: Math.random().toString(36).substring(7),
      status: 'CLICKED',
      message: 'State updated successfully',
      payload: {
        lastClickedAt: new Date().toISOString(),
        clickCount: 1,
        processedBy: 'api-gateway-v1',
      },
      serverInfo: {
        version: '1.0.0-enterprise',
        environment: 'development',
      },
    };
  }
}
