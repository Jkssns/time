let time = {};

time.install = function(Vue){
   Vue.directive('time',{
       bind(el){
            el.innerHTML = new Date(Number(el.innerHTML)).toLocaleString().replace(/(上午|下午|)/g,"");
       }
   })
}
if (typeof window !== 'undefined' && window.Vue) {
 install(window.Vue);
}
export default time;