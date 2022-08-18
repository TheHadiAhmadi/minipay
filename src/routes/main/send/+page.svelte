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
  } from "@ubeac/svelte";
  import BackButton from "../../../lib/layouts/BackButton.svelte";
import Body from "../../../lib/layouts/Body.svelte";
import Header from "../../../lib/layouts/Header.svelte";
  import HeaderText from "../../../lib/layouts/HeaderText.svelte";
  import Main from "../../../lib/layouts/Main.svelte";

  import {page} from '$app/stores'

  let pinModalOpen = false;

  let showProgress = false;

  let doneState = false;

  function onSend() {
    showProgress = true;
    // TODO: Api send money
    setTimeout(onDone, 2000);
    console.log("send");
  }

  function onDone() {
    doneState = "success";
    showProgress = false;
    // pinModalOpen = false;
  }

  function onFailure() {
    showProgress = false;
    doneState = "failed";
  }

  function onCancel() {
    pin = undefined;
    pinModalOpen = false;
  }

  function onNext() {
    pinModalOpen = true;
  }

  let address = $page.url.searchParams.get('address') ?? '';
  let amount = $page.url.searchParams.get('amount') ?? 0;

  $: console.log($page.url)

  $: account_name = address.split("/")?.pop();

  let pin = undefined;
</script>

<!-- <App>
  <Grid slot="header">
    <Card outline class="w-100">
      
    </Card>
  </Grid> -->
<Main>
  <Header slot="header">
    <BackButton href="/main" />
    <HeaderText>Send Money</HeaderText>
  </Header>

  <Body>
    <p>Enter url of the user who want to receive the money</p>
    <Grid justifyContent="end" gutter="md">
      <GridItem col="12">
        <Alert type="warning">
          Your account is not enabled, to enable your account you need to set a <a
            class="alert-link"
            href="/settings">PIN Code</a
          >.
        </Alert>
      </GridItem>
      <FormInput
        bind:value={address}
        col="12"
        placeholder="https://minipay.vercel.app/user/...."
        label="Account URL"
      />
      <FormInput
        bind:value={amount}
        col="12"
        type="number"
        placeholder="10 - 1000 AF"
        label="Amount"
      />
      <GridItem col="12">
        {#if amount}
          <p>Transaction Fee: {(amount / 100).toFixed(0)} AF</p>
        {/if}
      </GridItem>
      <GridItem>
        <Button
          disabled={!account_name || !amount}
          on:click={onNext}
          color="blue">Next</Button
        >
      </GridItem>
    </Grid>
  </Body>
</Main>

<Dialog placement="center" bind:open={pinModalOpen}>
  <DialogContent>
    <DialogBody>
      <Grid justifyContent="end" gutter="md">
        <GridItem col="12">
          <Alert>
            <p>
              After this operation You will send {amount} AF to "{address
                .split("/")
                .pop()}"
            </p>
          </Alert>
        </GridItem>
        <FormInput
          bind:value={pin}
          label="Enter Your pin"
          type="password"
          max="4"
          col="12"
          placeholder="0000"
        />
        <GridItem col="12">
          {#if showProgress}
            <div>Sending....</div>
          {:else if doneState === "success"}
            <div>Done</div>
          {:else if doneState === "failes"}
            <div>Failes</div>
          {/if}
        </GridItem>
        <Grid gutter="md">
          {#if !doneState && !showProgress}
            <GridItem>
              <Button on:click={onCancel}>Cancel</Button>
            </GridItem>
          {/if}
          <GridItem>
            {#if doneState === false}
              <Button loading={showProgress} on:click={onSend} color="blue">
                Send
              </Button>
            {:else}
              <Button on:click={onCancel} color="blue">Close</Button>
            {/if}
          </GridItem>
        </Grid>
      </Grid>
    </DialogBody>
  </DialogContent>
</Dialog>
