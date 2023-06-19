import replace from "@rollup/plugin-replace";

import pkg from "./package.json";

export default {
  plugins: [
    replace({
      "process.env.TORUS_EMBED_VERSION": `"${pkg.version}"`,
      preventAssignment: true,
    }),
  ],
};
