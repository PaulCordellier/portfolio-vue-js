<script setup lang="ts">
import { RouterLink } from 'vue-router'

function fromLocaleCodeToLanguageName(localeCode: string): string {
    switch (localeCode) {
        case 'fr':
            return 'Français'

        case 'en':
            return 'English'

        default:
            return ''
    }
}
</script>

<template>
    <header>
        <input type="checkbox" title="Navigation menu" id="navbar-toggler" />
        <div id="header-text">
            <h1 id="title">{{ $t('titles.main') }}</h1>
            <label id="culture-selector">
                {{ $t('misc.selectLanguage') }}
                <select v-model="$i18n.locale">
                    <option
                        v-for="locale in $i18n.availableLocales"
                        :key="`locale-${locale}`"
                        :value="locale"
                    >
                        {{ fromLocaleCodeToLanguageName(locale) }}
                    </option>
                </select>
            </label>
            <nav>
                <div v-for="link in ['home', 'experiences', 'projects']">
                    <RouterLink :to="{ name: link }"> {{ $t('titles.' + link) }} </RouterLink>
                </div>
            </nav>
        </div>
    </header>
</template>

<style lang="scss">
#header-text {
    display: block;
}

header {
    position: relative;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100vw;
    min-height: calc(15vw + 100px);
    border-bottom: solid 5px;
    border-bottom-color: rgb(65, 46, 135);

    * {
        color: black;
    }
}

#title {
    display: block;
    position: absolute;
    top: 15px;
    left: 15px;
    padding: 10px 15px 5px 15px;
    border-radius: 15px;
    display: block;
    text-align: center;
    font-weight: 700;
}

@media (min-width: 1000px) {
    header {
        background-image: url('@/assets/images/header/fond-1920w.webp');
    }

    #title {
        font-size: 2em;
    }
}

@media (max-width: 1000px) {
    header {
        background-image: url('@/assets/images/header/fond-960w.webp');
    }

    #title {
        font-size: 1.5em;
    }
}

@media (max-width: 450px) {
    header {
        background-image: url('@/assets/images/header/fond-400w.webp');
    }

    #title {
        font-size: 1.2em;
    }
}

#navbar-toggler {
    display: none;
}

/* navbar */

#header-text nav {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;

    -webkit-justify-content: center;
    justify-content: center;

    a {
        display: block;
        text-decoration: none;
        transition: background-color 0.3s;
        font-size: 1.1em;
        padding: 10px 15px;

        &:hover {
            background-color: rgba(255, 255, 255, 0.3);
        }

        &.router-link-active {
            background-color: rgba(255, 255, 255, 0.3);
        }
    }
}

/* Sélecteur de langue */

#culture-selector {
    position: absolute;
    top: 15px;
    right: 15px;
    display: block;
    text-align: center;
    border-radius: 15px;
    padding: 10px 15px;
    padding-bottom: 8px;

    select {
        padding: 2px 4px 5px 4px;
        -moz-border-radius: 5px;
        -webkit-border-radius: 5px;
        border: none;
        border-radius: 5px;
    }
}

/* Bouton menu */
#navbar-toggler {
    display: none;
    appearance: none;
    cursor: pointer;
    position: absolute;
    top: 15px;
    right: 15px;
    cursor: pointer;
    padding: 23px;
    border-radius: 10px;
    background-image: url('@/assets/images/header/menu-icon.webp');
    background-position: center;
    background-repeat: no-repeat;
    z-index: 2;
}

/* affichage pour tel */

@media (max-width: 900px) {
    #navbar-toggler {
        display: block;
    }

    /* on désactive et active l'effet verre */

    #header-text {
        display: flex;
        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
        -webkit-justify-content: space-between;
        justify-content: space-between;
        background-color: white;
        visibility: hidden;
        min-height: calc(15vw + 100px);

        #title,
        #culture-selector {
            align-self: center;
            -webkit-align-self: center;
        }
    }

    #navbar-toggler:checked {
        backdrop-filter: none;
        -webkit-backdrop-filter: none;
    }

    #navbar-toggler:checked ~ #header-text {
        background-color: rgba(255, 255, 255, 0.4);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        opacity: 1;
        visibility: visible;
    }

    #navbar-toggler:checked ~ #header-text nav a {
        padding: 10px 15px;
    }

    #header-text nav {
        display: flex;
        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
    }

    #header-text nav,
    #culture-selector {
        background-color: transparent;
        backdrop-filter: none;
        -webkit-backdrop-filter: none;
        position: static;
        -webkit-justify-content: unset;
        justify-content: unset;
    }

    #title {
        display: block;
        position: unset;
        padding: 7px 10px;
        visibility: visible;
        -webkit-justify-content: unset;
        justify-content: unset;
    }

    #navbar-toggler:checked ~ #header-text #title {
        background-color: transparent;
        backdrop-filter: none;
        -webkit-backdrop-filter: none;
    }

    #header-text nav a {
        transition:
            background-color 0s,
            padding 0.3s;
        padding: 0 15px;
    }

    #navbar-toggler:checked ~ #header-text nav a {
        transition:
            background-color 0.3s,
            padding 0.3s;
    }
}
</style>
