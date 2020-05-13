<template>
	<router-view />
</template>

<script>
export default {
	name: 'App',
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	outline-color: #e02041;
}

body {
	background: #f0f0f5;
	-webkit-font-smoothing: antialiased;
	font: 400 14px Roboto, sans-serif;
}

input,
button,
textarea {
	font: 400 18px Roboto, sans-serif;
}

button {
	cursor: pointer;
}

form input {
	width: 100%;
	height: 60px;
	color: #333;
	border: 1px solid #dcdce6;
	border-radius: 8px;
	padding: 0 24px;
}

.button {
	display: inline-block;
	width: 100%;
	height: 60px;
	background: #e02041;
	border: 0;
	border-radius: 8px;
	color: #fff;
	text-align: center;
	text-decoration: navajowhite;
	font-weight: 700;
	font-size: 1rem;
	line-height: 1.4;
	margin: 16px 0 0 0;
	transition: all .3s;
	&:hover {
		filter: brightness(90%);
	}
}

.back-link {
	display: flex;
	align-items: center;
	margin: 40px 0 0;
	color: #41414d;
	font-size: 1.125rem;
	font-weight: 500;
	text-decoration: none;
	transition: opacity .2s;
	&:hover {
		opacity: 0.8;
	}
	svg {
		margin: 0 10px 0 0;
	}
}
</style>
