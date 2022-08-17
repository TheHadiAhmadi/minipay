<script>
  import {
    App,
    FormInput,
    Card,
    CardBody,
    CardHeader,
    CardActions,
    CardFooter,
    Grid,
    GridItem,
    Button,
  } from "@ubeac/svelte";
  import "@ubeac/svelte/styles.css";


  export let data;
  export let errors;

  $: console.log(data);
  $: console.log(errors);
  let request = {};

  //   async function onSignup() {
  //       console.log({request})
  //       const result = await fetch('./signup', {
  //           method: 'POST',
  //           body: JSON.stringify(request)
  //       }).then(res => res.json())

  //       errors = result.errors

  //   }
</script>

<App body="center">
  <Card outline>
    <form action="/signup" method="POST">
      <CardHeader class="lg">
        <span class="lg">Signup</span>
      </CardHeader>
      <CardBody>
        <Grid vertical>
          {#if errors}
            {JSON.stringify(errors)}
          {/if}
          <FormInput col="12" name="username" label="Username" />
          <FormInput col="12" name="email" label="Email" />
          <FormInput
            col="12"
            bind:value={request.password}
            label="Password"
            name="password"
            type="password"
          />
        </Grid>
      </CardBody>

      <CardFooter>
        <CardActions>
          <Button color="blue">Signup</Button>
        </CardActions>
      </CardFooter>
    </form>
  </Card>
</App>

<style>
  .lg {
    font-size: 24px;
  }
</style>
