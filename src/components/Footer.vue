<template>
    <footer>
        <p>
            <a href="https://www.flaticon.com/free-icons/violet" style="">{{ $t('footer.p1') }}</a>
        </p>
        <p>
            <a href="https://fonts.google.com/icons">{{ $t('footer.p2') }}</a>
        </p>
        <p>{{ $t('footer.p3') }}</p>
    </footer>
</template>

<style lang="scss">
footer {
    padding: 40px 30px;
    background-color: #303030;
    text-align: center;
    color: white;
}

a {
    text-decoration: none;
    color: inherit;
}
</style>
