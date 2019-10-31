
// 装饰器工厂
// function Company(name: string) {

//     // 装饰器
//     return function <T extends { new(...args: any[]): {} }> (target: T) {
//         return class extends target {
//             name = name
//         }
//     }
// }

// function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//     console.log(`${Date.now()}:${propertyKey}`);
// }

function log(target: any, propertyKey: string) {
    console.log(`${Date.now()}:${propertyKey}`);
}

// function a() {

// }

// @Company('丰橙CJ')
class CJ {
    // name: string = 'cj';

    @log
    name = 'cj';
    
    // @log
    // print () {
    //     // logger.info(xxx)
    //     console.log('Hello world!');
    // }
}

console.log(new CJ());