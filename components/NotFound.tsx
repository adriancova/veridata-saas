const NotFound = ({ img }: { img: string }) => {
  return (
    <main class="flex-1 flex flex-col justify-center p-4 text-center space-y-4 grow">
      <h1 class="text-4xl inline-block font-bold">
        Error 404 - La página que buscas no existe
      </h1>
      <h2 class="text-xl inline-block font-bold">
        De cualquier forma, aqui hay un perrito por las molestias
      </h2>
      <img class="mx-auto my-auto max-h-96" src={img} alt="A cute dog" />
      <p class="text-xl text-blue-900">
        <a href="/">Haz clic aqui para regresar al sitio</a>
      </p>
    </main>
  );
};

export default NotFound;
