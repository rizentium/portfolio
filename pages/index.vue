<template>
    <div class="landing_page bg-gray-100 p-12">
        <div class="landing_page-body">
            <NuxtImg class="rounded-full" format="webp" fit="cover" src="/images/profile_picture.webp" width="128" height="128" alt="Profile Picture" />
            <br />
            <p class="text-2xl font-semibold">Arif Hidayat</p>
            <br />
            <div class="landing_page-body-socmed-section">
                <a href="https://www.linkedin.com/in/arifhidayat95/" target="_blank">
                    <NuxtImg class="rounded-full" format="webp" fit="cover" src="/images/linkedin.webp" width="32" height="32" alt="Linkedin Profile" />
                </a>
                <a href="https://www.linkedin.com/in/arifhidayat95/" target="_blank">
                    <NuxtImg class="rounded-full" format="webp" fit="cover" src="/images/github.webp" width="32" height="32" alt="Github Profile" />
                </a>
                <a href="https://www.linkedin.com/in/arifhidayat95/" target="_blank">
                    <NuxtImg class="rounded-full" format="webp" fit="cover" src="/images/stackoverflow.webp" width="32" height="32" alt="StackOverFlow Profile" />
                </a>
                <a href="https://www.linkedin.com/in/arifhidayat95/" target="_blank">
                    <NuxtImg class="rounded-full" format="webp" fit="cover" src="/images/medium.webp" width="32" height="32" alt="Medium Profile" />
                </a>
            </div>
            <br />
            <p class="border-2 rounded-lg p-4 bg-white">
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
