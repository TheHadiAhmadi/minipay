<script>
  import { App, Button, Card, CardFooter, Grid, Icon } from "@ubeac/svelte";
</script>

<App sticky={['footer']}>
  <Grid slot="header">
    <Card outline class="w-100">
      <CardFooter>
        <slot name="header" />
      </CardFooter>
    </Card>
  </Grid>
  <slot />
  <slot name="footer" slot="footer"/>
</App>
