import React, { ReactChildren, ReactChild } from "react";

import Header from "./Header";

import Container from "@mui/material/Container";

type ReactNode = React.ReactNode | void;

type PageProps = {
    children: React.ReactNode;
};

const BaseLayout = (props: PageProps) => {
    return (
        <>
            <Header />
            <Container maxWidth="lg">{ props.children }</Container>
        </>
    );
};

export default BaseLayout;
