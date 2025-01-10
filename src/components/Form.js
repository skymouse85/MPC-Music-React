import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import styled from "styled-components";

const Container = styled.div`
    max-width: 600px;
    margin: 0 auto;
    padding: 2 rem;
`


const Button = styled.button`
    cursor: pointer;

    &:hover{
    background: var(--accent-primary);
    color: var(--accent-secondary)
    }
`

import { Schema } from "yup";

const defaultValues = {
    email: '',
    password: '',
}