<script>
import { Button, Card, CardActions, CardBody, CardHeader } from "@ubeac/svelte";

export let data;

</script>
<Card>
    <CardHeader>
        <CardActions>
            <Button href=".">Back</Button>
        </CardActions>
    </CardHeader>
    <CardBody>
        Body {data.user.email}
    </CardBody>
</Card>