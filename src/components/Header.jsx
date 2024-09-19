
import { AppBar, styled, StyledEngineProvider, Toolbar } from '@mui/material';
import logo from './logo.jpg'

const Head = styled(AppBar)`
 background : black;
 color : white;
 height : 60px;
 position : static;
`

const Header = () => {
    return (
        <Head>
            <Toolbar>
                <img src={logo} alt="LOGO img" style = {{height : 50, marginBottom : 2}}  />
            </Toolbar>
        </Head>
    )
}


export default Header;