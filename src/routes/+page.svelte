<script>
  import { App, Button, Grid, GridItem } from "@ubeac/svelte";
</script>

<App>
  <div class="header" slot="header">
    <Grid alignItems="center" gutter="md">
      <GridItem>
          <h2>MiniPay</h2>
        </GridItem>
      <GridItem col="grow" />
      <GridItem>
        <Button outline href="/login">Login</Button>
      </GridItem>
      <GridItem>
        <Button color="blue" href="/signup">Register</Button>
      </GridItem>
    </Grid>
  </div>
  <Grid vertical>
    <GridItem>Hero Section</GridItem>

    <GridItem>Example Usage</GridItem>

    <GridItem>More stuff</GridItem>
  </Grid>
  <Grid slot="footer">
    <div class="bg-dark">Footer</div>
  </Grid>
</App>

<style>
    .header {
        padding: 1rem;
        border-bottom: 1px solid rgb(209, 209, 209);
        background-color: rgba(255, 255, 255, 0.849);
    }
    .header h2 {
        margin: 0;
    }
</style>