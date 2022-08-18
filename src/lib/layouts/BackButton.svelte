<script>
  import { Button, GridItem, Icon } from "@ubeac/svelte";

  export let href;
</script>

<GridItem>
  <Button {href} shape="circle">
    <Icon icon="ic:sharp-arrow-back" />
  </Button>
</GridItem>
