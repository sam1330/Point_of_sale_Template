import React, { ReactChildren, ReactChild } from "react";

import Header from "./Header";

import Container from "@mui/material/Container";

type ReactNode = React.ReactNode | void;

type PageProps = {
    children: ReactNode;
};

const BaseLayout = ({ children }: PageProps) => {
    return (
        <>
            <Header />
            <Container maxWidth="lg">{ children }</Container>
        </>
    );
};

export default BaseLayout;
