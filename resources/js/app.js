import React from "react";
import { render } from "react-dom";
import { createInertiaApp } from "@inertiajs/inertia-react";

import BaseLayout from "./Layout/BaseLayout.tsx";
createInertiaApp({
    resolve: (name) => require(`./Pages/${name}`),
    setup({ el, App, props }) {
        render(
            <BaseLayout>
                <App {...props} />
            </BaseLayout>,
            el
        );
    },
});
