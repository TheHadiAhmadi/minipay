<script>
  import {
    Button,
    CardBody,
    FormInput,
    FormTextarea,
    Grid,
    GridItem,
    Icon,
    Input,
  } from "@ubeac/svelte";
  import BackButton from "../../../lib/layouts/BackButton.svelte";
  import Body from "../../../lib/layouts/Body.svelte";
  import Header from "../../../lib/layouts/Header.svelte";
  import HeaderText from "../../../lib/layouts/HeaderText.svelte";
  import QrCode from "svelte-qr"

  import Main from "../../../lib/layouts/Main.svelte";
  import {page} from '$app/stores'
  import {fade, blur} from 'svelte/transition'

  let amount;
  let address = 'mpy87687d6b8a7675c765d64ba64s654'; 
  
  let url = `${$page.url.origin}/main/send?address=${address}`

  function onCopy() {
      console.log(url)
  }

  function debounce(callback, timeout) {
    let timer;
      return () => {
          clearTimeout(timer)
        timer = setTimeout(() => {callback()}, timeout)
    }
  }

  const updateUrl = debounce(() => url = `${$page.url.origin}/main/send?address=${address}&amount=${amount}`, 300)

  $: updateUrl(amount)
</script>


Receive money page

<div>Enter amount to receive</div>

<div>Show QR code or URL address</div>

<a href="/main">Back</a>
<div>Share button</div>

<Main>
  <Header slot="header">
    <BackButton href="/main" />
    <HeaderText>Receive Money</HeaderText>
  </Header>
  <Body>
    <FormInput label="Your Address" col="12" readonly value={address} />

    <FormInput col=12 label="Set Amount" placeholder="10 - 1000 AF" type="number" bind:value={amount}/>

    {#key url}
        <div in:blur class="qr-container" on:click={onCopy}>
            <QrCode text={url} />
        </div>
    {/key}

    <!-- <FormTextarea class="h-5 my-3 p-0 border-0" col="12" label="Open this link with another account and continue there" readonly value={url}/> -->

  </Body>
</Main>

<style>
    .qr-container {
        max-width: 300px;
        aspect-ratio: 1;
        margin: 1rem auto;
    }
</style>