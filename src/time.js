let time = {};

function checkTime(i) { //将0-9的数字前面加上0，例1变为01 
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

time.install = function(Vue){
    // v-YMDhms
   Vue.directive('Y',{
       bind(el){
           console.log(el.innerHTML)
           if (el.innerHTML === '' || el.innerHTML === null || el.innerHTML === undefined || isNaN(Number(el.innerHTML))){
                el.innerHTML = '无效时间戳，请检查';
                return;
            }else{
                el.innerHTML = new Date(Number(el.innerHTML)).getFullYear();
            }
       }
   }) // 2020

   Vue.directive('M',{
       bind(el){
           if (el.innerHTML === '' || el.innerHTML === null || el.innerHTML === undefined || isNaN(Number(el.innerHTML))){
                el.innerHTML = '无效时间戳，请检查';
                return;
            }else{
                el.innerHTML = checkTime(new Date(Number(el.innerHTML)).getMonth()+1);
            }
       }
    }) // 01~12

   Vue.directive('D',{
       bind(el){
           if (el.innerHTML === '' || el.innerHTML === null || el.innerHTML === undefined || isNaN(Number(el.innerHTML))){
                el.innerHTML = '无效时间戳，请检查';
                return;
            }else{
                el.innerHTML = checkTime(new Date(Number(el.innerHTML)).getDate());
            }
       }
   }) // 1~31

   Vue.directive('h',{
       bind(el){
           if (el.innerHTML === '' || el.innerHTML === null || el.innerHTML === undefined || isNaN(Number(el.innerHTML))){
                el.innerHTML = '无效时间戳，请检查';
                return;
            }else{
                el.innerHTML = checkTime(new Date(Number(el.innerHTML)).getHours());
            }
       }
   }) // 0~23

   Vue.directive('m',{
       bind(el){
           if (el.innerHTML === '' || el.innerHTML === null || el.innerHTML === undefined || isNaN(Number(el.innerHTML))){
                el.innerHTML = '无效时间戳，请检查';
                return;
            }else{
                el.innerHTML = checkTime(new Date(Number(el.innerHTML)).getMinutes());
            }
       }
   }) // 0~59

   Vue.directive('s',{
       bind(el){
           if (el.innerHTML === '' || el.innerHTML === null || el.innerHTML === undefined || isNaN(Number(el.innerHTML))){
                el.innerHTML = '无效时间戳，请检查';
                return;
            }else{
                el.innerHTML = checkTime(new Date(Number(el.innerHTML)).getSeconds());
            }
       }
   }) // 0~59

   Vue.directive('time',{
       bind(el){
           if (el.innerHTML === '' || el.innerHTML === null || el.innerHTML === undefined || isNaN(Number(el.innerHTML))){
                el.innerHTML = '无效时间戳，请检查';
                return;
            }else{
                el.innerHTML = new Date(Number(el.innerHTML)).toLocaleString().replace(/(上午|下午|)/g,"");
            }
       }
   }) // 2020/3/22 8:30:34

   Vue.directive('date',{
       bind(el){
           if (el.innerHTML === '' || el.innerHTML === null || el.innerHTML === undefined || isNaN(Number(el.innerHTML))){
                el.innerHTML = '无效时间戳，请检查';
                return;
            }else{
                el.innerHTML = new Date(Number(el.innerHTML)).toLocaleString().substring(0,10).replace(/\//g,"-");
            }
       }
   }) // 2020-3-22

   Vue.directive('week',{
       bind(el){
           if (el.innerHTML === '' || el.innerHTML === null || el.innerHTML === undefined || isNaN(Number(el.innerHTML))){
                el.innerHTML = '无效时间戳，请检查';
                return;
            }else{
                let weekday = ['周日','周一','周二','周三','周四','周五','周六',];
                el.innerHTML = weekday[new Date(Number(el.innerHTML)).getDay()];
            }
       }
   }) // 周一

   Vue.directive('countDown',{
       bind(el){
            if (el.innerHTML === '' || el.innerHTML === null || el.innerHTML === undefined || isNaN(Number(el.innerHTML))){
                el.innerHTML = '无效时间戳，请检查';
                return;
            }else{
                let inner = el.innerHTML;
                function countDown(timeStr){
                    let leftTime = (Number(timeStr)) - (new Date().getTime()); //计算剩余的毫秒数 
                    let days = parseInt(leftTime / 1000 / 60 / 60 / 24, 10); //计算剩余的天数 
                    let hours = parseInt(leftTime / 1000 / 60 / 60 % 24, 10); //计算剩余的小时 
                    let minutes = parseInt(leftTime / 1000 / 60 % 60, 10); //计算剩余的分钟 
                    let seconds = parseInt(leftTime / 1000 % 60, 10); //计算剩余的秒数 
                    if ((days <= 0) && (hours <= 0) && (minutes <= 0) && (seconds <= 0)) {
                        days = 0;
                        hours = 0;
                        minutes = 0;
                        seconds = 0;
                        window.clearInterval(timer);
                    };
                    days = checkTime(days);
                    hours = checkTime(hours);
                    minutes = checkTime(minutes);
                    seconds = checkTime(seconds);
                    el.innerHTML = days + "天" + hours + "时" + minutes + "分" + seconds + "秒";
                }
                let timer = setInterval(()=>{
                    countDown(inner);
                }, 1000)
            }
       }
   }) // 倒计时
}
if (typeof window !== 'undefined' && window.Vue) {
 install(window.Vue);
}
export default time;