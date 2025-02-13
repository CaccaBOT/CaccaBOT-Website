<script setup lang="ts">
import ProductCard from '../components/ProductCard.vue'
import selfhosted from '../assets/pricing/selfhosted.webp'
import managed from '../assets/pricing/managed.webp'
</script>

<template>
  <div class="pricing-wrapper">
    <div class="divider divider-secondary">
      <h1 class="text-6xl text-center font-bold text-secondary">Pricing</h1>
    </div>
    <div
      class="pricing-cards-wrapper flex flex-row flex-wrap justify-evenly items-center w-8/12 mx-auto mt-10"
    >
      <ProductCard
        title="Self-Hosted"
        description="You host it yourself"
        :price="0"
        :image="selfhosted"
        :features="[
          'Your own hardware',
          'Full control',
          'Make your own changes'
        ]"
      />
      <ProductCard
        title="Managed Hosting"
        description="We host it for you"
        :price="1"
        :image="managed"
        :features="[
          'Plug and play',
          'Don\'t worry about anything',
          'Cheap service'
        ]"
      />
    </div>
  </div>
</template>

<style scoped></style>
