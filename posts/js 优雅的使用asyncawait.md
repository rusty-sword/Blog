---
title: 优雅使用asyncawait
date: 2019-08-2 13:45:05
description: ES7的async、await语法彻底消除了异步回调，但是在错误处理上却带来了新的问题。。
tag: ES6、JavaScript
---

#### ES7的async、await语法彻底消除了异步回调，但是在错误处理上却带来了新的麻烦

常见的错误处理都是使用try catch语法，感觉相当麻烦。无意中发现有一个[封装函数]([await-to-js - npm (npmjs.com)](https://www.npmjs.com/package/await-to-js))可以摆脱try catch的束缚

```js
// to.js
export default function to(promise) {
   return promise.then(data => {
      return [null, data];
   })
   .catch(err => [err]);
}
// task.js
import to from './to.js';

async function asyncTask() {
     let err, user, savedTask;

     [err, user] = await to(UserModel.findById(1));
     if(!user) throw new CustomerError('No user found');

     [err, savedTask] = await to(TaskModel({userId: user.id, name: 'Demo Task'}));
     if(err) throw new CustomError('Error occurred while saving task');

    if(user.notificationsEnabled) {
       const [err] = await to(NotificationService.sendNotification(user.id, 'Task Created'));  
       if (err) console.error('Just log the error and continue flow');
    }
}
```



