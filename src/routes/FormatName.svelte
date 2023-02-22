<script lang="ts">
	import { formatName } from '$lib/index';
	const names = [
		'benny-hill jönsson',
		'Ingvar von snorre',
		'JAMES-POND',
		'Örjan-snis',
		'ålvar-åberg',
		'kung af sheet',
		'fabain       MOSSBERG        ',
		'bob de la gardie',
		'johanna du rietz',
		'von böck'
	];
	const formatter = new Intl.ListFormat('en', { style: 'short', type: 'disjunction' });

	let name = 'fabian mossberg';
	$: formattedName = formatName(name);
</script>

<h1>Format name</h1>


<pre class="code"><code
	>{`import { formatName } from '@fabianmossber/fabutils';
const name = 'fabian mossberg';
const formattedName = formatName(name); // Fabian Mossberg`}</code></pre>

<p>Trims the string. Replaces any occurance of more than one space, with just one space.</p>
<p>Capitalize the first letter in names, while respecting Swedish characters and "double names".</p>

<blockquote cite="https://tt.se/tt-spraket/skriv/versaler-och-gemener/#chapter12">
	Notera att af, de och von har gemen begynnelsebokstav även när de inleder en ny mening: von
	Petersens, von Sydow etcetera. Det finns dock undantag: en del av den svenska släkten <mark
		>De Geer</mark
	>
	stavar sitt namn just så, liksom <mark>De la Gardie och Du Rietz</mark>.

	<footer>
		<cite
			><a href="https://tt.se/tt-spraket/skriv/versaler-och-gemener/#chapter12">TT Språket</a></cite
		>
	</footer>
</blockquote>
<p>Does not capitalize {formatter.format(`de|la|de|di|la|le|van|von|af|der`.split('|'))}</p>



<div class="preview">
	<input bind:value={name} />
	<div><pre>{formattedName}</pre></div>
</div>

<table>
	<thead>
		<tr>
			<th>Before</th>
			<th>After</th>
		</tr>
	</thead>
	<tbody>
		{#each names as n}
			<tr
				class="selectName"
				on:click={() => {
					name = n;
				}}
			>
				<td><pre>{n}</pre></td>
				<td><pre>{formatName(n)}</pre></td>
			</tr>
		{/each}
	</tbody>
</table>

<style>
	.preview pre, td pre {
		background-color: rgba(255, 255, 0, 0.417);
		display: inline;
		/* padding: 0.25rem; */
	}

	.preview{
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 1rem;
		gap:1rem;
	}

	.preview pre::before {
		content: '=>';
		opacity: 0.4;
	}
	.preview pre::after {
		content: '<=';
		opacity: 0.4;
	}

	.selectName {
		cursor: pointer;
	}

	.selectName:hover {
		background-color: rgb(230, 230, 230);
	}
</style>
