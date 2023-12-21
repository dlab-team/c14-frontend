import AdminHeader from '@/components/admin/AdminHeader';

const UserControl = () => {
  <>
    <AdminHeader
      title="Control de Usuarios"
      description="Aquí puede crear, modificar y eliminar cuentas de usuarios"
    />
    <div>
      <table border="1">
        <thead>
          <tr>
            <th></th>
            <th>Nombre</th>
            <th>Fecha</th>
            <th>Mail</th>
            <th>Botones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dato 1,1</td>
            <td>Dato 1,2</td>
            <td>Dato 1,3</td>
            <td>Dato 1,4</td>
            <td>Dato 1,5</td>
          </tr>
          <tr>
            <td>Dato 2,1</td>
            <td>Dato 2,2</td>
            <td>Dato 2,3</td>
            <td>Dato 2,4</td>
            <td>Dato 2,5</td>
          </tr>
        </tbody>
      </table>
    </div>
  </>;
};

export default UserControl;
