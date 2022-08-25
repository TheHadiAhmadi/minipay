<script>
import { goto } from "$app/navigation";

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
ButtonGroup,
Alert,
AlertTitle,
  } from "@ubeac/svelte";
  import "@ubeac/svelte/styles.css";

  let alertMessage = null

  export let data;
  export let errors;

  async function submit(event) {
    event.preventDefault()

    const result = await fetch('/api/signup', {
      method: 'POST',
      body: new FormData(event.target)
    }).then(res => res.json())

    if(result.status > 300) {
      alertMessage = result.message;
    } else {
      goto('/main')
    }
  }

  $: console.log(data);
  $: console.log(errors);
</script>


{#if alertMessage}
  <div class="alert-container">
    <Alert on:close={() => (alertMessage = null)} type="danger">
      <AlertTitle>Error</AlertTitle>
      {alertMessage}
    </Alert>
  </div>
{/if}

<form action="/signup" method="POST">
  <CardHeader class="lg">
    <span class="lg">Signup</span>
  </CardHeader>
  <CardBody>
    <Grid vertical>
      <FormInput col="12" name="username" label="Username" />
      <FormInput col="12" name="email" label="Email" />
      <FormInput col="12" label="Password" name="password" type="password" />
    </Grid>
  </CardBody>

  <CardFooter>
    <CardActions>
      <ButtonGroup>

        <Button shape="link" href="/login">Login</Button>
        <Button color="blue">Signup</Button>
    </ButtonGroup>
  </CardActions>
  </CardFooter>
</form>

<style>
  .lg {
    font-size: 24px;
  }

  .alert-container {
    position: fixed;
    right: 0;
    top: 0;
    padding: 1rem;
  }
</style>
