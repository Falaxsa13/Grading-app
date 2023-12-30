import { TFunction } from "react-i18next";

export interface ContainerProps {
    border?: boolean;
    children: React.ReactNode;
    width?: string;
}

export interface FlexContainerProps {
    children: React.ReactNode;
    width?: string;
    maxHeight?: string;
    maxWidth?: string;
}

export interface ButtonProps {
    color?: string;
    name?: string;
    children: React.ReactNode;
    onClick?: () => void;
}

export interface SvgIconProps {
    src: string;
    width: string;
    height: string;
    className?: string;
}

export interface InputProps {
    name?: string;
    placeholder: string;
    t: TFunction;
    type?: string;
    value?: string;
    onChange: (
        event:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLTextAreaElement>
    ) => void;
    className?: string;
}

export interface validateProps {
    name: string;
    message: string;
    email: string;
}
