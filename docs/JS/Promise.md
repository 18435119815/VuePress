## 杂货铺

1.  回调地狱 有空研究一下

```javascript

    function getData(){
        const promise = new Promise((resolve,reject) => {});
    }

    getData().then(() => {
        return getData()
    }).then(() =>{
        return getData()
    }).then(() =>{
        return getData()
    })

```