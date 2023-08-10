<script>
    import { base } from '$app/paths';
    import Stack from './Stack.svelte';
    import "@my-portfolio/styling"; /* DEV_NOTE # refer vite.config.js for resolve.alias */
    const full_name = "Lukas Gaučas";
    const findme = "Ways to find me";
    const linkedin = "LinkedIn";
    const github = "GitHub";
    const hashnode = "Hashnode";
    const mensgo = ['MongoDB', 'Express.js', 'Node.js', 'Svelte', 'Go'];
    const credits = "Made with ♥ SvelteKit"; 
</script>

<div class="hero min-h-screen bg-base-200">
    <div class="hero-content text-center">
    <div class="max-w-md">
        <img class="mask mask-circle" src={base + "/portfolio.png"} alt="portfolio" width="400" height="400">
        <p class="text-4xl italic font-bold py-2">{full_name}</p>
        <div class="divider"><p class="text-xl italic">{findme}</p></div>
        <button class="btn btn-primary"><a href="https://www.linkedin.com/in/lukas-gaucas-985957266/" target="_blank">{linkedin}</a></button>
        <button class="btn btn-neutral"><a href="https://github.com/projektorius96" target="_blank">{github}</a></button>
        <button class="btn btn-secondary"><a href="https://vanillacamp.hashnode.dev/" target="_blank">{hashnode}</a></button>
        <div class="divider"><p class="text-lg">Stack</p></div>
            {#each mensgo as j, k}
                <Stack currentStackItem={j} />
            {/each}
        <div class="divider"><p class="text-xl">{credits}</p></div>
    </div>
    </div>
</div>