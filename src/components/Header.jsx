
import { AppBar, styled, StyledEngineProvider, Toolbar } from '@mui/material';
import {NavLink} from 'react-router-dom';

const Head = styled(AppBar)`
 background : black;
 color : white;
 height : 60px;
 position : static;
`


// const Tabs = styled (NavLink)`
// font-size: 20px;
//     margin-right : 20px;
//     color : inherit;
//     text-decoration : none;
// `

const Header = () => {
    const logo = "https://i.ebayimg.com/images/g/79MAAOSwDupkt0v-/s-l400.jpg";
    return (
        <Head>
            <Toolbar>
                <img src={logo} alt="LOGO img" style = {{height : 50, marginBottom : 2}}  />
            </Toolbar>
        </Head>
    )
}


export default Header;