module.exports = {

    'type': 'mysql',
    'host': 'berbsteam.com',
    'port': 3306,
    'username': 'clin9436_dev',
    'password': 'dev123',
    'database': 'clin9436_appius_dev',
    'synchronize': true,
    //'entities': ["src/**/**entity{.ts,.js}"],
    entities: ["dist/**/*.entity.js"]

}
