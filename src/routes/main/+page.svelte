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
  import { goto } from "$app/navigation";
  import Main from "../../lib/layouts/Main.svelte";
import HeaderText from "../../lib/layouts/HeaderText.svelte";
import Body from "../../lib/layouts/Body.svelte";

export let data;
let balance = 0

  function onSend() {
    goto("/main/send");
  }

  function onReceive() {
    goto("/main/receive");
  }
  function onHistory() {
    // goto("/main/history");
    goto('#history')
  }
</script>

<!-- Main Page Show balance -->

<!-- <a href="/">Logout</a>
<a href="/send">Send Money</a>
<a href="/receive">Receive Money</a>
<a href="/history">View transaction history</a> -->

<Main>
  <Grid class="w-100" justifyContent="between" slot="header">
    <div class="w-4">
      <!-- <Icon icon="ic:sharp-settings" /> -->
    </div>
  
    <HeaderText>Main</HeaderText>
    <Button href="/settings" shape="circle">
      <Icon icon="ic:sharp-settings" />
    </Button>
  </Grid>
  <Body>
    <CardBody>
      <div class="w-100 text-center">Your Balance is:</div>
      <div class="w-100 text-center lg">{balance}<span class="sm bold">AF</span></div>
    </CardBody>
    <CardBody>
      <Grid justifyContent="evenly">
        <GridItem on:click={onSend} class="button">
            <Icon size="3x" icon="ic:sharp-upload" />
            <div class="text-center">Send</div>
        </GridItem>
        <GridItem on:click={onReceive} class="button">
            <Icon size="3x" icon="ic:sharp-download" />
            <div class="text-center">Receive</div>
        </GridItem>
        <GridItem on:click={onHistory} class="button">
            <Icon size="3x" icon="ic:sharp-history" />
            <div class="text-center">history</div>
        </GridItem>
      </Grid>
    </CardBody>
    <Grid id="history" vertical>
      <div class="sticky mb-3" class:expand={true}>Transaction History</div>
      
      {#each Array.from({length: 10}) as _, index}
        <div class="p-3 border">{index}</div>
      {/each}
    </Grid>
  
  </Body>

  <div class="bg-light text-dark p-2" slot="footer">

  </div>
  </Main>

<style global>

  .sticky {
    position: sticky;
    padding: 1rem;
    top: 0;
  }

  .sticky.expand {
    margin-left: -20px;
    margin-right: -20px;
    background-color: #8dbcee;
    
  }

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

  :global(.button) > :global(*) {
    transition: all 0.2s ease;
  }
  :global(.button) :global(.u-icon) {
    background-color: #8dbcee;
    padding: 0.5rem;
    border-radius: 50%;
  }

  :global(.button):hover :global(.u-icon) {
    margin-bottom: 4px;
    scale: 1.2;
  }

  :global(.button) div {
    margin-top: 8px;
    margin-bottom: 4px;
  }

  :global(.button):hover div {
    margin-bottom: 0;
  }
</style>
