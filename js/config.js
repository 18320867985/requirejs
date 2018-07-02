/* 
 * 之前的例子中加载模块都是本地js，但是大部分情况下网页需要加载的JS可能来自本地服务器、
 * 其他网站或CDN，这样就不能通过这种方式来加载了，我们以加载一个jquery库为例：
*/

require.config({
 	baseUrl : "js",
    paths : {
       // "jquery" : ["http://libs.baidu.com/jquery/2.0.3/jquery"],
        "m" :["mobile-1.0.0" ]  ,
    }
})

