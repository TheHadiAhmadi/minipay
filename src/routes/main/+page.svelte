<script>
  import {
    Grid,
    GridItem,
    App,
    Card,
    CardFooter,
    CardBody,
    Icon,
Button,
  } from "@ubeac/svelte";
  import {goto}from '$app/navigation'

  function onSend() {
    goto('/send')
  }

  function onReceive() {
    goto('/receive')

  }
  function onHistory() {
    goto('/history')

  }
</script>

<!-- Main Page Show balance -->

<!-- <a href="/">Logout</a>
<a href="/send">Send Money</a>
<a href="/receive">Receive Money</a>
<a href="/history">View transaction history</a> -->

<App>
    <Grid slot="header">
        <Card outline class="w-100">
            <CardFooter>
                <h2>Main</h2>
                <Button href="/settings" shape="circle">
                  <Icon icon="ic:sharp-settings"/>
                </Button>
            </CardFooter>
        </Card>
    </Grid>
  <Card class="h-100">
    <CardBody>
      <CardBody>
        <div class="w-100 text-center">Your Balance is:</div>
        <div class="w-100 text-center lg">100<span class="sm bold">AF</span></div>
      </CardBody>
    </CardBody>
    <CardBody>
      <Grid justifyContent="evenly">
        <GridItem>
          <!-- <Button ghost color="dark"> -->
          <div on:click={onSend} class="button">
            <Icon size="3x" icon="ic:sharp-upload" />
            <div class="text-center">Send</div>
          </div>
          <!-- </Button> -->
        </GridItem>
        <GridItem>
          <!-- <Button ghost color="dark"> -->
          <div on:click={onReceive} class="button">
            <Icon size="3x" icon="ic:sharp-download" />
            <div class="text-center">Receive</div>
          </div>
          <!-- </Button> -->
        </GridItem>
        <GridItem>
          <!-- <Button ghost color="dark"> -->
          <div on:click={onHistory} class="button">
            <Icon size="3x" icon="ic:sharp-history" />
            <div class="text-center">history</div>
          </div>
          <!-- </Button> -->
        </GridItem>
      </Grid>
    </CardBody>
    <CardBody class="h-100">

    </CardBody>
  </Card>
</App>

<style global>
 
    h2 {
        margin: 0;
        text-align: center;
        width: 100%;
    }
    
  .lg {
    font-size: 48px;
  }
  .bold {
    font-weight: bold;
  }
  .sm {
    font-size: 12px;
  }

  .button :global(.u-icon) {
      transition: all 0.2s ease;
  }
  .button :global(.u-icon) {
      background-color: lightblue;
      padding: 0.5rem;
      border-radius: 50%;
  }

  .button:hover :global(.u-icon) {
      margin-bottom: 4px;
    scale: 1.2;
  }
</style>
