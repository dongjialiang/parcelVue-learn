<template>
    <div>
        <b-carousel id="carousel1"
            style="text-shadow: 1px 1px 2px #333;"
            controls
            indicators
            background="#ababab"
            v-model="slide"
        >
            <b-carousel-slide v-for="(item,index) in img" :key="index">
                <h1>{{captions[index]}}</h1>
                <p>{{texts[index]}}</p>        
                <img slot="img" :src="item" alt="image" class="img">
            </b-carousel-slide>
        </b-carousel>
        <content>{{slogan}}</content>
    </div>
</template>

<script>
import image from '../../assets/image/*.png'
export default {
    data () {
        return {
            texts: ['flower','dark','quiet','light'],
            captions: ['Hello','Admit defeat','I love you','promised you'],
            img: image,
            slogan: 'Welcome to my website'
        }
    }
}
</script>
