<script setup lang="ts">
import { ref } from 'vue'
import CarouselDisplay from '@/components/CarouselDisplay.vue'

const carouselImagePaths = ref<string[]>([])

function setupCarouselDisplay(
    numberOfImages: number,
    pathToImageBeforeIndicator: string,
    pathToImageAfterIndicator: string,
) {
    let imagesPaths: string[] = Array.from({ length: numberOfImages }, (_, index) => {
        return pathToImageBeforeIndicator + (index + 1) + pathToImageAfterIndicator
    })

    carouselImagePaths.value = imagesPaths
}
</script>

<template>
    <a href="#nobespo-project">
        <h1>{{ $t('titles.projects') }}</h1>
    </a>

    <article id="swipe">
        <img src="@/assets/google-fonts-icons/swipe.svg" />
        <p>{{ $t('projects.carouselTuto') }}</p>
    </article>

    <div id="portfolio">
        <div class="portfolio-line">
            <button
                id="nobespo-project"
                @click="() => setupCarouselDisplay(6, 'images/portfolio/nobespo-', '.png')"
            >
                <h2>{{ $t('projects.nobespo.title') }}</h2>
                <p>{{ $t('projects.nobespo.p1') }}</p>
                <p>{{ $t('projects.nobespo.p2') }}</p>
                <a
                    href="https://github.com/PaulCordellier/Nobespo/"
                    @click.stop=""
                    class="text-button"
                    >{{ $t('projects.nobespo.a1') }}</a
                >
            </button>
            <button
                id="laravel-project"
                @click="() => setupCarouselDisplay(19, 'images/portfolio/laravel-', '.webp')"
            >
                <h2>{{ $t('projects.laravel_titre') }}</h2>
                <p>{{ $t('projects.laravel_p1') }}</p>
                <p>{{ $t('projects.laravel_p2') }}</p>
            </button>
            <button
                id="monogame-project"
                @click="() => setupCarouselDisplay(9, 'images/portfolio/monogame-', '.webp')"
            >
                <h2>{{ $t('projects.monogame_titre') }}</h2>
                <p>{{ $t('projects.monogame_p1') }}</p>
            </button>
            <button
                id="wpf-project"
                @click="() => setupCarouselDisplay(5, 'images/portfolio/WPF-', '.webp')"
            >
                <h2>{{ $t('projects.wpf_titre') }}</h2>
                <p>{{ $t('projects.wpf_p1') }}</p>
            </button>
        </div>
        <div class="portfolio-line">
            <a id="factoring-project" href="https://github.com/PaulCordellier/quadratic_sieve">
                <h2>{{ $t('projects.factoring.title') }}</h2>
                <p>{{ $t('projects.factoring.p1') }}</p>
                <p>{{ $t('projects.factoring.p2') }}</p>
                <p class="info-text">{{ $t('projects.factoring.p3') }}</p>
            </a>
            <a
                href="https://paulcordellier.github.io/TLS-and-SSH-Downgrade-Attacks/paper.pdf"
                id="tls-ssh-project"
            >
                <h2>{{ $t('projects.tlsSshDowngrade.title') }}</h2>
                <p>{{ $t('projects.tlsSshDowngrade.p1') }}</p>
                <p class="info-text">{{ $t('projects.tlsSshDowngrade.p2') }}</p>
            </a>
            <button
                id="vba-project"
                @click="() => setupCarouselDisplay(7, 'images/portfolio/VBA-', '.webp')"
            >
                <h2>{{ $t('projects.vba_titre') }}</h2>
                <p>{{ $t('projects.vba_p1') }}</p>
            </button>
            <a id="godot-project" href="https://youtu.be/6z8XszHwJN8">
                <h2>{{ $t('projects.godot_titre') }}</h2>
                <p>{{ $t('projects.godot_p1') }}</p>
                <p class="info-text">{{ $t('projects.godot_p2') }}</p>
            </a>
        </div>
    </div>

    <CarouselDisplay :image-paths="carouselImagePaths" />
</template>

<style lang="scss">
h2 {
    padding: 10px 0;
}

#portfolio {
    display: grid;
    grid-template-columns: 1fr 1fr;

    .text-button {
        align-self: center;
    }

    @media (max-width: 1200px) {
        display: block;
    }
}

.portfolio-line {
    display: flex;
    flex-direction: column;

    > * {
        display: flex;
        flex-direction: column;
        border: none;
        border-radius: 20px;
        background-color: transparent;
        box-shadow: 0px 0px 10px rgb(130, 130, 130);
        margin: 10px;
        padding: 5px 15px;
        text-decoration: none;
        font: unset;
        text-align: left;
    }
}

.info-text {
    text-align: center;
    font-weight: 700;
    font-size: 1.1em;
}

#swipe {
    display: flex;
    padding: 10px;
    justify-content: center;
    -moz-column-gap: 15px;
    -ms-column-gap: 15px;
    -webkit-column-gap: 15px;
    column-gap: 15px;
    align-items: center;

    img {
        display: block;
    }

    p {
        display: block;
    }
}
</style>
