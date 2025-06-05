<script setup lang="ts"></script>

<template>
    <article id="about-me">
        <div>
            <h1>{{ $t('titles.home') }}</h1>

            <h2>{{ $t('home.about.title') }}</h2>
            <p>{{ $t('home.about.p1') }}</p>
            <p>{{ $t('home.about.p2') }}</p>
            <p>{{ $t('home.about.p3') }}</p>

            <p>
                {{ $t('home.about.contactData') }}
                <a class="text-button" href="tel:+33641472545"> +33 6 41 47 25 45 </a>
                <a class="text-button" href="mailto:cordellierp@gmail.com">
                    cordellierp@gmail.com
                </a>
                <a
                    class="text-button"
                    href="https://www.linkedin.com/in/paul-cordellier-426a44255/"
                >
                    LinkedIn
                </a>
            </p>
        </div>

        <img src="@/assets/images/accueil/pp.webp" id="profile-picture" />
    </article>

    <h2>{{ $t('home.academicBackground.title') }}</h2>

    <div class="experiences">
        <div class="info-with-logo">
            <img src="@/assets/images/logos/epitech.svg" id="epitech-logo" />
            <div>
                <h3>{{ $t('home.academicBackground.epitech.title') }}</h3>
                <p>{{ $t('home.academicBackground.epitech.p1') }}</p>
                <p class="date">{{ $t('home.academicBackground.epitech.date') }}</p>
            </div>
        </div>

        <div class="info-with-logo">
            <img src="@/assets/images/logos/USMB.webp" style="background-color: white" />
            <div>
                <h3>{{ $t('home.academicBackground.usmbSemester6.title') }}</h3>
                <p>{{ $t('home.academicBackground.usmbSemester6.p1') }}</p>
                <p class="date">{{ $t('home.academicBackground.usmbSemester6.date') }}</p>
            </div>
        </div>

        <div class="info-with-logo">
            <img src="@/assets/images/logos/hochschule-alb-sig.webp" id="hs-albsig-logo" />
            <div>
                <h3>{{ $t('home.academicBackground.albstadt_titre') }}</h3>
                <p>{{ $t('home.academicBackground.albstadt_p1') }}</p>
                <p class="date">{{ $t('home.academicBackground.albstadt_date') }}</p>
            </div>
        </div>

        <div class="info-with-logo">
            <img src="@/assets/images/logos/USMB.webp" style="background-color: white" />
            <div>
                <h3>{{ $t('home.academicBackground.usmbSemester1To4.title') }}</h3>
                <p>{{ $t('home.academicBackground.usmbSemester1To4.p1') }}</p>
                <p class="date">{{ $t('home.academicBackground.usmbSemester1To4.date') }}</p>
            </div>
        </div>
    </div>

    <article id="languages">
        <h2>{{ $t('home.languages.title') }}</h2>

        <div>
            <img src="@/assets/images/accueil/french-flag.png" />
            <h3>{{ $t('home.languages.francais_titre') }}</h3>
            <p>{{ $t('home.languages.francais_p1') }}</p>
            <a
                href="https://mon.certificat-voltaire.fr/verification-certificat?code=YHLMEED"
                class="text-button"
            >
                {{ $t('home.languages.francais_voltaire') }}
            </a>
        </div>

        <div>
            <img src="@/assets/images/accueil/english-flag.png" />
            <h3>{{ $t('home.languages.anglais_titre') }}</h3>
            <p>{{ $t('home.languages.anglais_p1') }}</p>
            <p>{{ $t('home.languages.anglais_p2') }}</p>
            <a
                href="TOIEC-exam-result.pdf"
                download="TOIEC results Paul CORDELLIER"
                class="text-button"
            >
                {{ $t('home.languages.anglais_toiec') }}
            </a>
        </div>

        <div>
            <img src="@/assets/images/accueil/german-flag.png" />
            <h3>{{ $t('home.languages.allemand_titre') }}</h3>
            <p>{{ $t('home.languages.allemand_p1') }}</p>
        </div>

        <br />

        <p>{{ $t('home.languages.traduction') }}</p>
    </article>
</template>

<style lang="scss">
#about-me {
    display: flex;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 30px;

    ~ h2 {
        padding-top: 0;
    }

    .text-button {
        margin: 5px 7px;
    }

    @media (max-width: 800px) {
        flex-direction: column;
        align-items: center;
    }
}

#profile-picture {
    display: block;
    border-radius: 20px;
    padding: 10px;
    margin-left: 20px;
    overflow: hidden;
    padding: 0;
    width: 200px;
    flex-shrink: 0;

    @media (max-width: 800px) {
        margin: 20px 0 40px 0;
        width: 200px;
    }
}

#languages {
    img {
        display: inline-block;
        height: 20px;
        width: 35px;
        border-radius: 10px;
        margin-right: 10px;
    }

    h3 {
        display: inline-block;
    }
}

$hs-albsig-logo-padding-size: 8px;

#hs-albsig-logo {
    background-color: white;
    padding: $hs-albsig-logo-padding-size;
    max-width: calc(var(--info-logo-max-width) - $hs-albsig-logo-padding-size * 2);
}

$epitech-logo-horizontal-padding-size: 10px;

#epitech-logo {
    background-color: white;
    padding: 12px $epitech-logo-horizontal-padding-size;
    max-width: calc(var(--info-logo-max-width) - $epitech-logo-horizontal-padding-size * 2);
}
</style>
