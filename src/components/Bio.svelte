<script>
  import {
    AUTHOR_NAME,
    AUTHOR_LINKEDIN_URL,
    AUTHOR_PROFILE_IMAGE_URL,
    AUTHOR_BIO_DESCRIPTION
  } from '../constants'

  export let author = AUTHOR_NAME
  export let profileLink = AUTHOR_LINKEDIN_URL
  export let profileImageUrl = AUTHOR_PROFILE_IMAGE_URL
  export let description = AUTHOR_BIO_DESCRIPTION
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
    Dev blog by <a href={profileLink} target="_blank">{author}</a>.
    <span>{description}</span>
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
