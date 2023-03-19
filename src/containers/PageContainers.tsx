import Header from '@/components/Head';
import NavBar from '@/components/Navigation/Navbar';
import Box from '@mui/material/Box';

interface PageContainerProps {
  children: React.ReactNode;
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string[];
}

const PageContainer: React.FC<PageContainerProps> = ({
  children,
  metaTitle,
  metaDescription,
  metaKeywords,
}) => {
  return (
    <Box
      sx={{
        minWidth: '100vw',
        minHeight: '100vh',
        backgroundColor: 'primary.dark',
        color: 'primary.contrastText',
      }}
    >
      <Header
        title={metaTitle}
        description={metaDescription}
        keywords={metaKeywords}
      />
      <NavBar />
      <Box
        sx={{
          width: '94%',
          margin: '0 auto',
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default PageContainer;
