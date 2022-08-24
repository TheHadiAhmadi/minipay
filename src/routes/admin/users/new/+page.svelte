<script>
    import {Button, ButtonGroup, Card, CardActions, CardBody, CardFooter, CardHeader, FormInput, FormSelect} from '@ubeac/svelte'
</script>

<Card>
    <CardHeader>
        New User
    </CardHeader>
    <CardBody>
        <FormInput col=12 label="Username"/>
        <FormInput col=12 label="Email" type="email"/>
        <FormInput col=12 label="Password" type="password"/>
        <FormSelect col=12 placeholder="Select a Role" label="Role" items={{'ADMIN': 'Admin', 'USER': 'User'}}/>
    </CardBody>
    <CardFooter>
        <CardActions>
            <ButtonGroup>
            <Button>Back</Button>
            <Button color="blue">Add</Button>
        </ButtonGroup>
    </CardActions>
    </CardFooter>
</Card>