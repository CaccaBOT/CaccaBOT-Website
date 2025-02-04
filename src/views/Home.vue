<script setup lang="ts">
import { onMounted, ref } from 'vue'

const words = ref(["stand out", "wonderful", "special", "awesome", "unforgettable"])
let index = 0
const word = ref(words.value[index])
onMounted(() => {
    setInterval(() => {
        word.value = words.value[index]
        index = (index + 1) % words.value.length
    }, 2000)
})
</script>

<template>
    <div class="home-wrapper flex justify-center items-center h-[95vh]">
        <div class="title-wrapper text-center">
            <h1 class="title font-black text-[5rem] lg:text-[10rem] bg-clip-text text-transparent relative">
                CaccaBOT
            </h1>
            <div class="flex flex-row overflow-hidden justify-center items-center text-[1.5rem] lg:text-[2.5rem]">
                <h2 class="subtitle inline-block h-24">
                    Make your poop
                </h2>
                <div class="spacer mx-2">&nbsp;</div>
                <transition name="fade-slide" mode="out-in">
                    <div :key="index" class="highlight inline-block w-[8em] h-24">{{ word }}</div>
                </transition>
            </div>
        </div>
    </div>
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

@keyframes spin-colors {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}

h1 {
    background-image: linear-gradient(90deg, #ff007f, #ffae00, #00ffae, #007fff, #ae00ff);
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
    background-image: linear-gradient(90deg, #ff007f, #ffae00, #00ffae, #007fff, #ae00ff);
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
    background-image: linear-gradient(90deg, #ff007f, #ffae00, #00ffae, #007fff, #ae00ff);
    text-align: justify;
    text-justify: auto;
    font-weight: 900;
}
</style>