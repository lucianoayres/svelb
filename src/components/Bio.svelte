<script>
  import {
    AUTHOR_NAME,
    AUTHOR_LINKEDIN_URL,
    AUTHOR_PROFILE_IMAGE_URL,
    AUTHOR_BIO_DESCRIPTION,
    BLOG_DESCRIPTION
  } from '../constants'

  import Link from './Link.svelte'

  export let author = AUTHOR_NAME
  export let profileLink = AUTHOR_LINKEDIN_URL
  export let profileImageUrl = AUTHOR_PROFILE_IMAGE_URL
  export let authorDescription = AUTHOR_BIO_DESCRIPTION
</script>

<div class="bio">
  <img
    class="bio-avatar"
    src={profileImageUrl}
    heigth={56}
    width={56}
    alt={author}
  />
  <p>
    {BLOG_DESCRIPTION} by <Link href={profileLink} label={author} target="_blank" />.
    <span>{authorDescription}</span>
  </p>
</div>

<style>
  p {
    font-size: var(--fontSize-2);
    line-height: var(--lineHeight-normal);
  }

  span {
    display: block;
  }
</style>
