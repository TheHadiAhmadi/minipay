<script>
  import {
    App,
    Card,
    CardFooter,
    CardBody,
    Grid,
    GridItem,
    CardHeader,
    TableHead,
    Table,
    TableCell,
    TableBody,
    TableRow,
    Button,
    Dialog,
    DialogContent,
    DialogHeader,
    DialogBody,
    FormInput,
    DialogFooter,
    Confirm,
Divider,
CardTitle,
CardSubtitle,
  } from "@ubeac/svelte";

  export let data;

  let editOpen = false;
  let editingUser = null;
  let removeOpen = false;
  let removingUser = null;

  function editUser(user) {
    console.log(user);
    editOpen = true;
    editingUser = user;
  }

  function removeUser(user) {
    removeOpen = true;
    removingUser = user;
  }

  function cancelRemove() {
    removeOpen = false;
    removingUser = null;
  }

  function cancelEdit() {
    editOpen = false;
    editingUser = null;
  }

  function saveUser() {
    console.log("update user's data", editingUser);
    cancelEdit();
  }

  function removeSelectedUser() {
    console.log("remove user", removingUser);
    cancelRemove();
  }

  $: console.log(data);
</script>

{#if data.users}
    <Card outline>
      <CardHeader>
        <CardTitle>Users</CardTitle>
      </CardHeader>

    <Table hover>
      <TableHead>
        <TableCell>ID</TableCell>
        <TableCell>Username</TableCell>
        <TableCell>Email</TableCell>
        <TableCell>Password</TableCell>
        <TableCell>Actions</TableCell>
      </TableHead>
      <TableBody>
        {#each data.users as user}
          <TableRow>
            <TableCell>{user.id}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.password}</TableCell>
            <TableCell class="w-0">
              <Button size="sm" color="danger" on:click={() => removeUser(user)}
                >Remove</Button
              >
              <Button on:click={() => editUser(user)} size="sm" color="info"
                >Edit</Button
              >
              <Button size="sm" href="./users/{user.id}">Open</Button>
            </TableCell>
          </TableRow>
        {/each}
      </TableBody>
    </Table>
  </Card>
{/if}

<Dialog bind:open={editOpen}>
  <DialogContent>
    <DialogHeader>Edit User</DialogHeader>
    <DialogBody>
      {#if editOpen}
        <FormInput col="12" label="email" bind:value={editingUser.email} />
        <FormInput
          col="12"
          label="password"
          bind:value={editingUser.password}
        />
        <FormInput
          col="12"
          label="username"
          bind:value={editingUser.username}
        />
      {/if}
    </DialogBody>

    <DialogFooter>
      <Button on:click={cancelEdit}>Cancel</Button>
      <Button on:click={saveUser}>Save</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>

<Confirm bind:open={removeOpen}>
  <CardBody slot="description">
    {#if removeOpen}
      Are you sure to remove user with email "{removingUser.email}"?
    {/if}
  </CardBody>

  <Button on:click={cancelRemove}>No</Button>
  <Button on:click={removeSelectedUser} color="danger">Yes</Button>
</Confirm>
