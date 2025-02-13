<script setup lang="ts">
import { onMounted, ref } from 'vue'
import cards from '../assets/features/cards.png'
import profile from '../assets/features/profile.png'
import rankings from '../assets/features/rankings.png'
import stats from '../assets/features/stats.png'
import gsap from 'gsap'

onMounted(() => {
  const items = document.querySelectorAll('.feature-image')
  const xOffset = 100
  const yOffset = -20

  gsap.set(items, {
    x: index => xOffset * index,
    y: index => yOffset * index,
    zIndex: index => items.length - index
  })

  function horizontalLoop(items: any) {
    let totalItems = items.length
    let currentItem = 0

    function updatePositions() {
      for (let i = 0; i < totalItems; i++) {
        let itemIndex = (currentItem + i) % totalItems
        let item = items[itemIndex]

        gsap.to(item, {
          x: xOffset * i,
          y: yOffset * i,
          zIndex: totalItems - i,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out'
        })
      }
    }

    function moveToNext() {
      currentItem = (currentItem + 1) % totalItems
      featureIndex.value = currentItem
      updatePositions()
    }

    setInterval(moveToNext, 3000)

    updatePositions()
  }

  horizontalLoop(items)
})

const features = [
  {
    title: 'The Leaderboard',
    description:
      'Battle against others to conquer the first place on the monthly leaderboard!'
  },
  {
    title: 'The Profile',
    description:
      'Make your profile pretty and show off your stats to your rivals!'
  },
  {
    title: 'The Stats',
    description:
      "Analyze everyone's stats and adjust your poop tactics to keep up with competition!"
  },
  {
    title: 'The Cards',
    description: 'Try your luck and make it rain when you unpack your cards!'
  }
]

const featureIndex = ref(0)
</script>

<template>
  <div class="features-wrapper w-full h-[100vh]">
    <div class="divider divider-accent">
      <h1 class="text-6xl text-center font-bold text-accent">Features</h1>
    </div>
    <div
      class="features-image-wrapper w-full flex justify-center items-center flex-wrap mt-[15vh]"
    >
      <img
        :src="rankings"
        alt="rankings"
        class="feature-image max-w-full w-full sm:w-[75%] md:w-[55%] lg:w-[45%] rounded-xl object-cover"
      />
      <img
        :src="profile"
        alt="profile"
        class="feature-image max-w-full w-full sm:w-[75%] md:w-[55%] lg:w-[45%] rounded-xl object-cover"
      />
      <img
        :src="stats"
        alt="stats"
        class="feature-image max-w-full w-full sm:w-[75%] md:w-[55%] lg:w-[45%] rounded-xl object-cover"
      />
      <img
        :src="cards"
        alt="cards"
        class="feature-image max-w-full w-full sm:w-[75%] md:w-[55%] lg:w-[45%] rounded-xl object-cover"
      />
    </div>
    <div
      class="info-wrapper flex flex-col justify-center items-center w-10/12 mx-auto text-justify"
    >
      <h1 class="feature-title text-gradient text-5xl font-bold mb-2">
        {{ features[featureIndex].title }}
      </h1>
      <p class="feature-description text-2xl text-white">
        {{ features[featureIndex].description }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.features-image-wrapper {
  height: 60vh;
  width: 100%;
  perspective: 100px;
}

.feature-image {
  position: absolute;
  background: var(--gradient) border-box;
  border: 5px solid transparent;
  border-width: 4px;
}

.scroller {
  color: var(--gradient);
}
</style>
