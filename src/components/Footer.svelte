<script>
  import {
    AUTHOR_GITHUB_URL,
    AUTHOR_LINKEDIN_URL,
    SOURCE_CODE_URL
  } from '../constants'

  export let gitHubUrl = AUTHOR_GITHUB_URL
  export let linkedInUrl = AUTHOR_LINKEDIN_URL
  export let sourceCodeUrl = SOURCE_CODE_URL
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
