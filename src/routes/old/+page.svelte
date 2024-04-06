
<script>
	import BlockLink from '$lib/components/BlockLink.svelte';
</script>

<div id="border"></div>
<header>
	<img id="logo" src="logo_full.svg" draggable="false" alt="Adam Miller's logo">
</header>

<div class="container">
	<div class="heading">
		<span class="slash"></span><h1>Hi, I'm Adam!</h1><span class="slash"></span>
	</div>
	
	<p class="blurb">I am a recent graduate of Santa Clara University with a B.S. in Computer Science & Engineering. During my time in college, I learned a lot from programming classes and self-driven projects, and I continue to search for new things to learn about every day.<br><br>I'm currently searching for software engineering and web design related jobs, which will give me the opportunity to jumpstart my career and begin gaining valuable experience in the industry. Check out some of my work below!</p>
	<ul class="grid">
		<BlockLink
			label="Portfolio"
			icon="book"
			href="/portfolio"
			description="View my LinkedIn profile"
			color="purple">
		</BlockLink>
		<BlockLink
			label="LinkedIn"
			icon="linkedin"
			href="https://www.linkedin.com/in/adam-miller-3b2b71127/"
			description="See examples of my work"
			color="blue">
		</BlockLink>
		<BlockLink
			label="Github"
			icon="github"
			href="https://www.github.com/amiller5233"
			description="See my GitHub profile">
		</BlockLink>
		<BlockLink
			label="Resume"
			icon="file-text"
			href="https://drive.google.com/file/d/1Xxjl-RE47PY9QdvvuCfGrUkSaAEktabp/view?usp=sharing"
			description="Check out my resume"
			color="purple">
		</BlockLink>
		<BlockLink
			label="Musescore"
			icon="music"
			href="https://www.musescore.com/babaganoosh76"
			description="Listen to some of my arrangements"
			color="blue">
		</BlockLink>
		<BlockLink
			label="YouTube"
			icon="youtube"
			href="https://www.youtube.com/channel/UC_LIFVAPd40Cv8Hha3nRjuw"
			description="Check out some old vlogs I made"
			color="red">
		</BlockLink>
		<BlockLink
			label="Contact Me"
			icon="envelope"
			href="mailto:amiller5233@gmail.com?subject=Hi Adam, it's great to meet you!"
			description="Reach out to me via email">
		</BlockLink>
	</ul>
</div>