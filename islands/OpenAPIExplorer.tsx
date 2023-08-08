import { Head } from "$fresh/runtime.ts";
// import "@openapi-explorer";

const OpenAPIExplorer = () => {
  return (
    <>
      <Head>
        <title>Validatos Documentación</title>
        <link rel="stylesheet" href="styles.css" />
        <script
          type="module"
          src="https://unpkg.com/openapi-explorer@0/dist/browser/openapi-explorer.min.js"
        >
        </script>
      </Head>
      <openapi-explorer spec-url="https://petstore.swagger.io/v2/swagger.json">
        <div slot="overview">
          <h1>The API</h1>
        </div>
      </openapi-explorer>
    </>
  );
};

export default OpenAPIExplorer;
