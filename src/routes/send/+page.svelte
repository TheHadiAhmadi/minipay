<!-- Send Money page

<div>get other user's address</div>
<div>Get Amount</div>

<div>show Fee</div>
<div>Button for submitting</div>

<a href="/done">Done (Show Modal)</a>
<a href="/main">Back</a> -->
<script>
  import {
    Alert,
    Grid,
    GridItem,
    App,
    Card,
    CardFooter,
    CardBody,
    Icon,
    FormInput,
    Button,
    Dialog,
    DialogContent,
    DialogBody,
    DialogFooter,
  } from "@ubeac/svelte";
  import { goto } from "$app/navigation";

  let pinModalOpen = false;

  function onSend() {
      pinModalOpen = false
      console.log('send')

  }

  function onCancel() {
      pin = undefined
      pinModalOpen = false
  }
  
  function onNext() {
    pinModalOpen = true;
  }

  let address = ''
  let amount = 0

  let pin = undefined
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
          <Button href="/main" shape="circle" outline>

          <Icon icon="ic:sharp-arrow-back"/>
        </Button>
        <h2>Send Money</h2>
      </CardFooter>
    </Card>
  </Grid>
  <Card class="h-100">
    <CardBody>
      <p>Enter url of the user who want to receive the money</p>
      <CardBody>
        <Grid justifyContent="end" gutter="md">
          <FormInput
            bind:value={address}
            col="12"
            placeholder="https://minipay.deno.dev/user/...."
            label="Account URL"
          />
          <FormInput bind:value={amount} col="12" placeholder="10 - 1000 AF" label="Amount" />
          <GridItem col=12>
              {#if amount}
                <p>Transaction Fee: {(amount / 100).toFixed(0)} AF</p>
              {/if}
          </GridItem>
          <GridItem>
            <Button disabled={!address || !amount} on:click={onNext} color="blue">Next</Button>
          </GridItem>
        </Grid>
        <!-- <div class="w-100 text-center">Your Balance is:</div> -->
        <!-- <div class="w-100 text-center lg">100<span class="sm bold">AF</span></div> -->
      </CardBody>
    </CardBody>

    <CardBody class="h-100" />
  </Card>
</App>

<Dialog placement="center" bind:open={pinModalOpen}>
  <DialogContent>
    <DialogBody>
      <Grid justifyContent="end" gutter="md">
        <Alert>
          <p>After this operation You will send {amount} AF to "{address.split('/').pop()}"</p>
        </Alert>
        <FormInput
            bind:value={pin}
          label="Enter Your pin"
          type="number"
          col="12"
          placeholder="0000"
        />
        <Grid gutter="md">
            <GridItem>
                <Button on:click={onCancel}>Cancel</Button>
            </GridItem>
            <GridItem>
                <Button on:click={onSend} color="blue">Send</Button>
            </GridItem>
        </Grid>
      </Grid>
    </DialogBody>
  </DialogContent>
</Dialog>

<style global>
  h2 {
    margin: 0;
    text-align: center;
    width: 100%;
  }
</style>   
