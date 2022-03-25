<script>
  export let gitHubUrl = ''
  export let linkedInUrl = ''
  export let sourceCodeUrl = ''
</script>

<footer>
  <div>
    <ul>
      <li>
        <a href={gitHubUrl} target="_blank">GitHub</a>
      </li>
      <li>
        <a href={linkedInUrl} target="_blank">LinkedIn</a>
      </li>
    </ul>
  </div>
  <div>
    <ul>
      <li>
        <a href={sourceCodeUrl} target="_blank">Source Code</a>
      </li>
    </ul>
  </div>
</footer>

<style>
  ul {
    display: inline;
  }

  li {
    display: inline;
  }
  li:not(:last-child):after {
    content: ' • ';
  }
</style>
