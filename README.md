# study_react_router
学习 react router。1. 学习 react router 中官方的例子 2. 自定义 mini router 学习原理

1. 服务端路由：可以根据 `URL` 去服务端请求对应的资源
2. 单页应用：只有一个 `index.html`，其他的都是使用函数生成的页面

由于只有一个页面，所以我们可以在客户端控制页面的显示和隐藏，即**客户端路由**。

所以客户端路由的本质就是**监听 URL 的变化，对对应的页面进行显示和隐藏。**

又与为了两种方式，`hash` 模式和 `history` 模式。

区别在于：
1. `hash` 的路由中有个 `#`，而 `history` 没有；
2. `hash` 在路由在历史记录中无法找到，而 `history` 可以在历史记录中找到；
3. 两者的实现的 `API` 不一样，但思想一致

    1. `hash` 使用 `window.location.hash` 改变路由，使用 `hashchange` 监听改变
    2. `history` 使用 `window.history.pushState` 改变路由，使用 `popstate` 监听改变

主要实现思路：
1. 顶层使用 `Router.Provider` 向底层提供 `path`，`History.Provider` 向底层提供前进、后退等方法
2. 底层使用 `Route` 消费顶层提供的 `path`，判断当前的组件是否显示
