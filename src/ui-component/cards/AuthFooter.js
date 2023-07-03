// material-ui
import { Link, Typography, Stack } from '@mui/material';

const AuthFooter = () => (
    <Stack direction="row" justifyContent="space-between">
        <Typography variant="subtitle2" component={Link} href="https://edicleo.dev" target="_blank" underline="hover">
            edicleo.dev
        </Typography>
        <Typography variant="subtitle2" component={Link} href="https://edicleo.dev" target="_blank" underline="hover">
            &copy; edicleo.dev
        </Typography>
    </Stack>
);

export default AuthFooter;
