<template>
  <div class="about">
    <footer id="footer">
      <a href="#" class="fa fa-facebook"></a>
      <a href="#" class="fa fa-twitter"></a>
      <a href="#" class="fa fa-instagram"></a>
      <a href="#" class="fa fa-linkedin"></a>
    </footer>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
  </div>
</template>

<style scoped>

#footer {
  color: black;
  height: 6vh;
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
  color:black;
}
</style>