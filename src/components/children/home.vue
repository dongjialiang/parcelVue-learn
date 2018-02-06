<template>
    <div>
        <b-carousel id="carousel1"
            controls
            indicators
            style="text-shadow: 1px 1px 2px #333;"
            :interval="4000"
            img-width="1024"
            img-height="480"
            background="#ababab"
            v-model="slide"
        >
            <b-carousel-slide v-for="(item,index) in img" :key="index">
                <h1>{{captions[index]}}</h1>
                <p>{{texts[index]}}</p>        
                <b-img slot="img" :src="item" fluid-grow alt="image" class="img"/>
            </b-carousel-slide>
        </b-carousel>
        <content>{{slogan}}</content>
        <div>123</div>
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
    }
}
</script>
