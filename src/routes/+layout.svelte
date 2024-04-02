<script>
	import '../scss/style.scss';
	const currentYear = (new Date().getFullYear());
</script>

<slot></slot>

<footer>
	<p>Copyright &copy; Adam Miller { currentYear }</p>
</footer>