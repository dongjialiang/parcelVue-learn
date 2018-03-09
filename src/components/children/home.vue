<template>
    <div @scroll.native="handlerScroll">
        <b-carousel
            controls
            indicators
            style="text-shadow: 1px 1px 2px #333;"
            :interval="6000"
            img-width="1024"
            img-height="480"
            background="#ababab"
            v-model="slide"
            v-touch:swipe.left="swipeLeft"
            v-touch:swipe.right="swipeRight"
        >
            <b-carousel-slide v-for="(item,index) of img" :key="index">
                <h1>{{captions[index]}}</h1>
                <p>{{texts[index]}}</p>        
                <b-img slot="img" :src="item" fluid-grow alt="image" class="img"/>
            </b-carousel-slide>
        </b-carousel><br/>
        <b-container fluid id="scrollTop">
            <b-row>
                <b-col cols='8'>
                    <div id="listgroup-ex">
                        <h1 id="list-item-1">{{slogan}}</h1>
                        <p class="p" v-if="showB">{{text1}}</p>
                        <h1 id="list-item-2">{{slogan}}</h1>
                        <p class="p" v-if="showC">{{text1}}</p>
                    </div>
                </b-col>
                <b-col cols='4'>
                    <b-list-group v-b-scrollspy:listgroup-ex>
                        <b-list-group-item v-for="(title,index) of title" :key="index" :href="title">{{label[index]}}</b-list-group-item>
                    </b-list-group>
                </b-col>
            </b-row>
        </b-container>
        <div id="up" @click="backTop"><i class="fa fa-angle-up"></i></div>
    </div>
</template>

<script>
import image from '../../assets/Banner/*.jpg'
import webp from '../../assets/Banner/*.webp'
export default {
    data () {
        return {
            slide:0,
            sliding: null,
            texts: ['flower','dark','quiet','light'],
            captions: ['Hello','Admit defeat','I love you','promised you'],
            img: (document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') == 0)?webp:image,
            slogan: 'Welcome to my website',
            showB: false,
            showC: false,
            title: ['#list-item-1','#list-item-2'],
            label: ['标题1','标题2'],
            text1: `她愿意和你说这么多,则说明她并不讨厌你,并且当你是朋友!她没有答应你是因为她心里很矛盾,她不知自己是否该答应你,或许是因为还不太了解你,怕自己受到伤害!你应该继续下去,别老是乎冷乎热,她说过时间会证明一切,这是在考验你说的话!其次不可心急,可以看出这是个很单纯的女孩子,或许还是初恋,她想要的是一份很甜蜜的恋爱!她叫你傻瓜证明她开始在意你了,你很有机会!可以收买她的死党,但是千万别妄想很快追到她,这或许是一场持久战!毕竟好女孩不容易追嘛!你就象之前那样对她好,别刻意去展现对她的好,切记!还有不要写情书,可以发短信,发些笑话或可爱的脑筋急转弯,不要发黄段子!一点一点积累她对你的感觉,但是自己一定要有衡心!如果只是想玩玩人家那我劝你还是别去伤害人家了!既然是真心喜欢就一直执着下去,没有过不了的河!时间会宣布一切,别去想她最后会拒绝你,要有必胜的决心!至于生日礼物你可以去石头记看看,那里面卖的都是女孩子喜欢的!可以找服务员推荐下! 最后祝你成功!希望这些话能对你有启发!`
        }
    },
    watch: {
        slide(){
            this.$store.state.count=this.slide
        }
    },
    mounted() {
        window.addEventListener('scroll',this.handlerScroll)
        document.getElementById('up').style.display='none',
        setTimeout(() => {
            this.showB = true;
        },0)
        setTimeout(() => {
            this.showC = true;
        },0)
    },
    methods: {
        swipeLeft() {
            if(this.slide+1==4)
                this.slide=0
            else
                this.slide++;
        },
        swipeRight() {
            if(this.slide-1==-1)
                this.slide=3
            else
                this.slide--;
        },
        handlerScroll() {
            if(document.getElementById('scrollTop').getBoundingClientRect().top<0)
                document.getElementById('up').style.display='block'
            else
                document.getElementById('up').style.display='none'
        },
        backTop() {
            var scrolltotop=true
            if (scrolltotop) {
                var timer = setInterval(() => {/*设置每次滚动的时间*/
                    scrolltotop=false;
                    var scroll = document.documentElement.scrollTop | document.body.scrollTop;/*滚动条高度*/
                    window.scrollTo(0,scroll-Math.floor(scroll / 3));/*由快到慢向上滚动*/
                    if (scroll<6) {
                        window.scrollTo(0,0);
                        scrolltotop=true;
                        clearInterval(timer);
                    }/*消除这个定时返回的事件*/
                },15);
            }
        }
    },
    destroyed () {
        window.removeEventListener('scroll', this.handlerScroll)
    }
}
</script>
