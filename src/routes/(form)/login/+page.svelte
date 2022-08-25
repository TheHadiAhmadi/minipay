<script>
import { goto } from "$app/navigation";

  import {
    FormInput,
    CardBody,
    CardHeader,
    CardActions,
    CardFooter,
    Grid,
    Button,
    ButtonGroup,
    Alert,
    AlertTitle,
  } from "@ubeac/svelte";
  import "@ubeac/svelte/styles.css";

  export let data;
  export let errors;

  let alertMessage = null;

  async function submit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const result = await fetch("/api/login", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (result.status > 300) {
      alertMessage = result.message;
    } else {
        goto('/main')
    }

    console.log(result);
  }
</script>

{#if alertMessage}
  <div class="alert-container">
    <Alert on:close={() => (alertMessage = null)} type="danger">
      <AlertTitle>Error</AlertTitle>
      {alertMessage}
    </Alert>
  </div>
{/if}

<form on:submit={submit}>
  <CardHeader class="lg">
    <span class="lg">Login</span>
  </CardHeader>
  <CardBody>
    <Grid vertical>
      <FormInput col="12" name="username" label="Username" />
      <FormInput col="12" label="Password" name="password" type="password" />
    </Grid>
  </CardBody>

  <CardFooter>
    <CardActions>
      <ButtonGroup>
        <Button href="/signup" shape="link">Signup</Button>
        <Button color="blue">Login</Button>
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
