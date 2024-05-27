<script setup>
const profiles = [
    {
        url: 'https://www.linkedin.com/in/arifhidayat95',
        logo: '/images/linkedin.webp',
        alt: 'Linkedin Profile',
    },
    {
        url: 'https://github.com/rizentium',
        logo: '/images/github.webp',
        alt: 'Github Profile',
    },
    {
        url: 'https://stackoverflow.com/users/10576760/rize',
        logo: '/images/stackoverflow.webp',
        alt: 'StackOverFlow Profile',
    },
    {
        url: 'https://medium.com/@af.hidayat',
        logo: '/images/medium.webp',
        alt: 'Medium Profile',
    },
];
</script>

<template>
    <div class="landing_page bg-gray-100 p-12">
        <div class="landing_page-body">
            <NuxtImg class="rounded-full my-4" format="webp" fit="cover" src="/images/profile_picture.webp" width="128"
                height="128" alt="Profile Picture" />
            <p class="text-2xl font-semibold">Arif Hidayat</p>
            <div class="landing_page-body-socmed-section my-4">
                <a v-for="profile in profiles" :href="profile.url" target="_blank">
                    <NuxtImg class="rounded-full" format="webp" fit="cover" :src="profile.logo" width="32" height="32"
                        :alt="profile.alt" />
                </a>
            </div>
            <p class="border-2 rounded-lg p-4 bg-white text-justify">
                With over five years of experience in full-stack development, I have a proven track record of delivering
                high-quality software solutions from conception to production. My expertise lies in Frontend Software
                Engineering and adhere to the principles of clean code architecture.
            </p>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.landing_page {
    width: 100vw;
    height: 100vh;
    display: grid;
    align-content: center;
    justify-items: center;

    &-body {
        max-width: 512px;
        display: grid;
        justify-items: center;

        &-socmed-section {
            display: flex;
            column-gap: 24px;
        }
    }
}
</style>
