import { HTMLAttributes } from "react";

type Test = {
    text: string;
} & HTMLAttributes<HTMLInputElement>

const style: React.CSSProperties = {

};

export interface BoxProps {
    id: string;
    left: number;
    top: number;
    hideSourceOnDrag?: boolean;
    children: React.ReactNode;
}

export const Box = () => {
    
}

const test: Test = {
    text: '',
}