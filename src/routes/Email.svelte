<script lang="ts">
	import { formatEmail } from '$lib';
	const emails = [
		'FABIAN@YAHOO.COM',
        'FM@127.0.0.1',
        'Fabian.Mossberg@google.com'
	];
</script>

<h1>Format emails</h1>


<pre class="code"><code
	>{`import { formatEmail } from '@fabianmossberg/fabutils';
const email = 'FABIAN@YAHOO.COM    ';
const formattedEmail = formatEmail(email); // "fabian@yahoo.com"`}
</code></pre>


<p>Convert emails to lowercase and trims them.</p>


<table>
	<thead>
		<tr>
			<th>Before</th>
			<th>After</th>
		</tr>
	</thead>
	<tbody>
		{#each emails as email}
			<tr>
				<td><pre>{email}</pre></td>
				<td><pre>{formatEmail(email)}</pre></td>
			</tr>
		{/each}
	</tbody>
</table>


<style>
	 td pre{
		background-color: rgb(230, 230, 230);
		display: inline;
		padding: 0.25rem;
	}
</style>