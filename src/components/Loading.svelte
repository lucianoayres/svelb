<script>
  import { LOADING_MESSAGE } from '../constants'
</script>

<p class="loading">{LOADING_MESSAGE}</p>

<style>
  .loading {
    opacity: 0;
    animation: 0.4s 0.8s forwards fade-in;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>
