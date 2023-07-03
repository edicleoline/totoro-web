import { Grid, Box } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import SubCard from 'ui-component/cards/SubCard';

const UiAlert = () => {
    return (
        <MainCard title="UI Alertas" contentSX={{ padding: '0 !important' }}>
            <Grid container spacing={0}>
                <Grid item xs={12} sm={12}>
                    <SubCard contentSX={{ padding: '0 !important' }} sx={{ border: 'none 0', borderRadius: '0' }}>
                        <Grid container direction="column" spacing={0}>
                            <Grid item sx={{ maxWidth: '100% !important' }}>
                                <Box sx={{ p: 3 }}>Conteúdo</Box>
                            </Grid>
                        </Grid>
                    </SubCard>
                </Grid>
            </Grid>
        </MainCard>
    );
};

export default UiAlert;
