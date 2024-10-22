const modelo = require("./modelo.js");

describe('El sistema...', function() {
    let sistema;
    beforeEach(function() {
    sistema = new modelo.Sistema();
    });
    it('inicialmente no hay usuarios.', function() {
      expect(sistema.numeroUsuarios().num).toEqual(0);
    });
    
    it('usuarioActivo', function() {
      let res=sistema.usuarioActivo("Pepe")
      expect(res.activo).toEqual(false);
      sistema.agregarUsuario("Pepe");
      res=sistema.usuarioActivo("Pepe")
      expect(res.activo).toEqual(true);
    });
    it('Obtiene Usuarios.', function() {
      sistema.agregarUsuario("Pepe")
      expect(sistema.numeroUsuarios().num).toEqual(1);
      sistema.agregarUsuario("Pepa")
      sistema.agregarUsuario("Pepi")
      expect(sistema.numeroUsuarios().num).toEqual(3);
      sistema.eliminarUsuario("Pepi")
      expect(sistema.numeroUsuarios().num).toEqual(2);
    });
    it('agregarUsuario.', function() {
      expect(sistema.numeroUsuarios().num).toEqual(0);
      sistema.agregarUsuario("Pepe")
      expect(sistema.numeroUsuarios().num).toEqual(1);
      expect(sistema.usuarioActivo("Pepe").activo).toEqual(true);
      sistema.agregarUsuario("Pepe")
      expect(sistema.usuarioActivo("Pepe").activo).toEqual(true);
      expect(sistema.numeroUsuarios().num).toEqual(1);
      });
    it('Eliminar Usuario.', function() {
      sistema.agregarUsuario("Pepe")
      sistema.eliminarUsuario("Pepe")
      expect(sistema.numeroUsuarios().num).toEqual(0);
    });
   })