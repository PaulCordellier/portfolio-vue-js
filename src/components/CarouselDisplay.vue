<script setup lang="ts">
import { ref, watch, useTemplateRef, onMounted, onUnmounted, onUpdated } from 'vue'

const { imagePaths } = defineProps<{
    imagePaths: string[]
}>()

const shouldShowCarousel = ref<boolean>(false)

watch(
    () => imagePaths,
    (newValue) => {
        shouldShowCarousel.value = newValue.length != 0
    },
)

// open / close //

const scrollableRef = useTemplateRef('scrollable')

onUpdated(() => {
    const scrollable = scrollableRef.value
    if (!shouldShowCarousel.value || !scrollable) {
        return
    }

    document.body.style.overflow = 'hidden'

    // Scroll events //

    scrollable.scrollTo({
        left: 0,
        behavior: 'instant',
    })
    currentImageScrollPosition = 0
})

function closeCarousel() {
    shouldShowCarousel.value = false

    document.body.style.overflow = 'scroll'

    mouseButtonPressed = false
}

// Scroll autamatically //

let currentImageScrollPosition: number

function goToNearestImage() {
    const scrollable = scrollableRef.value
    if (!scrollable) {
        return
    }

    currentImageScrollPosition = currentImageScrollPositon()

    scrollable.scrollTo({
        left: currentImageScrollPosition,
        behavior: 'smooth',
    })
}

function goRight(baseScrollPosition?: number) {
    const scrollable = scrollableRef.value
    if (!scrollable) {
        return
    }

    let rightImageScroll

    if (baseScrollPosition == undefined) {
        rightImageScroll = currentImageScrollPositon() + window.innerWidth
    } else {
        rightImageScroll = baseScrollPosition + window.innerWidth
    }

    if (rightImageScroll < 0) {
        return
    }

    currentImageScrollPosition = rightImageScroll

    scrollable.scrollTo({
        left: rightImageScroll,
        behavior: 'smooth',
    })
}

function goLeft(baseScrollPosition?: number) {
    const scrollable = scrollableRef.value
    if (!scrollable) {
        return
    }

    let leftImageScroll

    if (baseScrollPosition == undefined) {
        leftImageScroll = currentImageScrollPositon() - window.innerWidth
    } else {
        leftImageScroll = baseScrollPosition - window.innerWidth
    }

    if (leftImageScroll < 0) {
        return
    }

    currentImageScrollPosition = leftImageScroll

    scrollable.scrollTo({
        left: leftImageScroll,
        behavior: 'smooth',
    })
}

function currentImageScrollPositon(): number {
    let modulo = scrollableRef.value!.scrollLeft % window.innerWidth

    if (modulo < window.innerWidth - modulo) {
        return scrollableRef.value!.scrollLeft - modulo
    } else {
        return scrollableRef.value!.scrollLeft + (window.innerWidth - modulo)
    }
}

// Scroll velocity //

let intervalId: number
onMounted(() => (intervalId = setInterval(setVecolityInterval, 50)))
onUnmounted(() => clearInterval(intervalId))

let lastScrollPositon: number
let scrollVelocity: number

function setVecolityInterval() {
    const scrollable = scrollableRef.value
    if (!scrollable) {
        return
    }

    scrollVelocity = scrollable.scrollLeft - lastScrollPositon
    lastScrollPositon = scrollable.scrollLeft
}

// Mouse/touch events //

let mouseXPosition: number
let mouseButtonPressed: boolean = false

function onMouseDown(event: MouseEvent) {
    if (event.button == 0) {
        // If the main button is pressed
        mouseXPosition = event.clientX
        mouseButtonPressed = true
    }
}

function onMouseMove(event: MouseEvent) {
    const scrollable = scrollableRef.value
    if (!scrollable) {
        return
    }

    if (event.button != 0 || !mouseButtonPressed) {
        // If the main button is pressed
        return
    }

    scrollable.scrollTo({
        left: scrollable.scrollLeft + (mouseXPosition - event.clientX),
        behavior: 'instant',
    })

    mouseXPosition = event.clientX
}

