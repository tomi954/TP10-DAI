class ValidacionesHelper {

    /**

     * Este método recibe un 'value', e intenta convertirlo a un número entero, si por alguna razón falla

     *  retorna el 'defaultValue', sino el valor numérico entero del parámetro 'value'.

     * @param {*} value valor a verificar.

     * @param {*} defaultValue valor por default en el caso de que 'value' no se pueda convertir a un número entero.

     * @returns Un número entero.

     *

     * @example

     * let result1 = ValidacionesHelper.getIntegerOrDefault("10", 1);       // returns: 10

     * let result2 = ValidacionesHelper.getIntegerOrDefault(null, 1);       // returns: 1

     * let result3 = ValidacionesHelper.getIntegerOrDefault("hola", 1);     // returns: 1

     */

    getIntegerOrDefault = (value, defaultValue) => { 
        
        
    };


    /**

     *  Este método recibe un 'value', e intenta convertirlo a un Date (YYYY-MM-DD), si por alguna razón falla

     *  retorna el 'defaultValue', sino el valor de la fecha (Date) del parámetro 'value'.

     * Fecha en format

     * @param {*} value

     * @param {*} defaultValue

     * @returns

     */

    getDateOrDefault = (value, defaultValue) => { return null};


    /**

     * Este método recibe un 'value', en el caso de que sea undefined o null retorna el 'defaultValue',

     * sino el valor del parámetro 'value'.

     * @param {*} value valor a verificar.

     * @param {*} defaultValue valor por default en el caso de que 'value' sea undefined o null.

     * @returns Un número entero.

     *

     * @example

     * let variable;

     * let result1 = ValidacionesHelper.getStringOrDefault("10", "");         // returns: "10"

     * let result2 = ValidacionesHelper.getStringOrDefault(null, "TEST");     // returns: "TEST"

     * let result3 = ValidacionesHelper.getStringOrDefault(variable, "TEST"); // returns: "TEST"

     */

    getStringOrDefault = (value, defaultValue) => { return null};

   

    /**

     * Este método recibe un 'value', e intenta convertirlo a un boolean, y solo admite 'true' o 'false' sin importar

     * mayúsculas y minúsculas.

     * Si por alguna razón falla retorna el 'defaultValue', sino el valor booleano entero del parámetro 'value'.

     * @param {*} value valor a verificar.

     * @param {*} defaultValue valor por default en el caso de que 'value' no se pueda convertir a un boolean.

     * @returns Un boolean.

     *

     * @example

     * let result1 = ValidacionesHelper.getBooleanOrDefault("true", false);     // returns: true

     * let result2 = ValidacionesHelper.getBooleanOrDefault(null, false);       // returns: false

     * let result3 = ValidacionesHelper.getBooleanOrDefault("hola", true);      // returns: true

     */

    getBooleanOrDefault = (value, defaultValue) => { return null};


    /**

     * Este método recibe un 'value', y verifica si es un email sintácticamente válido.

     * @param {*} value valor a verificar.

     * @returns Un boolean indicando si es un email sintácticamente válido.

     *

     * @example

     * let result1 = ValidacionesHelper.getBooleanOrDefault("pepe@pepe.com");   // returns: true

     * let result2 = ValidacionesHelper.getBooleanOrDefault(null);              // returns: false

     * let result3 = ValidacionesHelper.getBooleanOrDefault("pepe@pepe@.com");  // returns: false

     */

    isEmail = (value) => { return null};

}


// Exporto todo lo que yo quiero exponer del módulo:

export default new ValidacionesHelper();

