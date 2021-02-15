<template>
    <div class="home">
        <footer id="footer">
            <a href="#" class="fa fa-facebook" />
            <a href="#" class="fa fa-twitter" />
            <a href="#" class="fa fa-instagram" />
            <a href="#" class="fa fa-linkedin" />
        </footer>

        <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
    </div>
</template>
<script>
export default {
    name: 'Home',
    components: {}
}
</script>

<style scoped>


h1 {
    display: flex;
    justify-content: space-between;
}

 #footer {
    background-color: grey;
    color: white;
    height: 5vh;
    display: flex;
    justify-content: center;
    position: fixed;
    padding: 10px 10px 0px 10px;
    bottom: 0;
    width: 100%;
}

#footer a {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 1em;
    color: white;
}

</style>
