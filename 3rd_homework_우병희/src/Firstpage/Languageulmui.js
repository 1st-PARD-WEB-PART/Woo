import { Container } from "@mui/material"
import {Box} from "@mui/material"
import { Typography } from "@mui/material";

export default function LoginBottom() {
    const languages = [
        'English (US)', '한국어', '日本語', 'Deutsch',
        'Português (Brasil)', 'Français (France)',
        'Español', 'Italiano', 'العربية', 'हिन्दी'
    ];
    return (
        <Container>
            <Box
                sx={{
                    backgroundColor: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        color: '#8A8D91',
                        fontStyle: 'normal',
                        fontFamily: 'Roboto',
                        fontWeight: '400',
                        fontSize: '16px',
                        lineHeight: '19px',
                        mt: '35px',
                        mb: '20px',
                    }}
                >
                    {languages.map((language, index) => (
                        <Typography
                            key={index}
                            mr={3}
                        >
                            {language}
                        </Typography>
                    ))}
                </Box>
                </Box>
                </Container>)};
