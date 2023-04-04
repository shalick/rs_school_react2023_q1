import React, { FC } from 'react'

export interface IFormErrorMessageProps {
    text: string;
}

const FormErrorMessage: FC<IFormErrorMessageProps> = ({ text }) => {
    return <p className="error">{text}</p>;
};

export default FormErrorMessage;