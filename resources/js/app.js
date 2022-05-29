import React from "react";
import { render } from "react-dom";
import { createInertiaApp } from "@inertiajs/inertia-react";
import { InertiaProgress } from "@inertiajs/progress";

import BaseLayout from "./Layout/BaseLayout.tsx";

InertiaProgress.init();
createInertiaApp({
    resolve: (name) => {
        const page = require(`./Pages/${name}`).default;
        page.layout ??= (page) => <BaseLayout>{page}</BaseLayout>;
        return page;
    },
    setup({ el, App, props }) {
        render(<App {...props} />, el);
    },
});
