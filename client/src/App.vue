<template>
  <div id="app">
    <header>
      <h1>Flashcard App</h1>
    </header>
    <nav>
      <ul id="nav-ul">
      <router-link class="nav-link" to="/">Admin</router-link> |
      </ul>
    </nav>
    
    <main>
    <router-view/>
    </main>

    <footer>
      &copy; 2023 Steven Reale. Designed for Shortform.
    </footer>

  </div>
</template>

<style>

/* Meyerweb CSS RESET BEGINS HERE */
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;}
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;}
body {
	line-height: 1;}
ol, ul {
	list-style: none;}
blockquote, q {
	quotes: none;}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;}
table {
	border-collapse: collapse;
	border-spacing: 0;}
/* Meyerweb CSS RESET ENDS HERE */
*, body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

a{
  color: black;
  font-weight: bold;
  text-decoration: none;
}

.nav-link {
  display: inline-block;
  line-height: 2em;
}

#nav-ul {
  padding-left: 10px;
}

h1 {
  font-size: 5em;
}

header {
  display: flex;
  position: fixed;
  height: 120px;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: #F3BD00;
  padding: 0;
}

nav {
  display: flex;
  position: fixed;
  top: 120px;
  background-color: #f5d564;
  width: 100%;
  height: 30px;
  align-items: center;
 
}

main {
  padding: 160px 20px 40px 20px;
}

footer {
  position: fixed;
  display: flex;
  align-items: center;
  height: 30px;
  width: 100vw;
  bottom: 0px;
  background-color: #f5d564;
  padding-left: 20px;
}

a.router-link-exact-active {
  background-color: #faefca;
}

</style>
