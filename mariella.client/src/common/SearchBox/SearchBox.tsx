import React, { useState } from "react";
import InputWithIcon from "../InputWithIcon/InputWithIcon";

const SearchBox: React.FC = () => {
    const [searchValue, setSearchValue] = useState("");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };

    const handleSearch = () => {
        console.log("Searching for: ", searchValue);
    };

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <InputWithIcon
            placeholder="Buscar..."
            icon={{ src: "magnifying-glass.svg" }}
        />
    );
};

export default SearchBox;
