"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe());
    const PORT = 3000;
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Users')
        .setDescription('Testing API Application')
        .setVersion('1.0')
        .addTag('app')
        .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }, 'access-token')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('appiusDoc', app, document);
    app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }));
    await app.listen(PORT, () => {
        console.log(`🚀 Application running at port ${PORT}`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map