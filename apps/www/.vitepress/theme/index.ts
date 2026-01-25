// https://vitepress.dev/guide/custom-theme

import type { Theme } from "vitepress";
import Layout from "../layout/Layout.vue";
import "./style.css";
import ComponentPreview from "../components/ComponentPreview.vue";
import CopyButton from "../components/CopyButton.vue";
import PhoneFieldDemo from "../components/demo/PhoneFieldDemo.vue";
import EventsTable from "../components/EventsTable.vue";
import ExportsTable from "../components/ExportsTable.vue";
import InstallationTabs from "../components/InstallationTabs.vue";
import PropsTable from "../components/PropsTable.vue";

export default {
  Layout,
  enhanceApp({ app, router, siteData }) {
    app.component("CopyButton", CopyButton);
    app.component("PropsTable", PropsTable);
    app.component("EventsTable", EventsTable);
    app.component("ExportsTable", ExportsTable);
    app.component("InstallationTabs", InstallationTabs);
    app.component("ComponentPreview", ComponentPreview);

    app.component("PhoneFieldDemo", PhoneFieldDemo);
  },
} satisfies Theme;
