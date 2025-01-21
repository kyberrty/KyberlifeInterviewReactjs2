import { Container } from "@mui/material";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  return (
    <Container maxWidth='md'>
      {props.children}
    </Container>
  );
}

export default Layout
