<template>
	<div id="test">
		<b-form-select v-model="search" :options="URLSearchParams" class="mb-3">
		</b-form-select><input type="text" class="form-control" placeholder="请输入想要搜索关键字" v-model="keyword" @keyup="get"/><b-button @click="query">search</b-button>
		<b-form-select v-model="help" class="mb-3">
			<option disabled :value='null'>请选择</option>
			<option v-for="option in fastWeb" :key="option.id" :value="option.value">{{option.text}}</option>
		</b-form-select>
	</div>
</template>
<script>
export default {
	data() {
        return {
			URLSearchParams: [
				{value:'https://www.baidu.com/s?wd=',text:'百度'},
				{value:'https://www.zhihu.com/search?type=content&q=',text:'知乎'},
				{value:'http://store.steampowered.com/search/?term=',text:'steam'},
				{value:'https://www.bing.com/search?q=',text:'bing'},
				{value:'https://search.yahoo.com/search?fr=cb-max&serveUrl=s.maxthon.com&ei=utf-8&p=',text:'yahoo'},
				{value:'https://github.com/search?q=',text:'github'},
				{value:'https://stackoverflow.com/search?q=',text:'stackoverflow'},
				{value:'https://yandex.ru/yandsearch?clid=124526&text=',text:'yandex'},
				{value:'https://zh.wikihow.com/wikiHowTo?search=',text:'wikihow'},
				{value:'https://en.wikipedia.org/wiki/',text:'wikipedia'},
				{value:'https://www.sogou.com/web?query=',text:'sogou'},
				{value:'https://segmentfault.com/search?q=',text:'segmentfault'},
				{value:'http://huaban.com/search/?q=',text:'花瓣'},
				{value:'https://www.douban.com/search?q=',text:'豆瓣'},
				{value:'https://www.bbc.co.uk/search?q=',text:'bbc'},
				{value:'https://edition.cnn.com/search/?q=',text:'cnn'},
				{value:'http://so.csdn.net/so/search/s.do?q=',text:'csdn'},
				{value:'https://www.jianshu.com/search?q=',text:'简书'},
				{value:'https://sspai.com/search/article?q=',text:'少数派'},
				{value:'http://s.weibo.com/weibo/',text:'微博'},
				{value:'https://juejin.im/search?query=',text:'掘金'}
			],
			search: 'https://www.baidu.com/s?wd=',
			fastWeb: [
				{value:'',text:'test'},
				{value:'',text:'checkout'}
			],
			help: null,
			keyword: ''
		}
	},
	methods: {
		get:function (event) {
			if(event.keyCode==38||event.keyCode==40) return
			if(event.keyCode==13){
				window.open(this.search+this.keyword)
			}
		},
		query:function () {
			window.open(this.search+this.keyword)
		}
	},
	mounted(){ 
		//const iframe=document.getElementById("iframe")
		//const height=Math.max(iframe.contentWindow.document.body.scrollHeight,iframe.contentWindow.document.documentElement.scrollHeight)
		//iframe.style.height=height+'rem'
	}
}
</script>

