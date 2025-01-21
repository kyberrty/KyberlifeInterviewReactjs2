import { Container, Divider, Stack, Typography } from "@mui/material";
import { Link, useLocation } from "react-router";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  const location = useLocation()

  return (
    <Container maxWidth='md' sx={{ mt: 3 }}>
      <Stack spacing={2}>
        {location.pathname !== '/' && (
          <>
            <Link to='/'>
              <Typography>
                Back to Home
              </Typography>
            </Link>
            <Divider />
          </>
        )}
        {props.children}
      </Stack>
    </Container>
  );
}

export default Layout
