<script setup lang="ts">
import LineMdCheckAll from '~icons/line-md/check-all';
const props = defineProps({
    title: String,
    description: String,
    image: String,
    price: Number,
    features: Array<string>,
})
</script>

<template>
    <div class="product-card-wrapper m-5">
        <div class="card card-compact bg-base-300 w-96 shadow-xl">
            <figure>
                <img :src="image" alt="Product image" />
            </figure>
            <div class="card-body text-center mx-auto">
                <h2 class="card-title mx-auto text-3xl font-bold text-white">{{ title }}</h2>
                <p class="text-lg">{{ description }}</p>
                <ul class="text-left mt-5">
                    <li v-for="feature in features" :key="feature" class="text-lg flex items-center gap-2">
                        <LineMdCheckAll class="text-success" />
                        <span>{{ feature }}</span>
                    </li>
                </ul>
                <div class="card-actions w-full mx-auto mt-5">
                    <button class="btn btn-success text-xl font-bold w-10/12 mx-auto">
                        {{ price === 0 ? 'Free' : `${price} €/mo` }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>