# time

<a href="https://github.com/Jkssns/time">github地址</a>

> A Vue.js project
> 这是一个转换时间格式的插件，输入时间戳并将时间戳转换为对应的格式。
> 集成的方法，没什么技术含量，做它是因为有30%的兴趣，和100%的空闲。

#使用方法

## v-time 
<\p v-time >{{这里是时间戳}}<\p>  // 返回时间，例：2020/3/22 8:30:30

## v-date 
<\p v-date >{{这里是时间戳}}<\p>  // 返回日期，例：2020-3-22

## v-week 
<\p v-week >{{这里是时间戳}}<\p>  // 返回周几，例：周日

## v-countDown
<\p v-countDown >{{这里是时间戳}}<\p>  // 输入一个大于现在的时间戳，将返回一个距离时间戳还有多少时间的倒计时 例：10天16时14分37秒

## v-Y
<\p v-Y >{{这里是时间戳}}<\p> // 返回年份，例：2020

## v-M
<\p v-M >{{这里是时间戳}}<\p> // 返回月份，01~12

## v-D
<\p v-D >{{这里是时间戳}}<\p> // 返回天数，01~31

## v-h
<\p v-h >{{这里是时间戳}}<\p> // 返回小时，01~23

## v-m
<\p v-m >{{这里是时间戳}}<\p> // 返回分钟，01~59

## v-s
<\p v-s >{{这里是时间戳}}<\p> // 返回秒数，01~59

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

