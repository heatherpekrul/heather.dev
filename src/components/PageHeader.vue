<script setup>

</script>

<template>
    <h1>
        <div class="container">
            <slot />
        </div>
    </h1>
</template>

<style scoped lang="scss">
h1 {
    background: settings.$color-mint;
    color: #000;
    padding: 2rem;
    font-size: 2rem;

    @media (min-width: 480px) {
        padding: 3rem;
        font-size: 3rem;
    }
}
</style>
