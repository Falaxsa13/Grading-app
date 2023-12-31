import { SvgIcon } from "../../common/SvgIcon/SvgIcon";
import { HeaderContainer, IconContainer } from "./Header.Styles";
import SearchBox from "../../common/SearchBox/SearchBox";

const Header: React.FC = () => {
    return (
        <HeaderContainer>
            <IconContainer src="logo.svg" />
            <SearchBox />
        </HeaderContainer>
    );
};

export default Header;
