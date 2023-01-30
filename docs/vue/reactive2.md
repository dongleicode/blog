# vue2的双向数据绑定原理：

---
- [vue2的双向数据绑定原理：](#vue2的双向数据绑定原理)
  - [核心：通过 `Object.defineProperty`进行对象劫持](#核心通过-objectdefineproperty进行对象劫持)
    - [Object.defineProperty是如何监控对象属性的变化，并进行实时数据响应？](#objectdefineproperty是如何监控对象属性的变化并进行实时数据响应)
      - [典型对象分析：普通对象和数组](#典型对象分析普通对象和数组)
        - [1.普通对象劫持](#1普通对象劫持)
        - [2.数组的劫持：通过对数组原生方法的重载实现](#2数组的劫持通过对数组原生方法的重载实现)

## <font color='Magenta'>核心</font>：通过 `Object.defineProperty`进行对象劫持

### Object.defineProperty是<font color='green'>如何监控对象属性的变化，并进行实时数据响应</font>？
---
#### 典型对象分析：普通对象和数组
---


##### 1.普通对象劫持

`代码示例：`

```javascript
    //两个dom
    Object.defineProperty:<input type="text" id="text1"><br/>
    user.name:<div id="obj1"></div><br/>

    //js代码
    let user = {
        name: 'defineProperty',
        age: 18,
        obj: {
            age: 23
        }
    }

    let list = [1, 2]
    Object.keys(user).forEach(key => {
        let oldV = user[key]
        Object.defineProperty(user, key, {
            get(){
                console.log('%c 调用get', 'color: #ccc',`获取${key}属性: ${oldV}`)
                return oldV
            },
            set(val){
                console.log('%c 调用set', 'color: red',`修改${key}属性：${val}`)
                text1.value = val  //改变input
                changeDom1(val)   //改变dom
                oldV = val
            }
        })
    })

    //input输入数据改变
    text1.oninput = function(e) {
        user.name = e.target.value;
    }

    //dom数据改变
    function changeDom1(str) {
        obj1.innerHTML = str
    }
```

##### 2.数组的劫持：通过对数组原生方法的重载实现

`代码示例：`

```javascript
let list = [1, 2]
let arr = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse']
arr.forEach(method => {
    let original = Array.prototype[method]
    Object.defineProperty(Array.prototype, method, {
        value() {
            console.log('%c 调用数组方法', 'color: green', method)
            original.apply(this, arguments)
        }
    })
})

list.pop(9)
// list.splice(0, 1)
console.log(list)
```