function onMouseUp(event: MouseEvent) {
    if (event.button == 1) {
        // If the wheel is pressed
        goToNearestImage()
    } else {
        onTouchEnd()
    }

    mouseButtonPressed = false
}

function onTouchStart(event: TouchEvent) {
    mouseXPosition = event.touches[0].clientX
    mouseButtonPressed = true
}

function onTouchMove(event: TouchEvent) {
    const scrollable = scrollableRef.value
    if (!scrollable) {
        return
    }

    event.preventDefault()

    scrollable.scrollTo({
        left: scrollable.scrollLeft + (mouseXPosition - event.touches[0].clientX),
        behavior: 'instant',
    })

    mouseXPosition = event.touches[0].clientX
}

function onTouchEnd() {
    if (scrollVelocity == null) {
        return
    }

    const limitBeforeScrolling = 25

    if (scrollVelocity > limitBeforeScrolling) {
        goRight(currentImageScrollPosition)
    } else if (scrollVelocity < -limitBeforeScrolling) {
        goLeft(currentImageScrollPosition)
    } else {
        goToNearestImage()
    }
}
</script>

<template>
    <div v-show="shouldShowCarousel" id="background">
        <div
            id="carousel-scrollable"
            ref="scrollable"
            @mousedown="onMouseDown"
            @mousemove="onMouseMove"
            @mouseup="onMouseUp"
            @touchstart="onTouchStart"
            @touchmove="onTouchMove"
            @touchend="onTouchEnd"
            @touchcancel="onTouchEnd"
        >
            <div v-for="imagePath in imagePaths">
                <div class="image-container">
                    <img :src="imagePath" />
                </div>
            </div>
        </div>

        <div id="arrow-buttons" class="glass-effect">
            <button @click="() => goLeft()">
                <img src="@/assets/google-fonts-icons/arrow_left.svg" alt="previous image" />
            </button>
            <button @click="() => goRight()">
                <img src="@/assets/google-fonts-icons/arrow_right.svg" alt="next image" />
            </button>
        </div>

        <button id="close-button" class="glass-effect" @click="closeCarousel()">
            <img src="@/assets/google-fonts-icons/close.svg" alt="close images" />
        </button>
    </div>
</template>

<style scoped lang="scss">
#background {
    display: block;
    position: fixed;
    z-index: 2;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    touch-action: none;
    -ms-touch-action: none;
}

#arrow-buttons {
    display: flex;
    -ms-flex-direction: row;
    -webkit-flex-direction: row;
    flex-direction: row;
    position: absolute;
    bottom: 15px;
    left: 50%;
    transform: translate(-50%, 0);
    height: var(--carousel-button-height);
    width: calc(var(--carousel-button-height) * 2);
    -moz-border-radius: var(--carousel-button-height);
    -webkit-border-radius: var(--carousel-button-height);
    border-radius: var(--carousel-button-height);

    button {
        background-color: transparent;

        &:hover {
            background-color: rgb(255, 255, 255, 0.2);
        }
    }
}

button {
    cursor: pointer;
    border: none;
    z-index: 5;
    height: var(--carousel-button-height);
    width: var(--carousel-button-height);
    border-radius: var(--carousel-button-height);

    img {
        display: block;
        margin: auto;
    }
}

#close-button {
    position: absolute;
    right: 40px;
    top: 25px;

    &:hover {
        background-color: rgb(255, 255, 255, 0.6);
    }
}

#carousel-scrollable {
    display: flex;
    -ms-flex-direction: row;
    -webkit-flex-direction: row;
    flex-direction: row;
    overflow-x: scroll;
    overflow-y: hidden;
}

.image-container {
    display: block;
    width: 100vw;
    height: 100vh;
    flex-shrink: 0;

    img {
        display: block;
        position: relative;
        max-width: 90%;
        max-height: 80%;
        border-radius: 20px;
        pointer-events: none;
        touch-action: none;
        -ms-touch-action: none;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
}
</style>
