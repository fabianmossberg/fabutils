<script lang="ts">
	import { delay } from '$lib';
	let disabled = false;
	const click = async () => {
		disabled = true;
		await delay(1000);
		disabled = false;
	};
</script>

<h1>Delay</h1>
<p>Wait for x milliseconds before continuing.</p>
<button on:click={click} {disabled}>Delay 1 second</button>

<pre class="code"><code
		>{`import { delay } from '@fabianmossberg/fabutils';
let disabled = false;
const click = async () => {
    disabled = true;
    await delay(1000); // delay 1 second
    disabled = false;
}`}
</code></pre>
