> 工作中经常用到Promise，但是具体实现原理并不是很懂。通过学习手撕Promise

#### Promise是什么
1. Promise是JS中进行异步编程的新解决方案（ES6规范）
2. 从语法上讲Promise是一个构造函数
3. 从功能上讲Promise对象用来封装一个异步操作并可以获取其成功/失败的结果值 

##### Promise的优点
1. 指定回到函数的方式更加灵活
2. 支持链式调用，解决回调地狱

##### Promise的缺点
1. 无法取消Promise，一旦新建它就会立即执行，中途无法取消
2. 当处于pending状态时，无法得知进展到哪一阶段
3. 不设置回调函数，Promise内部抛出的错误，不会反应到外部。

#### Promise对象
1. Promise的状态-[PromiseState]
    - 默认状态 pending 
    - 成功状态 resolved/fulfilled
    - 失败状态 rejected 
2. Promise的结果-[PromiseResult]

#### Promise的具体功能有

```js
1. new Promise((resovle, reject) => {})
2. Promise.reject()
3. Promise.resolve()
4. Promise.all()
5. Promise.race()
6.  let pro1 = new Promise.reject('fulfilled')
    let pro2 = pro1.then((value)=> value, (reason)=> reason)
```
#### Promise功能实现
```js
// 构造函数
functon MyPromise(executor) {
    // 初始化默认状态
    this.PromiseState = 'pending'
    // 初始化默认数据
    this.PromiseResult = null
    const selft = this
    // 异步回调函数
    this.callbacks = []
    function resolve(data) {
        // 判断状态是否变化，变化后不允许执行
        if(self.PromiseState !== 'pending') return
        // 更改状态
        self.PromiseState = 'fulfilled'
        // 赋值结果
        self.PromiseResult = data
        // 执行异步回调
        setTimeout(() => {
            self.callbacks.forEacht(item => item.onResolved())
        })
    }
    function reject(data) {
        if(self.PromiseState !== 'pending') return
        self.PromiseState = 'rejected'
        self.PromiseResult = data
        setTimeout(() => {
            self.callbacks.forEacht(item => item.onRejected())
        })
    }
    // 捕获异常
    try{
        executor(resolve, reject)
    } catch(e) {
        reject(e)
    }
}
// 原型对象添加then方法，供实例调用
MyPromise.prototype.then = funtion(onResolved, onRejected) {
    const self = this
    if(typeof onResolved !== 'function') {
        onResolved = (v) => v
    }
    if(typeof onRejected !== 'function') {
        onRejected = (r) => {
            throw r
        }
    }
    // 返回MyPromise对象
    retrun new MyPromise((resolve, reject) => {
        // 回调函数
        function callback(fn) {
            try {
                let result = fn(self.PromiseResult)
                if(result instanceof MyPromise) {
                    result.then(v => resolve(v), r => reject(r))
                } else {
                    resolve(result)
                }
            } catch(e) {
                reject(e)
            }
        }
        // 状态为fulfilled，执行onResolved
        if(self.PromiseState === 'fulfilled') {
            setTimeout(() => { callback(onResolved) })
        }
        // 状态为rejected，执行onRejected
        if(self.PromiseState === 'rejected') {
            setTimeout(() => { callback(onRejected) })
        }
        // 状态为pending，添加回调方法callbacks
        if(self.PromiseState === 'pending') {
            self.callbacks.push({
                onResolved: function() {
                    callback(onResolved)
                },
                onRejected: function() {
                    callback(onRejected)
                }
            })
        }
    })
}
// 原型对象添加catch方法
MyPromise.prototype.catch = function(onRejected) {
    // 直接调用then方法中的onRejected方法
    return this.then(undefined, onRejected)
}
// 构造函数添加resolve方法
MyPromise.resolve = function(data) {
    // 返回MyPromise对象
    return new MyPromise((resolve, reject) => {
        // 判断入参是否MyPromise对象
        if(data instanceof MyPromise) {
            data.then(v => resolve(v), r => reject(r))
        } else {
            reject(data)
        }
    })
}
// 构造函数添加reject方法
MyPromise.reject = function(data) {
    // 返回MyPromise对象
    return new MyPromise((resolve, reject) => {
        reject(data)
    })
}
//  构造函数添加all方法
MyPromise.all = function(promises) {
    // 返回MyPromise对象
    return new MyPromise((resolve, reject) => {
        let arr = [], len = promises.length
        // 遍历所有promises
        for(let i = 0; i < len; i++) {
            promises[i].then(v => {
                arr[i] = v
                if(i === len-1) resolve(arr)
            }, r => {
                reject(r)
            })
        }
    })
}
//  构造函数添加race方法
MyPromise.race = function(promises) {
    // 返回MyPromise对象
    return new MyPromise((resolve, reject) => {
        for(let i = 0; i < promises.length; i++) {
            promises[i].then(v => resolve(v), r => reject(r))
        }
    })
}
```
#### Promise和Async/Await的区别
async/await表达式是用同步方式，执行异步操作
1. async函数
    - 函数的返回值为Promise对象
    - promise对象的结果由async函数执行的返回值决定。（和Promise的then方法返回结果规则一样）
2. await表达式
    - await必须写在async函数中，但async函数可以没有await
    - await表达式右侧为proimse对象或其他值，如果是promise对象，await返回是promise成功的值，如果是其他值，直接作为await返回值
    - 如果await失败了，就会抛出异常，需要try...catch捕获处理
    
3. 对比优缺点：
    - 优点
        + 做到了串行同步写法，代码阅读相对容易
    - 缺点
        + 用await可能会导致性能问题
        + 无法处理Promise返回的reject对象，需要接触try...catch
        + try..catch 内部的变量无法传给下一代
    


#### 备注
>  手撕promise详细代码 https://github.com/web-ljc/JS/tree/master/ES6/Promise       
>  学习视频 https://www.bilibili.com/video/BV1GA411x7z1?spm_id_from=333.999.0.0