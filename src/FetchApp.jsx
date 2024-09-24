import useFetch from "./hooks/useFetch";

const FetchApp = () => {
  const { data, isLoading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  return (
    <>
      <h1>Lista de Usuarios</h1>
      {isLoading ? (
        <p>La información se esta cargando</p>
      ) : error ? (
        <p>Ocurrio un error: {error}</p>
      ) : (
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">email</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((item) => (
                <tr>
                  <th key={item.id} scope="row">
                    {item.id}
                  </th>
                  <td>{item.name}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default FetchApp;
