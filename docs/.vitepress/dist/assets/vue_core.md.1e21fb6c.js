import{_ as e,c as t,o as n,d as r}from"./app.de17f45f.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"总结：proxy和defineProperty对比","slug":"总结-proxy和defineproperty对比","link":"#总结-proxy和defineproperty对比","children":[]}],"relativePath":"vue/core.md"}'),o={name:"vue/core.md"},d=r(`<h1>defineProperty和proxy的异同：</h1><pre><code>vue2 与 vue3的核心方法不同：
1、区别一：监听方式
          defineProperty 是对属性劫持，
          proxy 是对代理对象
2、区别二：对象新增属性
          defineProperty 无法监听对象新增属性，
          proxy 可以
3、区别三：对象删除属性
          defineProperty 无法监听对象删除属性，proxy 可以
          proxy 有专门针对属性删除的方法 deleteProperty，可以在对象属性被删除时触发

4、区别四：数组监听
            defineProperty 不能监听数组（原来没有的）下标改变值的变化，
            proxy 可以且不需要对数组的方法进行重载

            问题：数组的 push、pop、shift、unshift、splice、sort，reverse是无法触发 set 方法的？
            解决方法：Vue 中能对数组的这些方法监听到是因为 Vue 源码对数组的这些方法进行了重载：

            [&#39;push&#39;, &#39;pop&#39;, &#39;shift&#39;, &#39;unshift&#39;, &#39;splice&#39;, &#39;sort&#39;, &#39;reverse&#39;].forEach(method =&gt; {
                let original = Array.prototype[method]
                Object.defineProperty(Array.prototype, method, {
                value() {
                    console.log(&#39;%c 调用数组方法&#39;, &#39;color: green&#39;, method)
                    original.apply(this, arguments)
                }
                })
            })
           

5、区别五：性能上
            defineProperty 是循环遍历对象属性的方式来进行监听，
            自然会比 proxy 对整个对象进行监听的方式要耗性能。

6、相同点：不支持深层嵌套
</code></pre><h2 id="总结-proxy和defineproperty对比" tabindex="-1">总结：proxy和defineProperty对比 <a class="header-anchor" href="#总结-proxy和defineproperty对比" aria-hidden="true">#</a></h2><table><thead><tr><th style="text-align:center;">名称</th><th style="text-align:center;">set</th><th style="text-align:center;">get</th><th style="text-align:center;">add</th><th style="text-align:center;">delete</th><th style="text-align:center;">apply</th><th style="text-align:center;">性能</th></tr></thead><tbody><tr><td style="text-align:center;">defineProperty</td><td style="text-align:center;">是</td><td style="text-align:center;">是</td><td style="text-align:center;">否</td><td style="text-align:center;">否</td><td style="text-align:center;">否</td><td style="text-align:center;">快</td></tr><tr><td style="text-align:center;">proxy</td><td style="text-align:center;">是</td><td style="text-align:center;">是</td><td style="text-align:center;">是</td><td style="text-align:center;">是</td><td style="text-align:center;">是</td><td style="text-align:center;">慢</td></tr></tbody></table><pre><code>备注：
【1】proxy还能够检测到更多对象相关的操作，比如构造函数被调用
【2】在nodejs x个版本下， 执行多次defineProperty 和proxy,proxy慢了30倍
【3】为了继续使用响应式，在vue2.x中额外增加和删除的属性需要使用 Vue.set(对象，添加的key,添加值)
【4】【虽然单个API有性能差距，但是到Vue3中，可以利用Proxy带来的便利，在其他方面大幅提
升性能】
</code></pre>`,5),l=[d];function p(i,a,s,y,c,x){return n(),t("div",null,l)}const f=e(o,[["render",p]]);export{g as __pageData,f as default};
