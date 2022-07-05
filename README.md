<h1>Minion Meme Generator API</h1>

<h4>Getting Started</h4>

<ul>
  <li>No email required.</li>
  <li>No API key required.</li>
  <li>Currently 5 backgrounds, 1 body, 5 eyes, 5 mouths.</li>
</ul>

<h2>Minion</h2>
<h4>Randomly Generate 1 Minion Meme</h4>
<p>This endpoint retrieves just one minion meme.</p>

<h4>HTTP Request</h4>
<code>GET https://minion-generator.herokuapp.com/api/v1/minion/userid</code>

<h4>Query Parameters</h4>
<table>
  <thead>
    <tr>
      <th scope="col">Parameter</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">userid</th>
      <td>A string used to create a folder for your personal memes.</td>
    </tr>
  </tbody>
</table>

<h4>Sample Output</h4>
<pre>
{
  "name": "Norbit",
  "description": "A drawing of Norbit",
  "image": "https://minion-generator.herokuapp.com/asarel/Norbit.png"
}
</pre>
