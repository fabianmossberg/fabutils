<script lang="ts">
	import { stringToNumber } from '$lib';
	const strings = [
		'1.984',
		'1,982',
		'10.',
		'10,',
		'a',
		'10',
		'13.37',
		'68,030',
		'10 kr',
		'12.500,32',
		'15,000.50',
		'15.00',
		'tusen',
		'NaN',
		'undefined'
	];

	$: fabian = strings.map((x) => {
		return {
			input: x,
			output: stringToNumber(x)
		};
	});

	let value: string = '$ 199,99';
	$: output = stringToNumber(value);
</script>

<h1>Strings to numbers</h1>


<pre class="code"><code
    >{`import { stringToNumber } from '@fabianmossberg/fabutils';
const input = "1 500 kr";
const output = stringToNumber(input) // 1500`}
</code></pre>

<p>I use this for an accounting app I built where I nended up pasting values from multiple different sources, never knowing the formatting.</p>

<div class="preview">
	<div>
		<label for="to_number_input">Input</label>
		<input bind:value placeholder="Input" id="to_number_input" />
	</div>
	<div>
		<label for="to_number_output">Input</label>
		<input value={output} placeholder="Output" id="to_number_output" />
	</div>
	<div>
		<pre>{JSON.stringify({ input: value, output }, null, 2)}</pre>
	</div>
</div>

<table>
	<thead>
		<tr>
			<th>Type</th>
			<th>Before</th>
			<th>After</th>
			<th>Type</th>
		</tr>
	</thead>
	<tbody>
		{#each fabian as { input, output }}
			<tr
				on:click={() => {
					value = input;
				}}
				class="selectValue"
			>
				<td>{typeof input}</td>
				<td><pre>{JSON.stringify(input)}</pre></td>
				<td><pre>{JSON.stringify(output)}</pre></td>
				<td>{typeof output}</td>
			</tr>
		{/each}
	</tbody>
</table>

<style>
	td:has(pre) {
		text-align: center;
	}
	td:not(:has(pre)) {
		font-size: 0.8rem;
	}
	table tr td pre {
		background-color: rgb(230, 230, 230);
		display: inline;
		padding: 0.25rem;
	}

	.preview {
		place-content: center;
		display: grid;
		/* align-items: center; */
		padding: 1rem;
		gap: 1rem;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr;
	}
	.preview div {
		display: grid;
		place-content: center;
	}

	.preview div:nth-child(n + 1) {
		grid-gap: 0.25rem;
		grid-column: 1/2;
		place-content: center;
	}
	.preview label {
		font-size: 0.8rem;
	}
	.preview div:nth-last-of-type(1) {
		grid-column: 2/3;
		grid-row: 1/-1;
		/* place-content: start; */
		overflow: hidden;
		display: grid;
		/* place-items: center; */
		justify-content: start;
	}

	.selectValue {
		cursor: pointer;
	}

	.selectValue:hover {
		background-color: yellow;
	}

	input {
		text-align: center;
	}
</style>
