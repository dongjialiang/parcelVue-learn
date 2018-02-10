<template>
    <div>
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
        </b-carousel>
        <div class="container">
            {{slogan}}
            <div>123</div>
        </div>
    </div>
</template>

<script>
import image from '../../assets/Banner/*.png'
export default {
    data () {
        return {
            slide:0,
            sliding: null,
            texts: ['flower','dark','quiet','light'],
            captions: ['Hello','Admit defeat','I love you','promised you'],
            img: image,
            slogan: 'Welcome to my website'
        }
    },
    watch: {
        slide(){
            this.$store.state.count=this.slide
        }
    },
    methods: {
        swipeLeft() {
            if(this.slide+1==4)
                this.slide=0
            else
                this.slide++;
            this.sliding = false;
        },
        swipeRight() {
            if(this.slide-1==-1)
                this.slide=3
            else
                this.slide--;
            this.sliding = false;
        }
    }
}
</script>
