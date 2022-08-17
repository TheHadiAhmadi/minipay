<script>
  import {
    App,
    Card,
    Grid,
    Button,
    CardBody,
    CardHeader,
    FormInput,
    Dialog,
    DialogContent,
    DialogBody,
    DialogHeader,
    DialogFooter,
    GridItem,
    Icon,
    CardFooter,
  } from "@ubeac/svelte";

  let updatePasswordOpen = false;
  let updatePinOpen = false;

  let username;
  let email;
  let pin;
  let old_password;
  let password;
  let verify_password;

  function onUpdatePassword() {
    console.log("update password", { password, verify_password });
    updatePasswordOpen = false;
  }

  function onUpdatePin() {
    console.log("update pin", { pin });
    updatePinOpen = false;
  }

  function onUpdatePinCancel() {
    pin = null;
    updatePinOpen = false;
  }

  function openPasswordDialog() {
    updatePasswordOpen = true;
  }

  function openPinDialog() {
    updatePinOpen = true;
  }

  function onUpdatePasswordCancel() {
    old_password = null;
    password = null;
    verify_password = null;
    updatePasswordOpen = false;
  }
</script>

<!-- Profile page Update email update Username update password add avatar set pin -->

<App body="center">
  <Card outline>
    <CardHeader>
      <Grid alignItems="center" gutter="md">
        <GridItem>
          <Button href="/main" shape="circle">
            <Icon icon="ic:sharp-arrow-back" />
          </Button>
        </GridItem>
        <GridItem>
          <h3 class="m-0">Edit Settings</h3>
        </GridItem>
      </Grid>
    </CardHeader>
    <CardBody>
      <Grid justifyContent="end" gutterY="md">
        <FormInput bind:value={username} label="Username" col="12" />
        <FormInput bind:value={email} label="Email" type="email" col="12" />

        <GridItem>
          <Grid gutter="sm">
            <GridItem>
              <Button on:click={openPinDialog}>Update PIN</Button>
            </GridItem>
            <GridItem>
              <Button on:click={openPasswordDialog}>Update Password</Button>
            </GridItem>

            <GridItem>
              <Button color="blue" on:click={openPasswordDialog}>Update</Button>
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </CardBody>
  </Card>
</App>

<Dialog bind:open={updatePasswordOpen} placement="center">
  <DialogContent>
    <DialogHeader>Update Password</DialogHeader>
    <DialogBody>
      <FormInput
        bind:value={old_password}
        label="Old Password"
        type="password"
        col="12"
      />
      <FormInput
        bind:value={password}
        label="New Password"
        type="password"
        col="12"
      />
      <FormInput
        bind:value={verify_password}
        label="Verify Password"
        type="password"
        col="12"
      />
    </DialogBody>
    <DialogFooter>
      <Button on:click={onUpdatePasswordCancel}>Cancel</Button>
      <Button color="blue" on:click={onUpdatePassword}>Update</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>

<Dialog bind:open={updatePinOpen} placement="center">
  <DialogContent>
    <DialogHeader>Update Pin</DialogHeader>
    <DialogBody>
      <FormInput bind:value={pin} label="Pin" type="password" col="12" />
    </DialogBody>
    <DialogFooter>
      <Button on:click={onUpdatePinCancel}>Cancel</Button>
      <Button color="blue" on:click={onUpdatePin}>Update</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
