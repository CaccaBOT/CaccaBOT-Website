<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Features from './Features.vue'
import Pricing from './Pricing.vue'
import { ScrollView } from 'potiah'

const words = ref(["stand out", "wonderful", "special", "awesome", "unforgettable"])
let index = 0
const word = ref(words.value[index])
onMounted(() => {
    word.value = words.value[index]
    index = (index + 1) % words.value.length

    setInterval(() => {
        word.value = words.value[index]
        index = (index + 1) % words.value.length
    }, 2000)
})
</script>

<template>
    <ScrollView root :duration="0.75">
        <div class="home-wrapper flex flex-col justify-center items-center h-[85vh]">
            <div class="title-wrapper text-center">
                <h1 class="title font-black text-[5rem] lg:text-[10rem] bg-clip-text text-transparent relative">
                    CaccaBOT
                </h1>
                <div class="flex flex-row overflow-hidden justify-center items-center text-[1.5rem] lg:text-[2.5rem]">
                    <h2 class="subtitle inline-block h-24">
                        Make your poop
                    </h2>
                    <div class="spacer mx-1">&nbsp;</div>
                    <transition name="fade-slide" mode="out-in">
                        <div :key="index" class="highlight inline-block w-[8em] h-24">{{ word }}</div>
                    </transition>
                </div>
            </div>
        </div>
        <div class="scroller mb-[15vh] w-full flex flex-col justify-center items-center">
            <svg width="40px" height="100%" viewBox="0 0 247 390" version="1.1" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">
                <path id="wheel" d="M123.359,79.775l0,72.843" style="fill:none;stroke:#fff;stroke-width:20px;" />
                <path id="mouse"
                    d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
                    style="fill:none;stroke:#fff;stroke-width:20px;" />
            </svg>
        </div>
        <Features />
        <Pricing />
    </ScrollView>
</template>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
    transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-slide-enter-from {
    transform: translateY(100px);
}

.fade-slide-leave-to {
    transform: translateY(-100px);
}

h1 {
    background-image: var(--gradient);
    background-size: 200% 200%;
    animation: spin-colors 6s linear infinite;
    user-select: none;
}

h1::after {
    content: 'CaccaBOT';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: var(--gradient);
    background-size: 200% 200%;
    z-index: -1;
    color: transparent;
    background-clip: text;
    filter: blur(20px);
    animation: spin-colors 6s linear infinite;
}

.highlight {
    color: transparent;
    background-clip: text;
    background-image: var(--gradient);
    text-align: justify;
    text-justify: auto;
    font-weight: 900;
}
</style>