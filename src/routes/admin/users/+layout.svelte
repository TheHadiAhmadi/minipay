<script>

import { App, Card, CardBody, CardHeader, Grid, GridItem } from "@ubeac/svelte";

</script>
<App>
    <Grid slot="aside-start">
        <GridItem>
            <Card>
                <CardHeader>
                    Minipay
                </CardHeader>
                <CardBody>

                </CardBody>
            </Card>

        </GridItem>
    </Grid>

    <Card tile slot="header">
    <CardBody class="bg-primary">MiniPay Admin panel</CardBody>
    </Card>
    
    <div class="p-3">

        <slot/>
    </div>

</App>