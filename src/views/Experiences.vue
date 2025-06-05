<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
    <h1>{{ $t('titles.experiences') }}</h1>

    <h2>{{ $t('experiences.programmingLanguages.title') }}</h2>

    <div class="info-with-logo">
        <img src="@/assets/images/logos/java.svg" class="img-sharp-borders" />
        <div>
            <h3>{{ $t('experiences.programmingLanguages.java_titre') }}</h3>
            <p>{{ $t('experiences.programmingLanguages.java_p1') }}</p>
        </div>
    </div>

    <div class="info-with-logo">
        <img src="@/assets/images/logos/c-sharp.svg" />
        <div>
            <h3>{{ $t('experiences.programmingLanguages.csharp_titre') }}</h3>
            <p>{{ $t('experiences.programmingLanguages.csharp_p1') }}</p>
        </div>
    </div>

    <div class="info-with-logo">
        <img src="@/assets/images/logos/javascript.webp" class="img-sharp-borders" />
        <div>
            <h3>{{ $t('experiences.programmingLanguages.js_titre') }}</h3>
            <p>{{ $t('experiences.programmingLanguages.js_p1') }}</p>
        </div>
    </div>

    <div class="info-with-logo">
        <img src="@/assets/images/logos/rust-logo-white.svg" />
        <div>
            <h3>{{ $t('experiences.programmingLanguages.rustTitle') }}</h3>
            <p>{{ $t('experiences.programmingLanguages.rustP1') }}</p>
        </div>
    </div>

    <div class="info-with-logo">
        <img src="@/assets/images/logos/python.svg" />
        <div>
            <h3>{{ $t('experiences.programmingLanguages.pythonTitle') }}</h3>
            <p>{{ $t('experiences.programmingLanguages.pythonP1') }}</p>
        </div>
    </div>

    <h2>{{ $t('experiences.frameworks_titre') }}</h2>

    <div class="info-with-logo">
        <img src="@/assets/images/logos/vue-js.svg" class="img-sharp-borders" />
        <div>
            <h3>{{ $t('experiences.techno_vuejs_titre') }}</h3>
            <p>{{ $t('experiences.techno_vuejs_p1') }}</p>
            <RouterLink to="projects#nobespo-project" class="text-button">{{
                $t('experiences.techno_lien_projet')
            }}</RouterLink>
        </div>
    </div>

    <div class="info-with-logo">
        <img src="@/assets/images/logos/laravel-white.svg" style="transform: scale(1.2)" />
        <div>
            <h3>{{ $t('experiences.techno_laravel_titre') }}</h3>
            <p>{{ $t('experiences.techno_laravel_p1') }}</p>
            <RouterLink to="projects#laravel-project" class="text-button">{{
                $t('experiences.techno_lien_projet')
            }}</RouterLink>
        </div>
    </div>

    <div class="info-with-logo">
        <img src="https://storage.googleapis.com/cms-storage-bucket/67187dff9313e2831a8c.svg" />
        <div>
            <h3>Flutter</h3>
            <p>{{ $t('experiences.techno_flutter_p1') }}</p>
        </div>
    </div>

    <h2>{{ $t('experiences.autres_titre') }}</h2>

    <div class="info-with-logo">
        <img src="@/assets/images/logos/docker-white.svg" class="img-sharp-borders" />
        <div>
            <h3>{{ $t('experiences.techno_docker_titre') }}</h3>
            <p>{{ $t('experiences.techno_docker_p1') }}</p>
        </div>
    </div>

    <div class="info-with-logo">
        <img src="@/assets/images/logos/VBA.svg" class="add-white-border" />
        <div>
            <h3>VBA</h3>
            <p>{{ $t('experiences.vba_p1') }}</p>
            <RouterLink to="projects#vba-project" class="text-button">{{
                $t('experiences.techno_lien_projet')
            }}</RouterLink>
        </div>
    </div>

    <h2>{{ $t('experiences.pro_titre') }}</h2>

    <div class="info-with-logo">
        <a href="https://www.alme.fr/" class="button">
            <img src="@/assets/images/logos/alme.png" class="add-white-border" />
        </a>
        <div>
            <h3>{{ $t('experiences.alme.title') }}</h3>

            <p>{{ $t('experiences.alme.p1') }}</p>
            <p class="date">{{ $t('experiences.alme.date') }}</p>
        </div>
    </div>

    <div class="info-with-logo">
        <a href="https://www.timet.com/" class="button">
            <img src="@/assets/images/logos/timet.webp" class="add-white-border" />
        </a>
        <div>
            <h3>{{ $t('experiences.pro_timet_titre') }}</h3>

            <p>{{ $t('experiences.pro_timet_p1') }}</p>
            <p class="date">{{ $t('experiences.pro_timet_date') }}</p>
        </div>
    </div>

    <div class="info-with-logo">
        <a href="https://www.europapark.de/" class="button">
            <img src="@/assets/images/logos/europa_park.webp" />
        </a>
        <div>
            <h3>{{ $t('experiences.pro_europapark_titre') }}</h3>

            <p>{{ $t('experiences.pro_europapark_p') }}</p>
            <p class="date">{{ $t('experiences.pro_europapark_date') }}</p>
        </div>
    </div>

    <h2>{{ $t('experiences.assos_titre') }}</h2>

    <div class="info-with-logo">
        <a href="https://www.annecyfestival.com" class="button">
            <img
                id="img-logo-annecy"
                class="img-sharp-borders"
                src="@/assets/images/logos/festival-annecy.svg"
            />
        </a>
        <div>
            <h3>{{ $t('experiences.assos_annecy_titre') }}</h3>
            <p>{{ $t('experiences.assos_annecy_p') }}</p>
            <p class="date">{{ $t('experiences.assos_annecy_date') }}</p>
        </div>
    </div>

    <div class="info-with-logo">
        <a href="https://lescarres-asso.com/">
            <img src="@/assets/images/logos/mjc-carres.webp" class="button" />
        </a>
        <div>
            <h3>{{ $t('experiences.assos_soutien_titre') }}</h3>
            <p>{{ $t('experiences.assos_soutien_p') }}</p>
            <p class="date">{{ $t('experiences.assos_soutien_date') }}</p>
        </div>
    </div>
</template>

<style lang="scss">
#img-logo-annecy {
    object-fit: unset !important;
    width: 190px !important;
}

.img-sharp-borders {
    border-radius: 0 !important;
}

.add-white-border {
    background-color: white;
    border: solid white 5px;
}
</style>
