<script>
    import { base } from '$app/paths';
    import "@my-portfolio/styling"; /* DEV_NOTE # refer vite.config.js for resolve.alias */
    const full_name = "Lukas Gaucas";
    const findme = "Ways to find me";
    const linkedin = "LinkedIn";
    const github = "GitHub";
    const hashnode = "Hashnode";
</script>

<div class="hero min-h-screen bg-base-200">
    <div class="hero-content text-center">
    <div class="max-w-md">
        <img class="mask mask-circle" src={base + "/portfolio.png"} alt="portfolio" width="400" height="400">
        <p class="text-4xl italic font-bold">{full_name}</p>
        <div class="divider"><p class="text-lg italic">{findme}</p></div>
        <button class="btn btn-primary"><a href="https://www.linkedin.com/in/lukas-gaucas-985957266/" target="_blank">{linkedin}</a></button>
        <button class="btn btn-neutral"><a href="https://github.com/projektorius96" target="_blank">{github}</a></button>
        <button class="btn btn-warning"><a href="https://vanillacamp.hashnode.dev/" target="_blank">{hashnode}</a></button>
        <div class="divider"><p class="text-m">SvelteKit &copy; {new Date().getFullYear()}</p></div>
    </div>
    </div>
</div>