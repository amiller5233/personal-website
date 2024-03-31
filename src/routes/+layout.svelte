<script>
	import '../app.scss';
	const currentYear = (new Date().getFullYear());
</script>

<slot></slot>

<footer>
	<p>Copyright &copy; Adam Miller { currentYear }</p>
</footer>