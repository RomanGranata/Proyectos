
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;

public class Persistencia {
    
    private Connection cn;
    private ResultSet rs;
    private PreparedStatement ps;
    
    
    public String servidor, basededatos, usuario, clave, ejecutar;
    
public Connection conectarse(){
    
      try {
            Class.forName("com.mysql.jdbc.Driver");
            servidor = "192.168.0.7:3306/"; // localhost - remotemysql.com
            basededatos = "cacproyecto";
            usuario = "testing2019";
            clave = "codoacodo"; 
    
            cn=DriverManager.getConnection("jdbc:mysql://" + servidor 
           +  basededatos+"?autoReconnect=true&useSSL=false", usuario,clave);
    
        } catch (ClassNotFoundException ex) {
            Logger.getLogger(Persistencia.class.getName()).log(Level.SEVERE, null, ex);
        } catch (SQLException ex) {
            Logger.getLogger(Persistencia.class.getName()).log(Level.SEVERE, null, ex);
        }
    return cn;
} 
//***********************************************************
public ResultSet consultaSQL(String busqueda){
        try {
            ps= conectarse().prepareStatement(busqueda);
            rs=ps.executeQuery();
            //rsm=rs.getMetaData();
        } catch (SQLException ex) {
            Logger.getLogger(Persistencia.class.getName()).log(Level.SEVERE, null, ex);
        } 
        return rs;
}
    
}
