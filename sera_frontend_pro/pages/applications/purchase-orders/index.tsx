import Head from 'next/head';
import SidebarLayout from '@/layouts/SidebarLayout';
import PageHeader from '@/content/Applications/PurchaseOrders/PageHeader';
import PageTitleWrapper from '@/components/PageTitleWrapper';
import { Grid, Container } from '@mui/material';
import Footer from '@/components/Footer';
import PurhcaseOrdersTable from '@/content/Applications/PurchaseOrders/PurchaseOrdersTable';

function PurchaseOrders() {
  return (
    <>
      <Head>
        <title>PurhcaseOrders - Applications</title>
      </Head>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12}>
            <PurhcaseOrdersTable />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

PurchaseOrders.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default PurchaseOrders;
